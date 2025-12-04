// AdminPanel.jsx
import React, { useState, useMemo } from "react";

export default function AdminPanel() {
  // Initial Data
  const initialEmployees = [
    {
      id: 1,
      name: "John Doe",
      salary: 55000,
      department: "Engineering",
      active: true,
      skills: ["React", "Node"],
    },
    {
      id: 2,
      name: "Priya Singh",
      salary: 42000,
      department: "HR",
      active: true,
      skills: ["Recruitment"],
    },
    {
      id: 3,
      name: "Amit Patel",
      salary: 30000,
      department: "Support",
      active: false,
      skills: ["Communication"],
    },
  ];

  const [employees, setEmployees] = useState(initialEmployees);

  const [form, setForm] = useState({
    name: "",
    salary: "",
    department: "Engineering",
    active: true,
  });

  const [search, setSearch] = useState("");
  const [departmentFilter, setDepartmentFilter] = useState("All");
  const [sortBySalaryDesc, setSortBySalaryDesc] = useState(true);

  const [editId, setEditId] = useState(null);
  const [editForm, setEditForm] = useState({
    name: "",
    salary: "",
    department: "",
    active: true,
  });

  const departments = ["All", "Engineering", "HR", "Support", "Sales", "Finance"];

  // Reset form
  const resetForm = () =>
    setForm({
      name: "",
      salary: "",
      department: "Engineering",
      active: true,
    });

  // Generate new ID
  const nextId = () => Math.max(0, ...employees.map((e) => e.id)) + 1;

  // Add Employee
  const addEmployee = () => {
    if (!form.name.trim()) {
      alert("Please enter name");
      return;
    }

    const newEmployee = {
      id: nextId(),
      name: form.name.trim(),
      salary: Number(form.salary) || 0,
      department: form.department,
      active: form.active,
      skills: [],
    };

    setEmployees((prev) => [...prev, newEmployee]);
    resetForm();
  };

  // Delete
  const deleteEmployee = (id) => {
    if (!window.confirm("Delete this employee?")) return;

    setEmployees((prev) => prev.filter((e) => e.id !== id));
    if (editId === id) cancelEdit();
  };

  // Fixed Toggle Active (only one function now)
  const toggleActive = (id) => {
    setEmployees((prev) =>
      prev.map((e) => (e.id === id ? { ...e, active: !e.active } : e))
    );
  };

  // Start Editing
  const startEdit = (emp) => {
    setEditId(emp.id);
    setEditForm({
      name: emp.name,
      salary: String(emp.salary),
      department: emp.department,
      active: emp.active,
    });
  };

  // Save Edit
  const saveEdit = (id) => {
    if (!editForm.name.trim()) {
      alert("Name required");
      return;
    }

    setEmployees((prev) =>
      prev.map((e) =>
        e.id === id
          ? {
              ...e,
              name: editForm.name.trim(),
              salary: Number(editForm.salary) || 0,
              department: editForm.department,
              active: editForm.active,
            }
          : e
      )
    );

    setEditId(null);
  };

  // Cancel edit
  const cancelEdit = () => {
    setEditId(null);
    setEditForm({
      name: "",
      salary: "",
      department: "",
      active: true,
    });
  };

  // Add skill
  const addSkill = (id) => {
    const skill = prompt("Enter skill:");
    if (!skill) return;

    setEmployees((prev) =>
      prev.map((e) =>
        e.id === id ? { ...e, skills: [...e.skills, skill.trim()] } : e
      )
    );
  };

  const removeSkill = (id) => {
    const emp = employees.find((e) => e.id === id);
    if (!emp || emp.skills.length === 0) {
      alert("No skills to remove");
      return;
    }

    const skill = prompt(`Skills: ${emp.skills.join(", ")}\nEnter skill to remove:`);
    if (!skill) return;

    setEmployees((prev) =>
      prev.map((e) =>
        e.id === id
          ? { ...e, skills: e.skills.filter((s) => s !== skill) }
          : e
      )
    );
  };

  const updateSkill = (id) => {
    const emp = employees.find((e) => e.id === id);
    if (!emp || emp.skills.length === 0) {
      alert("No skills to update");
      return;
    }

    const oldSkill = prompt(`Skills: ${emp.skills.join(", ")}\nEnter skill to replace:`);
    if (!oldSkill) return;

    const newSkill = prompt("Enter new skill:");
    if (!newSkill) return;

    setEmployees((prev) =>
      prev.map((e) =>
        e.id === id
          ? { ...e, skills: e.skills.map((s) => (s === oldSkill ? newSkill : s)) }
          : e
      )
    );
  };

  // Salary sorting
  const sortBySalary = () => {
    setEmployees((prev) =>
      [...prev].sort((a, b) =>
        sortBySalaryDesc ? b.salary - a.salary : a.salary - b.salary
      )
    );
    setSortBySalaryDesc((p) => !p);
  };

  const bulkUpdateSalaryPercent = (percent) => {
    if (!window.confirm(`Apply ${percent}% to all salaries?`)) return;

    setEmployees((prev) =>
      prev.map((e) => ({
        ...e,
        salary: Math.round(e.salary + (e.salary * percent) / 100),
      }))
    );
  };

  const removeInactive = () => {
    if (!window.confirm("Remove all inactive?")) return;
    setEmployees((prev) => prev.filter((e) => e.active));
  };

  const resetAll = (initial = false) => {
    if (!window.confirm("Reset employees?")) return;
    setEmployees(initial ? initialEmployees : []);
  };

  // Single salary update
  const updateSingleSalaryPrompt = (id) => {
    const emp = employees.find((e) => e.id === id);
    if (!emp) return;

    const value = prompt(
      `Set salary for ${emp.name} (current ${emp.salary})`,
      String(emp.salary)
    );

    if (value === null) return;
    const num = Number(value);
    if (isNaN(num)) return alert("Invalid number");

    setEmployees((prev) =>
      prev.map((e) => (e.id === id ? { ...e, salary: num } : e))
    );
  };

  // Filtered and sorted data
  const filteredEmployees = useMemo(() => {
    const lower = search.toLowerCase();
    let data = employees;

    if (search.trim()) {
      data = data.filter((e) => e.name.toLowerCase().includes(lower));
    }

    if (departmentFilter !== "All") {
      data = data.filter((e) => e.department === departmentFilter);
    }

    return [...data].sort((a, b) =>
      sortBySalaryDesc ? b.salary - a.salary : a.salary - b.salary
    );
  }, [employees, search, departmentFilter, sortBySalaryDesc]);

  // Counts
  const counts = useMemo(() => {
    const total = employees.length;
    const active = employees.filter((e) => e.active).length;
    const inactive = total - active;

    const byDept = employees.reduce((acc, e) => {
      acc[e.department] = (acc[e.department] || 0) + 1;
      return acc;
    }, {});

    return { total, active, inactive, byDept };
  }, [employees]);

  const deptBadge = (dept) => (
    <span className="badge bg-secondary">{dept}</span>
  );

  // Render UI
  return (
    <div className="container my-5">

      <h2 className="mb-4">Admin Panel — Employee Manager</h2>

      {/* ADD + FILTER SECTION */}
      <div className="row g-3 align-items-end">
        {/* Add */}
        <div className="col-md-4">
          <div className="card p-3 shadow-sm">
            <h5 className="mb-3">Add Employee</h5>

            <label className="form-label">Name</label>
            <input
              className="form-control mb-2"
              value={form.name}
              onChange={(e) => setForm((p) => ({ ...p, name: e.target.value }))}
            />

            <label className="form-label">Salary</label>
            <input
              className="form-control mb-2"
              value={form.salary}
              onChange={(e) => setForm((p) => ({ ...p, salary: e.target.value }))}
            />

            <label className="form-label">Department</label>
            <select
              className="form-select mb-2"
              value={form.department}
              onChange={(e) =>
                setForm((p) => ({ ...p, department: e.target.value }))
              }
            >
              {departments.slice(1).map((d) => (
                <option key={d}>{d}</option>
              ))}
            </select>

            <div className="form-check form-switch mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                checked={form.active}
                onChange={(e) => setForm((p) => ({ ...p, active: e.target.checked }))}
              />
              <label className="form-check-label">Active</label>
            </div>

            <button className="btn btn-primary w-100" onClick={addEmployee}>
              Add Employee
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="col-md-8">
          <div className="card p-3 shadow-sm">
            <div className="d-flex gap-2 flex-wrap">

              <input
                className="form-control"
                placeholder="Search name..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />

              <select
                className="form-select"
                value={departmentFilter}
                style={{ maxWidth: 200 }}
                onChange={(e) => setDepartmentFilter(e.target.value)}
              >
                {departments.map((d) => (
                  <option key={d}>{d}</option>
                ))}
              </select>

              <button className="btn btn-outline-secondary" onClick={sortBySalary}>
                Sort Salary {sortBySalaryDesc ? "(desc)" : "(asc)"}
              </button>

              <div className="btn-group ms-auto">
                <button
                  className="btn btn-outline-success"
                  onClick={() => bulkUpdateSalaryPercent(10)}
                >
                  +10%
                </button>

                <button
                  className="btn btn-outline-danger"
                  onClick={() => bulkUpdateSalaryPercent(-10)}
                >
                  -10%
                </button>

                <button
                  className="btn btn-outline-warning"
                  onClick={removeInactive}
                >
                  Remove Inactive
                </button>

                <button
                  className="btn btn-outline-danger"
                  onClick={() => resetAll(false)}
                >
                  Reset (Empty)
                </button>

                <button
                  className="btn btn-outline-primary"
                  onClick={() => resetAll(true)}
                >
                  Reset (Initial)
                </button>
              </div>
            </div>

            <div className="mt-3 d-flex gap-3 flex-wrap">
              <div>Total: <strong>{counts.total}</strong></div>
              <div className="text-success">Active: <strong>{counts.active}</strong></div>
              <div className="text-danger">Inactive: <strong>{counts.inactive}</strong></div>

              <div>
                By Dept:{" "}
                {Object.keys(counts.byDept).length === 0
                  ? "none"
                  : Object.entries(counts.byDept).map(([dept, count]) => (
                      <span key={dept} className="badge bg-info text-dark me-1">
                        {dept}: {count}
                      </span>
                    ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Employee List */}
      <div className="mt-4">
        {filteredEmployees.length === 0 ? (
          <div className="alert alert-secondary">No employees found.</div>
        ) : (
          filteredEmployees.map((emp) => (
            <div key={emp.id} className="card mb-3 shadow-sm">
              <div className="card-body d-flex gap-3">

                {/* Left */}
                <div style={{ minWidth: 220 }}>
                  <h5 className="mb-1">
                    {editId === emp.id ? (
                      <input
                        className="form-control"
                        value={editForm.name}
                        onChange={(e) =>
                          setEditForm((p) => ({ ...p, name: e.target.value }))
                        }
                      />
                    ) : (
                      emp.name
                    )}
                  </h5>

                  <p className="mb-1">
                    Dept: <strong>{emp.department}</strong>{" "}
                    {deptBadge(emp.department)}
                  </p>

                  <p className="mb-1">
                    Salary: <strong>₹{emp.salary.toLocaleString()}</strong>
                  </p>

                  <p className="mb-1">
                    Status:{" "}
                    <span className={emp.active ? "text-success" : "text-danger"}>
                      {emp.active ? "Active" : "Inactive"}
                    </span>
                  </p>
                </div>

                {/* Right */}
                <div className="flex-grow-1">
                  <div className="d-flex flex-wrap gap-2 mb-2">
                    {editId === emp.id ? (
                      <>
                        <input
                          className="form-control"
                          style={{ maxWidth: 140 }}
                          value={editForm.salary}
                          onChange={(e) =>
                            setEditForm((p) => ({ ...p, salary: e.target.value }))
                          }
                        />

                        <select
                          className="form-select"
                          style={{ maxWidth: 150 }}
                          value={editForm.department}
                          onChange={(e) =>
                            setEditForm((p) => ({ ...p, department: e.target.value }))
                          }
                        >
                          {departments.slice(1).map((d) => (
                            <option key={d}>{d}</option>
                          ))}
                        </select>

                        <div className="form-check form-switch">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            checked={editForm.active}
                            onChange={(e) =>
                              setEditForm((p) => ({ ...p, active: e.target.checked }))
                            }
                          />
                        </div>

                        <button className="btn btn-success" onClick={() => saveEdit(emp.id)}>
                          Save
                        </button>

                        <button className="btn btn-secondary" onClick={cancelEdit}>
                          Cancel
                        </button>
                      </>
                    ) : (
                      <>
                        <button className="btn btn-outline-primary" onClick={() => startEdit(emp)}>
                          Edit
                        </button>

                        <button className="btn btn-outline-danger" onClick={() => deleteEmployee(emp.id)}>
                          Delete
                        </button>

                        <button className="btn btn-outline-secondary" onClick={() => toggleActive(emp.id)}>
                          {emp.active ? "Deactivate" : "Activate"}
                        </button>

                        <button className="btn btn-outline-info" onClick={() => updateSingleSalaryPrompt(emp.id)}>
                          Set Salary
                        </button>

                        <button className="btn btn-outline-success" onClick={() => addSkill(emp.id)}>
                          Add Skill
                        </button>

                        <button className="btn btn-outline-warning" onClick={() => removeSkill(emp.id)}>
                          Remove Skill
                        </button>

                        <button className="btn btn-outline-dark" onClick={() => updateSkill(emp.id)}>
                          Update Skill
                        </button>
                      </>
                    )}
                  </div>

                  <div>
                    <strong>Skills: </strong>
                    {emp.skills.length === 0 ? (
                      <span className="text-muted">No skills</span>
                    ) : (
                      emp.skills.map((s, i) => (
                        <span key={i} className="badge bg-light text-dark me-1">
                          {s}
                        </span>
                      ))
                    )}
                  </div>
                </div>

              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
