import Header from "../components/Header";
import men from "../../assets/images/men.png";
import women from "../../assets/images/women.png";



export default function Home() {
  return (
    <>
      <Header />

      <section className="luxe-hero">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-3 d-none d-lg-block">
              <img src={men} className="hero-model left" />
              <button className="pill-btn dark">Men's Collection</button>
            </div>

            <div className="col-lg-6 text-center hero-content">
              <span className="badge-pill">✨ New Season 2025</span>
              <h1>
                Discover Your <span>Signature</span> Style
              </h1>
              <p>Curated collections for the modern individual. <br/>Timeless pieces crafted with care.</p>

              <div className="hero-btns">
                <button className="btn main-btn">Shop Now →</button>
                <a href="#" className="story-link">Our Story →</a>
              </div>
            </div>

            <div className="col-lg-3 d-none d-lg-block text-end">
              <img src={women} className="hero-model right" />
              <button className="pill-btn orange">Women's Collection</button>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
