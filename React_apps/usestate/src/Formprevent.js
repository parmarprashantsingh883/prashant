import React, { useState } from "react";

function Formprevent() {
  // Step 1 - Create state for form
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Step 2 - Handle input change
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Step 3 - Handle Submit
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Form Submitted:", formData);

    alert("Form submitted! Check console for output.");

    // RESET FORM
    setFormData({
      name: "",
      email: "",
      message: "",
    });
  };

  return (
    <div className="container mt-4">
      <h2 className="mb-4">Contact Form</h2>

      <form onSubmit={handleSubmit}>
        {/* NAME */}
        <div className="mb-3">
          <label className="form-label">Full Name</label>
          <input
            type="text"
            className="form-control"
            name="name"
            placeholder="Enter your full name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        {/* EMAIL */}
        <div className="mb-3">
          <label className="form-label">Email address</label>
          <input
            type="email"
            className="form-control"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        {/* MESSAGE */}
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            className="form-control"
            name="message"
            rows="4"
            placeholder="Type your message"
            value={formData.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Formprevent;
