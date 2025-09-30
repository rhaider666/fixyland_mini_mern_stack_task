import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { App, DatePicker, Select } from "antd";
import { ArrowRightOutlined } from "@ant-design/icons";
import sofa from "../../assets/images/sofa.jpg";
import HotelCard from "./components/HotelCard";
import { addAppointments, getHotels } from "../../lib/api";

const { Option } = Select;

const validationSchema = Yup.object({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  type: Yup.string().required("Please select a type"),
  room: Yup.string().required("Please select a room"),
  checkIn: Yup.date().required("Check-in date required"),
  checkOut: Yup.date().required("Check-out date required"),
  message: Yup.string().required("Message is required"),
});

const Hotels = () => {
  const { message } = App.useApp();

  const [loading, setLoading] = useState(false);
  const [hotels, setHotels] = useState([]);

  const fetchingHotels = async () => {
    try {
      setLoading(true);
      const res = await getHotels();
      setHotels(res.record);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingHotels();
  }, []);

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      type: "",
      room: "",
      checkIn: "",
      checkOut: "",
      message: "",
    },
    validationSchema,
    onSubmit: async (values, { resetForm }) => {
      console.log("Form Submitted:", values);
      const res = await addAppointments(values);
      if (res.success) {
        message.success(res.message);
        resetForm();
      }else{
        message.error(res.message)
      }

      // clears form after submit
    },
  });
  return (
    <>
      {/* form and card section */}
      <div className=" py-16">
        <div className="max-w-6xl mx-auto px-4">
          {/* Section Header */}
          <div className="text-center mb-10">
            <span className="px-3 py-1 text-xs text-primary font-medium bg-gray-200 rounded-md">
              STAY WITH US
            </span>
            <h2 className="text-3xl font-bold mt-4">Make An Appointment</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
            {/* Form */}
            <form
              onSubmit={formik.handleSubmit}
              className="md:col-span-2 bg-white p-8 rounded-xl shadow-sm"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-1 font-medium">First Name</label>
                  <input
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="first name"
                    className="w-full px-3 py-1 rounded-md border border-gray-300"
                  />
                  {formik.touched.firstName && formik.errors.firstName && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.firstName}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block mb-1 font-medium">Last Name</label>
                  <input
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    placeholder="last name"
                    className="w-full px-3 py-1 rounded-md  border border-gray-300"
                  />
                  {formik.touched.lastName && formik.errors.lastName && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.lastName}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block mb-1 font-medium">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="info@domain.com"
                    className="w-full px-3 py-1 rounded-md  border border-gray-300"
                  />
                  {formik.touched.email && formik.errors.email && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.email}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block mb-1 font-medium">Phone Number</label>
                  <input
                    name="phoneNumber"
                    value={formik.values.phoneNumber}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="(+1) 987 654 3210"
                    className="w-full px-3 py-1 rounded-md  border border-gray-300"
                  />
                  {formik.touched.phoneNumber && formik.errors.phoneNumber && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.phoneNumber}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block mb-1 font-medium">Select Type</label>
                  <Select
                    placeholder="Select Type"
                    className="w-full bg-gray-100"
                    value={formik.values.type || undefined}
                    onChange={(value) => formik.setFieldValue("type", value)}
                    onBlur={() => formik.setFieldTouched("type", true)}
                  >
                    <Option value="type1">Type 1</Option>
                    <Option value="type2">Type 2</Option>
                  </Select>
                  {formik.touched.type && formik.errors.type && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.type}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block mb-1 font-medium">Select Room</label>
                  <Select
                    placeholder="Select Room"
                    className="w-full bg-gray-100"
                    value={formik.values.room || undefined}
                    onChange={(value) => formik.setFieldValue("room", value)}
                    onBlur={() => formik.setFieldTouched("room", true)}
                  >
                    <Option value="room1">Room 1</Option>
                    <Option value="room2">Room 2</Option>
                  </Select>
                  {formik.touched.room && formik.errors.room && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.room}
                    </div>
                  )}
                </div>

                <div>
                  <label className="block mb-1 font-medium">Check In</label>
                  <DatePicker
                    className="w-full bg-gray-100"
                    value={formik.values.checkIn}
                    onChange={(date) => formik.setFieldValue("checkIn", date)}
                    onBlur={() => formik.setFieldTouched("checkIn", true)}
                  />
                  {formik.touched.checkIn && formik.errors.checkIn && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.checkIn}
                    </div>
                  )}
                </div>

                {/* Check-out */}
                <div>
                  <label className="block mb-1 font-medium">Check Out</label>
                  <DatePicker
                    className="w-full bg-gray-100"
                    value={formik.values.checkOut}
                    onChange={(date) => formik.setFieldValue("checkOut", date)}
                    onBlur={() => formik.setFieldTouched("checkOut", true)}
                  />
                  {formik.touched.checkOut && formik.errors.checkOut && (
                    <div className="text-red-500 text-sm mt-1">
                      {formik.errors.checkOut}
                    </div>
                  )}
                </div>
              </div>

              <div className="mt-4">
                <label className="block mb-1 font-medium">Message</label>
                <textarea
                  name="message"
                  value={formik.values.message}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                  placeholder="Ex: type message"
                  rows={4}
                  className="w-full px-3 py-2 rounded-md border border-gray-300"
                />
                {formik.touched.message && formik.errors.message && (
                  <div className="text-red-500 text-sm mt-1">
                    {formik.errors.message}
                  </div>
                )}
              </div>

              <button
                type="submit"
                className="mt-6 bg-primary text-white font-medium px-6 py-3 rounded-md flex items-center gap-2 cursor-pointer"
              >
                Book Appointment <ArrowRightOutlined />
              </button>
            </form>

            {/* Contact Card */}
            <div className="bg-primary text-white p-6 rounded-2xl flex flex-col justify-between items-center">
              <img src={sofa} alt="Room" className="rounded-md mb-6" />
              <h3 className="text-xl font-bold mb-2">(+1) 987 654 3210</h3>
              <p className="text-sm mb-1">Mon-Fri: 7:00 am - 9:00 pm</p>
              <p className="text-sm mb-6">24/7 Service Available</p>
              <button className="bg-yellow-400 text-black font-medium px-4 py-2 rounded-md flex items-center gap-2 hover:bg-yellow-500">
                Call Us Now <ArrowRightOutlined />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* hotels section */}
      <div className=" bg-primary py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="px-3 py-1 text-xs text-primary font-medium bg-white rounded-md">
              Our Best Room
            </span>
            <h2 className="text-3xl text-white font-bold mt-4">
              Luxury Rooms and Resort
            </h2>
          </div>

          {loading ? (
            <div>Loading..</div>
          ) : (
            <div
              className={`flex gap-4 overflow-x-auto hide-scrollbar ${
                hotels.length <= 3 ? "lg:justify-center" : ""
              }`}
            >
              {hotels.map((ele, index) => (
                <div key={index} className="flex-shrink-0">
                  <HotelCard data={ele} />
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Hotels;
