import React, { useState } from "react";

function UserForm() {
  // Step 1: Create state object for form fields
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    age: "",
    gender: "",
  });

  // Step 2: Handle all input changes
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value, // dynamic key update
    }));
  };

  // Step 3: Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault(); // prevent page refresh
    console.log("Form Submitted:", formData);
    alert("Check console for submitted data!");
    setFormData({ username: "",
    email: "",
    age: "",
    gender: ""})
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4">User Registration Form</h2>

      <div className="card shadow p-4">
        <form onSubmit={handleSubmit}>
          {/* Username */}
          <div className="mb-3">
            <label className="form-label">Username</label>
            <input
              type="text"
              className="form-control"
              name="username"
              value={formData.username}
              onChange={handleChange}
              placeholder="Enter username"
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter email"
            />
          </div>

          {/* Age */}
          <div className="mb-3">
            <label className="form-label">Age</label>
            <input
              type="number"
              className="form-control"
              name="age"
              value={formData.age}
              onChange={handleChange}
              placeholder="Enter age"
            />
          </div>

          {/* Gender */}
          <div className="mb-3">
            <label className="form-label">Gender</label>
            <select
              className="form-select"
              name="gender"
              value={formData.gender}
              onChange={handleChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <button className="btn btn-primary w-100">Submit</button>
        </form>
      </div>
    </div>
  );
}

export default UserForm;