const Hotels = require("../models/hotels");

const getHotels = async (req, res) => {
  try {
    const hotels = await Hotels.find({});
    return res
      .status(200)
      .json({
        success: true,
        message: "Record fetch successfully",
        record: hotels,
      });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Error while fetching record" });
  }
};

module.exports = { getHotels };
