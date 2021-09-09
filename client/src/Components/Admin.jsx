import { useEffect, useState } from "react";
import "./style/Admin.css";
import EditForm from "./EditForm";
import PublishNotice from "./PublishNotice";
const axios = require("axios");

const Admin = () => {
  const [notices, setNotices] = useState([]);
  const [classname, setClassname] = useState("hidden");
  const [publish, setPublish] = useState(false);
  // const [edit, setEdit] = useState(false);

  const style = {
    // height: "35px",
    border: "1px solid black",
    boxShadow: "2px 5px 10px #efefef",
    // listStyleType: "none",
    // marginBottom: "25px",
    padding: "0px 15px",
    marginLeft: "15px",
    borderRadius: "15px",
    // overflow: "hidden",
    cursor: "pointer",
  };
  const styleLi = {
    // height: "35px",
    border: "1px solid black",
    boxShadow: "2px 5px 10px #efefef",
    listStyleType: "none",
    marginBottom: "25px",
    padding: "0px 15px",
    borderRadius: "15px",
    // overflow: "hidden",
    // cursor: "pointer",
  };

  useEffect(() => {
    axios
      .get("/notices")
      .then((res) => setNotices(res.data))
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <h3>
        Publish Notice
        <button
          onClick={() => (publish ? setPublish(false) : setPublish(true))}
          style={style}
        >
          post
        </button>
      </h3>
      <div style={style}>{publish ? <PublishNotice /> : null}</div>
      <h3>Edit Notices</h3>
      <ul>
        {notices.map((notice) => (
          <li key={notice._id} style={styleLi}>
            {notice.title}
            <button
              onClick={() =>
                classname === "hidden"
                  ? setClassname("")
                  : setClassname("hidden")
              }
              style={style}
            >
              edit
            </button>
            <div className={classname}>
              <EditForm
                title={notice.title}
                body={notice.body}
                refno={notice.refno}
                date={notice.date}
                id={notice._id}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Admin;
