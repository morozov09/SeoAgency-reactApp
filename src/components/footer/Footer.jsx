import footerStyles from './footer.css'

import footerLogo from '../../assets/img/header/logo_footer.svg';
import social from '../../assets/img/socials/pint.png'
import social02 from '../../assets/img/socials/inst.png'
import social03 from '../../assets/img/socials/facebook.png'
import social04 from '../../assets/img/socials/yt.png'

const Footer = () => {
    return (
      <footer id='feedback' className="footer">
        <div className="container">
          <div className="footer__promo d-flex a-items j-cont">
            <div className="footer__promo-textside">
              <h4>
                Subscribe To Get The Latest <br /> News About Us
              </h4>
              <p>
                Latest news about our company and our community. <br /> Let’s
                subscribe!
              </p>
            </div>
            <form className="footer__form">
              <input
                className="footer__input"
                maxLength={40}
                placeholder="Enter your mail..."
                type="text"
                name="footer_name"
                id="mail_subscribe"
              />
              <input className="footer__btn-send" type="button" value="Send" />
            </form>
            <hr className="footer__hr" />
          </div>

          <div className="footer__main d-flex j-cont">
            <div className="footer__logo">
              <img src={footerLogo} alt="footerLogo" />
              <p>Powered by padushkaxl dev</p>
            </div>
            <div className="footer__links">
              <ul className="footer__link">
                <li>About</li>
                <li>
                  <a href="#!">About us</a>
                </li>
                <li>
                  <a href="#!">Features</a>
                </li>
                <li>
                  <a href="#!">News</a>
                </li>
                <li>
                  <a href="#!">Careers</a>
                </li>
              </ul>
              <ul className="footer__link">
                <li>Company</li>
                <li>
                  <a href="#!">Our Team</a>
                </li>
                <li>
                  <a href="#!">Partner With Us</a>
                </li>
                <li>
                  <a href="#!">FAQ</a>
                </li>
                <li>
                  <a href="#!">Blog</a>
                </li>
              </ul>
              <ul className="footer__link">
                <li>Support</li>
                <li>
                  <a href="#!">Account</a>
                </li>
                <li>
                  <a href="#!">Support Center</a>
                </li>
                <li>
                  <a href="#!">Feedback</a>
                </li>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
                <li>
                  <a href="#!">Accesbility</a>
                </li>
              </ul>
              <ul className="footer__link">
                <li>Get in Touch</li>
                <li>
                  <a href="#!">ion or Feedback?</a>
                </li>
                <li>
                  <a href="#!">We’d love to hear from you</a>
                </li>
                <div className="social__links">
                  <a href="#!"><img src={social} alt="social" /></a>
                  <a href="#!"><img src={social02} alt="social" /></a>
                  <a href="#!"><img src={social03} alt="social" /></a>
                  <a href="#!"><img src={social04} alt="social" /></a>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
}
 
export default Footer;