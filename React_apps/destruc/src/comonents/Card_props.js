import React from 'react';

function Card_props({ title, desc, img }) {
  return (
 <div className="col-lg-4 col-md-6 col-sm-12 d-flex flex-wrap p-lg-4 p-md-3 p-sm-3">
      <div className="card flex-fill h-100 d-flex flex-column" style={{}}>
        <img src={img} className="card-img-top" alt={title} style={{ height: "400px",width:"auto", objectFit: "cover" }} />
        <div className="card-body d-flex flex-column justify-content-between p-3">
          <div>
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{desc}</p>
          </div>
          <a href="#" className="btn btn-danger mt-auto">Go somewhere</a>
        </div>
      </div>
    </div>
  );
}

export default Card_props;
