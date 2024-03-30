import React, { useState, useEffect } from "react";

function DynamicForm() {
  const [formData, setFormData] = useState({
    // Initialize form data state
    // Example initial state
    firstName: "",
    lastName: "",
    email: "",
    // Add more fields as needed
  });

  const [labels, setLabels] = useState({
    // Initialize labels state
    // Example initial state
    firstName: "First Name",
    lastName: "Last Name",
    email: "Email",
    // Add more labels as needed
  });

  useEffect(() => {
    // Fetch labels from the backend
    fetchLabelsFromBackend().then((fetchedLabels) => {
      setLabels(fetchedLabels);
    });
  }, []);

  const handleChange = (e) => {
    // Update form data state when input values change
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic
    console.log(formData);
  };

  return (
    <div>
      <h2>Dynamic Form</h2>
      <form onSubmit={handleSubmit}>
        {/* Map over form fields and render dynamically */}
        {Object.keys(formData).map((fieldName) => (
          <div key={fieldName}>
            {/* Render label dynamically from labels state */}
            <label htmlFor={fieldName}>{labels[fieldName]}</label>
            <input
              type="text"
              id={fieldName}
              name={fieldName}
              value={formData[fieldName]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

// Function to fetch labels from the backend (replace with your actual backend fetching logic)
async function fetchLabelsFromBackend() {
  // Example: Fetch labels from an API endpoint
  const response = await fetch("your-backend-url/labels");
  const data = await response.json();
  return data.labels;
}

export default DynamicForm;
