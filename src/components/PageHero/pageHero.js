import React from "react";
import LogoCircle from "../Logo/LogoCircle";
import "./pageHero.scss";

const PageHero = props => (
  <section
    className={`pageHero theme__box--${props.theme} ${
      props.small ? "theme__box--small" : ""
    }`}
    style={{ backgroundImage: `url(${props.heroImage})` }}
  >
    <LogoCircle />
    <div className="container">
      <h1>{props.heading}</h1>
    </div>
  </section>
);

export default PageHero;
