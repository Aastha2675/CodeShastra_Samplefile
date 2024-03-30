import { useState } from "react";
import "../Css/StudentForm.css";
import { IoIosCloseCircle } from "react-icons/io";

// Student form
const StudentForm = ({ onClose }) => {
  const [username, setUsername] = useState("");
  const [image, setImage] = useState("");
  const [clgname, setClgname] = useState("");
  const [education, setEducation] = useState("");
  const [linkedin, setLinkedin] = useState("");
  const [github, setGithub] = useState("");

  const submit = (e) => {
    e.preventDefault();

    console.log(
      "Name :",
      username,
      "ProfileImg :",
      image,
      "College:",
      clgname,
      "Linkedin ID",
      linkedin,
      "Github ID",
      github
    );
    onClose();
  };

  return (
    <>
      <form action="" className="form-container" onSubmit={submit}>
        <IoIosCloseCircle className="close" onClick={onClose} />
        <div className="logo">Website Name</div>
        {/* <h2>Fill out this form !!</h2> */}

        <label htmlFor="username">Name:</label>
        <input
          type="text"
          name="username"
          id="input"
          autoComplete="off"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required={true}
        />

        <label htmlFor="clgname"> College Name:</label>
        <input
          type="text"
          name="clgname"
          id="input"
          autoComplete="off"
          value={clgname}
          onChange={(e) => setClgname(e.target.value)}
          required={true}
        />

        <label htmlFor="text">Education:</label>
        <input
          type="text"
          name="education"
          id="input"
          autoComplete="off"
          value={education}
          onChange={(e) => setEducation(e.target.value)}
          required={true}
        />

        <label htmlFor="text">Linkedin ID:</label>
        <input
          type="text"
          name="linkedin"
          id="input"
          autoComplete="off"
          value={linkedin}
          onChange={(e) => setLinkedin(e.target.value)}
          required={true}
        />

        <label htmlFor="text">Github ID:</label>
        <input
          type="text"
          name="github"
          id="input"
          autoComplete="off"
          value={github}
          onChange={(e) => setGithub(e.target.value)}
          required={true}
        />

        <label htmlFor="image">Profile Image:</label>
        <input
          type="file"
          name="image"
          id="input-img"
          className="img-div"
          autoComplete="off"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required={true}
        />

        <button className="submit-btn">Submit</button>
      </form>
    </>
  );
};

export default StudentForm;
