import React from "react";
import { Link } from "gatsby";
import { Container } from "react-bootstrap";
import NavLinks from "./nav-links";

import logoDark from "../../assets/images/logo-dark.png";

const HeaderTwo = () => {
  return (
    <div className="main-header__two">
      <div className="main-header__top">
        <Container>
          <p>Welcome to non profit charity platform</p>
          <div className="main-header__social">
            <a href="#none" aria-label="twitter">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#none" aria-label="facebook">
              <i className="fab fa-facebook-square"></i>
            </a>
            <a href="#none" aria-label="pinterest">
              <i className="fab fa-pinterest-p"></i>
            </a>
            <a href="#none" aria-label="instagram">
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </Container>
      </div>
      <div className="header-upper">
        <Container>
          <div className="logo-box">
            <Link to="/">
              <img src={logoDark} width="101" alt="" />
            </Link>
            <span className="fa fa-bars mobile-nav__toggler"></span>
          </div>

          <div className="header-info">
            <div className="header-info__box">
              <i className="azino-icon-email1"></i>
              <div className="header-info__box-content">
                <h3>Email</h3>
                <p>
                  <a href="mailto:needhelp@azino.com">needhelp@azino.com</a>
                </p>
              </div>
            </div>
            <div className="header-info__box">
              <i className="azino-icon-calling"></i>
              <div className="header-info__box-content">
                <h3>Phone</h3>
                <p>
                  <a href="tel:666-888-0000">666 888 0000</a>
                </p>
              </div>
            </div>
            <div className="header-info__box">
              <i className="azino-icon-address"></i>
              <div className="header-info__box-content">
                <h3>Visit</h3>
                <p>88 Broklyn Golden Street, USA</p>
              </div>
            </div>
          </div>
        </Container>
      </div>
      <nav className="main-menu">
        <Container>
          <NavLinks extraClassName="dynamic-radius" />
          <Link className="thm-btn dynamic-radius" to="/contact">
            Donate Now
          </Link>
        </Container>
      </nav>
    </div>
  );
};

export default HeaderTwo;
