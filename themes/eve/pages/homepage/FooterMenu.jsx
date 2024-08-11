import React from "react";
import "./FooterMenu.scss";
import { FaFacebookF, FaInstagram, FaMediumM, FaTwitter } from "react-icons/fa";

const FooterMenu = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer-container">
      <div className="footer-sections">
        <div className="footer-column">
          <h3>About Us</h3>
          <ul>
            <li>
              <a href="/about">Our Story</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/careers">Careers</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Help</h3>
          <ul>
            <li>
              <a href="/support">Customer Support</a>
            </li>
            <li>
              <a href="/faq">FAQs</a>
            </li>
            <li>
              <a href="/shipping">Shipping & Returns</a>
            </li>
            <li>
              <a href="/terms">Terms & Conditions</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Services</h3>
          <ul>
            <li>
              <a href="/consultation">Consultation</a>
            </li>
            <li>
              <a href="/custom">Custom Rugs</a>
            </li>
            <li>
              <a href="/trade">Trade Program</a>
            </li>
            <li>
              <a href="/care">Care & Maintenance</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h3>Connect</h3>
          <ul className="social-icons">
            <li>
              <a
                href="https://www.instagram.com/rug.harbor/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF />
              </a>
            </li>
            <li>
              <a
                href="https://medium.com/@rugharbor"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaMediumM />
              </a>
            </li>
            <li>
              <a
                href="https://x.com/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaTwitter />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>©{currentYear} rugharbor.com | All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default FooterMenu;

export const layout = {
  areaId: "content",
  sortOrder: 10
};
