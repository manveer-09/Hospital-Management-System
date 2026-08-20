import React, { useState } from "react";
import { Radio } from "antd";
import banner from "../../../img/banner.png";
import admin from "../../../img/admin.jpg";
import "./DLogin.css";
import { useDispatch } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import { NurseLogin, DoctorLogin, AdminLogin } from "../../../Redux/auth/action";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const DLogin = () => {
  const [loading, setLoading] = useState(false);
  const [role, setRole] = useState("Nurse");
  const [formvalue, setFormvalue] = useState({ ID: "", password: "" });
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormvalue({ ...formvalue, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    if (!formvalue.ID || !formvalue.password) {
      setError("Please fill all fields");
      return;
    }
    setLoading(true);

    let action;
    if (role === "Nurse") {
      action = NurseLogin({ ...formvalue, nurseID: formvalue.ID });
    } else if (role === "Doctor") {
      action = DoctorLogin({ ...formvalue, docID: formvalue.ID });
    } else {
      action = AdminLogin({ ...formvalue, adminID: formvalue.ID });
    }

    dispatch(action).then((res) => {
      setLoading(false);
      if (res.message === "Successful") {
        toast.success("Login Successful");
        navigate("/dashboard");
      } else {
        setError("Invalid ID or Password");
        toast.error("Wrong credentials");
      }
    });
  };

  return (
    <>
      <ToastContainer />
      <div className="mainLoginPage">
        <div className="leftside">
          <img src={banner} alt="banner" />
        </div>
        <div className="rightside">
          <Link to="/" style={{ fontSize: "0.85rem", color: "#6c5ce7", textDecoration: "none", marginBottom: "12px", display: "inline-block" }}>
            ← Back to Home
          </Link>
          <h1>Login</h1>
          <div>
            <Radio.Group
              value={role}
              onChange={(e) => setRole(e.target.value)}
              className="radiogroup"
            >
              <Radio.Button value="Nurse" className="radiobutton">Nurse</Radio.Button>
              <Radio.Button value="Doctor" className="radiobutton">Doctor</Radio.Button>
              <Radio.Button value="Admin" className="radiobutton">Admin</Radio.Button>
            </Radio.Group>
          </div>
          <div className="Profileimg">
            <img src={admin} alt="profile" />
          </div>
          <div>
            <p style={{ color: "#555", marginBottom: "4px" }}>ID: <strong>100</strong> &nbsp; Password: <strong>pass@123</strong></p>
            <form onSubmit={handleSubmit}>
              <h3>{role} ID</h3>
              <input
                type="number"
                name="ID"
                value={formvalue.ID}
                onChange={handleChange}
                required
              />
              <h3>Password</h3>
              <input
                type="password"
                name="password"
                value={formvalue.password}
                onChange={handleChange}
                required
              />
              {error && <p style={{ color: "red", fontSize: "13px", marginTop: "6px" }}>{error}</p>}
              <button type="submit" disabled={loading}>
                {loading ? "Loading..." : "Submit"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default DLogin;
