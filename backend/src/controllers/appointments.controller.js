const Appointments= require('../models/appointments')

const addAppointments = async (req, res) => {
  try {
    const body = req.body

    const checking = await Appointments.findOne({email:body.email})

    if(checking){
      return res
      .status(400)
      .json({ success: false, message: "Email already exist" });
    }

    const appointment = await Appointments.create(body);
    return res
      .status(200)
      .json({ success: true, message: "record add successfully", record: appointment });
  } catch (err) {
    return res
      .status(500)
      .json({ success: false, message: "Error while adding record" });
  }
};
module.exports= { addAppointments };