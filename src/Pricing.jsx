import "./Pricing.css";

import basic from "./assets/pricing-01.jpg";
import standard from "./assets/pricing-02.jpg";
import advanced from "./assets/pricing-03.jpg";

const plans = [
  {
    image: basic,
    title: "Basic Plan",
    price: "$25 USD",
  },
  {
    image: standard,
    title: "Standard Plan",
    price: "$45 USD",
  },
  {
    image: advanced,
    title: "Advanced Plan",
    price: "$85 USD",
  },
];

function Pricing() {
  return (
    <section className="pricing">

      <p className="pricing-small">
        OUR PRICING
      </p>

      <h2 className="pricing-heading">
        Photography <span>Contest Plans</span> And Price <span>Awards</span>
      </h2>

      <div className="pricing-grid">

        {plans.map((plan, index) => (

          <div className="pricing-card" key={index}>

            <img
              src={plan.image}
              alt={plan.title}
              className="pricing-image"
            />

            <h3>{plan.title}</h3>

            <hr />

            <ul>

              <li>Lorem Ipsum Dolor Sit</li>
              <li>Single Lorem Ipsum Dol</li>
              <li>Matriso Venga Hepetus</li>
              <li>Denim Sriracha Kogi</li>

            </ul>

            <h1>{plan.price}</h1>

            <button>
              Choose This Plan
            </button>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Pricing;