import "./App.css";
import { useEffect } from "react";
import LetterGlitch from "./components/LetterGlitch/LetterGlitch";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import ScrollSmoother from "gsap/ScrollSmoother";

gsap.registerPlugin(ScrollTrigger, ScrollSmoother);

function App() {
  useEffect(() => {
    ScrollSmoother.create({
      wrapper: "#smooth-wrapper",
      content: "#smooth-content",
      smooth: 1,
      effects: true,
      smoothTouch: 0.1,
    });
  }, []);

  return (
    <div className="App" id="smooth-wrapper">
      <div id="smooth-content">
        <header className="App-header">
          <div className="container">
            <div className="background-glitch" data-speed="0.8">
              <LetterGlitch
                glitchSpeed={100}
                smooth={true}
                outerVignette={false}
                centerVignette
                characters="SONNYDOGGY509"
                glitchColors={["#ec7709"]}
                backgroundColor={"#240500"}
              />
            </div>
            <div className="content-overlay" data-speed="1.1">
              <h1 id="header-text">SonnyDoggy</h1>
              <span>creative generalist</span>
            </div>
            <span id="scroll-hint">↓ scroll ↓</span>
          </div>
        </header>
        <main>
            <section style={{backgroundImage: "linear-gradient(rgba(55, 18, 3, 0.8)), url(\"img/mera-view.webp\")"}}>
              <div data-speed="1.05" className="section-content">
                <h2>
                  Hello, I'm sonnydoggy
                </h2>
                <p>
                  I consider myself a creative generalist, something that might be confusing to people.
                  <br/>
                  Basically, I don't specialise in one creative artform. I like to use mainly audio and
                  visual artforms though so I guess I'm a bit specific about things.
                </p>
              </div>
            </section>
        </main>
      </div>
    </div>
  );
}

export default App;
