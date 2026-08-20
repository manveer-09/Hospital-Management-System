// ─── NURSES ──────────────────────────────────────────────────────────────────
// Login: ID = 100, password = pass@123  (type: Nurse)
export const nursesDB = [
  {
    _id: "nurse_001",
    nurseID: 100,
    nurseName: "Priya Sharma",
    age: 28,
    mobile: "9876543210",
    email: "priya.nurse@hospital.com",
    gender: "Female",
    DOB: "1996-04-15",
    address: "12 MG Road, Delhi",
    education: "B.Sc Nursing",
    department: "Cardiology",
    bloodGroup: "B+",
    password: "pass@123",
    details: "Senior Nurse",
    userType: "nurse",
    image: null,
  },
  {
    _id: "nurse_002",
    nurseID: 101,
    nurseName: "Sunita Verma",
    age: 32,
    mobile: "9123456789",
    email: "sunita.nurse@hospital.com",
    gender: "Female",
    DOB: "1992-08-20",
    address: "45 Park Street, Mumbai",
    education: "GNM",
    department: "Neurology",
    bloodGroup: "O+",
    password: "pass@123",
    details: "ICU Nurse",
    userType: "nurse",
    image: null,
  },
];

// ─── DOCTORS ─────────────────────────────────────────────────────────────────
// Login: ID = 100, password = pass@123  (type: Doctor)
export const doctorsDB = [
  {
    _id: "doc_001",
    docID: 100,
    docName: "Dr. Rajendra Patel",
    age: 45,
    mobile: "9988776655",
    email: "rajendra.doc@hospital.com",
    gender: "Male",
    DOB: "1979-03-10",
    address: "78 Nehru Nagar, Pune",
    education: "MBBS, MD",
    department: "Cardiology",
    bloodGroup: "A+",
    password: "pass@123",
    details: "Senior Cardiologist",
    userType: "doctor",
    image: null,
  },
  {
    _id: "doc_002",
    docID: 101,
    docName: "Dr. Piyush Agrawal",
    age: 38,
    mobile: "9001122334",
    email: "piyush.doc@hospital.com",
    gender: "Male",
    DOB: "1986-11-25",
    address: "23 Civil Lines, Jaipur",
    education: "MBBS, MS",
    department: "Neurology",
    bloodGroup: "B+",
    password: "pass@123",
    details: "Neurologist",
    userType: "doctor",
    image: null,
  },
];

// ─── ADMINS ───────────────────────────────────────────────────────────────────
// Login: ID = 100, password = pass@123  (type: Admin)
export const adminsDB = [
  {
    _id: "admin_001",
    adminID: 100,
    adminName: "Nitesh Admin",
    age: 35,
    mobile: "9876500000",
    email: "nitesh.admin@hospital.com",
    gender: "Male",
    DOB: "1989-06-01",
    address: "1 Admin Block, Delhi",
    education: "MBA",
    password: "pass@123",
    userType: "admin",
    image: null,
  },
  {
    _id: "admin_002",
    adminID: 101,
    adminName: "Ravi Admin",
    age: 40,
    mobile: "9000011111",
    email: "ravi.admin@hospital.com",
    gender: "Male",
    DOB: "1984-01-15",
    address: "2 Admin Block, Mumbai",
    education: "BBA",
    password: "pass@123",
    userType: "admin",
    image: null,
  },
];

// ─── BEDS ─────────────────────────────────────────────────────────────────────
export const bedsDB = [
  { _id: "bed_001", bedNumber: 1, roomNumber: 101, occupied: "available", patientID: null },
  { _id: "bed_002", bedNumber: 2, roomNumber: 101, occupied: "occupied", patientID: { patientName: "Ramesh Kumar", disease: "Fever", docID: { docName: "Dr. Rajendra Patel" } } },
  { _id: "bed_003", bedNumber: 3, roomNumber: 102, occupied: "available", patientID: null },
  { _id: "bed_004", bedNumber: 4, roomNumber: 102, occupied: "occupied", patientID: { patientName: "Sita Devi", disease: "Diabetes", docID: { docName: "Dr. Piyush Agrawal" } } },
  { _id: "bed_005", bedNumber: 5, roomNumber: 103, occupied: "available", patientID: null },
];

// ─── PATIENTS ─────────────────────────────────────────────────────────────────
export const patientsDB = [
  { _id: "pat_001", patientName: "Ramesh Kumar", age: 45, disease: "Fever", bloodGroup: "O+", department: "Cardiology", email: "ramesh@mail.com", mobile: "9111111111", gender: "Male", address: "Delhi", date: "2024-01-10", DOB: "1979-05-20", password: "pass123", nurseID: "nurse_001", docID: "doc_001", details: "Admitted" },
  { _id: "pat_002", patientName: "Sita Devi", age: 55, disease: "Diabetes", bloodGroup: "A+", department: "Neurology", email: "sita@mail.com", mobile: "9222222222", gender: "Female", address: "Mumbai", date: "2024-01-12", DOB: "1969-03-15", password: "pass123", nurseID: "nurse_001", docID: "doc_002", details: "Under observation" },
  { _id: "pat_003", patientName: "Mohan Lal", age: 30, disease: "Fracture", bloodGroup: "B-", department: "ENT", email: "mohan@mail.com", mobile: "9333333333", gender: "Male", address: "Pune", date: "2024-01-15", DOB: "1994-07-08", password: "pass123", nurseID: "nurse_002", docID: "doc_001", details: "Surgery done" },
];

// ─── APPOINTMENTS ─────────────────────────────────────────────────────────────
export const appointmentsDB = [
  { _id: "appt_001", patientName: "Anil Gupta", age: 40, gender: "Male", mobile: "9444444444", email: "anil@mail.com", disease: "Headache", address: "Delhi", department: "Neurology", date: "2024-02-01", time: "10:00" },
  { _id: "appt_002", patientName: "Kavita Singh", age: 28, gender: "Female", mobile: "9555555555", email: "kavita@mail.com", disease: "Chest Pain", address: "Mumbai", department: "Cardiology", date: "2024-02-03", time: "11:30" },
  { _id: "appt_003", patientName: "Suresh Yadav", age: 50, gender: "Male", mobile: "9666666666", email: "suresh@mail.com", disease: "Back Pain", address: "Jaipur", department: "Dermatologist", date: "2024-02-05", time: "09:00" },
];

// ─── REPORTS ──────────────────────────────────────────────────────────────────
export const reportsDB = [
  { _id: "rep_001", patientName: "Ramesh Kumar", docDepartment: "Cardiology", docName: "Dr. Rajendra Patel", patientMobile: "9111111111", patientAge: 45, date: "2024-01-11", medicines: [{ medName: "Aspirin", dosage: "1", duration: "After Meal" }] },
  { _id: "rep_002", patientName: "Sita Devi", docDepartment: "Neurology", docName: "Dr. Piyush Agrawal", patientMobile: "9222222222", patientAge: 55, date: "2024-01-13", medicines: [{ medName: "Metformin", dosage: "2", duration: "Before Meal" }] },
];

// ─── AMBULANCES ───────────────────────────────────────────────────────────────
export const ambulancesDB = [
  { _id: "ambu_001", type: "Mobile ICU Ambulance", charges: 500, ambulanceID: 1001, ambulanceDriver: "Raju Sharma", number: "9777777777" },
  { _id: "ambu_002", type: "Basic Life Support Ambulance", charges: 300, ambulanceID: 1002, ambulanceDriver: "Sunil Kumar", number: "9888888888" },
];

// ─── DASHBOARD OVERVIEW ───────────────────────────────────────────────────────
export const dashboardData = {
  doctor: doctorsDB.length,
  nurse: nursesDB.length,
  patient: patientsDB.length,
  admin: adminsDB.length,
  bed: bedsDB.length,
  ambulance: ambulancesDB.length,
  appointment: appointmentsDB.length,
  report: reportsDB.length,
};
