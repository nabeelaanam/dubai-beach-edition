import { useState } from "react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import ImageSection from "./components/ImageSection";
import Content from "./components/Content"; 
import RegisterModal from "./components/RegisterModal";
import CookieModal from "./components/CookieModal";
import Footer from "./components/Footer";
import "./styles/global.css";
import MapSection from "./components/MapSection";
import Gallery from "./components/Gallery";   



function App() {
  const [showRegister, setShowRegister] = useState(false);
  const [showCookies, setShowCookies] = useState(false);

  return (
  <>
    <Header onCookieClick={() => setShowCookies(true)} />
    <Hero onRegister={() => setShowRegister(true)} />

    {/* TEXT + BUTTONS */}
    <Content onRegister={() => setShowRegister(true)} />

    {/* TWO SIDE BY SIDE IMAGES */}
    
    <ImageSection 
     image1="pool.jpg"
     image2="interior.jpg"
     reverse
    />
 

    {/* THREE IMAGES BELOW */}
    <Gallery />
    {/* <Gallery /> */}
    <MapSection />

    <Footer />

    <button
  className="register-btn"
  onClick={() => setShowRegister(true)}
>
  REGISTER YOUR INTEREST
</button>


    <button className="preferences-btn" onClick={() => setShowCookies(true)}>
    Preferences
  </button>



    {showRegister && <RegisterModal onClose={() => setShowRegister(false)} />}
    {showCookies && <CookieModal onClose={() => setShowCookies(false)} />}
  </>
);
}

export default App;
