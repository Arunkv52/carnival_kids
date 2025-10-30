import express from "express";
import mysql from "mysql2";
import nodemailer from "nodemailer";
import cors from "cors";
import bodyParser from "body-parser";

const app = express();
app.use(cors());
app.use(bodyParser.json());

// ✅ MySQL Connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",      // change as per your MySQL
  password: "",
  database: "school_db"
});

db.connect((err) => {
  if (err) throw err;
  console.log("✅ MySQL Connected...");
});

// ✅ Nodemailer Transporter
const transporter = nodemailer.createTransport({
  service: "gmail", // or SMTP
  auth: {
    user: "yourgmail@gmail.com",
    pass: "your_app_password", // use App Password, not Gmail password
  },
});

// ✅ API to handle enquiry form
app.post("/api/enquiry", (req, res) => {
  const {
    parentName,
    childName,
    enquiry,
    dob,
    phone,
    altPhone,
    email,
    age,
    branch,
  } = req.body;

  // Insert into MySQL
  const sql = `INSERT INTO enquiries 
    (parentName, childName, enquiry, dob, phone, altPhone, email, age, branch) 
    VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)`;

  db.query(
    sql,
    [parentName, childName, enquiry, dob, phone, altPhone, email, age, branch],
    (err, result) => {
      if (err) {
        console.log(err);
        return res.status(500).json({ message: "Database error" });
      }

      // Send Email
      const mailOptions = {
        from: "yourgmail@gmail.com",
        to: "admin@carnivalkids.com", // Admin Email
        subject: "New Enquiry Received",
        text: `
        Parent Name: ${parentName}
        Child Name: ${childName}
        Enquiry: ${enquiry}
        DOB: ${dob}
        Phone: ${phone}
        Alternative Phone: ${altPhone}
        Email: ${email}
        Age: ${age}
        Branch: ${branch}
        `,
      };

      transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
          console.log(error);
          return res.status(500).json({ message: "Error sending email" });
        }
        res.status(200).json({ message: "Enquiry saved & email sent successfully!" });
      });
    }
  );
});

// ✅ Start Server
app.listen(5000, () => console.log("🚀 Server running on port 5000"));
