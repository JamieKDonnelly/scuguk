import React from "react";
import "./pageHero.scss";

const PageHero = props => (
  <section
    className={`pageHero theme--${props.theme} ${
      props.small ? "theme--small" : ""
    }`}
    style={{ backgroundImage: `url(${props.heroImage})` }}
  >
    <div class="container">
      <h1>{props.heading}</h1>
    </div>
  </section>
);

export default PageHero;
