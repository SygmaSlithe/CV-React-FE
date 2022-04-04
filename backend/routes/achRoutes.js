const express = require("express");
const {
  getAchs,
  createAch,
  getAchById,
  updateAch,
  deleteAch,
} = require("../controllers/achControllers");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

router.route("/").get(protect, getAchs);
router.route("/create").post(protect, createAch);
router
  .route("/:id")
  .get(getAchById)
  .put(protect, updateAch)
  .delete(protect, deleteAch);

module.exports = router;
