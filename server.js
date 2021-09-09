var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");

var notices = require("./routes/notice");
var sendAdmissionDetail = require("./routes/admissionMail");
var sendContactDetail = require("./routes/contactMail");
var showNotice = require("./routes/showNotice");
var updateNotice = require("./routes/updateNotice");
var postNotice = require("./routes/postNotice");

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "client", "build")));

app.use("/notices", notices);
app.use("/sendAdmissionDetail", sendAdmissionDetail);
app.use("/sendContactDetail", sendContactDetail);
app.use("/showNotice", showNotice);
app.use("/updateNotice", updateNotice);
app.use("/postNotice", postNotice);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "client", "build", "index.html"));
});
//listening app
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log("Listening successful at port no " + PORT);
});
