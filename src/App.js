import { BrowserRouter, Route, Routes } from "react-router-dom";
// import "./App.css";
import Home from "./components/Pages/Home/Home/Home";
import Homecollection from "./components/Pages/Home/Home/Homecollection";
import Howitwork from "./components/Pages/Howitwork/Howitwork";
import Donate from "./components/Pages/Donate/Donate";
import Gallery from "./components/Pages/Gallery/Gallery";
import About from "./components/Pages/About/About";
import Contact from "./components/Pages/Contact/Contact";

// import Layout from "./components/component/Layout";

function App() {
  return (
    <div>
      {/* <Layout /> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homecollection />} />
          <Route path="/Howitwork" element={<Howitwork />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="*" element={<div>Error 404 page is not found</div>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
