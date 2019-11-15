import React from "react";
import Link from 'gatsby-plugin-transition-link';
import TransitionLink from 'gatsby-plugin-transition-link';
import transitionLinkSettings from '../TransitionLinkSettings/transitionLinkSettings'
import Logo from '../Logo/logo';
import './header.scss';

const Header = () => (
  <header className="header">
    <div className="container">
      
      <TransitionLink className="header__logo" activeClassName="active" to="/" entry={transitionLinkSettings.entry} exit={transitionLinkSettings.exit} > 
        <Logo />
      </TransitionLink>

      <nav className="nav">
        <ul className="nav__items" role="navigation" aria-label="main-navigation">
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

export default Header

// if(typeof window !== 'undefined'){

//   window.addEventListener('scroll', function(){
//     let doc = document.documentElement;
//     (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0) > 100 ? 
//       document.body.classList.add('sticky') : document.body.classList.remove('sticky');
//   });
// }


  
