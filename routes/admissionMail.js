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
    subject: "Admission Form",
    text: `
    Name of Student: ${req.body.name}
    Date of Birth: ${req.body.dob}
    Place of Birth: ${req.body.pob}
    Nationality: ${req.body.nationality}
    Religion: ${req.body.religion}
    Address: ${req.body.address}
    Previous School: ${req.body.pschool}
    Father's Name: ${req.body.fatherName}
    Mother's Name: ${req.body.motherName}
    Father's Occupation: ${req.body.occupation}
    Phone Number: ${req.body.phone}
    Email: ${req.body.email}
    Grade: ${req.body.grade}
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
