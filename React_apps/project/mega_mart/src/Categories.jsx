import React from 'react'

function Categories() {
  return (
    <div>
  <section className="py-5" style={{background: '#f8f8f2'}}>
  <div className="container text-center">
    {/* Shop by Category Badge */}
    <span className="px-4 py-2 rounded-pill" style={{background: '#d9f0db', color: '#2e7d32', fontSize: 14, fontWeight: 600}}>
      Shop by Category
    </span>
    {/* Title */}
    <h2 className="mt-3 fw-bold" style={{color: '#1f3d2b', fontSize: 40}}>
      Explore Our Categories
    </h2>
    {/* Subtitle */}
    <p className="text-muted mb-5" style={{fontSize: 17}}>
      Browse through our wide selection of fresh produce, pantry staples, and delicious snacks
    </p>
    {/* Category Cards */}
    <div className="row g-4 justify-content-center">
      {/* Card Item */}
      <div className="col-md-4 col-lg-2">
        <div className="p-4 rounded-4 shadow-sm" style={{background: 'white'}}>
          <div className="rounded-4 mx-auto d-flex align-items-center justify-content-center mb-3" style={{width: 70, height: 70, background: '#fdecec'}}>
            <span className="material-icons-outlined fs-1" style={{color: '#e74c3c'}}>nutrition</span>
          </div>
          <h5 className="fw-bold" style={{color: '#1f3d2b'}}>Fresh Fruits</h5>
          <p className="text-muted">120+ Items</p>
        </div>
      </div>
      {/* 2 */}
      <div className="col-md-4 col-lg-2">
        <div className="p-4 rounded-4 shadow-sm" style={{background: 'white'}}>
          <div className="rounded-4 mx-auto d-flex align-items-center justify-content-center mb-3" style={{width: 70, height: 70, background: '#fff4e6'}}>
            <span className="material-icons-outlined fs-1" style={{color: '#f39c12'}}>ramen_dining</span>
          </div>
          <h5 className="fw-bold" style={{color: '#1f3d2b'}}>Vegetables</h5>
          <p className="text-muted">80+ Items</p>
        </div>
      </div>
      {/* 3 */}
      <div className="col-md-4 col-lg-2 ">
        <div className="p-4 rounded-4 shadow-sm" style={{background: 'white'}}>
          <div className="rounded-4 mx-auto d-flex align-items-center justify-content-center mb-3" style={{width: 70, height: 70, background: '#e7f6ec'}}>
            <span className="material-icons-outlined fs-1" style={{color: '#2ecc71'}}>cookie</span>
          </div>
          <h5 className="fw-bold" style={{color: '#1f3d2b'}}>Snacks</h5>
          <p className="text-muted">150+ Items</p>
        </div>
      </div>
      {/* 4 */}
      <div className="col-md-4 col-lg-2">
        <div className="p-4 rounded-4 shadow-sm" style={{background: 'white'}}>
          <div className="rounded-4 mx-auto d-flex align-items-center justify-content-center mb-3" style={{width: 70, height: 70, background: '#eaf2ef'}}>
            <span className="material-icons-outlined fs-1" style={{color: '#3b6f5e'}}>shopping_basket</span>
          </div>
          <h5 className="fw-bold" style={{color: '#1f3d2b'}}>Groceries</h5>
          <p className="text-muted">200+ Items</p>
        </div>
      </div>
      {/* 5 */}
      <div className="col-md-4 col-lg-2">
        <div className="p-4 rounded-4 shadow-sm" style={{background: 'white'}}>
          <div className="rounded-4 mx-auto d-flex align-items-center justify-content-center mb-3" style={{width: 70, height: 70, background: '#e8f0ea'}}>
            <span className="material-icons-outlined fs-1" style={{color: '#4e6f52'}}>local_drink</span>
          </div>
          <h5 className="fw-bold" style={{color: '#1f3d2b'}}>Dairy</h5>
          <p className="text-muted">60+ Items</p>
        </div>
      </div>
      {/* 6 */}
      <div className="col-md-4 col-lg-2">
        <div className="p-4 rounded-4 shadow-sm" style={{background: 'white'}}>
          <div className="rounded-4 mx-auto d-flex align-items-center justify-content-center mb-3" style={{width: 70, height: 70, background: '#fff1e6'}}>
            <span className="material-icons-outlined fs-1" style={{color: '#e67e22'}}>lunch_dining</span>
          </div>
          <h5 className="fw-bold" style={{color: '#1f3d2b'}}>Bakery</h5>
          <p className="text-muted">40+ Items</p>
        </div>
      </div>
    </div>
  </div>
</section>


    </div>
  )
}

export default Categories