import "./Categories.css";

import icon1 from "./assets/icon-01.png";
import icon2 from "./assets/icon-02.png";
import icon3 from "./assets/icon-03.png";
import icon4 from "./assets/icon-04.png";

import image1 from "./assets/photo-video-05.jpg";
import image2 from "./assets/popular-02.png";
import image3 from "./assets/popular-03.png";
import image4 from "./assets/popular-04.png";

const cards = [
  {
    icon: icon1,
    image: image1,
    title: "Nature Pic Contest",
    contests: 126,
    button: "Browse Nature Contest"
  },
  {
    icon: icon2,
    image: image2,
    title: "Random Pic Contest",
    contests: 116,
    button: "Browse Random Contest"
  },
  {
    icon: icon3,
    image: image3,
    title: "Portrait Contest",
    contests: 164,
    button: "Browse Portrait Contest"
  },
  {
    icon: icon4,
    image: image4,
    title: "Space Pic Contest",
    contests: 135,
    button: "Browse Space Contest"
  }
];

function Categories() {
  return (
    <section className="categories">

      <div className="categories-header">

        <div>

          <p className="small-title">
            OUR CATEGORIES
          </p>

          <h2>
            Check Out <span>Popular</span> Contest
            <span> Categories</span>
          </h2>

        </div>

        <button className="discover-btn">
          Discover All Categories
        </button>

      </div>

      <div className="categories-grid">

        {cards.map((card, index) => (

          <div className="category-card" key={index}>

            <div className="card-top">

              <img src={card.icon} alt="" />

              <div>

                <h3>{card.title}</h3>

                <p>
                  <span>{card.contests}</span>
                  Available Contests
                </p>

              </div>

            </div>

            <img
              src={card.image}
              alt=""
              className="category-image"
            />

            <button className="browse-btn">
              {card.button}
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Categories;