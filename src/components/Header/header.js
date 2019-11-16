import React, { useState } from "react";
import TransitionLink from 'gatsby-plugin-transition-link';
import transitionLinkSettings from '../TransitionLinkSettings/transitionLinkSettings'
import Logo from '../Logo/logo';
import './header.scss';

function Header() {
  const [mobileNavActive, toggleMobileNav] = useState(false);

  return (
    <header className={`header ${mobileNavActive ? "header--mobileNavActive" : ""}`}>
      <div className="container">
        
        <TransitionLink className="header__logo" activeClassName="active" to="/" entry={transitionLinkSettings.entry} exit={transitionLinkSettings.exit} > 
          <Logo />
        </TransitionLink>

        <button className="header__mobileNav" onClick={() => toggleMobileNav(!mobileNavActive)}>
          <span></span>
        </button>

        <nav className="header__nav" >
          <ul role="navigation" aria-label="main-navigation">
            <li>
              <TransitionLink activeClassName="active" to="/events" entry={transitionLinkSettings.entry} exit={transitionLinkSettings.exit} > 
                <span>Events</span>
              </TransitionLink>
            </li>
            <li>
              <TransitionLink activeClassName="active" to="/newsletter" entry={transitionLinkSettings.entry} exit={transitionLinkSettings.exit} > 
                <span>Newsletter</span>
              </TransitionLink>
            </li>
            <li>
              <TransitionLink activeClassName="active" to="/sponsors" entry={transitionLinkSettings.entry} exit={transitionLinkSettings.exit} > 
                <span>Sponsors</span>
              </TransitionLink>
            </li>
            <li>
              <TransitionLink activeClassName="active" to="/contact" entry={transitionLinkSettings.entry} exit={transitionLinkSettings.exit} > 
                <span>Contact</span>
              </TransitionLink>
            </li>
          </ul>   
        </nav> 
      </div>       
    </header>
  )
}

export default Header

// if(typeof window !== 'undefined'){

//   window.addEventListener('scroll', function(){
//     let doc = document.documentElement;
//     (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0) > 100 ? 
//       document.body.classList.add('sticky') : document.body.classList.remove('sticky');
//   });
// }


  
