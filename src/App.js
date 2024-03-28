import "./App.css";
import Home from "./Components/Home";
import About from "./Components/About";
import Work from "./Components/Work";
import Testimonial from "./Components/Testimonial";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <div id='Home'>
      <Home />
      </div>
      <div id='About'><About /></div>
      <div id='Work'><Work/></div>
      <div id='Psycologist'><Testimonial /></div>
      <div id='Contact'><Contact /></div>
      <Footer />
    </div>
  );
}

export default App;
