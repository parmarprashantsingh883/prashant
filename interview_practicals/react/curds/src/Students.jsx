import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

function Students() {
  const [studentdata, setstudentdata] = useState([])
  useEffect(() => {
    axios.get("http://localhost:3001/students")
      .then(res => setstudentdata(res.data))
      .catch(err => console.log(err));




  }, [])
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

    <>
      <div className="container mt-5">
        <div className="card shadow">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center mb-4">
              <h3 className="fw-bold mb-0">Student Records</h3>
              <Link to="/studentadd">
                <button className="btn btn-primary">Add Student</button>
              </Link>
            </div>
            {/* Table */}
            <div className="table-responsive">
              <table className="table table-bordered table-hover align-middle text-center">
                <thead className="table-light">
                  <tr>
                    <th> no</th>
                    <th>id</th>
                    <th>name</th>
                    <th>place</th>
                    <th>phone</th>
                    <th width={250}>ACTIONS</th>
                  </tr>
                </thead>

                <tbody>
                    
                        <Link to={`/studentview/${student.id}`}>
                          <button className="btn btn-info btn-sm me-2">
                            View
                          </button>
                        </Link>

                        <Link to={`/StudentEdit/${student.id}`}>
                          <button className="btn btn-info btn-sm me-2">
                            edit
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


    </>
  )
}

export default Students