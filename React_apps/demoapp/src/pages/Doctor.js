import React from 'react'
function Doctor(){
    return(
        <>
      <div>
  <div className="container-fluid text-center my-3">
    <div className="row ">
      <div className="col-lg-12 justify-content-center align-items-center g-2 py-5 mb-5">
        <h1>Doctors</h1>
        <p>Odio et unde deleniti. Deserunt numquam exercitationem. Officiis quo odio sint voluptas consequatur ut a odio
        </p>
        <p>voluptatem. Sit dolorum debitis veritatis natus dolores. Quasi ratione sint. Sit quaerat ipsum dolorem.</p>
      </div>
    </div>
  </div>
  <div className="container-fluid bg-body-secondary py-4 mb-5 ">
    <div className="row">
      <div className="col-12 ">
        <ol className="list-inline d-flex g-2 my-auto ms-5">
          <li className="list-inline-item fw-bold text-info">Home</li>
          <span className="mx-2">/</span>
          <li className="list-inline-item fw-bold">About</li>
        </ol>
      </div>
    </div>
  </div>
  {/* <div class="container mt-5 mb-5" >
<div class="row d-flex bg-info-subtle p-5 rounded-3" >
<div class="col-4 d-flex flex-column">
    <h6>Search Doctors</h6>
    <input type="search " class="w-100 rounded-2 border-">
</div>
</div> */}
  <div className="container my-3">
    <div className="row">
      <ul className="nav nav-pills gap-2">
        <li className="nav-item">
          <a className="nav-link active" href="#">All</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Cardiology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Pediatrics</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Dermatology</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#">Orthopedics</a>
        </li>
      </ul>
    </div>
    <div className="container  ">
      <div className="row mt-3 g-3">
        {/* first card */}
        <div className="col-md-3 my-4">
          <div className="card shadow-sm border-0">
            {/* Image + Badge */}
            <div className="position-relative">
              <img src="/images/staff-3.webp" className="object-fit-cover card-img-top rounded-top" style={{height: 210}} />
              <span className="badge bg-info position-absolute top-0 start-0 m-2 rounded-pill px-1 py-2">
                Senior Consultant
              </span>
            </div>
            <div className="card-body">
              {/* Doctor Info */}
              <h4 className="card-title mb-1">Dr. Amelia Brooks</h4>
              <h6 className="card-subtitle text-muted mb-2">Cardiologist • MD, FACC</h6>
              <p className="card-text small">
                Nostrud tempor magna minim excepteur, id cillum laboris aute proident.
              </p>
              {/* Specialty Tag */}
              <span className="badge bg-info-subtle text-muted border rounded-pill px-3 py-2 mb-3">
                Cardiology
              </span>
              {/* Buttons */}
              <div className="buttons d-flex gap-2 justify-content-between">
                <button type="button" className="btn btn-outline-primary">
                  book appointment
                </button>
                <button type="button" className="btn btn-outline-primary">
                  view profile
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* secound card */}
        <div className="col-md-3 my-4">
          <div className="card shadow-sm border-0">
            {/* Image + Badge */}
            <div className="position-relative">
              <img src="/images/staff-5.webp" className="object-fit-cover card-img-top rounded-top" style={{height: 210}} />
              <span className="badge bg-info position-absolute top-0 start-0 m-2 rounded-pill px-1 py-2">
                Senior Consultant
              </span>
            </div>
            <div className="card-body">
              {/* Doctor Info */}
              <h4 className="card-title mb-1">Dr. Amelia Brooks</h4>
              <h6 className="card-subtitle text-muted mb-2">Cardiologist • MD, FACC</h6>
              <p className="card-text small">
                Nostrud tempor magna minim excepteur, id cillum laboris aute proident.
              </p>
              {/* Specialty Tag */}
              <span className="badge bg-info-subtle text-muted border rounded-pill px-3 py-2 mb-3">
                Cardiology
              </span>
              {/* Buttons */}
              <div className="buttons d-flex gap-2">
                <button type="button" className="btn btn-outline-primary">
                  book appointment
                </button>
                <button type="button" className="btn btn-outline-primary">
                  view profile
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* third card */}
        <div className="col-md-3 my-4">
          <div className="card shadow-sm border-0">
            {/* Image + Badge */}
            <div className="position-relative">
              <img src="/images/staff-9.webp" className="object-fit-cover card-img-top rounded-top" style={{height: 210}} />
              <span className="badge bg-info position-absolute top-0 start-0 m-2 rounded-pill px-1 py-2">
                Senior Consultant
              </span>
            </div>
            <div className="card-body">
              {/* Doctor Info */}
              <h4 className="card-title mb-1">Dr. Amelia Brooks</h4>
              <h6 className="card-subtitle text-muted mb-2">Cardiologist • MD, FACC</h6>
              <p className="card-text small">
                Nostrud tempor magna minim excepteur, id cillum laboris aute proident.
              </p>
              {/* Specialty Tag */}
              <span className="badge bg-info-subtle text-muted border rounded-pill px-3 py-2 mb-3">
                Cardiology
              </span>
              {/* Buttons */}
              <div className="buttons d-flex gap-2">
                <button type="button" className="btn btn-outline-primary">
                  book appointment
                </button>
                <button type="button" className="btn btn-outline-primary">
                  view profile
                </button>
              </div>
            </div>
          </div>
          {/* fourth card */}
        </div> <div className="col-md-3 my-4">
          <div className="card shadow-sm border-0">
            {/* Image + Badge */}
            <div className="position-relative">
              <img src="/images/staff-12 (1).webp" className="object-fit-cover card-img-top rounded-top" style={{height: 210}} />
              <span className="badge bg-info position-absolute top-0 start-0 m-2 rounded-pill px-1 py-2">
                Senior Consultant
              </span>
            </div>
            <div className="card-body">
              {/* Doctor Info */}
              <h4 className="card-title mb-1">Dr. Amelia Brooks</h4>
              <h6 className="card-subtitle text-muted mb-2">Cardiologist • MD, FACC</h6>
              <p className="card-text small">
                Nostrud tempor magna minim excepteur, id cillum laboris aute proident.
              </p>
              {/* Specialty Tag */}
              <span className="badge bg-info-subtle text-muted border rounded-pill px-3 py-2 mb-3">
                Cardiology
              </span>
              {/* Buttons */}
              <div className="buttons d-flex gap-2">
                <button type="button" className="btn btn-outline-primary">
                  book appointment
                </button>
                <button type="button" className="btn btn-outline-primary">
                  view profile
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* fifth card */}
        <div className="col-md-3 my-4">
          <div className="card shadow-sm border-0">
            {/* Image + Badge */}
            <div className="position-relative">
              <img src="/images/staff-7.webp" className="object-fit-cover card-img-top rounded-top" style={{height: 210}} />
              <span className="badge bg-info position-absolute top-0 start-0 m-2 rounded-pill px-1 py-2">
                Senior Consultant
              </span>
            </div>
            <div className="card-body">
              {/* Doctor Info */}
              <h4 className="card-title mb-1">Dr. Amelia Brooks</h4>
              <h6 className="card-subtitle text-muted mb-2">Cardiologist • MD, FACC</h6>
              <p className="card-text small">
                Nostrud tempor magna minim excepteur, id cillum laboris aute proident.
              </p>
              {/* Specialty Tag */}
              <span className="badge bg-info-subtle text-muted border rounded-pill px-3 py-2 mb-3">
                Cardiology
              </span>
              {/* Buttons */}
              <div className="buttons d-flex gap-2">
                <button type="button" className="btn btn-outline-primary">
                  book appointment
                </button>
                <button type="button" className="btn btn-outline-primary">
                  view profile
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* sixth */}
        <div className="col-md-3 my-4">
          <div className="card shadow-sm border-0">
            {/* Image + Badge */}
            <div className="position-relative">
              <img src="/images/staff-2.webp" className="object-fit-cover card-img-top rounded-top" style={{height: 210}} />
              <span className="badge bg-info position-absolute top-0 start-0 m-2 rounded-pill px-1 py-2">
                Senior Consultant
              </span>
            </div>
            <div className="card-body">
              {/* Doctor Info */}
              <h4 className="card-title mb-1">Dr. Amelia Brooks</h4>
              <h6 className="card-subtitle text-muted mb-2">Cardiologist • MD, FACC</h6>
              <p className="card-text small">
                Nostrud tempor magna minim excepteur, id cillum laboris aute proident.
              </p>
              {/* Specialty Tag */}
              <span className="badge bg-info-subtle text-muted border rounded-pill px-3 py-2 mb-3">
                Cardiology
              </span>
              {/* Buttons */}
              <div className="buttons d-flex gap-2">
                <button type="button" className="btn btn-outline-primary">
                  book appointment
                </button>
                <button type="button" className="btn btn-outline-primary">
                  view profile
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* seventh card */}
        <div className="col-md-3 my-4">
          <div className="card shadow-sm border-0">
            {/* Image + Badge */}
            <div className="position-relative">
              <img src="/images/staff-6.webp" className="object-fit-cover card-img-top rounded-top" style={{height: 210}} />
              <span className="badge bg-info position-absolute top-0 start-0 m-2 rounded-pill px-1 py-2">
                Senior Consultant
              </span>
            </div>
            <div className="card-body">
              {/* Doctor Info */}
              <h4 className="card-title mb-1">Dr. Amelia Brooks</h4>
              <h6 className="card-subtitle text-muted mb-2">Cardiologist • MD, FACC</h6>
              <p className="card-text small">
                Nostrud tempor magna minim excepteur, id cillum laboris aute proident.
              </p>
              {/* Specialty Tag */}
              <span className="badge bg-info-subtle text-muted border rounded-pill px-3 py-2 mb-3">
                Cardiology
              </span>
              {/* Buttons */}
              <div className="buttons d-flex gap-2">
                <button type="button" className="btn btn-outline-primary">
                  book appointment
                </button>
                <button type="button" className="btn btn-outline-primary">
                  view profile
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* eighth card */}
        <div className="col-md-3 my-4">
          <div className="card shadow-sm border-0">
            {/* Image + Badge */}
            <div className="position-relative">
              <img src="/images/staff-10.webp" className="object-fit-cover card-img-top rounded-top" style={{height: 210}} />
              <span className="badge bg-info position-absolute top-0 start-0 m-2 rounded-pill px-1 py-2">
                Senior Consultant
              </span>
            </div>
            <div className="card-body">
              {/* Doctor Info */}
              <h4 className="card-title mb-1">Dr. Amelia Brooks</h4>
              <h6 className="card-subtitle text-muted mb-2">Cardiologist • MD, FACC</h6>
              <p className="card-text small">
                Nostrud tempor magna minim excepteur, id cillum laboris aute proident.
              </p>
              {/* Specialty Tag */}
              <span className="badge bg-info-subtle text-muted border rounded-pill px-3 py-2 mb-3">
                Cardiology
              </span>
              {/* Buttons */}
              <div className="buttons d-flex gap-2">
                <button type="button" className="btn btn-outline-primary">
                  book appointment
                </button>
                <button type="button" className="btn btn-outline-primary">
                  view profile
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container my-4">
      <div className="row shadow rounded-4 bg-white">
        <div className="col-md-5 p-4 position-relative">
          {/* Doctor Image */}
          <img src="/images/staff-100.webp" className="img-fluid rounded-4" alt="Doctor" />
          {/* Availability Badge */}
          <span className="badge bg-light text-dark p-2 position-absolute bottom- start- m-3 shadow-sm">
            <i className="bi bi-circle-fill text-info me-1" /> Available this week
          </span>
        </div>
        {/* Doctor Info */}
        <div className="col-md-7 p-5 my-5">
          {/* Badges */}
          <div className="d-flex flex-wrap mb-3">
            <span className="badge rounded-pill border border-info text-info mx-1">Chief Surgeon</span>
            <span className="badge rounded-pill border border-info text-info mx-1">12+ Years Experience</span>
            <span className="badge rounded-pill border border-info text-info mx-1">Board Certified</span>
          </div>
          {/* Name & Specialization */}
          <h3 className="fw-bold">Dr. Natalia Rivera</h3>
          <p>
            <span className="badge bg-primary">General Surgery • MD, FACS</span>
          </p>
          {/* Description */}
          <p className="text-muted">
            Commodo incididunt aliqua minim, eiusmod in laboris nulla. Amet do occaecat quis, 
            exceptuer in magna id dolore incididunt. Tempor in aute ullamco, irure officia aliqua nostrud.
          </p>
          {/* Details List */}
          <ul className="list-unstyled">
            <li><i className="bi bi-hospital text-info me-2" /> Residency: St. Mary’s Medical Center</li>
            <li><i className="bi bi-mortarboard text-info me-2" /> Fellowship: Advanced Laparoscopy</li>
            <li><i className="bi bi-journal-text text-info me-2" /> Publications: 14 peer-reviewed articles</li>
          </ul>
          {/* Buttons */}
          <div className="mt-3">
            <button className="btn btn-info text-white me-2">
              <i className="bi bi-calendar-check me-1" /> Book Appointment
            </button>
            <button className="btn btn-outline-info">
              <i className="bi bi-file-earmark-text me-1" /> View CV
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="container my-5">
      <div className="row g-3">
        <div className="col-2">
          <div className="card rounded-4 p-3">
            <img src="/images/oliver.webp" className="img-fluid rounded-circle border border-3 border-info-subtle d-block mx-auto shadow-lg" style={{width: 70, height: 70}} />        <div className="card-body p-0 m-0">
              <h6 className="card-title text-center m-0">Dr. Oliver Hayes</h6>
              <p className="card-subtitle text-muted text-center m-0">Pediatrics</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="card rounded-4 p-3">
            <img src="/images/oliver.webp" className="img-fluid rounded-circle border border-3 border-info-subtle d-block mx-auto" style={{width: 70, height: 70}} />        <div className="card-body p-0 m-0">
              <h6 className="card-title text-center m-0">Dr. Oliver Hayes</h6>
              <p className="card-subtitle text-muted text-center m-0">Pediatrics</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="card rounded-4 p-3">
            <img src="/images/oliver.webp" className="img-fluid rounded-circle border border-3 border-info-subtle d-block mx-auto" style={{width: 70, height: 70}} />        <div className="card-body p-0 m-0">
              <h6 className="card-title text-center m-0">Dr. Oliver Hayes</h6>
              <p className="card-subtitle text-muted text-center m-0">Pediatrics</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="card rounded-4 p-3">
            <img src="/images/oliver.webp" className="img-fluid rounded-circle border border-3 border-info-subtle d-block mx-auto" style={{width: 70, height: 70}} />        <div className="card-body p-0 m-0">
              <h6 className="card-title text-center m-0">Dr. Oliver Hayes</h6>
              <p className="card-subtitle text-muted text-center m-0">Pediatrics</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="card rounded-4 p-3">
            <img src="/images/oliver.webp" className="img-fluid rounded-circle border border-3 border-info-subtle d-block mx-auto" style={{width: 70, height: 70}} />        <div className="card-body p-0 m-0">
              <h6 className="card-title text-center m-0">Dr. Oliver Hayes</h6>
              <p className="card-subtitle text-muted text-center m-0">Pediatrics</p>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="card rounded-4 p-3">
            <img src="/images/oliver.webp" className="img-fluid rounded-circle border border-3 border-info-subtle d-block mx-auto" style={{width: 70, height: 70}} />
            <div className="card-body p-0 m-0">
              <h6 className="card-title text-center m-0">Dr. Oliver Hayes</h6>
              <p className="card-subtitle text-muted text-center m-0">Pediatrics</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-4 p-4 g-4 ">
          <div className="card p-3 rounded-3 ">
            <img src="/images/henry james.webp" className="rounded-3 object-fit-cover" alt style={{width: '100%', height: 250}} />
            <div className="card-body p-0">
              <div className="card-title p-0">
                <h3>Dr. Henry James</h3>
                <div className="card-subtitle">
                  <p>Oncology • MBBS, MD</p>
                </div>
                <div className="badges d-flex gap-4 align-items-center ">
                  <p className="badge bg-danger p-2 m-0">Board Certified</p>
                  <p className="badge bg-danger p-2 m-0">8 Years</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-8 p-5 ">
          <ul className="nav nav-pills gap-2">
            <li className="nav-item">
              <a className="nav-link " href="#">Bio</a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" href="#">Schedule</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">Reviews</a>
            </li>
          </ul>
          <div className="div shadow-lg flex-column border border-1 border-dark-subtle mt-3 rounded-3 p-3">
            <p>Fugiat proident aliqua laboris, excepteur sunt ad pariatur occaecat. Veniam minim eu laboris, magna irure velit anim excepteur exercitation.</p>
            <p className="m-0"><i className="bi bi-check2-circle me-1" />Special interest in immunotherapy</p>
            <p className="m-0"><i className="bi bi-check2-circle me-1" /> Member of ASCO</p>
            <p className="m-0"><i className="bi bi-check2-circle me-1" />Community outreach programs</p>
          </div>
        </div>
      </div>
    </div></div></div>



        </>
    )
};
export default Doctor;