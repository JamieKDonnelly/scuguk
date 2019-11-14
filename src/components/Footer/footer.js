import React from "react";
import { Link } from "gatsby";
import Logo from '../Logo/logo'
import './footer.scss'

const Footer = () => (
  <footer className="footer">
    <div className="container">

        <Link className="footer__logo" activeClassName="active" to="/">
            <Logo />
        </Link>

        <nav className="nav">
            <ul className="nav__items" role="navigation" aria-label="main-navigation">
                <li>
                    <Link activeClassName="active" to="/work">

                    </Link>
                </li>
                <li>
                    <Link activeClassName="active" to="/blog">

                    </Link>
                    {/* <BlogNav /> */}
                </li>
                <li>
                    <Link activeClassName="active" to="/about">

                    </Link>
                </li>
            </ul>   
        </nav> 

        <p>Copyright &copy; Sitecore User Group UK</p>

    </div>       
  </footer>
)

export default Footer


  
