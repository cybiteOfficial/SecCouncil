import React from "react"
import Footer from "../components/common/Footer"
import ContactDetails from "../components/ContactPage/ContactDetails"
import ContactForm from "../components/ContactPage/ContactForm"
import ReviewSlider from "../components/common/ReviewSlider"

const Contact = () => {
  return (
    <div>
      <div className="mx-auto mt-20 flex w-11/12 max-w-maxContent flex-col justify-between gap-10 text-white lg:flex-row">
        {/* Contact Details */}
        <div className="lg:w-[40%]"> 
          <ContactDetails />
        </div>

        {/* Contact Form */}
        <div className="lg:w-[60%]">
          <ContactForm />
        </div>
      </div>
      <div className="relative mx-auto my-20 flex w-11/12 max-w-maxContent flex-col items-center justify-between gap-8 bg-black-900 text-white">
        {/* Reviws from Other Learner */}
        <h1 className="text-center text-4xl font-semibold bg-gradient-to-b from-[#004aad] via-[#32a7f3] to-[#6ca3cc] text-transparent bg-clip-text font-bold ">
          Happy & Satisfied Learners!
        </h1>
        <ReviewSlider />
      </div>
      <Footer />
    </div>
  )
}

export default Contact