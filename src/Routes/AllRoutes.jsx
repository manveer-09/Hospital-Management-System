import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LandingPage from "../Pages/Landing/LandingPage";
import DLogin from "../Pages/Dashboard/Dashboard-Login/DLogin";
import AddBeds from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/AddBeds";
import Add_Admin from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Admin";
import Add_Ambulance from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Ambulance";
import AddDoctor from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Doctor";
import Add_Nurse from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Nurse";
import Beds_Rooms from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Beds_Rooms";
import Check_Payment from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Check_Payment";
import AllReport from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/AllReport";
import Check_Appointment from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/Check_Appointment";
import Discharge_and_Create_Slip from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/Discharge_and_Create_Slip";
import Doctor_Profile from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/Doctor_Profile";
import Patient_Details from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/Patient_Details";
import Add_Patient from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/Add_Patient";
import Book_Appointment from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/Book_Appointment";
import Nurse_Profile from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/Nurse_Profile";
import FrontPage from "../Pages/Dashboard/Main-Dashboard/GlobalFiles/FrontPage";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useSelector((state) => state.auth.data.isAuthenticated);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<DLogin />} />
      <Route path="/dashboard" element={<PrivateRoute><FrontPage /></PrivateRoute>} />
      <Route path="/addoctor" element={<PrivateRoute><AddDoctor /></PrivateRoute>} />
      <Route path="/addambulance" element={<PrivateRoute><Add_Ambulance /></PrivateRoute>} />
      <Route path="/addnurse" element={<PrivateRoute><Add_Nurse /></PrivateRoute>} />
      <Route path="/rooms" element={<PrivateRoute><Beds_Rooms /></PrivateRoute>} />
      <Route path="/admin" element={<PrivateRoute><Add_Admin /></PrivateRoute>} />
      <Route path="/addbeds" element={<PrivateRoute><AddBeds /></PrivateRoute>} />
      <Route path="/checkpayment" element={<PrivateRoute><Check_Payment /></PrivateRoute>} />
      <Route path="/reports" element={<PrivateRoute><AllReport /></PrivateRoute>} />
      <Route path="/checkappointment" element={<PrivateRoute><Check_Appointment /></PrivateRoute>} />
      <Route path="/createslip" element={<PrivateRoute><Discharge_and_Create_Slip /></PrivateRoute>} />
      <Route path="/patientdetails" element={<PrivateRoute><Patient_Details /></PrivateRoute>} />
      <Route path="/doctorprofile" element={<PrivateRoute><Doctor_Profile /></PrivateRoute>} />
      <Route path="/addpatient" element={<PrivateRoute><Add_Patient /></PrivateRoute>} />
      <Route path="/bookappointment" element={<PrivateRoute><Book_Appointment /></PrivateRoute>} />
      <Route path="/nurseprofile" element={<PrivateRoute><Nurse_Profile /></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AllRoutes;
