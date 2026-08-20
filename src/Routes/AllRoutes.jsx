import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import LandingPage from "../Pages/Landing/LandingPage";
import DLogin from "../Pages/Dashboard/Dashboard-Login/DLogin";
import AddBeds from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/AddBeds";
import AddAdmin from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/AddAdmin";
import AddAmbulance from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/AddAmbulance";
import AddDoctor from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/Add_Doctor";
import AddNurse from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/AddNurse";
import BedsRooms from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/BedsRooms";
import CheckPayment from "../Pages/Dashboard/Main-Dashboard/AllPages/Admin/CheckPayment";
import AllReport from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/AllReport";
import CheckAppointment from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/CheckAppointment";
import DischargeAndCreateSlip from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/DischargeAndCreateSlip";
import DoctorProfile from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/DoctorProfile";
import PatientDetails from "../Pages/Dashboard/Main-Dashboard/AllPages/Doctor/PatientDetails";
import AddPatient from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/AddPatient";
import BookAppointment from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/BookAppointment";
import NurseProfile from "../Pages/Dashboard/Main-Dashboard/AllPages/Nurse/NurseProfile";
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
      <Route path="/addambulance" element={<PrivateRoute><AddAmbulance /></PrivateRoute>} />
      <Route path="/addnurse" element={<PrivateRoute><AddNurse /></PrivateRoute>} />
      <Route path="/rooms" element={<PrivateRoute><BedsRooms /></PrivateRoute>} />
      <Route path="/admin" element={<PrivateRoute><AddAdmin /></PrivateRoute>} />
      <Route path="/addbeds" element={<PrivateRoute><AddBeds /></PrivateRoute>} />
      <Route path="/checkpayment" element={<PrivateRoute><CheckPayment /></PrivateRoute>} />
      <Route path="/reports" element={<PrivateRoute><AllReport /></PrivateRoute>} />
      <Route path="/checkappointment" element={<PrivateRoute><CheckAppointment /></PrivateRoute>} />
      <Route path="/createslip" element={<PrivateRoute><DischargeAndCreateSlip /></PrivateRoute>} />
      <Route path="/patientdetails" element={<PrivateRoute><PatientDetails /></PrivateRoute>} />
      <Route path="/doctorprofile" element={<PrivateRoute><DoctorProfile /></PrivateRoute>} />
      <Route path="/addpatient" element={<PrivateRoute><AddPatient /></PrivateRoute>} />
      <Route path="/bookappointment" element={<PrivateRoute><BookAppointment /></PrivateRoute>} />
      <Route path="/nurseprofile" element={<PrivateRoute><NurseProfile /></PrivateRoute>} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AllRoutes;
