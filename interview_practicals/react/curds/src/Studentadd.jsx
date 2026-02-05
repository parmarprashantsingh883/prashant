import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function StudentAdd() {

  const [data, setData] = useState({
    id: "",
    name: "",
    place: "",
    phone: "",
    pincode:""
  });

  const navigate = useNavigate();

  // function handleChange(e) {
  //   setData({
  //     ...data,
  //     [e.target.name]: e.target.value
  //   });
  // }
   
   function hadlechanges(e){
    setData({...data,
      [e.target.name]: e.target.value
    })
   }
  function handleSubmit(e) {
    e.preventDefault();

    axios.post("http://localhost:3001/students", data)
      .then(res => {
        console.log(res.data);
        navigate("/");
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <div className="card-body">

          <h4 className="mb-3">Add Student</h4>

          <form onSubmit={handleSubmit}>
            <div className="row">

              <div className="col-md-6 mb-3">
                <label>ID</label>
                <input name="id" className="form-control" onChange={handleChange}/>
              </div>

              <div className="col-md-6 mb-3">
                <label>Name</label>
                <input name="name" className="form-control" onChange={handleChange}/>
              </div>

              <div className="col-md-6 mb-3">
                <label>Place</label>
                <input name="place" className="form-control" onChange={handleChange}/>
              </div>

              <div className="col-md-6 mb-3">
                <label>Phone</label>
                <input name="phone" className="form-control" onChange={handleChange}/>
              </div>
              <div className="col-md-6 mb-3">
                <label>Pincode</label>
                <input name="pincode" className="form-control" onChange={handleChange}/>
              </div>

            </div>

            <button className="btn btn-primary">
              Save Student
            </button>

          </form>

        </div>
      </div>
    </div>
  );
}

export default StudentAdd;
