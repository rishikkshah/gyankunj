const express = require("express");
const router = express.Router();
const {
  transporter,
  confirmationMail,
} = require("./../utilities/javascripts/mail");

router.post("/", (req, res) => {
  var mailOptions = {
    from: "Gyankunj Academy",
    to: "rishikkshah@gmail.com",
    subject: "Contact Details",
    text: `
    Name: ${req.body.name}
    Email: ${req.body.email}
    Phone: ${req.body.phone}
    Message: ${req.body.message}
    `,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
      confirmationMail(req);
    }
  });
  res.status(200).send("Data mailed successfully");
});

module.exports = router;
