const express = require("express");

const { sendMail } = require("../Email/helper");

const router = express.Router();

router.get("/send_welcome_mail/:mail", async (req, res) => {
  try {
    const email = req.params.mail;

    const mailOptions = {
      from: "<noreply@techfusionforge.com>",
      to: email,
      subject: "Welcome to TechFusionForge",
      html: `<p>Dear User,</p><p>This is a test mail from TechFusionForge. Please click on the following link to join with us: <a href="https://github.com/yashjadeja132/">TechFusionForge</a>.</p><br /><p>Best regards,<br>send_welcome_mail Team</br></p>`,
    };

    sendMail(mailOptions, async (error) => {
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
