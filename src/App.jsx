
import './App.css';
import logo from "./assets/images/logo.png";
import amazon from "./assets/images/amazon.png";
import spotify from "./assets/images/spotify.png";
import meta from "./assets/images/meta.png";
import downarrow from "./assets/images/down-arrow.svg";
import blueRocket from "./assets/images/blue-rocket.png";
import girlsImage from "./assets/images/girls-image.png";
import linkedinImg from "./assets/images/linkedin.svg";
import instagramImg from "./assets/images/instagram.svg";
import twitterImg from "./assets/images/twitter.svg";
import facebookImg from "./assets/images/facebook.svg";
import copyrightImg from "./assets/images/copyright.svg";
import uptriangleImg from "./assets/images/up-triangle.svg";
import alishaImg from "./assets/images/alisha.png";
import michaelImg from "./assets/images/michael.png";
import leeImg from "./assets/images/lee.png";

function App() {

  return (
    <div className="app">
      {/* Header */}
      <header className="header">
        <div className="header__container">
          <div className="header__left">
            <img className="page__logo" src={logo} alt="page logo" />
            <div className="filters__text">Filters</div>
            <img className="down__arrow" src={downarrow} alt="down arrow" />
            <div>About Us</div>
            <div>Blog</div>
          </div>

          <div className="header__right">
            <button className="earning__calc">Earning calculator</button>
            <button className="login__btn">Login</button>
            <button className="signup__btn">Signup</button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero__container">
            <img className="blue__rocket" src={blueRocket} alt="blue rocket" />
            <img className="girlsImage" src={girlsImage} alt="girls image" />

            <div className="hero__text">
            <h1 className="hero__heading">Grow Faster Together</h1>
            <p className="hero__desc">Find a mentor or Lead the path for someone
It&apos;s a win win!</p>
        <div className="hero__btn">
          <button type="button">Find A Mentor</button>
          <button type="button">Become a Mentor</button>
        </div>
        </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features">
        <div className="features__container">

          <div className="experties">
            <h3 className="experties__title">Find the expertises from</h3>
            <div className="featured__companies">
              <img src={amazon} alt="amazon logo" />
              <img src={spotify} alt="spotify logo" />
              <img src={meta} alt="meta logo" />
            </div>
          </div>

          <div className="career__growth">
            <h3 className="career__growth__title">
            Make your career growth in
            </h3>
            <div className="career__growth__box">
              <div className="career__card ux-design">UI/UI Design</div>
              <div className="career__card product-manage">Product Management</div>
              <div className="career__card marketing">Marketing</div>
              <div className="career__card data-science">Data Science</div>
              <div className="career__card teaching">Teaching</div>
            </div>
          </div>

        </div>
      </section>

      {/* Feedback Section Start */}
      <section className="feedback">
        <div className="feedback__container">
          <h3 className="feedback__title">What our Clients says about us</h3>

          <div className="feedback__list">
            <div>
            <div className="feedback__box">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
            <div className="client__name">Alisha</div>
            <img className="uptriangleImg" src={uptriangleImg} alt="up-triangle" />
            <img className="alishaImg" src={alishaImg} alt="alisha" />
            </div>
            <div className="client__designation">Founder, XOXO</div>
            </div>

            <div>
            <div className="feedback__box">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
            <div className="client__name">Machael</div>
            <img className="uptriangleImg" src={uptriangleImg} alt="up-triangle" />
            <img className="michaelImg" src={michaelImg} alt="michael" />
            </div>
            <div className="client__designation">Manager,QWERTY</div>
            </div>
            

            <div>
            <div className="feedback__box">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu
            <div className="client__name">Lee Cooper</div>
            <img className="uptriangleImg" src={uptriangleImg} alt="up-triangle" />
            <img className="leeImg" src={leeImg} alt="lee cooper" />
            </div>
            <div className="client__designation">HR Director, Meta</div>
            </div>
            
          </div>
        </div>
      </section>
      {/* Feedback Section End */}

      {/* FAQs Start */}
      <section className="faqs">
        <div className="faqs__container">
            <h3 className="faqs__title">Let&apos;s Clear your Doubts!</h3>
            <div>
              <div className="faqs__box">
                <p>What is the approval criteria to be a Mentor?         +</p>
              </div>
              <div className="faqs__box">
                <p>What is the approval criteria to be a Mentor?         +</p>
              </div>
              <div className="faqs__box">
                <p>What is the approval criteria to be a Mentor?         +</p>
              </div>
              <div className="faqs__box">
                <p>What is the approval criteria to be a Mentor?         +</p>
              </div>
            </div>
        </div>
      </section>
      {/* FAQs End */}

      {/* Footer Start */}
      <footer className="footer">
        <div className="footer__container">
          <div className="footer__left">
          <div className="socials">
            <img src={linkedinImg} alt="linkedinImg" />
            <img src={instagramImg} alt="instagramImg" />
            <img src={twitterImg} alt="twitterImg" />
            <img src={facebookImg} alt="facebookImg" />
          </div>

            <p className="copyright"><img src={copyrightImg} alt="copyright" /> 2023 M<span>entorbridge. </span>All Rights Reserved.</p>
          </div>
          

          <div className="footer__right">
          <div className="footer__text__section footer__text__first">
            <p>Contact us</p>
            <p>Privacy policy</p>
            <p>Terms of use</p>
          </div>
          <div className="footer__text__section footer__text__second">
            <p>Help center</p>
            <p>About us</p>
            <p>FAQs</p>
          </div>
          </div>
          
        </div>
      </footer>
      {/* Footer End */}


    </div>
  )
}

export default App
