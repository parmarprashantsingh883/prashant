import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Side_work() {
  const [images, setImages] = useState([]);
  const [index, setIndex] = useState(1); // page number
  const IMAGES_PER_PAGE = 12; // number of images per page

  // Fetch images whenever page index changes
  const fetchData = async () => {
    try {
      const response = await axios.get(`https://picsum.photos/v2/list?page=${index}&limit=${IMAGES_PER_PAGE}`);
      setImages(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, [index]);

  const nextPage = () => setIndex(index + 1);
  const prevPage = () => setIndex(index > 1 ? index - 1 : 1);

  return (
    <div className='container mt-5'>
      {/* Pagination Controls */}
      <div className='d-flex justify-content-center mb-4 gap-4 align-items-center'>
        <button onClick={prevPage} className='btn btn-danger'>Prev</button>
        <h5 className='mb-0'>Page: {index}</h5>
        <button onClick={nextPage} className='btn btn-danger'>Next</button>
      </div>

      {/* Image Gallery */}
      <div className='row'>
        {images.map((img) => (
          <div key={img.id} className='col-12 col-sm-6 col-md-4 col-lg-3 mb-4 text-center'>
            <img
              src={`https://picsum.photos/id/${img.id}/300/200`} // smaller size
              alt={img.author}
              loading='lazy' // lazy load
              className='img-fluid'
              style={{
                width: '100%',
                height: '200px',
                objectFit: 'cover',
                borderRadius: '5px',
              }}
            />
            <p className='mt-2' style={{ fontSize: '0.9rem' }}>{img.author}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Side_work;
