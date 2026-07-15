import "./Hero.css";

function HeroSection() {
  return (
    <div className="bg-image mt-2">
      <div className="main">
        <p className="welcome">
  WELCOME TO SNAPX PHOTOGRAPHY
</p>

<h1 className="heading">
  Enter a world of <span className="edit">Photos</span>
  <br />
  & Amazing Awards
</h1>

<div className="line"></div>

<p className="main-para">
  SnapX Photography is a professional Bootstrap 5 template designed
  for photography contests and creative communities.
</p>

<div className="button-group">
  <button className="button-1">
    Explore SnapX Contest
  </button>

  <button className="button-2">
    ▶ Watch Video Now
  </button>
</div>
      </div>
    </div>
  );
}

export default HeroSection;