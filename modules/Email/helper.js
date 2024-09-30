const nodemailer = require("nodemailer");
const config = require("../../config/config");

const sendMail = (mailOptions, callback) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: config.NODE_MAILER_USER,
      pass: config.NODE_MAILER_PASS,
    },
  });

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log("Error sending email:", error);
      callback(error);
    } else {
      console.log("Email sent:", info.response);
      callback(null);
    }
  });
};

module.exports = {
  sendMail,
};
