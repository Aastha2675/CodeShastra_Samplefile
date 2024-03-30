import { useState } from "react";
import "../Css/CourseForm.css";
import { IoIosCloseCircle } from "react-icons/io";

// Student form
const CourseForm = ({ onClose }) => {
  const [name, setname] = useState("");
  const [image, setImage] = useState("");
  const [domain, setdomain] = useState("");
  const [description, setdescription] = useState("");
dispatchEvent
  const submit = (e) => {
    e.preventDefault();

    console.log(
      "Name :",
      name,
      "ProfileImg :",
      image,
      "College:",
      domain,
      "Domain:",
      linkedin,
      "Description:",
      description
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

        <label htmlFor="domain"> Domain:</label>
        <input
          type="text"
          name="domain"
          id="input"
          autoComplete="off"
          value={domain}
          onChange={(e) => setdomain(e.target.value)}
          required={true}
        />

        <label htmlFor="text">description:</label>
        <input
          type="text"
          name="description"
          id="input"
          autoComplete="off"
          value={description}
          onChange={(e) => setdescription(e.target.value)}
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

export default CourseForm;
