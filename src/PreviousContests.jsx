import "./PreviousContests.css";

import image1 from "./assets/closed-01.jpg";
import image2 from "./assets/closed-02.jpg";
import image3 from "./assets/closed-03.jpg";

const contests = [
  {
    image: image1,
    participants: 96,
    pictures: 410,
  },
  {
    image: image2,
    participants: 74,
    pictures: 284,
  },
  {
    image: image3,
    participants: 88,
    pictures: 320,
  },
];

function PreviousContests() {
  return (
    <section className="previous-section">

      <p className="section-subtitle">
        CLOSED PHOTOGRAPHY CONTESTS
      </p>

      <h2 className="section-title">
        <span>Previous Contests</span> With Handpicked Winners
      </h2>

      <div className="contest-grid">

        {contests.map((contest, index) => (
          <div className="contest-card" key={index}>

            <img
              src={contest.image}
              alt="Contest"
              className="contest-image"
            />

            <div className="contest-info">

              <div className="contest-stats">

                <div>
                  <h4>{contest.participants}</h4>
                  <p>Participants</p>
                </div>

                <div>
                  <h4>{contest.pictures}</h4>
                  <p>Pictures</p>
                </div>

              </div>

            </div>

          </div>
        ))}

      </div>

      <button className="browse-contests">
        Browse Open Contests
      </button>

    </section>
  );
}

export default PreviousContests;