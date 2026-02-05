import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Students() {
  const [studentdata, setstudentdata] = useState([]);

  // Fetch students
  useEffect(() => {
    axios
      .get("http://localhost:3001/students")
      .then(res => setstudentdata(res.data))
      .catch(err => console.log(err));
  }, []);

  // Delete student
  const handleDelete = (id) => {
    if (window.confirm("Delete this student?")) {
      axios
        .delete(`http://localhost:3001/students/${id}`)
        .then(() => {
          setstudentdata(studentdata.filter(s => s.id !== id));
        })
        .catch(err => console.log(err));
    }
  };

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">

          <div className="d-flex justify-content-between align-items-center mb-4">
            <h3 className="fw-bold mb-0">Student Records</h3>

            <Link to="/studentadd">
              <button className="btn btn-primary">
                Add Student
              </button>
            </Link>
          </div>

          <div className="table-responsive">
            <table className="table table-bordered table-hover align-middle text-center">

              <thead className="table-hover table-responsive table-bordered">
                <tr>
                  <th>No</th>
                  <th>ID</th>
                  <th>Name</th>
                  <th>Place</th>
                  <th>Phone</th>
                   <th>pincode</th>
                  <th width="300">Actions</th>
                </tr>
              </thead>

              <tbody>
                {studentdata.map((student, index) => 
                (
                  <tr key={student.id}>
                    <td>{index + 1}</td>
                    <td>{student.id}</td>
                    <td>{student.name}</td>
                    <td>{student.place}</td>
                    <td>{student.phone}</td>
                    <td>{student.pincode}</td>

                    <td>
                      <Link
                        to={`/studentview/${student.id}`}
                        className="me-2"
                      >
                        <button className="btn btn-info btn-sm">
                          View
                        </button>
                      </Link>

                      <Link
                        to={`/studentedit/${student.id}`}
                        className="me-2"
                      >
                        <button className="btn btn-warning btn-sm">
                          Edit
                        </button>
                      </Link>

                      <button
                        className="btn btn-danger btn-sm"
                        onClick={() => handleDelete(student.id)}
                      >
                        Delete
                      </button>
                    </td>

                  </tr>
                ))}
              </tbody>

            </table>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Students;
