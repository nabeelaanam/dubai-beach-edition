import "../styles/hero.css";

export default function Hero() {
  return (
    <section className="hero-section">

      <img
        src={require("../assets/images/hero.jpg")}
        alt="Hero Background"
        className="hero-image"
      />

      <div className="hero-text">
        <h3 className="hero-subtitle">
          THE RESIDENCES AT<br />THE DUBAI BEACH
        </h3>

        <h1 className="hero-title">EDITION</h1>

        <div className="hero-discover">
          DISCOVER MORE
          <div className="hero-arrow">⌄ </div>
        </div>
      </div>

    </section>
  );
}
