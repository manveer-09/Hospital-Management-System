import React, { useState } from "react";
import { FaHeart } from "react-icons/fa";
import { HiMiniTrophy } from "react-icons/hi2";
import { FaHandshakeSimple } from "react-icons/fa6";
import { GiMicroscope } from "react-icons/gi";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { IoIosLock } from "react-icons/io";
import {
  MdLocalHospital,
  MdEmergency,
  MdLocalPharmacy,
  MdBiotech,
  MdAirportShuttle,
} from "react-icons/md";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaClock, FaUser, FaStickyNote, FaVenusMars, FaCalendarAlt } from "react-icons/fa";
import "./LandingPage.css";

import bannerImg from "../../img/banner.png";
import d1 from "../../img/d1.png";
import d2 from "../../img/d2.png";
import d3 from "../../img/d3.png";
import d4 from "../../img/d4.png";
import { CreateBooking } from "../../Redux/Datas/action";

/* ── static data ─────────────────────────────────────────────── */
const services = [
  {
    icon: <MdLocalHospital />,
    title: "General Check-up",
    desc: "Comprehensive health check-ups by experienced physicians.",
  },
  {
    icon: <MdEmergency />,
    title: "Emergency Care",
    desc: "24/7 emergency services with rapid response teams.",
  },
  {
    icon: <MdLocalPharmacy />,
    title: "Pharmacy",
    desc: "In-house pharmacy with all prescribed medicines available.",
  },
  {
    icon: <MdBiotech />,
    title: "Diagnostics",
    desc: "Advanced lab tests and diagnostic imaging services.",
  },
  {
    icon: <MdAirportShuttle />,
    title: "Ambulance",
    desc: "Equipped ambulances available round the clock.",
  },
];

const doctors = [
  { name: "Dr. Rahul Mehta",  specialty: "Cardiologist",   img: d1 },
  { name: "Dr. Arjun Kapoor",  specialty: "Neurologist",    img: d2 },
  { name: "Dr. Aditya Sharma",  specialty: "Paediatrician",  img: d3 },
  { name: "Dr. Ishita Arora",  specialty: "Dermatologist",  img: d4 },
];

/* ── component ───────────────────────────────────────────────── */
const LandingPage = () => {
  const dispatch = useDispatch();
  const [contactSent, setContactSent] = useState(false);

  const handleAppointmentSubmit = (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const details = Object.fromEntries(new FormData(form).entries());

    dispatch(CreateBooking({
      patientName: details.patientName,
      mobile: details.mobile,
      disease: details.disease,
      age: details.age,
      gender: details.gender,
      address: details.address,
      date: details.date,
      time: details.time,
      department: "General Check-up",
    }));

    form.reset();
    toast.success("Your appointment has been booked successfully.");
  };

  const handleContactSubmit = (event) => {
    event.preventDefault();
    event.currentTarget.reset();
    setContactSent(true);
    toast.success("Thank you. Your message has been sent.");
  };

  return (
    <div>
      <ToastContainer />
      {/* ── NAVBAR ── */}
      <nav className="lp-navbar">
        <Link to="/" className="lp-logo">
          <span className="lp-logo-icon">+</span>
          Medi<span className="red">Care</span>
        </Link>

        <ul className="lp-nav-links">
          <li><a href="#doctors">Doctors</a></li>
          <li><a href="#booking">Booking</a> </li>
          <li><a href="#about">About Us</a></li>
          <li><a href="#contact">Contact Us</a></li>
          <li><Link to="/login" className="lp-nav-btn">Login</Link>
          </li>
        </ul>
      </nav>

      {/* ── HERO ── */}
      <section className="lp-hero">
        <div className="lp-hero-left">
          <p className="lp-hero-tag">Adding Care to your Life.</p>
          <h1 className="lp-hero-title">
            Protecting and Taking Care To<br />
            Of Your Health
          </h1>
          <a href="#booking" className="lp-hero-btn">
            Book Appointment
          </a>
        </div>
        <div className="lp-hero-right">
          <img src={bannerImg} alt="Medical illustration" className="lp-hero-img" />
        </div>
      </section>

      {/* ── STATS ── */}
      <section className="lp-stats">
        <div className="lp-stat-item">
          <div className="lp-stat-number">150+</div>
          <div className="lp-stat-label">Expert Doctors</div>
        </div>
        <div className="lp-stat-item">
          <div className="lp-stat-number">20K+</div>
          <div className="lp-stat-label">Happy Patients</div>
        </div>
        <div className="lp-stat-item">
          <div className="lp-stat-number">15+</div>
          <div className="lp-stat-label">Departments</div>
        </div>
        <div className="lp-stat-item">
          <div className="lp-stat-number">24/7</div>
          <div className="lp-stat-label">Emergency Service</div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="lp-section lp-services" id="services">
        <div className="lp-section-header">
          <h2>Our Services</h2>
          <p>We provide a wide range of medical services to keep you healthy.</p>
        </div>
        <div className="lp-services-grid">
          {services.map((s, i) => (
            <div className="lp-service-card" key={i}>
              <div className="lp-service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── DOCTORS ── */}
      <section className="lp-section lp-doctors" id="doctors">
        <div className="lp-section-header">
          <h2>Meet Our Doctors</h2>
          <p>Experienced and caring professionals dedicated to your well-being.</p>
        </div>
        <div className="lp-doctors-grid">
          {doctors.map((d, i) => (
            <div className="lp-doctor-card" key={i}>
              <div className="lp-doctor-avatar-wrap">
                <img src={d.img} alt={d.name} />
              </div>
              <h3>{d.name}</h3>
              <p className="lp-doctor-specialty">{d.specialty}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── BOOKING ── */}
      <section className="lp-booking" id="booking">
        <div className="lp-section-header lp-booking-header">
          <div className="lp-booking-badge"> Online Booking</div>
          <h2>Book an Appointment</h2>
          <p>Schedule your visit with our expert doctors — quick, easy, and hassle-free.</p>
        </div>
        <div className="lp-booking-body">
          <div className="lp-booking-form-wrap">

            <div className="lp-booking-form-head">
              <div className="lp-booking-form-head-icon"></div>
              <div>
                <h3>Patient Details</h3>
                <p>Fill in your information below to confirm your slot</p>
              </div>
            </div>

            <form className="lp-booking-form" onSubmit={handleAppointmentSubmit}>

              <div className="lp-bf-wrap">
                <FaUser className="lp-bf-icon" />
                <input type="text" name="patientName" placeholder="Full Name" required />
              </div>

              <div className="lp-bf-wrap">
                <FaPhoneAlt className="lp-bf-icon" />
                <input type="tel" name="mobile" placeholder="Phone Number" required />
              </div>

              <div className="lp-bf-wrap lp-full">
                <FaStickyNote className="lp-bf-icon" />
                <input type="text" name="disease" placeholder="Disease / Complaint" required />
              </div>

              <div className="lp-bf-wrap">
                <FaUser className="lp-bf-icon" />
                <input type="number" name="age" placeholder="Age" min="0" required />
              </div>

              <div className="lp-bf-wrap">
                <FaVenusMars className="lp-bf-icon" />
                <select name="gender" defaultValue="" required>
                  <option value="" disabled>Select Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="lp-bf-wrap lp-full">
                <FaMapMarkerAlt className="lp-bf-icon" />
                <input type="text" name="address" placeholder="Address" required />
              </div>

              <div className="lp-bf-wrap">
                <FaCalendarAlt className="lp-bf-icon" />
                <input type="date" name="date" required />
              </div>

              <div className="lp-bf-wrap">
                <FaClock className="lp-bf-icon" />
                <input type="time" name="time" required />
              </div>

              <button type="submit" className="lp-booking-btn">
                🗓&nbsp; Confirm Appointment
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* ── CORE VALUES ── */}
      <section className="lp-section lp-corevalues" id="values">
        <div className="lp-section-header">
          <h2>Our Core Values</h2>
        </div>
        <div className="lp-corevalues-grid ">
          <div className="lp-corevalue-card">
            <span className="lp-cv-icon"><FaHeart /></span>
            <h3>Compassion</h3>
            <p>We treat every patient with empathy, kindness, and respect.</p>
          </div>
          <div className="lp-corevalue-card">
            <span className="lp-cv-icon"><HiMiniTrophy /></span>
            <h3>Excellence</h3>
            <p>We uphold the highest standards of medical care and safety.</p>
          </div>
          <div className="lp-corevalue-card">
            <span className="lp-cv-icon"><FaHandshakeSimple /></span>
            <h3>Integrity</h3>
            <p>Transparent, honest communication with patients and families.</p>
          </div>
          <div className="lp-corevalue-card">
            <span className="lp-cv-icon"><GiMicroscope /></span>
            <h3>Innovation</h3>
            <p>Adopting the latest medical technologies for better outcomes.</p>
          </div>
          <div className="lp-corevalue-card">
            <span className="lp-cv-icon"><IoIosLock /></span>
            <h3>Privacy</h3>
            <p>Patient data and confidentiality are always protected.</p>
          </div>
        </div>
      </section>

      {/* ── CONTACT US ── */}
      <section className="lp-section lp-contact" id="contact">
        <div className="lp-section-header">
          <h2>Contact Us</h2>
          <p>We're here to help. Reach out to us anytime.</p>
        </div>
        <div className="lp-contact-body">

          {/* info cards */}
          <div className="lp-contact-info">
            <div className="lp-contact-card">
              <span className="lp-contact-icon"><FaMapMarkerAlt /></span>
              <div>
                <h4>Our Location</h4>
                <p>12 Medicare Lane,</p>
                <p>New Delhi — 110001</p>
              </div>
            </div>
            <div className="lp-contact-card">
              <span className="lp-contact-icon"><FaPhoneAlt /></span>
              <div>
                <h4>Phone</h4>
                <p>+91 98765 43210</p>
                <p>+91 91234 56789</p>
              </div>
            </div>
            <div className="lp-contact-card">
              <span className="lp-contact-icon"><FaEnvelope /></span>
              <div>
                <h4>Email</h4>
                <p>info@medicare.com</p>
                <p>support@medicare.com</p>
              </div>
            </div>
            <div className="lp-contact-card">
              <span className="lp-contact-icon"><FaClock /></span>
              <div>
                <h4>Working Hours</h4>
                <p>Mon – Sat: 8 AM – 8 PM</p>
                <p>Emergency: 24/7</p>
              </div>
            </div>
          </div>

          {/* send a message form */}
          <div className="lp-contact-form-wrap">
            <h3 className="lp-contact-form-title">Send a Message</h3>
            <p className="lp-contact-form-sub">Our team will get back to you within 24 hours.</p>
            <form className="lp-contact-form" onSubmit={handleContactSubmit}>
              <input type="text" name="name" placeholder="Your Name" required />
              <input type="email" name="email" placeholder="Email Address" required />
              <input type="text" name="subject" placeholder="Subject" required />
              <textarea name="message" rows="5" placeholder="Write your message here..." required></textarea>
              <button type="submit" className="lp-contact-btn">Send Message</button>
              {contactSent && <p role="status">Your message has been sent. We will get back to you shortly.</p>}
            </form>
          </div>

        </div>
      </section>

      {/* ── ABOUT ── */}
      <section className="lp-about" id="about">
        <div className="lp-about-left">
          <h2>About Medicare</h2>
          <p className="lp-about-tag">Adding Care to your Life.</p>
          <p>
            Medicare is a leading multi-speciality hospital committed to delivering
            world-class healthcare with compassion. Since our founding, we have served
            thousands of patients across the region, combining cutting-edge medical
            technology with a deeply human approach to healing.
          </p>
          <p>
            Our mission is to provide patient-centred, evidence-based healthcare that
            improves quality of life. Every individual deserves access to safe,
            effective, and compassionate medical care.
          </p>
        </div>
        <div className="lp-about-right">
          <div className="lp-about-stat-card">
            <span className="num">25+</span>
            <span className="label">Years of Trusted Care</span>
          </div>
          <div className="lp-about-stat-card">
            <span className="num">150+</span>
            <span className="label">Expert Doctors</span>
          </div>
          <div className="lp-about-stat-card">
            <span className="num">20K+</span>
            <span className="label">Happy Patients</span>
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="lp-footer" id="contact">
        <div className="lp-footer-top">
          <div className="lp-footer-brand">
            <Link to="/" className="lp-logo">
              <span className="lp-logo-icon">+</span>
              Medi<span className="red">Care</span>
            </Link>
            <p>
              Delivering world-class healthcare with compassion. Your health is our
              highest priority, every single day.
            </p>
          </div>

          <div className="lp-footer-col">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#services">Our Services</a></li>
              <li><a href="#doctors">Our Doctors</a></li>
              <li><a href="#booking">Book Appointment</a></li>
              <li><a href="#about">About Us</a></li>
            </ul>
          </div>

          <div className="lp-footer-col">
            <h4>Departments</h4>
            <ul>
              <li><a href="#services">Cardiology</a></li>
              <li><a href="#services">Neurology</a></li>
              <li><a href="#services">Paediatrics</a></li>
              <li><a href="#services">Dermatology</a></li>
            </ul>
          </div>

          <div className="lp-footer-col">
            <h4>Contact Us</h4>
            <ul>
              <li>
                <a href="tel:+911234567890">
                  <FaPhoneAlt style={{ marginRight: 6 }} />
                  +91 12345 67890
                </a>
              </li>
              <li>
                <a href="mailto:info@medicare.com">
                  <FaEnvelope style={{ marginRight: 6 }} />
                  info@medicare.com
                </a>
              </li>
              <li>
                <a href="#contact">
                  <FaMapMarkerAlt style={{ marginRight: 6 }} />
                  123 Health Street, Delhi
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="lp-footer-bottom">
          <p>© {new Date().getFullYear()} MediCare. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
