import React, { useState } from "react";
import axios from "axios";
import "./style/AdmissionForm.css";
const AdmissionForm = () => {
  const [newStd, setNewStd] = useState({
    name: "",
    dob: "",
    pob: "",
    nationality: "nepalese",
    religion: "",
    address: "",
    pschool: "",
    fatherName: "",
    motherName: "",
    occupation: "",
    phone: "",
    email: "",
    grade: "",
  });

  const handleChange = (e) => {
    setNewStd({
      ...newStd,
      [e.target.name]: e.target.value,
    });
  };
  const submitHandler = async (e) => {
    try {
      e.preventDefault();
      await axios.post("/sendAdmissionDetail", newStd);
      setNewStd({
        name: "",
        dob: "",
        pob: "",
        nationality: "Nepalese",
        religion: "",
        address: "",
        pschool: "",
        fatherName: "",
        motherName: "",
        occupation: "",
        phone: "",
        email: "",
        grade: "",
      });
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="container_ m-auto my-5">
      <h1>Admission Form</h1>
      <div className="content">
        <div className="right-side mx-auto">
          <div className="topic-text">Fill up the form to apply!</div>
          <form onSubmit={submitHandler}>
            <div className="input-box">
              <input
                type="text"
                placeholder="Name of the pupil"
                id="name"
                name="name"
                onChange={handleChange}
                value={newStd.name}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="date"
                placeholder="Date of birth"
                id="dob"
                name="dob"
                onChange={handleChange}
                value={newStd.dob}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Place of birth"
                id="place"
                name="pob"
                onChange={handleChange}
                value={newStd.pob}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Nationality : Nepalese"
                id="nationality"
                name="nationality"
                disabled
                value="Nepalese"
                onChange={handleChange}
                value={newStd.nationality}
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Religion"
                id="religion"
                name="religion"
                onChange={handleChange}
                value={newStd.religion}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Current Address"
                id="address"
                name="address"
                onChange={handleChange}
                value={newStd.address}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Previous school (if any)"
                id="pschool"
                name="pschool"
                onChange={handleChange}
                value={newStd.pschool}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Pupil's father name"
                id="father"
                name="fatherName"
                onChange={handleChange}
                value={newStd.fatherName}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Pupil's mother name"
                id="mother"
                name="motherName"
                onChange={handleChange}
                value={newStd.motherName}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="text"
                placeholder="Pupil's father occupation"
                id="occupation"
                name="occupation"
                onChange={handleChange}
                value={newStd.occupation}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="number"
                name="phone"
                placeholder="Parent's Phone Number"
                id="phone"
                onChange={handleChange}
                value={newStd.phone}
                required
              />
            </div>
            <div className="input-box">
              <input
                type="email"
                name="email"
                placeholder="E-mail"
                id="email"
                onChange={handleChange}
                value={newStd.email}
                required
              />
            </div>
            <div className="input-box select-box">
              <select
                name="grade"
                id="grade"
                onChange={handleChange}
                value={newStd.grade}
                required
              >
                <option value="null">select grade</option>
                <option value="nursery">Nursery</option>
                <option value="lkg">L.K.G</option>
                <option value="ukg">U.K.G</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
                <option value="4">4</option>
                <option value="5">5</option>
                <option value="6">6</option>
                <option value="7">7</option>
                <option value="8">8</option>
                <option value="9">9</option>
                <option value="10">10</option>
              </select>
            </div>
            <div className="button btn">
              <button type="submit">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdmissionForm;
