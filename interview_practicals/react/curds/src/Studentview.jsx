import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";

function Studentview() {
  const { id } = useParams();
  const [student, setStudent] = useState({});

  useEffect(() => {
    axios
      .get(`http://localhost:3001/students/${id}`)
      .then(res => setStudent(res.data))
      .catch(err => console.log(err));
  }, [id]);

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">

          <h3 className="mb-4">Student Details</h3>

          <p><strong>ID:</strong> {student.id}</p>
          <p><strong>Name:</strong> {student.name}</p>
          <p><strong>Place:</strong> {student.place}</p>
          <p><strong>Phone:</strong> {student.phone}</p>

          <Link to="/" className="btn btn-secondary mt-3">
            Back
          </Link>

        </div>
      </div>
    </div>
  );
}

export default Studentview;
