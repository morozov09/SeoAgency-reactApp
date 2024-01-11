import { useState } from "react";

import s from "./header.css";
import headerLogo from '../../assets/img/header/logo.svg'
import playImg from '../../assets/img/header/Play.svg'
import headerBg from '../../assets/img/header/header-bg.png'

const Header = () => {

  const [activeItem, setActiveItem] = useState('Home');

  // Функция для обновления активного элемента при клике
  const handleItemClick = (item) => {
    setActiveItem(item);
  };

    return (
      <header className="header">
        <div className="container">
          <div className="header__wrapper">
            <a href="#!">
              <img className="header__logo" src={headerLogo} alt="headerLogo" />
            </a>
            <nav className="nav">
              <ul>
                <li>
                  <a
                    className={`nav__link-a ${
                      activeItem === "Home" ? "active" : ""
                    }`}
                    href="#!"
                    onClick={() => handleItemClick("Home")}
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    className={`nav__link-a ${
                      activeItem === "About" ? "active" : ""
                    }`}
                    href="#!"
                    onClick={() => handleItemClick("About")}
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    className={`nav__link-a ${
                      activeItem === "Services" ? "active" : ""
                    }`}
                    href="#!"
                    onClick={() => handleItemClick("Services")}
                  >
                    Services
                  </a>
                </li>
                <li>
                  <a
                    className={`nav__link-a ${
                      activeItem === "Project" ? "active" : ""
                    }`}
                    href="#!"
                    onClick={() => handleItemClick("Project")}
                  >
                    Project
                  </a>
                </li>
                <li>
                  <a
                    className={`nav__link-a ${
                      activeItem === "Feedback" ? "active" : ""
                    }`}
                    href="#!"
                    onClick={() => handleItemClick("Feedback")}
                  >
                    Feedback
                  </a>
                </li>
                <li>
                  <a
                    className={`nav__link-a ${
                      activeItem === "Blog" ? "active" : ""
                    }`}
                    href="#!"
                    onClick={() => handleItemClick("Blog")}
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    className={`nav__link-a ${
                      activeItem === "Contact" ? "active" : ""
                    }`}
                    href="#!"
                    onClick={() => handleItemClick("Contact")}
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__promo d-flex a-items j-cont">
            <div className="header__promo-text-wrapper">
              <h1>
                Grow your <br />
                Business Google Ads & Instagram Ads
              </h1>
              <p className="header__promo-p">
                It is a long established fact that a reader will be distracted
                by the readable.
              </p>
              <div className="header__promo-btns">
                <a className="header__contact-btn" href="#!">
                  Contact Us
                </a>
                <div className="header__promo-video-btn c-pointer">
                  <img src={playImg} alt="playImg" />
                  <p className="header__promo-video-btn-p">Intro Video</p>
                </div>
              </div>
            </div>
            <img className="header__promo-bg" src={headerBg} alt="headerBg" />
          </div>
        </div>
      </header>
    );
}
 

export default Header;
