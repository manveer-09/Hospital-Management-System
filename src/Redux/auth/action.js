import * as types from "./types";
import { nursesDB, doctorsDB, adminsDB } from "../../data/staticData";

export const NurseLogin = (data) => (dispatch) => {
  dispatch({ type: types.LOGIN_NURSE_REQUEST });
  const user = nursesDB.find(
    (n) => n.nurseID === Number(data.nurseID) && n.password === data.password
  );
  if (user) {
    const token = `static_token_nurse_${user._id}`;
    localStorage.setItem("token", token);
    dispatch({ type: types.LOGIN_NURSE_SUCCESS, payload: { message: "Successful", user, token } });
    return Promise.resolve({ message: "Successful" });
  }
  dispatch({ type: types.LOGIN_NURSE_ERROR, payload: { message: "Wrong credentials" } });
  return Promise.resolve({ message: "Wrong credentials" });
};

export const DoctorLogin = (data) => (dispatch) => {
  dispatch({ type: types.LOGIN_DOCTOR_REQUEST });
  const user = doctorsDB.find(
    (d) => d.docID === Number(data.docID) && d.password === data.password
  );
  if (user) {
    const token = `static_token_doctor_${user._id}`;
    localStorage.setItem("token", token);
    dispatch({ type: types.LOGIN_DOCTOR_SUCCESS, payload: { message: "Successful", user, token } });
    return Promise.resolve({ message: "Successful" });
  }
  dispatch({ type: types.LOGIN_DOCTOR_ERROR, payload: { message: "Wrong credentials" } });
  return Promise.resolve({ message: "Wrong credentials" });
};

export const AdminLogin = (data) => (dispatch) => {
  dispatch({ type: types.LOGIN_ADMIN_REQUEST });
  const user = adminsDB.find(
    (a) => a.adminID === Number(data.adminID) && a.password === data.password
  );
  if (user) {
    const token = `static_token_admin_${user._id}`;
    localStorage.setItem("token", token);
    dispatch({ type: types.LOGIN_ADMIN_SUCCESS, payload: { message: "Successful", user, token } });
    return Promise.resolve({ message: "Successful" });
  }
  dispatch({ type: types.LOGIN_ADMIN_ERROR, payload: { message: "Wrong credentials" } });
  return Promise.resolve({ message: "Wrong credentials" });
};

export const DoctorRegister = (data) => (dispatch) => {
  dispatch({ type: types.REGISTER_DOCTOR_REQUEST });
  const exists = doctorsDB.find((d) => d.email === data.email);
  if (exists) return Promise.resolve({ message: "Doctor already exists" });
  const newDoc = { ...data, _id: `doc_${Date.now()}`, userType: "doctor" };
  doctorsDB.push(newDoc);
  return Promise.resolve({ message: "Successful", data: newDoc });
};

export const NurseRegister = (data) => (dispatch) => {
  dispatch({ type: types.REGISTER_NURSE_REQUEST });
  const exists = nursesDB.find((n) => n.email === data.email);
  if (exists) return Promise.resolve({ message: "Nures already exists" });
  const newNurse = { ...data, _id: `nurse_${Date.now()}`, userType: "nurse" };
  nursesDB.push(newNurse);
  return Promise.resolve({ message: "Successful", data: newNurse });
};

export const AdminRegister = (data) => (dispatch) => {
  dispatch({ type: types.REGISTER_ADMIN_REQUEST });
  const exists = adminsDB.find((a) => a.email === data.email);
  if (exists) return Promise.resolve({ message: "Admin already exists" });
  const newAdmin = { ...data, _id: `admin_${Date.now()}`, userType: "admin" };
  adminsDB.push(newAdmin);
  return Promise.resolve({ message: "Successful", data: newAdmin });
};

export const AmbulanceRegister = (data) => (dispatch) => {
  dispatch({ type: types.REGISTER_AMBULANCE_REQUEST });
  return Promise.resolve({ message: "Successful" });
};

export const authLogout = () => (dispatch) => {
  localStorage.removeItem("token");
  dispatch({ type: types.AUTH_LOGOUT });
};

export const UpdateNurse = (data, id) => (dispatch) => {
  dispatch({ type: types.EDIT_NURSE_REQUEST });
  const idx = nursesDB.findIndex((n) => n._id === id);
  if (idx !== -1) Object.assign(nursesDB[idx], data);
  dispatch({ type: types.EDIT_NURSE_SUCCESS, payload: nursesDB[idx] || data });
};

export const UpdateDoctor = (data, id) => (dispatch) => {
  dispatch({ type: types.EDIT_DOCTOR_REQUEST });
  const idx = doctorsDB.findIndex((d) => d._id === id);
  if (idx !== -1) Object.assign(doctorsDB[idx], data);
  dispatch({ type: types.EDIT_DOCTOR_SUCCESS, payload: doctorsDB[idx] || data });
};

export const SendPassword = (data) => (dispatch) => {
  return Promise.resolve({ message: "Successful" });
};

export const forgetPassword = (data) => (dispatch) => {
  dispatch({ type: types.FORGET_PASSWORD_REQUEST });
  const allUsers = [...nursesDB, ...doctorsDB, ...adminsDB];
  const user = allUsers.find((u) => u.email === data.email);
  if (!user) return Promise.resolve({ message: "User not found" });
  return Promise.resolve({ message: "Account Details Send" });
};
