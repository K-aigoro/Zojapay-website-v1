// eslint-disable-next-line no-unused-vars
import React from "react";
import "./solution.css";
import contactless from "../../assets/Image/contactless.svg";
import pos from "../../assets/Image/pos.svg";
import protection from "../../assets/Image/protection.svg";
import stroke from "../../assets/Image/stroke-group.png";

function Solution() {
  return (
    <div className="solution">
      <div className="details">
        <section>
          {/* header for the article  */}
          <h2 className="h2">One-stop solution for all payments</h2>
          <div className="info">


            {/* article 1 */}
            <article className="article">
              <div className="stroke">
                <img src={stroke} alt="" />
              </div>
              <div className="main2">
                <div className="img2">
                  <img src={contactless} alt="contactless" />
                </div>
                <h2 className="text-head">Contactless Payments Made Easy</h2>
                <p>
                  Our platform supports QR code payments, allowing customers to
                  simply scan and pay, and NFC (Tap to Pay) technology, make
                  quick and secure payments by simply tapping their smartphones
                  or contactless cards, providing a seamless payment experience.
                </p>
              </div>
            </article>


            {/* article 2 */}
            <article className="article">
              <div className="stroke">
                <img src={stroke} alt="" />
              </div>
              <div className="main2">
                <div className="img2">
                  <img src={pos} alt="contactless" />
                </div>
                <h2 className="text-head">Digital Point of Sale (mPOS)</h2>
                <p>
                  Our mobile Point of Sale (mPOS) solution eliminates the need
                  for expensive hardware and Businesses can accept card
                  payments, track sales, manage inventory, and generate detailed
                  reports, all in one user-friendly app.
                </p>
              </div>
            </article>


            {/* article 3 */}
            <article className="article">
              <div className="stroke">
                <img src={stroke} alt="" />
              </div>
              <div className="main2">
                <div className="img2">
                  <img src={protection} alt="contactless" />
                </div>
                <h2 className="text-head">
                  Enhanced Security and Fraud Protection
                </h2>
                <p>
                  At Zojapay, security is our top priority. We employ robust
                  encryption and tokenization technologies to safeguard
                  sensitive customer data, ensuring secure transactions every
                  time.
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
