import * as functions from "firebase-functions";
import * as admin from "firebase-admin";
import nodemailer from "nodemailer";

admin.initializeApp();

// 📧 Email transporter
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "your-email@gmail.com",
    pass: "your-app-password", // Gmail App Password
  },
});

export const onNewQuery = functions.firestore
  .document("queries/{docId}")
  .onCreate(async (snap) => {
    const data = snap.data();

    const mailOptions = {
      from: "Ganga Prasadam <your-email@gmail.com>",
      to: "admin@gmail.com",
      subject: "New Ganga Prasadam Query",
      html: `
        <h3>New Query Received</h3>
        <p><strong>Name:</strong> ${data.fullName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Contact:</strong> ${data.contact}</p>
        <p><strong>Location:</strong> ${data.location}</p>
        <p><strong>Date:</strong> ${data.date}</p>
        <p><strong>Services:</strong> ${data.services.join(", ")}</p>
        <p><strong>Message:</strong> ${data.message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
  });
