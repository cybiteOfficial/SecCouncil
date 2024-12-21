// // import React, { useState } from "react";

// // const initialCategories = [
// //   { id: 1, name: "Category 1" },
// //   { id: 2, name: "Category 2" },
// //   { id: 3, name: "Category 3" },
// // ];

// // const AdminDashboard = () => {
// //   const [categories, setCategories] = useState(initialCategories);
// //   const [newCategory, setNewCategory] = useState("");

// //   const handleAddCategory = () => {
// //     if (newCategory.trim() === "") return;

// //     const newCategoryObj = {
// //       id: categories.length + 1,
// //       name: newCategory.trim(),
// //     };

// //     setCategories([...categories, newCategoryObj]);
// //     setNewCategory("");
// //   };

// //   const handleDeleteCategory = (id) => {
// //     setCategories(categories.filter((category) => category.id !== id));
// //   };

// //   return (
// //     <div className="min-h-screen bg-gray-100 p-8">
// //       <div className="max-w-5xl mx-auto bg-mwhite p-6 rounded-lg shadow-lg">
// //         <h1 className="text-2xl font-semibold text-gray-800 mb-4">Admin Dashboard</h1>

// //         <div className="mb-6 flex items-center gap-4">
// //           <input
// //             type="text"
// //             value={newCategory}
// //             onChange={(e) => setNewCategory(e.target.value)}
// //             placeholder="Add new category"
// //             className="flex-grow px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
// //           />
// //           <button
// //             onClick={handleAddCategory}
// //             className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
// //           >
// //             Add Category
// //           </button>
// //         </div>

// //         <table className="w-full bg-mwhite border border-gray-200 rounded-md">
// //           <thead>
// //             <tr className="bg-gray-50 border-b border-gray-200">
// //               <th className="px-4 py-2 text-left text-gray-700">Category Name</th>
// //               <th className="px-4 py-2 text-right text-gray-700">Actions</th>
// //             </tr>
// //           </thead>
// //           <tbody>
// //             {categories.map((category) => (
// //               <tr key={category.id} className="border-b border-gray-200">
// //                 <td className="px-4 py-2 text-gray-800">{category.name}</td>
// //                 <td className="px-4 py-2 text-right">
// //                   <button
// //                     onClick={() => handleDeleteCategory(category.id)}
// //                     className="text-red-500 hover:text-red-600"
// //                   >
// //                     Delete
// //                   </button>
// //                 </td>
// //               </tr>
// //             ))}
// //           </tbody>
// //         </table>
// //       </div>
// //     </div>
// //   );
// // };

// // export default AdminDashboard;







import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const AdminDashboard = () => {
  const [categories, setCategories] = useState([]);
  const [students, setStudents] = useState([]);
  const [instructors, setInstructors] = useState([]);
  const [newCategory, setNewCategory] = useState({ name: "", description: "" });
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [analytics, setAnalytics] = useState({
    totalStudents: 0,
    studentsEnrolled: 0,
    activeStudents: 0,
  });

  const { token } = useSelector((state) => state.auth);


  useEffect(() => {
    console.log('Current Token:', token);
    console.log('Token from localStorage:', localStorage.getItem('token'));
  }, [token]);

  // Fetch categories, students, instructors, and analytics


  const fetchData = async () => {
    try {
      // Fetch categories
      const categoryResponse = await axios.get(
        "http://localhost:4000/api/v1/course/showAllCategories",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setCategories(categoryResponse.data.data);

      // Fetch analytics
      const analyticsResponse = await axios.get(
        "http://localhost:4000/api/v1/admin/analytics",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setAnalytics(analyticsResponse.data.data);

      // Fetch students
      const studentsResponse = await axios.get(
        "http://localhost:4000/api/v1/admin/students",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setStudents(studentsResponse.data.students);

      // Fetch instructors
      const instructorsResponse = await axios.get(
        "http://localhost:4000/api/v1/admin/instructors",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setInstructors(instructorsResponse.data.instructors);
    } catch (error) {
      setError("Error fetching data. Please try again.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Add new category
  const handleAddCategory = async (e) => {
    e.preventDefault();

    const { name, description } = newCategory;

    if (!name.trim()) {
      setError("Category name cannot be empty");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/course/createCategory",
        { name, description },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setSuccess("Category added successfully!");
      setCategories([...categories, response.data.category]);
      setNewCategory({ name: "", description: "" });
      setError(null);
    } catch (error) {
      setError("Failed to add category. Please try again.");
    }
  };



  // const fetchData = async () => {
  //   try {
  //     const baseURL = process.env.REACT_APP_BASE_URL;

  //     // Fetch categories
  //     const categoryResponse = await axios.get(`${baseURL}/course/showAllCategories`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setCategories(categoryResponse.data.data);

  //     // Fetch analytics
  //     const analyticsResponse = await axios.get(`${baseURL}/admin/analytics`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setAnalytics(analyticsResponse.data.data);

  //     // Fetch students
  //     const studentsResponse = await axios.get(`${baseURL}/admin/students`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setStudents(studentsResponse.data.students);

  //     // Fetch instructors
  //     const instructorsResponse = await axios.get(`${baseURL}/admin/instructors`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });
  //     setInstructors(instructorsResponse.data.instructors);
  //   } catch (error) {
  //     setError("Error fetching data. Please try again.");
  //   }
  // };

  // const handleAddCategory = async (e) => {
  //   e.preventDefault();

  //   const { name, description } = newCategory;

  //   if (!name.trim()) {
  //     setError("Category name cannot be empty");
  //     return;
  //   }

  //   try {
  //     const baseURL = process.env.REACT_APP_BASE_URL;

  //     const response = await axios.post(
  //       `${baseURL}/course/createCategory`,
  //       { name, description },
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //           Authorization: `Bearer ${token}`,
  //         },
  //       }
  //     );

  //     setSuccess("Category added successfully!");
  //     setCategories([...categories, response.data.category]);
  //     setNewCategory({ name: "", description: "" });
  //     setError(null);
  //   } catch (error) {
  //     setError("Failed to add category. Please try again.");
  //   }
  // };





  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-mwhite p-6 rounded-lg shadow-lg">
        <h1 className="text-2xl font-semibold text-gray-800 mb-4">
          Admin Dashboard
        </h1>

        {/* Analytics Section */}
        <div className="mb-6 grid grid-cols-3 gap-4">
          <div className="bg-yellow-100 p-4 rounded-md text-center">
            <h2 className="text-lg font-semibold text-gray-700">Total Students</h2>
            <p className="text-2xl text-mwhite">{analytics?.totalStudents ?? "Loading..."}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-md text-center">
            <h2 className="text-lg font-semibold text-gray-700">Students Enrolled</h2>
            <p className="text-2xl text-mwhite">{analytics?.studentsEnrolled ?? "Loading..."}</p>
          </div>
          <div className="bg-yellow-100 p-4 rounded-md text-center">
            <h2 className="text-lg font-semibold text-gray-700">Active Students</h2>
            <p className="text-2xl text-mwhite">{analytics?.activeStudents ?? "Loading..."}</p>
          </div>
        </div>


        {/* Add Category Section */}
        <form onSubmit={handleAddCategory} className="mb-6 space-y-4">
          <input
            type="text"
            value={newCategory.name}
            onChange={(e) =>
              setNewCategory({ ...newCategory, name: e.target.value })
            }
            placeholder="Category Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
          />
          <textarea
            value={newCategory.description}
            onChange={(e) =>
              setNewCategory({ ...newCategory, description: e.target.value })
            }
            placeholder="Category Description"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
          ></textarea>
          <button
            type="submit"
            className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
          >
            Add Category
          </button>
        </form>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {success && <div className="text-green-500 mb-4">{success}</div>}

        {/* Students Table */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Students</h2>
          <table className="w-full bg-mwhite border border-gray-200 rounded-md">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-2 text-left text-gray-700">Name</th>
                <th className="px-4 py-2 text-left text-gray-700">Email</th>
                <th className="px-4 py-2 text-left text-gray-700">Course</th>
                <th className="px-4 py-2 text-left text-gray-700">Instructor</th>
                <th className="px-4 py-2 text-left text-gray-700">Payment Status</th>
              </tr>
            </thead>

            <tbody>
              {students.length > 0 ? (
                students.map((student) => (
                  <tr key={student._id} className="border-b border-gray-200">
                    <td className="px-4 py-2 text-gray-800">
                      {student.firstName} {student.lastName}
                    </td>
                    <td className="px-4 py-2 text-gray-800">{student.email}</td>
                    <td className="px-4 py-2 text-gray-800">
                      {student.courses.map((course) => course.courseName).join(", ")}
                    </td>
                    <td className="px-4 py-2 text-gray-800">
                      {student.courses
                        .map((course) => `${course.instructor.firstName} ${course.instructor.lastName}`)
                        .join(", ")}
                    </td>
                    <td className="px-4 py-2 text-gray-800">
                      {student.paymentStatus === "success" ? "Success" : "Pending"}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="px-4 py-2 text-center text-gray-500">
                    No students found
                  </td>
                </tr>
              )}
            </tbody>


          </table>
        </div>

        {/* Instructors Table */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructors</h2>
          <table className="w-full bg-mwhite border border-gray-200 rounded-md">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-2 text-left text-gray-700">Name</th>
                <th className="px-4 py-2 text-left text-gray-700">Email</th>
                <th className="px-4 py-2 text-left text-gray-700">Courses</th>
                <th className="px-4 py-2 text-left text-gray-700">Rating</th>
              </tr>
            </thead>
            <tbody>
              {instructors.length > 0 ? (
                instructors.map((instructor) => (
                  <tr key={instructor._id} className="border-b border-gray-200">
                    <td className="px-4 py-2 text-gray-800">
                      {instructor.firstName} {instructor.lastName}
                    </td>
                    <td className="px-4 py-2 text-gray-800">{instructor.email}</td>
                    <td className="px-4 py-2 text-gray-800">
                      {instructor.courses && instructor.courses.length > 0
                        ? instructor.courses.map((course) => course.courseName).join(", ")
                        : "No courses"}
                    </td>
                    <td className="px-4 py-2 text-gray-800">{instructor.rating || "N/A"}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="4" className="px-4 py-2 text-gray-800 text-center">
                    No instructors found.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Categories Table */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Categories</h2>
          <table className="w-full bg-mwhite border border-gray-200 rounded-md">
            <thead>
              <tr className="bg-gray-50 border-b border-gray-200">
                <th className="px-4 py-2 text-left text-gray-700">Name</th>
                <th className="px-4 py-2 text-left text-gray-700">Description</th>
                <th className="px-4 py-2 text-left text-gray-700">Actions</th>
              </tr>
            </thead>
            <tbody>
              {categories.length > 0 ? (
                categories.map((category) => (
                  <tr key={category._id} className="border-b border-gray-200">
                    <td className="px-4 py-2 text-gray-800">{category.name}</td>
                    <td className="px-4 py-2 text-gray-800">{category.description}</td>
                    <td className="px-4 py-2 text-gray-800">
                      <button
                        onClick={() => handleDeleteCategory(category._id)}
                        className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="3" className="px-4 py-2 text-gray-800 text-center">
                    No categories found.
                  </td>
                </tr>
              )}
            </tbody>


          </table>
        </div>
      </div>
    </div >
  );
};

export default AdminDashboard;













// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import axios from "axios";

// const AdminDashboard = () => {
//   const [categories, setCategories] = useState([]);
//   const [students, setStudents] = useState([]);
//   const [instructors, setInstructors] = useState([]);
//   const [newCategory, setNewCategory] = useState({ name: "", description: "" });
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [isLoading, setIsLoading] = useState(true);
//   const [analytics, setAnalytics] = useState({
//     totalStudents: 0,
//     studentsEnrolled: 0,
//     activeStudents: 0,
//   });

//   const { token } = useSelector((state) => state.auth);



//   // Function to handle category deletion
//   const handleDeleteCategory = async (categoryId) => {
//     try {
//       const baseURL = process.env.REACT_APP_BASE_URL || '';

//       await axios.delete(`${baseURL}/course/deleteCategory/${categoryId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         }
//       });

//       // Remove the deleted category from the state
//       setCategories(categories.filter(category => category._id !== categoryId));
//       setSuccess("Category deleted successfully!");
//     } catch (error) {
//       console.error('Delete Category Error:', error);
//       setError(error.response?.data?.message || "Failed to delete category");
//     }
//   };

//   // Fetch data function with enhanced error handling
//   const fetchData = async () => {
//     setIsLoading(true);
//     setError(null);

//     try {
//       // Determine base URL with fallback
//       const baseURL = process.env.REACT_APP_BASE_URL || 'https://fallback-url.com/api/v1';

//       console.log('Fetching data with base URL:', baseURL);
//       console.log('Authentication Token:', token ? 'Token Present' : 'No Token');

//       // Fetch categories
//       const categoryResponse = await axios.get(`${baseURL}/course/showAllCategories`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         },
//         timeout: 10000 // 10-second timeout
//       });
//       console.log('Categories Response:', categoryResponse.data);
//       setCategories(categoryResponse.data.data || []);

//       // Fetch analytics
//       const analyticsResponse = await axios.get(`${baseURL}/admin/analytics`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         },
//         timeout: 10000
//       });
//       console.log('Analytics Response:', analyticsResponse.data);
//       setAnalytics(analyticsResponse.data.data || {
//         totalStudents: 0,
//         studentsEnrolled: 0,
//         activeStudents: 0
//       });

//       // Fetch students
//       const studentsResponse = await axios.get(`${baseURL}/admin/students`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         },
//         timeout: 10000
//       });
//       console.log('Students Response:', studentsResponse.data);
//       setStudents(studentsResponse.data.students || []);

//       // Fetch instructors
//       const instructorsResponse = await axios.get(`${baseURL}/admin/instructors`, {
//         headers: {
//           Authorization: `Bearer ${token}`,
//           'Content-Type': 'application/json'
//         },
//         timeout: 10000
//       });
//       console.log('Instructors Response:', instructorsResponse.data);
//       setInstructors(instructorsResponse.data.instructors || []);

//       setIsLoading(false);
//     } catch (error) {
//       setIsLoading(false);
//       console.error('Detailed Fetch Error:', {
//         message: error.message,
//         response: error.response?.data,
//         status: error.response?.status,
//         headers: error.response?.headers
//       });

//       // More informative error handling
//       if (error.response) {
//         // The request was made and the server responded with a status code
//         // that falls out of the range of 2xx
//         setError(`Server Error: ${error.response.status} - ${error.response.data.message || 'Unknown error'}`);
//       } else if (error.request) {
//         // The request was made but no response was received
//         setError('No response received from the server. Please check your network connection.');
//       } else {
//         // Something happened in setting up the request that triggered an Error
//         setError(`Request Setup Error: ${error.message}`);
//       }
//     }
//   };

//   // Add new category function
//   const handleAddCategory = async (e) => {
//     e.preventDefault();

//     const { name, description } = newCategory;

//     if (!name.trim()) {
//       setError("Category name cannot be empty");
//       return;
//     }

//     try {
//       const baseURL = process.env.REACT_APP_BASE_URL || '';

//       const response = await axios.post(
//         `${baseURL}/course/createCategory`,
//         { name, description },
//         {
//           headers: {
//             'Content-Type': 'application/json',
//             Authorization: `Bearer ${token}`,
//           },
//         }
//       );

//       setSuccess("Category added successfully!");
//       setCategories([...categories, response.data.category]);
//       setNewCategory({ name: "", description: "" });
//       setError(null);
//     } catch (error) {
//       console.error('Add Category Error:', error);
//       setError(error.response?.data?.message || "Failed to add category. Please try again.");
//     }
//   };

//   // Fetch data on component mount
//   useEffect(() => {
//     fetchData();
//   }, [token]); // Dependency on token ensures refetch if token changes

//   // Render loading state
//   if (isLoading) {
//     return (
//       <div className="min-h-screen bg-gray-100 flex items-center justify-center">
//         <div className="text-2xl text-gray-600">Loading dashboard...</div>
//       </div>
//     );
//   }

//   return (
//     <div className="min-h-screen bg-gray-100 p-8">
//       <div className="max-w-7xl mx-auto bg-white p-6 rounded-lg shadow-lg">
//         <h1 className="text-2xl font-semibold text-gray-800 mb-4">
//           Admin Dashboard
//         </h1>

//         {/* Error and Success Messages */}
//         {error && (
//           <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-4" role="alert">
//             <span className="block sm:inline">{error}</span>
//           </div>
//         )}
//         {success && (
//           <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-4" role="alert">
//             <span className="block sm:inline">{success}</span>
//           </div>
//         )}

//         {/* Rest of the dashboard remains the same as previous implementation */}
//         {/* Analytics Section */}
//         <div className="mb-6 grid grid-cols-3 gap-4">
//           <div className="bg-yellow-100 p-4 rounded-md text-center">
//             <h2 className="text-lg font-semibold text-gray-700">Total Students</h2>
//             <p className="text-2xl text-gray-800">{analytics?.totalStudents ?? 0}</p>
//           </div>
//           <div className="bg-yellow-100 p-4 rounded-md text-center">
//             <h2 className="text-lg font-semibold text-gray-700">Students Enrolled</h2>
//             <p className="text-2xl text-gray-800">{analytics?.studentsEnrolled ?? 0}</p>
//           </div>
//           <div className="bg-yellow-100 p-4 rounded-md text-center">
//             <h2 className="text-lg font-semibold text-gray-700">Active Students</h2>
//             <p className="text-2xl text-gray-800">{analytics?.activeStudents ?? 0}</p>
//           </div>
//         </div>

//         {/* Add Category Section */}
//         <form onSubmit={handleAddCategory} className="mb-6 space-y-4">
//           <input
//             type="text"
//             value={newCategory.name}
//             onChange={(e) =>
//               setNewCategory({ ...newCategory, name: e.target.value })
//             }
//             placeholder="Category Name"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
//           />
//           <textarea
//             value={newCategory.description}
//             onChange={(e) =>
//               setNewCategory({ ...newCategory, description: e.target.value })
//             }
//             placeholder="Category Description"
//             className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-yellow-300"
//           ></textarea>
//           <button
//             type="submit"
//             className="px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600"
//           >
//             Add Category
//           </button>
//         </form>

//         {/* Students Table */}
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Students</h2>
//           <table className="w-full bg-white border border-gray-200 rounded-md">
//             <thead>
//               <tr className="bg-gray-50 border-b border-gray-200">
//                 <th className="px-4 py-2 text-left text-gray-700">Name</th>
//                 <th className="px-4 py-2 text-left text-gray-700">Email</th>
//                 <th className="px-4 py-2 text-left text-gray-700">Course</th>
//                 <th className="px-4 py-2 text-left text-gray-700">Instructor</th>
//                 <th className="px-4 py-2 text-left text-gray-700">Payment Status</th>
//               </tr>
//             </thead>
//             <tbody>
//               {students.length > 0 ? (
//                 students.map((student) => (
//                   <tr key={student._id} className="border-b border-gray-200">
//                     <td className="px-4 py-2 text-gray-800">
//                       {student.firstName} {student.lastName}
//                     </td>
//                     <td className="px-4 py-2 text-gray-800">{student.email}</td>
//                     <td className="px-4 py-2 text-gray-800">
//                       {student.courses.map((course) => course.courseName).join(", ")}
//                     </td>
//                     <td className="px-4 py-2 text-gray-800">
//                       {student.courses
//                         .map((course) => `${course.instructor.firstName} ${course.instructor.lastName}`)
//                         .join(", ")}
//                     </td>
//                     <td className="px-4 py-2 text-gray-800">
//                       {student.paymentStatus === "success" ? "Success" : "Pending"}
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="5" className="px-4 py-2 text-center text-gray-500">
//                     No students found
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Instructors Table */}
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Instructors</h2>
//           <table className="w-full bg-white border border-gray-200 rounded-md">
//             <thead>
//               <tr className="bg-gray-50 border-b border-gray-200">
//                 <th className="px-4 py-2 text-left text-gray-700">Name</th>
//                 <th className="px-4 py-2 text-left text-gray-700">Email</th>
//                 <th className="px-4 py-2 text-left text-gray-700">Courses</th>
//                 <th className="px-4 py-2 text-left text-gray-700">Rating</th>
//               </tr>
//             </thead>
//             <tbody>
//               {instructors.length > 0 ? (
//                 instructors.map((instructor) => (
//                   <tr key={instructor._id} className="border-b border-gray-200">
//                     <td className="px-4 py-2 text-gray-800">
//                       {instructor.firstName} {instructor.lastName}
//                     </td>
//                     <td className="px-4 py-2 text-gray-800">{instructor.email}</td>
//                     <td className="px-4 py-2 text-gray-800">
//                       {instructor.courses && instructor.courses.length > 0
//                         ? instructor.courses.map((course) => course.courseName).join(", ")
//                         : "No courses"}
//                     </td>
//                     <td className="px-4 py-2 text-gray-800">{instructor.rating || "N/A"}</td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="4" className="px-4 py-2 text-gray-800 text-center">
//                     No instructors found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>
//           </table>
//         </div>

//         {/* Categories Table */}
//         <div className="mb-6">
//           <h2 className="text-xl font-semibold text-gray-800 mb-4">Categories</h2>
//           <table className="w-full bg-mwhite border border-gray-200 rounded-md">
//             <thead>
//               <tr className="bg-gray-50 border-b border-gray-200">
//                 <th className="px-4 py-2 text-left text-gray-700">Name</th>
//                 <th className="px-4 py-2 text-left text-gray-700">Description</th>
//                 <th className="px-4 py-2 text-left text-gray-700">Actions</th>
//               </tr>
//             </thead>
//             <tbody>
//               {categories.length > 0 ? (
//                 categories.map((category) => (
//                   <tr key={category._id} className="border-b border-gray-200">
//                     <td className="px-4 py-2 text-gray-800">{category.name}</td>
//                     <td className="px-4 py-2 text-gray-800">{category.description}</td>
//                     <td className="px-4 py-2 text-gray-800">
//                       <button
//                         onClick={() => handleDeleteCategory(category._id)}
//                         className="px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
//                       >
//                         Delete
//                       </button>
//                     </td>
//                   </tr>
//                 ))
//               ) : (
//                 <tr>
//                   <td colSpan="3" className="px-4 py-2 text-gray-800 text-center">
//                     No categories found.
//                   </td>
//                 </tr>
//               )}
//             </tbody>


//           </table>
//         </div>
//       </div>
//     </div >
//   );
// };

// export default AdminDashboard;

