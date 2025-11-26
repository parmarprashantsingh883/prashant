import React, { useState } from 'react'
import axios from 'axios'

function Side_work() {
  const [userdata, setuserdata] = useState([])
  const [index, setIndex] = useState(0)   // for next/previous

  const fetchdata = async () => {
    const res = await axios.get("https://picsum.photos/v2/list?page={index}&limit=100")
    setuserdata(res.data)
    setIndex(0)   // reset to first image
  }

  const handleNext = () => {
    if (index < userdata.length - 1) {
      setIndex(index + 1)
    }
  }

  const handlePrevious = () => {
    if (index > 0) {
      setIndex(index - 1)
    }
  }

  return (
    <div className='text-white text-center w-100' style={{ minHeight: "100vh" }}>

      {/* Fetch button */}
      <button className='btn btn-danger m-5' onClick={fetchdata}>
        GetData
      </button>

      {/* Card Display */}
      <div style={{ display: "flex", justifyContent: "center" }}>
        {userdata.length > 0 && (
          <div
            style={{
              position: "relative",
              width: "260px",
              margin: "15px",
              textAlign: "center"
            }}
          >
            
            {/* ID Badge */}
            <p
              style={{
                position: "absolute",
                top: "8px",
                left: "8px",
                background: "rgba(0,0,0,0.7)",
                padding: "5px 10px",
                borderRadius: "5px",
                color: "white",
                margin: 0,
                fontSize: "14px",
                fontWeight: "bold",
                zIndex: 10
              }}
            >
              {index + 1}
            </p>

            {/* Image */}
            <img
              src={userdata[index].download_url}
              alt="img"
              style={{
                width: "250px",
                height: "250px",
                objectFit: "cover",
                borderRadius: "10px"
              }}
            />

            <h4 style={{ marginTop: "10px" }}>
              {userdata[index].author}
            </h4>
          </div>
        )}
      </div>

      {/* Buttons */}
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          marginTop: "20px",
          marginBottom: "20px"
        }}
      >
        <button className="btn btn-danger" onClick={handlePrevious}>
          Previous
        </button>

        <button className="btn btn-danger" onClick={handleNext}>
          Next
        </button>
      </div>

    </div>
  )
}

export default Side_work
