import "./HeroCards.css";

import featured1 from "./assets/featured-03.jpg";
import featured2 from "./assets/featured-02.jpg";

function HeroCards() {
  return (
    <section className="hero-cards">

      <button className="arrow left">&#10094;</button>

      <div className="hero-image">
        <img src={featured1} alt="Left" />
      </div>

      <div className="hero-content">

        <h2>Adventure Time</h2>

        <div className="stars">
          ⭐⭐⭐⭐⭐
          <span>(4.5)</span>
        </div>

        <p><strong>Contest Winner:</strong> John David</p>

        <p><strong>Contest Author:</strong> Robert Lee</p>

        <p><strong>Awards:</strong> $5,200 + Sony Alpha</p>

      </div>

      <div className="hero-image">
        <img src={featured2} alt="Right" />
      </div>

      <button className="arrow right">&#10095;</button>

    </section>
  );
}

export default HeroCards;