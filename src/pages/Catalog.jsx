import React, { useEffect, useState } from 'react'
import Footer from '../components/common/Footer'
import { useParams } from 'react-router-dom'
import { apiConnector } from '../services/apiconnector';
import { categories } from '../services/apis';
import { getCatalogaPageData } from '../services/operations/pageAndComponentData';
import Course_Card from '../components/core/Catalog/Course_Card';
import CourseSlider from '../components/core/Catalog/CourseSlider';
import { useSelector } from "react-redux"
import Error from "./Error"

const Catalog = () => {

    const { loading } = useSelector((state) => state.profile)
    const { catalogName } = useParams()
    const [active, setActive] = useState(1)
    const [catalogPageData, setCatalogPageData] = useState(null)
    const [categoryId, setCategoryId] = useState("")

    // Fetch all categories and set the categoryId based on the catalogName from URL
    useEffect(()=> {
        const getCategories = async () => {
            try {
                const res = await apiConnector("GET", categories.CATEGORIES_API)
                console.log("Categories response: ", res?.data?.data)  // Log the categories response
                console.log("Catalog Name: ", catalogName)  // Log the catalog name from URL

                const category_id = res?.data?.data
                    ?.filter(ct => ct.name.split(" ").join("-").toLowerCase() === catalogName)?.[0]?._id

                if (category_id) {
                    setCategoryId(category_id)
                    console.log("Category ID found: ", category_id)
                } else {
                    console.log("No category found for catalogName: ", catalogName)
                }
            } catch (error) {
                console.log("Error fetching categories: ", error)
            }
        }

        getCategories()
    }, [catalogName])

    // Fetch the catalog page data based on categoryId
    useEffect(() => {
        const getCategoryDetails = async() => {
            if (!categoryId) return  // If no categoryId, skip the API call
            try {
                const res = await getCatalogaPageData(categoryId)
                console.log("Catalog page data: ", res)
                setCatalogPageData(res)
            } catch (error) {
                console.log("Error fetching catalog page data: ", error)
            }
        }

        if (categoryId) {
            getCategoryDetails()
        }
    }, [categoryId])

    // Handle loading and error states
    if (loading || !catalogPageData) {
        return (
            <div className="grid min-h-[calc(100vh-3.5rem)] place-items-center">
                <div className="spinner"></div>
            </div>
        )
    }

    if (!loading && !catalogPageData.success) {
        return <Error />
    }

    return (
        <>
            {/* Hero Section */}
            <div className="box-content bg-mwhite px-4">
                <div className="mx-auto flex flex-col justify-center gap-4 lg:w-[80%] w-[90%] min-h-[260px]">
                    <p className="text-sm text-white text-left">
                        {`Home / Catalog / `}
                        <span className="text-yellow-25">
                            {catalogPageData?.data?.selectedCategory?.name}
                        </span>
                    </p>
                    <p className="text-3xl text-white text-left">
                        {catalogPageData?.data?.selectedCategory?.name}
                    </p>
                    <p className="text-white text-left max-w-[870px]">
                        {catalogPageData?.data?.selectedCategory?.description}
                    </p>
                </div>
            </div>

            {/* Section 1: Courses to get started */}
            <div className="mx-auto w-[80%] py-12 px-4">
                <div className="section_heading bg-gradient-to-b from-[#004aad] via-[#32a7f3] to-[#6ca3cc] text-transparent bg-clip-text font-bold text-center lg:text-left">Courses to get you started</div>
                <div className="my-4 flex border-b border-b-black text-sm">
                    <p
                        className={`px-4 py-2 ${active === 1 ? "border-b border-b-yellow-25 text-yellow-25" : "text-white"} cursor-pointer`}
                        onClick={() => setActive(1)}
                    >
                        Most Popular
                    </p>
                    <p
                        className={`px-4 py-2 ${active === 2 ? "border-b border-b-yellow-25 text-yellow-25" : "text-white"} cursor-pointer`}
                        onClick={() => setActive(2)}
                    >
                        New
                    </p>
                </div>
                <div>
                    <CourseSlider Courses={catalogPageData?.data?.selectedCategory?.courses} />
                </div>
            </div>

            {/* Section 2: Top Courses in Different Category */}
            <div className="mx-auto w-[80%] py-12 px-4">
                <div className="section_heading bg-gradient-to-b from-[#004aad] via-[#32a7f3] to-[#6ca3cc] text-transparent bg-clip-text font-bold text-center lg:text-left">
                    Top courses in {catalogPageData?.data?.differentCategory?.name}
                </div>
                <div className="py-8">
                    <CourseSlider Courses={catalogPageData?.data?.differentCategory?.courses} />
                </div>
            </div>

            {/* Section 3: Frequently Bought */}
            <div className="mx-auto w-[80%] py-12 px-4">
                <div className="section_heading bg-gradient-to-b from-[#004aad] via-[#32a7f3] to-[#6ca3cc] text-transparent bg-clip-text font-bold text-center lg:text-left">Frequently Bought</div>
                <div className="py-8">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
                        {catalogPageData?.data?.mostSellingCourses?.slice(0, 4).map((course, i) => (
                            <Course_Card course={course} key={i} Height={"h-[400px]"} />
                        ))}
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}

export default Catalog
