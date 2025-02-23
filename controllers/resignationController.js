const Resignation = require("../models/Resignation");

exports.submitResignation = async (req, res) => {
  try {
    const { lwd } = req.body;
    const resignation = new Resignation({ employeeId: req.user.id, lwd });
    await resignation.save();
    res.json({ message: "Resignation submitted successfully" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.viewResignations = async (req, res) => {
  try {
    const resignations = await Resignation.find();
    res.json({ data: resignations });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
