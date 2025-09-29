const Experts= require('../models/experts')

const getExperts = async (req, res) => {
  try {
    const experts = await Experts.find({});
    return res
      .status(200)
      .json({ success: true, message: "Record fetch successfully", record: experts });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Error while fetching record" });
  }
};

module.exports= { getExperts };