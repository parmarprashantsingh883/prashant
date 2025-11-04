import React from 'react';
function Contact(){
  return(
    <>
    <div>
  &lt;&gt;
  <div className="container-fluid text-center my-3">
    <div className="row ">
      <div className="col-lg-12 justify-content-center align-items-center g-2 py-5 mb-5">
        <h1>Contact</h1>
        <p>OOdio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio
        </p>
        <p>vvoluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-body-secondary py-4 mb-5 ">
    <div className="row">
      <div className="col-12 ">
        <ol className="list-inline d-flex g-2 my-auto ms-5">
          <li className="list-inline-item fw-bold text-info ">Home</li>
          <span className="mx-2">/</span>
          <li className="list-inline-item fw-bold">About</li>
        </ol>
      </div>
    </div>
  </div>
  <div className="container px-3 my-5">
    <div className="row g-5">
      <div className="col-4" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={0}>
        <div className="card text-center rounded-4 p-1 ">
          <i className="bi bi-geo-alt fs-1 text-info icon-box3 i d-bloc mx-auto" />
          <div className="card-body text-center">
            <div className="card-tile">
              <h3>Our Address</h3>
              <div className="card-subtitle" />
              <p>4582 Magnolia Avenue <br />
                Riverside, CA 92506</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={200}>
        <div className="card text-center rounded-4 p-1">
          <i className="bi bi-telephone fs-1 text-info icon-box3 m-auto" />
          <div className="card-body text-center">
            <div className="card-tile">
              <h3>Our Address</h3>
              <div className="card-subtitle" />
              <p>4582 Magnolia Avenue <br />
                Riverside, CA 92506</p>
            </div>
          </div>
        </div>
      </div>
      <div className="col-4" data-aos="fade-up" data-aos-duration={1000} data-aos-delay={400}>
        <div className="card text-center rounded-4 p-1">
          <i className="bi bi-envelope fs-1 text-info icon-box3 mx-auto" />
          <div className="card-body text-center">
            <div className="card-tile">
              <h3>Our Address</h3>
              <div className="card-subtitle" />
              <p>4582 Magnolia Avenue <br />
                Riverside, CA 92506</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="container">
    <div className="row g-3">
      <div className="col-6" data-aos="fade-up" data-aos-duration={1000}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3677.1706210060647!2d72.76218087508582!3d22.833176179307017!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e850633c43eed%3A0xc562ccbcbfa3cf4d!2sSiddhivinayak%20Ganpati%20Temple!5e0!3m2!1sen!2sin!4v1757061840166!5m2!1sen!2sin" className="rounded-4" width={600} height={450} style={{border: 0}} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
      </div>
      <div className="col-6 bg-white rounded-3 p-3 " data-aos="fade-up" data-aos-duration={1000}>
        <div className="row g-3">
          <div className="col-6 ">
            <input type="text" placeholder="your name" className="rounded-3 w-100 p-2 border border-dark-subtle" />
          </div>
          <div className="col-6 bg-white rounded-3 ">
            <input type="email" placeholder="your Email" className="rounded-3 w-100 p-2 border border-dark-subtle" />
          </div>
          <div className="col-12">
            <input type="text" placeholder="Subject" className="rounded-3 w-100 p-2 border border-dark-subtle" />
          </div>
          <div className="col-12">
            <textarea name id rows={8} className="rounded-3 w-100 p-2 border border-dark-subtle" defaultValue={"Message"} />
          </div>
          <div className="col-12" />
          <button type="button" className="btn btn-danger w-25 p-2  rounded-pill mx-auto">Send Message</button>
        </div>
      </div>
    </div>
    <div className="d-flex justify-content-center gap-3 my-5" data-aos="zoom-in" data-aos-duration={1000}>
      <a href="#" className="social-icon"><i className="bi bi-twitter" /></a>
      <a href="#" className="social-icon"><i className="bi bi-facebook" /></a>
      <a href="#" className="social-icon"><i className="bi bi-instagram" /></a>
      <a href="#" className="social-icon"><i className="bi bi-linkedin" /></a>
      <a href="#" className="social-icon"><i className="bi bi-youtube" /></a>
    </div>
  </div>
</div>

    </>
  )
};
export default Contact;