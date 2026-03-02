import gsap from "gsap";
import {ScrollTrigger, SplitText } from "gsap/all"
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Coffees from "./components/Coffees";
import About from "./components/About";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
   <main>
    <Navbar/>
    <Hero/>
    <Coffees/>
    <About/>
   </main>
  );
}
export default App;