import "./App.css";
import NineBladesShowcase from "./components/showcases/NineBladesShowcase";
import Prices from "./components/prices/Prices";
import Hero from "./components/hero/Hero";
import Footer from "./components/nav/Footer";
import Programs from "./components/programs/Programs";
import Schedule from "./components/schedule/Schedule"
import Join from "./components/members/Join"
import ProgramsPT from "./components/programs/ProgramsPT";

function App() {
  return (
    <div className="app">
      <Hero />
      <NineBladesShowcase />
      <Programs />
      <Schedule />
      <ProgramsPT />
      <Join />
      <Footer />
    </div>
  );
}

export default App;
