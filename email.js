const nodemailer = require("nodemailer");
require("dotenv").config();

const sendMail = (email) => {
  return new Promise((resolve, reject) => {
    let transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.NODE_MAILER_USER,
        pass: process.env.NODE_MAILER_PASS,
      },
    });

    const mailOptions = {
      from: process.env.NODE_MAILER_USER,
      to: email,
      subject: "SEO Validation Completed",
      html: `🚀 SEO Validation Completed: All links passed successfully!`,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.log("Error sending email:", error);
        reject(error);
      } else {
        console.log("Email sent:", info.response);
        resolve(info);
      }
    });
  });
};

module.exports = sendMail;
