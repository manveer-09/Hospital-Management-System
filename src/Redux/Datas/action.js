import * as types from "./types";
import {
  bedsDB,
  patientsDB,
  appointmentsDB,
  reportsDB,
  dashboardData,
} from "../../data/staticData";

export const CreateReport = (data) => (dispatch) => {
  dispatch({ type: types.CREATE_REPORT_REQUEST });
  const newReport = { ...data, _id: `rep_${Date.now()}` };
  reportsDB.push(newReport);
  return Promise.resolve({ message: "Report successfully created" });
};

export const GetDoctorDetails = () => (dispatch) => {
  dispatch({ type: types.GET_DOCTOR_REQUEST });
};

export const AddPatients = (data) => (dispatch) => {
  dispatch({ type: types.ADD_PATIENT_REQUEST });
  const exists = patientsDB.find((p) => p.email === data.email);
  if (exists) return Promise.resolve({ message: "Patient already exists" });
  const newPatient = { ...data, _id: `pat_${Date.now()}` };
  patientsDB.push(newPatient);
  dispatch({ type: types.GET_PATIENT_SUCCESS, payload: [...patientsDB] });
  return Promise.resolve({ message: "Successful", _id: newPatient._id, id: newPatient._id });
};

export const CreateBeds = (data) => (dispatch) => {
  dispatch({ type: types.ADD_BED_REQUEST });
  const newBed = { ...data, _id: `bed_${Date.now()}`, occupied: "available", patientID: null };
  bedsDB.push(newBed);
  return Promise.resolve({ message: "Successful" });
};

export const CreatePayment = (data) => (dispatch) => {
  dispatch({ type: types.CREATE_PAYMENT_REQUEST });
  return Promise.resolve({ message: "Successful" });
};

export const GetBeds = () => (dispatch) => {
  dispatch({ type: types.GET_BED_REQUEST });
  dispatch({ type: types.GET_BED_SUCCESS, payload: [...bedsDB] });
};

export const CreateBooking = (data) => (dispatch) => {
  dispatch({ type: types.CREATE_BOOKING_REQUEST });
  const newAppt = { ...data, _id: `appt_${Date.now()}` };
  appointmentsDB.push(newAppt);
  dispatch({ type: types.GET_APPOINTMENT_DETAILS_SUCCESS, payload: [...appointmentsDB] });
};

export const AddBed = (data) => (dispatch) => {
  dispatch({ type: types.ADD_BEDS_REQUEST });
  const newBed = { ...data, _id: `bed_${Date.now()}`, occupied: "available", patientID: null };
  bedsDB.push(newBed);
  dispatch({ type: types.GET_BED_SUCCESS, payload: [...bedsDB] });
  return Promise.resolve({ message: "Successful" });
};

export const GetSingleBed = (data) => (dispatch) => {
  dispatch({ type: types.GET_SINGLE_BEDS_REQUEST });
  const bed = bedsDB.find(
    (b) =>
      Number(b.bedNumber) === Number(data.bedNumber) &&
      Number(b.roomNumber) === Number(data.roomNumber)
  );
  if (!bed) return Promise.resolve({ message: "Bed not found" });
  if (bed.occupied === "occupied") return Promise.resolve({ message: "Occupied" });
  return Promise.resolve({ message: "Available", id: bed._id });
};

export const EditSingleBed = (data, id) => (dispatch) => {
  dispatch({ type: types.GET_SINGLE_BEDS_REQUEST });
  const idx = bedsDB.findIndex((b) => b._id === id);
  if (idx !== -1) Object.assign(bedsDB[idx], data);
  dispatch({ type: types.GET_BED_SUCCESS, payload: [...bedsDB] });
  return Promise.resolve({ message: "Successful" });
};

export const dischargePatient = (data) => (dispatch) => {
  dispatch({ type: types.DISCHARGE_PATIENT_REQUEST });
  const idx = bedsDB.findIndex((b) => b._id === data._id);
  if (idx !== -1) {
    bedsDB[idx].occupied = "available";
    bedsDB[idx].patientID = null;
  }
  dispatch({ type: types.DISCHARGE_PATIENT_SUCCESS, payload: { bed: bedsDB[idx] } });
  dispatch({ type: types.GET_BED_SUCCESS, payload: [...bedsDB] });
};

export const GetPatients = () => (dispatch) => {
  dispatch({ type: types.GET_PATIENT_REQUEST });
  dispatch({ type: types.GET_PATIENT_SUCCESS, payload: [...patientsDB] });
};

export const GetAllData = () => (dispatch) => {
  dispatch({ type: types.GET_ALLDATA_REQUEST });
  dispatch({ type: types.GET_ALLDATA_SUCCESS, payload: { data: dashboardData } });
};

export const GetAllAppointment = () => (dispatch) => {
  dispatch({ type: types.GET_APPOINTMENT_DETAILS_REQUEST });
  dispatch({ type: types.GET_APPOINTMENT_DETAILS_SUCCESS, payload: [...appointmentsDB] });
};

export const DeleteAppointment = (id) => (dispatch) => {
  dispatch({ type: types.DELETE_APPOINTMENT_REQUEST });
  const idx = appointmentsDB.findIndex((a) => a._id === id);
  if (idx !== -1) appointmentsDB.splice(idx, 1);
  dispatch({ type: types.DELETE_APPOINTMENT_SUCCESS, payload: id });
};

export const GetAllReports = () => (dispatch) => {
  dispatch({ type: types.GET_REPORTS_REQUEST });
  return Promise.resolve([...reportsDB]);
};
