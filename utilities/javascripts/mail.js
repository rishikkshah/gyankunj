const nodemailer = require("nodemailer");
require("dotenv").config();

var transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS,
  },
});

const confirmationMail = (req) => {
  var mailOptions = {
    from: "Gyankunj Academy",
    to: req.body.email,
    subject: "Application received",
    text: `Hey ${req.body.name}, Thank you for your time, we'll get back to you soon\n Till then stay safe\n Umesh Mallik\nVice Principal\nGyankunj Academy`,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
};

module.exports = { transporter, confirmationMail };
