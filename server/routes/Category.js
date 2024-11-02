// const express = require("express");
// const { createCategory, showAllCategories, categoryPageDetails } = require("../controllers/Category");
// const { auth, isAdmin } = require("../middlewares/auth");
// const router = express.Router();

// // Route to create a category
// router.post("/createCategory", auth, isAdmin, createCategory);

// // Route to get all categories
// router.get("/showAllCategories", showAllCategories);

// // Route to get category details
// router.post("/getCategoryPageDetails", categoryPageDetails);

// module.exports = router;







const express = require("express");
const { createCategory, showAllCategories, deleteCategory } = require("../controllers/Category");
const { auth, isAdmin } = require("../middlewares/auth");
const router = express.Router();

// Route to create a category
router.post("/createCategory", auth, isAdmin, createCategory);

// Route to get all categories
router.get("/showAllCategories", auth, isAdmin, showAllCategories);

// Route to delete a category by ID
router.delete("/deleteCategory/:categoryId", auth, isAdmin, deleteCategory);

module.exports = router;