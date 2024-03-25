// eslint-disable-next-line no-unused-vars
import React from "react";
import "./footer.css";
import Logo from "../../assets/Image/zojapay.png";

function Footer() {
  return (
    <div className="footer">
      <div className="footer-wrapper">
        <div className="footer-side">
          <div className="footer-img">
            <img src={Logo} alt="Zojapay brand logo" />
          </div>

          <p className="footer-para">
            Zojapay is a peer-2-peer financial inclusion application that
            simplifies and enables hassle-free contactless and digital payments
            through modern day payment methods{" "}
          </p>
          <div className="copy">
            <a>
              <span className=""> &#169; 2020</span> Zojapay. All Right Reserved
            </a>
          </div>
        </div>

       
        <div className="footer-links">
          <div className="footer-link">
            <h3 className="footer-h3">Product Features</h3>
            <ul className="footer-ul">
             <a href=""><li>Contactless Payments</li></a> 
              <a href=""><li>Super Agent</li></a>
              <li>Fund Wallet</li>
              <li>Pay Bills and Utilities</li>
            </ul>
          </div>
          <div className="footer-link">
            <h3 className="footer-h3">Company</h3>
            <ul className="footer-ul">
              <li>Terms and condition</li>
              <li>Privacy policy</li>
              <li>FAQ</li>
            </ul>
          </div>
          <div className="footer-link">
            <h3 className="footer-h3">Support</h3>
            <ul className="footer-ul">
              <li>
                9b Akin-Ogunmade Davies Cl,
                <br />
                {/* Gbagada 102216, Lagos */}
              </li>
             <li> <a href="#">support@zojaypay.com</a></li>

              <li>Contact Us +23490168337330</li>

              <li className="follow">
                  Follow us
                  <a
                    href="https://www.facebook.com/zojapay" target="_blank"
                    className="text-primary">
                    {/* <BsFacebook size={20} /> */}
                  </a>
                  <a
                    href="https://twitter.com/zojapay?s=20" target="_blank"
                    className="text-primary">
                    {/* <FaTwitterSquare size={20} /> */}
                  </a>
                  <a
                    href="https://www.instagram.com/zojapay/?igshid=NTc4MTIwNjQ2YQ==" target="_blank"
                    className="text-primary">
                    {/* <BsInstagram size={20} /> */}
                    <i className="fa-brands fa-instagram  text-[15px]"></i>
                  </a>
                </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
