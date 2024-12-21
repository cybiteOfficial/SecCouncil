import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const AddCategory = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [categories, setCategories] = useState([]);

  const { token } = useSelector((state) => state.auth); // Assuming you store the token in Redux

  // Function to add a category
  const addCategory = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:4000/api/v1/course/createCategory", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`, // Include JWT token for admin auth
        },
        body: JSON.stringify({ name, description }),
      });

      if (!response.ok) {
        const message = await response.json();
        throw new Error(message.message || "Failed to add category");
      }

      const data = await response.json();
      setSuccess("Category added successfully!");
      setName("");
      setDescription("");
      fetchCategories(); // Reload categories after adding a new one
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to fetch all categories
  const fetchCategories = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/v1/course/showAllCategories", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`, // Include JWT token for admin auth
        },
      });

      const data = await response.json();
      if (data.success) {
        setCategories(data.data); // Assuming the categories are under data.data
      } else {
        setError("Failed to load categories");
      }
    } catch (error) {
      setError(error.message);
    }
  };

  // Function to delete a category
  const deleteCategory = async (categoryId) => {
    try {
      const response = await fetch(`http://localhost:4000/api/v1/course/deleteCategory/${categoryId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`, // Include JWT token for admin auth
        },
      });

      if (!response.ok) {
        throw new Error("Failed to delete category");
      }

      setSuccess("Category deleted successfully!");
      fetchCategories(); // Reload categories after deletion
    } catch (error) {
      setError(error.message);
    }
  };

  // Fetch categories when component mounts
  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="flex flex-col items-center h-screen bg-gray-100">
      <form className="bg-white p-6 rounded-lg shadow-md mb-6" onSubmit={addCategory}>
        <h2 className="text-xl font-semibold mb-4">Add New Category</h2>

        {error && <div className="text-red-500">{error}</div>}
        {success && <div className="text-green-500">{success}</div>}

        <div className="mb-4">
          <label className="block text-sm font-medium">Category Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="w-full px-3 py-2 border rounded-md"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium">Description</label>
          <textarea
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full px-3 py-2 border rounded-md"
            rows="4"
          />
        </div>

        <button type="submit" className="bg-blue-500 text-mwhite px-4 py-2 rounded-md hover:bg-blue-600">
          Add Category
        </button>
      </form>

      {/* Displaying all categories */}
      <div className="bg-mwhite p-6 rounded-lg shadow-md w-3/4">
        <h2 className="text-xl font-semibold mb-4">All Categories</h2>

        {Array.isArray(categories) && categories.length > 0 ? (
          <ul className="space-y-4">
            {categories.map((category) => (
              <li key={category._id} className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
                <div>
                  <strong>{category.name}</strong> - {category.description}
                </div>
                <button
                  onClick={() => deleteCategory(category._id)}
                  className="bg-red-500 text-black px-4 py-2 rounded-md hover:bg-red-600"
                >
                  Delete
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <p>No categories found.</p>
        )}
      </div>
    </div>
  );
};

export default AddCategory;






// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";

// const AddCategory = () => {
//   const [name, setName] = useState("");
//   const [description, setDescription] = useState("");
//   const [error, setError] = useState(null);
//   const [success, setSuccess] = useState(null);
//   const [categories, setCategories] = useState([]);

//   const { token } = useSelector((state) => state.auth); // Assuming you store the token in Redux

//   // Base URL from environment variables
//   const BASE_URL = process.env.REACT_APP_BASE_URL;

//   // Function to add a category
//   const addCategory = async (e) => {
//     e.preventDefault();

//     try {
//       const response = await fetch(`${BASE_URL}/course/createCategory`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//           Authorization: `Bearer ${token}`, // Include JWT token for admin auth
//         },
//         body: JSON.stringify({ name, description }),
//       });

//       if (!response.ok) {
//         const message = await response.json();
//         throw new Error(message.message || "Failed to add category");
//       }

//       const data = await response.json();
//       setSuccess("Category added successfully!");
//       setName("");
//       setDescription("");
//       fetchCategories(); // Reload categories after adding a new one
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   // Function to fetch all categories
//   const fetchCategories = async () => {
//     try {
//       const response = await fetch(`${BASE_URL}/course/showAllCategories`, {
//         method: "GET",
//         headers: {
//           Authorization: `Bearer ${token}`, // Include JWT token for admin auth
//         },
//       });

//       const data = await response.json();
//       if (data.success) {
//         setCategories(data.data); // Assuming the categories are under data.data
//       } else {
//         setError("Failed to load categories");
//       }
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   // Function to delete a category
//   const deleteCategory = async (categoryId) => {
//     try {
//       const response = await fetch(`${BASE_URL}/course/deleteCategory/${categoryId}`, {
//         method: "DELETE",
//         headers: {
//           Authorization: `Bearer ${token}`, // Include JWT token for admin auth
//         },
//       });

//       if (!response.ok) {
//         throw new Error("Failed to delete category");
//       }

//       setSuccess("Category deleted successfully!");
//       fetchCategories(); // Reload categories after deletion
//     } catch (error) {
//       setError(error.message);
//     }
//   };

//   // Fetch categories when component mounts
//   useEffect(() => {
//     fetchCategories();
//   }, []);

//   return (
//     <div className="flex flex-col items-center h-screen bg-gray-100">
//       <form className="bg-white p-6 rounded-lg shadow-md mb-6" onSubmit={addCategory}>
//         <h2 className="text-xl font-semibold mb-4">Add New Category</h2>

//         {error && <div className="text-red-500">{error}</div>}
//         {success && <div className="text-green-500">{success}</div>}

//         <div className="mb-4">
//           <label className="block text-sm font-medium">Category Name</label>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             required
//             className="w-full px-3 py-2 border rounded-md"
//           />
//         </div>

//         <div className="mb-4">
//           <label className="block text-sm font-medium">Description</label>
//           <textarea
//             value={description}
//             onChange={(e) => setDescription(e.target.value)}
//             className="w-full px-3 py-2 border rounded-md"
//             rows="4"
//           />
//         </div>

//         <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600">
//           Add Category
//         </button>
//       </form>

//       {/* Displaying all categories */}
//       <div className="bg-white p-6 rounded-lg shadow-md w-3/4">
//         <h2 className="text-xl font-semibold mb-4">All Categories</h2>

//         {Array.isArray(categories) && categories.length > 0 ? (
//           <ul className="space-y-4">
//             {categories.map((category) => (
//               <li key={category._id} className="flex justify-between items-center bg-gray-100 p-3 rounded-md">
//                 <div>
//                   <strong>{category.name}</strong> - {category.description}
//                 </div>
//                 <button
//                   onClick={() => deleteCategory(category._id)}
//                   className="bg-red-500 text-black px-4 py-2 rounded-md hover:bg-red-600"
//                 >
//                   Delete
//                 </button>
//               </li>
//             ))}
//           </ul>
//         ) : (
//           <p>No categories found.</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default AddCategory;
