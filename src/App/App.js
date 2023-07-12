import { useEffect } from "react";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import Landing from "../components/Landing/Landing";
import Services from "../components/Services/Services";
import "./App.css";

function App() {


  // useEffect(()=>{

  //   const 

  // })


  return (
    <div className="App">
      <div className="uk-preserve-color nav-top">
        <div data-uk-sticky="start: 0; animation: uk-animation-slide-top; sel-target: .uk-navbar-container; cls-active: uk-navbar-sticky; end: !.nav-top;">
          <nav className="uk-navbar-container">
            <div className="uk-container uk-container-expand">
              <div data-uk-navbar>
                <div id="navbar">
                  <a href=".">
                    <h1 id="brand">
                      <img src="https://img.icons8.com/ios-filled/50/000000/wallet.png" />
                      FinEdge.{" "}
                    </h1>
                  </a>

                  <div id="web-menu">
                    <ul className="uk-navbar-nav">
                      <li className="uk-active">
                        <a href="#"> Home </a>
                      </li>
                      <li className="uk-active">
                        <a href="#about"> About </a>
                      </li>
                      <li className="uk-active">
                        <a href="#services"> Services</a>
                      </li>
                      <li className="uk-active">
                        <a href="#contact"> Contact</a>
                      </li>
                    </ul>
                  </div>

                  <div id="menu">
                    <button id="menu-btn" class="uk-button" type="button">
                      {" "}
                      <span data-uk-icon="menu" />{" "}
                    </button>
                    <div data-uk-dropdown="mode: click">
                      <ul class="uk-nav uk-dropdown-nav">
                        <li className="uk-active">
                          <a href="#"> Home </a>
                        </li>
                        <li className="uk-active">
                          <a href="#about"> About </a>
                        </li>
                        <li className="uk-active">
                          <a href="#services"> Services</a>
                        </li>
                        <li className="uk-active">
                          <a href="#contact"> Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          </div>

          <div className="wrap">
            <Landing />
            <About />
            <Services />
            <Contact />
            <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
