import React from "react";
import "..//pages/style.css";
import gitHubLogo from "..//../assets/img/github-mark-white.png";
import linkedInLogo from "..//../assets/img/linkedin.png";

export default function Footer() {
  return (
    <footer className="fixed-bottom">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <ul className="footer-list d-flex justify-content-center">
              <li className="footer-link">
                <a href="https://github.com/aalexandr6">
                  <img
                    className="footerImg"
                    src={gitHubLogo}
                    alt="Link to Github"
                  />
                </a>
              </li>
              <li className="footer-link">
                <a href="https://www.linkedin.com/in/aaron-padilla-39a671106/">
                  <img
                    className="footerImg"
                    src={linkedInLogo}
                    alt="Link to LinkedIn"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
