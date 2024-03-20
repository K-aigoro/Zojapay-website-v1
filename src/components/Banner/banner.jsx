// eslint-disable-next-line no-unused-vars
import React from "react";
import Button from "../button/Button";
import "./banner.css";
import Download from "../../assets/Image/download.png";
import Payment from "../../assets/Image/payment.png";
import Mobile from "../../assets/Image/mobile-operations.png"

function Banner() {
  return (
    <section>
      <div className="section">
        {/* section 1 */}
        <div className="safety">
          <h2 className="h2-text">
            We are committed to your safety and earnings{" "}
          </h2>
          <p className="p-text">
            Our highly secure platform enables you to focus solely on generating
            revenues
          </p>
          <Button />
        </div>
        {/* section 2 */}
        <div className="payment">
          {/* First div  */}
          <div className="smart">
            <div  style={{ textAlign: 'center' }}>
              <img src={Download} alt="Payment" className="pic"/>
              <p className="text-primary">Turn your smartphone into a cash register</p>
            </div>
            <div style={{ textAlign: 'center' }}>
              <img src={Payment} alt="Payment" className="pic"/>
              <p className="text-primary">Accept Payment anywhere, anytime with ease</p>
            </div>
          </div>
          {/* second div  */}
          <div className="">
            <img src={Mobile} alt=""  className="pic"/>
            <p className="text-primary">
              Simplify your everyday business with our all-in-one app
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
