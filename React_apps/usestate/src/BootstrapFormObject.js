import React, { useState } from "react";

function BootstrapFormObject() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    age: "",
    subscribe: false,
    skills: []
  });

  const handleChange = (e) => {
    const { name, type, value, checked } = e.target;
    setForm(prev => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value
    }));
  };

  const addSkill = () => {
    const skill = prompt("Enter skill:");
    if (skill) setForm(prev => ({ ...prev, skills: [...prev.skills, skill] }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(form, null, 2));
  };

  const resetForm = () => {
    setForm({ name: "", email: "", age: "", subscribe: false, skills: [] });
  };

  return (
    <div className="container my-5">
      <h2 className="mb-4">Form Object Example with Bootstrap</h2>
      
      <form onSubmit={handleSubmit} className="card p-4 shadow-sm">
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={form.name}
            onChange={handleChange}
            placeholder="Enter your name"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={form.email}
            onChange={handleChange}
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Age</label>
          <input
            type="number"
            name="age"
            className="form-control"
            value={form.age}
            onChange={handleChange}
            placeholder="Enter your age"
          />
        </div>

        <div className="form-check mb-3">
          <input
            type="checkbox"
            name="subscribe"
            className="form-check-input"
            id="subscribeCheck"
            checked={form.subscribe}
            onChange={handleChange}
          />
          <label className="form-check-label" htmlFor="subscribeCheck">
            Subscribe to newsletter
          </label>
        </div>

        <div className="mb-3">
          <label className="form-label">Skills</label>
          <div>
            {form.skills.length === 0 ? (
              <span className="text-muted">No skills added</span>
            ) : (
              form.skills.map((sk, idx) => (
                <span key={idx} className="badge bg-info text-dark me-1">
                  {sk}
                </span>
              ))
            )}
          </div>
          <button type="button" className="btn btn-sm btn-outline-primary mt-2" onClick={addSkill}>
            Add Skill
          </button>
        </div>

        <div className="d-flex gap-2">
          <button type="submit" className="btn btn-success">Submit</button>
          <button type="button" className="btn btn-secondary" onClick={resetForm}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default BootstrapFormObject;
