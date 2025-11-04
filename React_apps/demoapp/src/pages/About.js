import React from 'react' ;
function About(){
return(
  <>
  <div>
  <div className="conatiner-fluid text-center my-3">
    <div className="row ">
      <div className="col-lg-12 justify-content-center align-items-center g-2 py-5 mb-5" data-aos="zoom-in" data-aos-duration={600}>
        <h1>About</h1>
        <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio
        </p>
        <p>voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-body-secondary py-4 ">
    <div className="row">
      <div className="col-12 ms-5">
        <ol className="list-inline d-flex g-2 my-auto ms-5">
          <li className="list-inline-item fw-bold text-info">Home</li>
          <span className="mx-2">/</span>
          <li className="list-inline-item fw-bold">About</li>
        </ol>
      </div>
    </div>
  </div>
  <div className="container  my-5">
    <div className="row">
      <div className="col-12 text-center p-5 fs-5" data-aos="fade-up" data-aos-duration={600}>
        <h1 className="font-size p-5">Excellence in Healthcare Since 1985</h1>
        <p>We believe that exceptional medical care begins with understanding. </p>
        Our dedicated team of professionals combines cutting-edge technology with<p />
        <p> compassionate, personalized treatment to ensure every patient receives the</p>
        <p> highest standard of care.</p>
      </div>
    </div>
  </div>
  <div className="container-fluid  ">
    <div className="container  ">
      <div className="row">
        <div className="col-7  col-md-12 p-0 ">
          <div className="row">
            <div className="col-lg-12  " data-aos="fade-right" data-aos-duration={600}>
              <img src="/images/facilities-3.webp" width="100%" className="object-fit-cover rounded-4 gallery gallery img" alt />
            </div>
            <div className="col-6 p-3 gallery " data-aos="zoom-in" data-aos-duration={400}>
              <img src="/images/staff-12.webp" width="100%" className="object-fit-cover rounded-4  gallery img" height="250px" alt />
            </div>
            <div className="col-6 p-3 gallery" data-aos="zoom-in" data-aos-duration={400}>
              <img src="/images/consultation-4.webp" width="100%" className="object-fit-cover rounded-4 gallery img" height="250px" alt />
            </div>
          </div>
        </div>
        <div className="col-5  col-md-12 text-center p-4 ps-5 mt-5" data-aos="fade-left" data-aos-duration={600}>
          <h1 className="mt-5">
            Trusted Healthcare Provider
          </h1>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation.</p>
          <div className="row justify-content-center align-items-center g-5 p- my-5 text-center">
            <div className="col-12 col-md-12 d-flex gap-4 align-items-center ">
              <h1 className="color display-5">22000</h1>
              <p className="text-start"><span className="fw-bold">Successful Treatments</span><br />
                Completed with excellent patient outcomes</p>
            </div>
            <div className="col-12 d-flex gap-4 align-items-center ">
              <h1 className="color display-5">95%</h1>
              <p className="text-start"><span className="fw-bold">Patient Satisfaction</span><br />
                Based on comprehensive feedback survey</p>
            </div>
            <div className="col-12 d-flex gap-4  align-items-center ">
              <h1 className="color display-5">85</h1>
              <p className="text-start"><span className="fw-bold">Medical Professionals</span><br />
                Specialists across various departments</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container p-0 mt-5 mb-5">
    <div className="row g-3"> {/* g-3 adds gap between columns */}
      <div className="col-md-4" data-aos="fade-up" data-aos-duration={400}>
        <div className="card text-center p-4 border-0 shadow-0">
          <i className="bi bi-heart fs-1 icon-box5 text-center mx-auto" />
          <div className="card-body p-4">
            <div className="card-totle">
              <h4>Our Mission</h4>
            </div>
            <div className="card-text mt-3 ">
              <p>To provide comprehensive, patient-centered healthcare that combines medical excellence with genuine
                compassion, ensuring every individual receives personalized care tailored to their unique needs.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4" data-aos="fade-up" data-aos-duration={500}>
        <div className="card text-center p-4 border-0 shadow-0">
          <i className="bi bi-eye fs-1 icon-box5 text-center mx-auto" />
          <div className="card-body p-4">
            <div className="card-totle">
              <h4>Our Mission</h4>
            </div>
            <div className="card-text mt-3 ">
              <p>To provide comprehensive, patient-centered healthcare that combines medical excellence with genuine
                compassion, ensuring every individual receives personalized care tailored to their unique needs.</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-md-4" data-aos="fade-up" data-aos-duration={600}>
        <div className="card text-center p-4 border-0 shadow-0">
          <i className="bi bi-star fs-1 icon-box5 text-center mx-auto" />
          <div className="card-body p-4">
            <div className="card-totle">
              <h4>Our Mission</h4>
            </div>
            <div className="card-text mt-3 ">
              <p>To provide comprehensive, patient-centered healthcare that combines medical excellence with genuine
                compassion, ensuring every individual receives personalized care tailored to their unique needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container  my-5 " data-aos="zoom-in" data-aos-duration={1000}>
    <div className="row text-center p-5 ">
      <h1>Areas of Excellence</h1>
      <p className="fs-5">Our specialized departments work together to provide comprehensive care <br />
        across multiple medical disciplines</p>
    </div>
  </div>
  <div className="container  my-5">
    <div className="row g-4 d-flex justify-content-evenly">
      <div className="col-2" data-aos="fade-up" data-aos-duration={400}>
        <div className="card service-card">
          <i className="bi bi-activity  text-center mx-auto fs-1 icones" />
          <div className="card-title text-center p-3">
            <h6>Cardiology
            </h6>
          </div>
        </div>
      </div>
      <div className="col-2" data-aos="fade-up" data-aos-duration={400}>
        <div className="card service-card">
          <i className="bi bi-person  text-center mx-auto fs-1 icones" />
          <div className="card-title text-center p-3">
            <h6>Cardiology
            </h6>
          </div>
        </div>
      </div>
      <div className="col-2" data-aos="fade-up" data-aos-duration={400}>
        <div className="card service-card">
          <i className="bi bi-scissors text-center mx-auto fs-1 icones" />
          <div className="card-title text-center p-3">
            <h6>Cardiology
            </h6>
          </div>
        </div>
      </div>
      <div className="col-2" data-aos="fade-up" data-aos-duration={400}>
        <div className="card service-card">
          <i className="bi bi-activity  text-center mx-auto fs-1 icones" />
          <div className="card-title text-center p-3">
            <h6>Cardiology
            </h6>
          </div>
        </div>
      </div>
      <div className="col-2" data-aos="fade-up" data-aos-duration={400}>
        <div className="card service-card">
          <i className="bi bi-activity  text-center mx-auto fs-1 icones" />
          <div className="card-title text-center p-3">
            <h6>Cardiology
            </h6>
          </div>
        </div>
      </div>
    </div>
    <div className="container mt-5 g-5">
      <div className="row">
        <div className="col-12 text-center  p-3" data-aos="fade-up" data-aos-duration={400}>
          <h1>Recognized Excellence</h1>
          <p>Our commitment to quality is validated by prestigious healthcare organizations</p>
        </div>
      </div>
    </div>
  </div>
  <div className="container-fluid mb-5 ">
    <div className="row     ">
      <div className="col-10  d-flex mx-auto justify-content-center gap-5  ">
        <div className="col-1     ">
          <div className="card p-2 py-3  card2 " data-aos="fade-up" data-aos-duration={400}>
            <img src="/images/tommato.webp" className="img-fluid rounded-4 img-effect   " alt />
          </div>
        </div>
        <div className="col-1   ">
          <div className="card p-2 py-3  card2" data-aos="fade-up" data-aos-duration={400}>
            <img src="/images/clients-7.webp" className="img-fluid rounded-4 img-effect" alt />
          </div>
        </div>
        <div className="col-1  ">
          <div className="card p-2 py-3 card2" data-aos="fade-up" data-aos-duration={400}>
            <img src="/images/clients-8.webp" className="img-fluid rounded-4 img-effect" alt />
          </div>
        </div>
        <div className="col-1 ">
          <div className="card  p-2 py-3 card2" data-aos="fade-up" data-aos-duration={400}>
            <img src="/images/clients-9.webp" className="img-fluid rounded-4 img-effect" alt />
          </div>
        </div>
        <div className="col-1 ">
          <div className="card p-2 py-3 card2" data-aos="fade-up" data-aos-duration={400}>
            <img src="/images/clients-10.webp" className="img-fluid rounded-4 img-effect" alt />
          </div>
        </div>
        <div className="col-1 ">
          <div className="card p-2 py-3 card2" data-aos="fade-up" data-aos-duration={400}>
            <img src="/images/clients-11.webp" className="img-fluid rounded-4 img-effect" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</div>


  </>
);


}
export default About;