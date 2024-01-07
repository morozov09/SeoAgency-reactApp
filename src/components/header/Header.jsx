import s from "./header.css";
import headerLogo from '../../assets/img/header/logo.svg'
import playImg from '../../assets/img/header/Play.svg'
import headerBg from '../../assets/img/header/header-bg.png'

const Header = () => {
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
                  <a className="nav__link-a active" href="#!">Home</a>
                </li>
                <li>
                  <a className="nav__link-a" href="#!">About</a>
                </li>
                <li>
                  <a className="nav__link-a" href="#!">Services</a>
                </li>
                <li>
                  <a className="nav__link-a" href="#!">Project</a>
                </li>
                <li>
                  <a className="nav__link-a" href="#!">Feedback</a>
                </li>
                <li>
                  <a className="nav__link-a" href="#!">Blog</a>
                </li>
                <li>
                  <a className="nav__link-a" href="#!">Contact</a>
                </li>
              </ul>
            </nav>
          </div>
          <div className="header__promo d-flex a-items j-cont">
            <div className="header__promo-text-wrapper">
                <h1>
                Grow your <br />
                Business  Google Ads &
                Instagram Ads
                </h1>
                <p className="header__promo-p">It is a long established fact that a reader will be distracted by the readable.</p>
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
