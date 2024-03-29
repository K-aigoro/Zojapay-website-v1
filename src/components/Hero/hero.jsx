// eslint-disable-next-line no-unused-vars
import React from "react";
import './hero.css';
import Phone from '../../assets/Image/hero-phones.svg'
import Button from "../button/Button";


function Hero() {
  return (
    <section className="hero">
      <div className="main">
        <div className="sub">
        <div className="text">
            <h1 className="text1">
            Enjoy Convenient Payment Transactions as a business owner or customer.
            </h1>
            <p className="para">
            With ZojaPay, experience ease with our innovative transaction methods using your mobile device
            </p>
            <Button />
        </div>
        <div className="img">
          <img src={Phone} alt="phones" />
        </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
