import { useState } from "react";
import "../Css/StudentForm.css";
import { IoIosCloseCircle } from "react-icons/io";

// Student form
const StudentForm = ({ onClose }) => {
  const [name, setname] = useState("");
  const [image, setImage] = useState("");
  const [description, setdescription] = useState("");
  const [file, setfile] = useState("");


  const submit = (e) => {
    e.preventDefault();

    console.log(
      "Name :",
      name,
      "ProfileImg :",
      image,
      "description:",
      description,
      "file_input:",
      file,
    );
    onClose();
  };

  return (
    <>
      <form action="" className="form-container" onSubmit={submit}>
        <IoIosCloseCircle className="close" onClick={onClose} />
        <div className="logo">Website Name</div>
        {/* <h2>Fill out this form !!</h2> */}

        <label htmlFor="name">Name:</label>
        <input
          type="text"
          name="name"
          id="input"
          autoComplete="off"
          value={name}
          onChange={(e) => setname(e.target.value)}
          required={true}
        />

        <label htmlFor="description"> Description:</label>
        <input
          type="text"
          name="description"
          id="input"
          autoComplete="off"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
          required={true}
        />

        <label htmlFor="File">File</label>
        <input
          type="file"
          name="image"
          id="input"
          className="file-div"
          autoComplete="off"
          value={file}
          onChange={(e) => setfile(e.target.value)}
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
