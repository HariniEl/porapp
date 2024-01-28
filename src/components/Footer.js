import "./FooterStyles.css";

import React from "react";
import {
  FaGithub,
  FaHome,
  FaInstagram,
  FaLinkedin,
  FaMailBulk,
  FaPhone,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={{ color: "#fff", marginRight: "2rem" }} />
            <div>
              <p>No.5,Pavazha Nagar, 1st Street</p>
              <p>Reddiyarpalayam, Puducherry-605005.</p>
            </div>
          </div>
          <div className="phone">
            <h4>
              <FaPhone
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              9952751719
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk
                size={20}
                style={{ color: "#fff", marginRight: "2rem" }}
              />
              harielango0605@gmail.com
            </h4>
          </div>
        </div>
        <div className="right">
          <div className="social">
            <NavLink to="https://github.com/HariniEl" target="blank">
              <FaGithub
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </NavLink>
            <NavLink
              to="https://www.linkedin.com/in/harinielango/"
              target="blank"
            >
              <FaLinkedin
                size={20}
                style={{ color: "#fff", marginRight: "1rem" }}
              />
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
