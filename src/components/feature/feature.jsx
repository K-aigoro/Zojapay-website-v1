// eslint-disable-next-line no-unused-vars
import React from "react";
import "./feature.css";
import Button from "../button/Button";

function Feature() {
  return (
    <div style={{ backgroundColor: "white", marginTop:'10px'}} id="features">
      <div className="details">
        <section>
          {/* header for the article  */}
          <h2 className="feat-text">Key Features</h2>
          <div className="article-div">
            {/* article 1 */}
            <article className="article-container">
              <div className="content-wrapper">
                <div className="number">
                  <p className="custom-number">1</p>
                </div>
                <h3 className="title">Contactless payments</h3>
                <div className="description">
                  <p style={{ textAlign: "justify" }}>
                    Make secure and convenient payments with our contactless
                    payment options.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Scan QR codes or simply tap your phone to pay, eliminating
                    the need for physical cash or cards.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Experience fast and seamless transactions with the power of
                    QR code and NFC technology.
                  </p>
                </div>
              </div>
            </article>
            {/* article 2 */}
            <article className="article-container">
              <div className="content-wrapper">
                <div className="number">
                  <p className="custom-number">2</p>
                </div>
                <h3 className="title">Super Agent</h3>
                <div className="description">
                  <p style={{ textAlign: "justify" }}>
                    Become a Zojapay Super Agent and unlock a world of
                    opportunities.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Earn additional income by offering financial services to
                    your community.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Provide services such as cash deposits, withdrawals, and
                    transfers, making a difference in people lives.
                  </p>
                </div>
              </div>
            </article>
            {/* article 3 */}
            <article className="article-container">
              <div className="content-wrapper">
                <div className="number">
                  <p className="custom-number">3</p>
                </div>
                <h3 className="title">Fund Wallet</h3>
                <div className="description">
                  <p style={{ textAlign: "justify" }}>
                    Easily load funds into your Zojapay wallet and enjoy
                    hassle-free transactions.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    {" "}
                    Link your bank account or use other convenient methods to
                    add money to your wallet.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    {" "}
                    Access your funds instantly for payments, transfers, and
                    other financial activities.
                  </p>
                </div>
              </div>
            </article>
            {/* article 4 */}
            <article className="article-container">
              <div className="content-wrapper">
                <div className="number">
                  <p className="custom-number">4</p>
                </div>
                <h3 className="title">Pay for Bills and Utilities</h3>
                <div className="description">
                  <p style={{ textAlign: "justify" }}>
                    Simplify your life by paying bills and utilities through
                    Zojapay.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Settle your electricity, water, internet, and other bills
                    with just a few taps on your phone.
                  </p>
                  <p style={{ textAlign: "justify" }}>
                    Avoid queues and late payment fees, and keep track of your
                    transactions seamlessly.
                  </p>
                </div>
              </div>
            </article>
          </div>
          <div className="button-div">
            <Button />
          </div>
        </section>
      </div>
    </div>
  );
}

export default Feature;
