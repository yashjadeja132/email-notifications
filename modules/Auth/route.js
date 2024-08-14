const express = require("express");
const jwt = require("jsonwebtoken");

const config = require("../../config/config");
var userSchema = require("../Users/model");
const { sendResetPasswordEmail } = require("../Email/helper");

const router = express.Router();

router.post("/reset_password_mail", async (req, res) => {
  try {
    const email = req.body.mail;

    const user = await userSchema.findOne({ email });

    if (!user) {
      return res
        .status(201)
        .json({ statusCode: 201, message: "User not exist!" });
    }

    const token = jwt.sign(
      {
        token: "Reset Password",
        email: email,
      },
      config.SECRET_KEY,
      { expiresIn: "1H" }
    );

    const link = `http://localhost:3000/reset-password/${token}`;
    const mailOptions = {
      from: "<noreply@ipportal.com>",
      to: email,
      subject: "Password Reset Request",
      text: `Dear User, \n\nYou have requested a password reset for your account. Please click on the following link to reset your password: [${link}]. If you didn't request this, you can safely ignore this email. \n\nBest regards, \ni&p Portal Team`,
      html: `<p>Dear User,</p><p>You have requested a password reset for your account. Please click on the following link to reset your password: <a href="${link}">Reset Password</a>. If you didn't request this, you can safely ignore this email.</p><p>Best regards,<br>i&p Portal Team</br></p>`,
    };

    sendResetPasswordEmail(mailOptions, async (error) => {
      if (error) {
        return res
          .status(201)
          .json({ statusCode: 201, message: "Failed to send email." });
      }

      res.status(200).json({
        statusCode: 200,
        message: "Email sent successfully.",
      });
    });
  } catch (error) {
    res.status(500).json({ statusCode: 500, message: error.message });
  }
});

module.exports = router;
