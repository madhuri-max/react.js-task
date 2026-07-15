import Navbar from "./Navbar";
import HeroSection from "./Hero";
import HeroCards from "./HeroCards";
import Categories from "./Categories";
import PreviousContests from "./PreviousContests";
import Pricing from "./Pricing";
import Footer from "./Footer";

function App() {
  return (
    <>
      <Navbar />
      <HeroSection />
      <HeroCards />
      <Categories />
      <PreviousContests/>
      <Pricing/>
      <Footer/>
    </>
  );
}

export default App;