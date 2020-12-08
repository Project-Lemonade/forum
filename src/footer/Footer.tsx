import React from "react";
import "./footer.css";
import image from "./lemonglass.png";

export default class Footer extends React.PureComponent {
  render() {
    return (
      <div className="actual-footer">
        <div className="bg">
          <div className="max-width">
            <footer className="footer">
              <div className="footer-bottom">
                <h4 className="footer-text gradient-text">Project Lemonade</h4>
                <div className="footer-join">
                  <a
                    href="https://discord.gg/5YZ7NSJ45e"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Join Us
                  </a>
                </div>
              </div>
              <hr className="footer-hr" />
              <div className="footer-top">
                <div className="footer-logo">
                  <img className="footer-img" src={image} alt="logo" />
                </div>
                <div className="footer-about">
                  Project Lemonade is currently a project in development, we are
                  developing a system of tools which needs designers, artists,
                  developers... We would appreciate every and all help we can
                  get; if you are interested in helping us, please contact us
                  via our Discord server.
                </div>
                <div className="footer-links">
                  <div>
                    <a className="footer-link" href="#about">
                      About
                    </a>
                  </div>
                  <div>
                    <a className="footer-link" href="#faq">
                      FAQ
                    </a>
                  </div>
                  <div>
                    <a className="footer-link" href="#community">
                      Community
                    </a>
                  </div>
                </div>
                <div className="footer-links footer-icons">
                  <div>
                    <a
                      className="footer-link footer-icon"
                      target="_blank"
                      rel="noreferrer"
                      href="https://discord.gg/z4seSr9yKZ"
                    >
                      <i className="fab fa-discord"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      className="footer-link footer-icon"
                      target="_blank"
                      rel="noreferrer"
                      href="https://www.reddit.com/user/LemonadesMasterRace?utm_medium=android_app&utm_source=share"
                    >
                      <i className="fab fa-reddit"></i>
                    </a>
                  </div>
                  <div>
                    <a
                      className="footer-link footer-icon"
                      target="_blank"
                      rel="noreferrer"
                      href="https://instagram.com/projektlemonade?igshid=1ufyxpsewegdw"
                    >
                      <i className="fab fa-instagram"></i>
                    </a>
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
        <div className="copyright">&copy; Copyright 2020 Project Lemonade</div>
      </div>
    );
  }
}
