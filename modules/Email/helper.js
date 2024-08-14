const nodemailer = require("nodemailer");

const sendResetPasswordEmail = (mailOptions, callback) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false,
    auth: {
      user: "YOUR_MAIL_USER",
      pass: "YOUR_USER_PASSWORD",
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
  sendResetPasswordEmail,
};
