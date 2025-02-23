const express = require("express");
const {
  submitResignation,
  viewResignations,
} = require("../controllers/resignationController");
const authMiddleware = require("../middleware/authMiddleware");

const router = express.Router();

router.post("/resign", authMiddleware, submitResignation);
router.get("/resignations", authMiddleware, viewResignations);

module.exports = router;
