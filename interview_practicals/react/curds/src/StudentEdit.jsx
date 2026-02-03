import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function StudentEdit() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState({
    name: "",
    place: "",
    phone: ""
  });

  // Fetch student
  useEffect(() => {
    axios
      .get(`http://localhost:3001/students/${id}`)
      .then(res => setData(res.data))
      .catch(err => console.log(err));
  }, [id]);

  function handleChange(e) {
    setData({
      ...data,
      [e.target.name]: e.target.value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    axios
      .put(`http://localhost:3001/students/${id}`, data)
      .then(() => navigate("/"))
      .catch(err => console.log(err));
  }

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">

          <h4 className="mb-3">Edit Student</h4>

          <form onSubmit={handleSubmit}>
            <div className="row">

              <div className="col-md-6 mb-3">
                <label>Name</label>
                <input
                  name="name"
                  className="form-control"
                  value={data.name}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Place</label>
                <input
                  name="place"
                  className="form-control"
                  value={data.place}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label>Phone</label>
                <input
                  name="phone"
                  className="form-control"
                  value={data.phone}
                  onChange={handleChange}
                />
              </div>

            </div>

            <button className="btn btn-primary">
              Update Student
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default StudentEdit;
