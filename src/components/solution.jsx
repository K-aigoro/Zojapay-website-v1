// eslint-disable-next-line no-unused-vars
import React from "react";
import "./solution.css";
import contactless from '../assets/Image/contactless.svg'

function Solution() {
  return (
    <div className="solution">
      <div className="details">
        <section>
          <h2 className="h2">One-stop solution for all payments</h2>
          <div className="info">
            <article className="article">
              {/* <div>
                <img src="" alt="" />
              </div> */}
              <div className="main2">
                <div className="img2">
                  <img src={contactless} alt="contactless" />
                </div>
                <h2>Contactless Payments Made Easy</h2>
                <p>
                  Our platform supports QR code payments, allowing customers to
                  simply scan and pay, and NFC (Tap to Pay) technology, make
                  quick and secure payments by simply tapping their smartphones
                  or contactless cards, providing a seamless payment experience.
                </p>
              </div>
            </article>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Solution;
