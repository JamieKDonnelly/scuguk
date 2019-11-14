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
            <TransitionLink activeClassName="active" to="/work" entry={transitionLinkSettings.entry} exit={transitionLinkSettings.exit} > 
              Work
            </TransitionLink>
          </li>
          <li>
            <TransitionLink activeClassName="active" to="/blog" entry={transitionLinkSettings.entry} exit={transitionLinkSettings.exit} > 
              Blog
            </TransitionLink>
            {/* <BlogNav /> */}
          </li>
          <li>
            <TransitionLink activeClassName="active" to="/about" entry={transitionLinkSettings.entry} exit={transitionLinkSettings.exit} > 
              About
            </TransitionLink>
          </li>
        </ul>   
      </nav> 
    </div>       
  </header>
)

export default Header

if(typeof window !== 'undefined'){

  window.addEventListener('scroll', function(){
    let doc = document.documentElement;
    (window.pageYOffset || doc.scrollTop) - (doc.clientTop || 0) > 100 ? 
      document.body.classList.add('sticky') : document.body.classList.remove('sticky');
  });
}


  
