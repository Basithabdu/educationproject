//import logo from "./logo.svg";
//import "./App.css";
import Blog from "./Blog/Blog";
import Discover from "./Discover/Discover";
import EducationCRM from "./EducationCRM/EducationCRM";
import Growth from "./Growth/Growth";
import Header from "./Header/Header";
import OurClients from "./OurClients/OurClients";
import Pricing from "./Pricing/Pricing";
import Footer from "./Footer/Footer";

function App() {
  return (
    // <div className="App">

    // </div>

    <div>
      <Header />
      <EducationCRM />
      <Discover />
      <Growth />
      <Pricing />
      <OurClients />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
