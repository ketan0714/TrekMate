import {BrowserRouter, Routes, Route} from "react-router-dom"

import "./App.css"
import Explore from "./pages/Explore";
import Home from "./pages/Home"
import Navbar from "./Component/Navbar";
import Footer from "./Component/Footer";
import About from "./pages/About";
import Contact from "./pages/Contact";
function App() {

  return(
    <>
    <BrowserRouter basename="/TrekMate">
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/explore" element={<Explore />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      <Footer/>
  
    </BrowserRouter>


    
    </>
  )
}

export default App;