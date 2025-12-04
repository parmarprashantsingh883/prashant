import React, { useState } from "react";

function StudentManager() {
  const [students, setStudents] = useState([
    { id: 1, name: "Rahul", marks: 85, passed: true, skills: ["JS"] },
    { id: 2, name: "Sneha", marks: 40, passed: false, skills: ["HTML"] },
  ]);

  const [inputName, setInputName] = useState("");
  const [inputMarks, setInputMarks] = useState("");
  const [search, setSearch] = useState("");

  const addStudent = () => {
    if (!inputName || !inputMarks) return;

    const newStudent = {
      id: Date.now(),
      name: inputName,
      marks: Number(inputMarks),
      passed: Number(inputMarks) >= 40,
      skills: [],
    };

    setStudents([...students, newStudent]);
    setInputName("");
    setInputMarks("");
  };

  const deleteStudent = (id) => {
    setStudents(students.filter((s) => s.id !== id));
  };

  const updateMarks = (id, newMarks) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, marks: newMarks, passed: newMarks >= 40 } : s
      )
    );
  };

  const toggleStatus = (id) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, passed: !s.passed } : s
      )
    );
  };

  const searchedStudents = students.filter((s) =>
    s.name.toLowerCase().includes(search.toLowerCase())
  );

  const sortByMarks = () => {
    setStudents([...students].sort((a, b) => b.marks - a.marks));
  };

  const renameStudent = (id, newName) => {
    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, name: newName } : s
      )
    );
  };

  const addBonusMarks = () => {
    setStudents(
      students.map((s) => ({
        ...s,
        marks: s.marks + 5,
        passed: s.marks + 5 >= 40,
      }))
    );
  };

  const removeFailed = () => {
    setStudents(students.filter((s) => s.passed));
  };

  const resetAll = () => {
    setStudents([]);
  };

  const addSkill = (id, skill) => {
    if (!skill) return;

    setStudents(
      students.map((s) =>
        s.id === id ? { ...s, skills: [...s.skills, skill] } : s
      )
    );
  };

  const removeSkill = (id, skill) => {
    setStudents(
      students.map((s) =>
        s.id === id
          ? { ...s, skills: s.skills.filter((sk) => sk !== skill) }
          : s
      )
    );
  };

  const updateSkill = (id, oldSkill, newSkill) => {
    setStudents(
      students.map((s) =>
        s.id === id
          ? {
              ...s,
              skills: s.skills.map((sk) =>
                sk === oldSkill ? newSkill : sk
              ),
            }
          : s
      )
    );
  };

  const total = students.length;
  const passedCount = students.filter((s) => s.passed).length;
  const failedCount = total - passedCount;

  return (
    <div className="container my-5">

      <h1 className="text-center mb-4">🎓 Student Manager</h1>

      {/* Add Student */}
      <div className="card p-3 mb-4 shadow-sm">
        <h4>Add New Student</h4>

        <div className="row g-3 mt-2">
          <div className="col-md-4">
            <input
              className="form-control"
              placeholder="Name"
              value={inputName}
              onChange={(e) => setInputName(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <input
              className="form-control"
              placeholder="Marks"
              value={inputMarks}
              onChange={(e) => setInputMarks(e.target.value)}
            />
          </div>

          <div className="col-md-4">
            <button className="btn btn-primary w-100" onClick={addStudent}>
              Add Student
            </button>
          </div>
        </div>
      </div>

      {/* Search */}
      <div className="card p-3 mb-4 shadow-sm">
        <h4>Search</h4>
        <input
          className="form-control mt-2"
          placeholder="Search student..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <h5 className="mt-3">
          Total: {total} | Passed: {passedCount} | Failed: {failedCount}
        </h5>

        <div className="mt-3 d-flex gap-2 flex-wrap">
          <button className="btn btn-dark" onClick={sortByMarks}>
            Sort by Marks
          </button>

          <button className="btn btn-success" onClick={addBonusMarks}>
            Bonus +5 Marks
          </button>

          <button className="btn btn-warning" onClick={removeFailed}>
            Remove Failed
          </button>

          <button className="btn btn-danger" onClick={resetAll}>
            Reset All
          </button>
        </div>
      </div>

      <hr />

      {/* Student List */}
      {searchedStudents.map((s) => (
        <div className="card p-3 mb-3 shadow-sm" key={s.id}>
          <h4>
            {s.name} — {s.marks} marks —{" "}
            <span className={s.passed ? "text-success" : "text-danger"}>
              {s.passed ? "Passed" : "Failed"}
            </span>
          </h4>

          <div className="d-flex gap-2 flex-wrap mb-3">
            <button className="btn btn-outline-danger" onClick={() => deleteStudent(s.id)}>
              Delete
            </button>

            <button className="btn btn-outline-secondary" onClick={() => toggleStatus(s.id)}>
              Toggle Status
            </button>

            <button className="btn btn-outline-primary" onClick={() => updateMarks(s.id, s.marks + 10)}>
              +10 Marks
            </button>

            <button
              className="btn btn-outline-dark"
              onClick={() => renameStudent(s.id, prompt("New Name?"))}
            >
              Rename
            </button>
          </div>

          <h5>Skills: {s.skills.join(", ") || "No skills added"}</h5>

          <div className="d-flex gap-2 flex-wrap mt-2">
            <button
              className="btn btn-success"
              onClick={() => addSkill(s.id, prompt("Enter Skill:"))}
            >
              Add Skill
            </button>

            <button
              className="btn btn-warning"
              onClick={() =>
                removeSkill(s.id, prompt("Skill to remove?"))
              }
            >
              Remove Skill
            </button>

            <button
              className="btn btn-info text-white"
              onClick={() =>
                updateSkill(
                  s.id,
                  prompt("Old Skill?"),
                  prompt("New Skill?")
                )
              }
            >
              Update Skill
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default StudentManager;
