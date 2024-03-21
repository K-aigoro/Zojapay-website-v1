// eslint-disable-next-line no-unused-vars
import React from "react";
import Hero from "./components/Hero/hero";
import Navbar from "./components/navBar/navBar";
import Solution from "./components/solution/solution";
import Feature from "./components/feature/feature";
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Solution />
      <Feature />
      <Footer />
    </>
  );
}

export default App;
