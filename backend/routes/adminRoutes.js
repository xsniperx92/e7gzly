const express = require("express");
const router = express.Router();
const {
  registerAdmin,
  loginAdmin,
  getAdmin,
  getAdmins,
  editAdmin,
} = require("../controller/adminController");
const { protect, isAdmin } = require("../middleware/authMiddleware");

router.post("/", protect, isAdmin, registerAdmin);
router.post("/login", loginAdmin);
router.route("/:id").get(protect, isAdmin, getAdmin).put(editAdmin);

module.exports = router;

router.get("/", getAdmins);
