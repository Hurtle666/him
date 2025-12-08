import React from "react";
import { Routes,Route } from "react-router-dom";
import Hero from "./componets/Hero";
import Skills from "./componets/Skills";
import Footer from "./componets/Footer";
import Contact from "./Routes/Contact";
import About from "./Routes/About";
import "./App.css";
import Navbar from "./componets/Navbar";


const App = ()=>{

return (<>
   <div className="container">
      <Navbar />
        <Routes>
        <Route path="/" element={ <Hero />} />
        <Route path="/contact" element={ <Contact />} />
        <Route path="/skills" element={<Skills /> } />
        <Route path ="/about" element={ <About />} />
         </Routes>
         <Footer />
   </div>
</>)

}
export default App;