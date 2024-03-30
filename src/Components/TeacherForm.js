import { useState } from "react";
import "../Css/StudentForm.css";
import { IoIosCloseCircle } from "react-icons/io";
const TeacherForm = ({ onClose }) => {
    const [username, setUsername] = useState("");
    const [image, setImage] = useState("");
    const [degree, setdegree] = useState("");
    const [linkedin, setLinkedin] = useState("");
  
    const submit = (e) => {
      e.preventDefault();
  
      console.log(
        "Name :",
        username,
        "ProfileImg :",
        image,
        "Linkedin ID",
        linkedin,
        "Degree",
        degree,
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
  
          <label htmlFor="text">degree:</label>
          <input
            type="text"
            name="degree"
            id="input"
            autoComplete="off"
            value={degree}
            onChange={(e) => setdegree(e.target.value)}
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
  
  export default TeacherForm;