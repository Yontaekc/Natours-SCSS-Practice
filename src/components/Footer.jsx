import React from "react";

let Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__logo-box">
        <img
          src="img/logo-green-2x.png"
          alt="Full logo"
          className="footer__logo"
        />
      </div>
      <div className="row">
        <div className="col-1-of-2">
          <div className="footer__navigation">
            <ul className="footer__list">
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Company
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Contact us
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Careers
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Privacy policy
                </a>
              </li>
              <li className="footer__item">
                <a href="#" className="footer__link">
                  Temrs
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="col-1-of-2">
          <p className="footer__copyright">
            Built by{" "}
            <a href="#" className="footer__link">
              Yon Taek Chung
            </a>{" "}
            for SCSS practice
            <a href="#" className="footer__link">
              Advnaced CSS and SASS
            </a>
            . Copyright &copy; by Jonas Schmedtmann.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
