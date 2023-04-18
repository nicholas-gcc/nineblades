import "./App.css";
import About from "./components/about/About";
import Facilities from "./components/members/Facilities";
import GymRates from "./components/members/Prices";
import Hero from "./components/hero/Hero";
import Members from "./components/members/Members";
import Footer from "./components/nav/Footer";
import Programs from "./components/programs/Programs";
import Locations from "./components/members/Locations"
import Join from "./components/members/Join"

function App() {
  return (
    <div className="app">
      <Hero />
      <Facilities />
      <Programs />
      <Locations />
      <GymRates/>
      <Join />
      <Footer />
    </div>
  );
}

export default App;
