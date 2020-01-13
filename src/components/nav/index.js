import React from "react"
import { Link } from "gatsby"
import { window } from "browser-monads"
import logo from "../../images/favicon-1.png"
import "./nav.css"
function Nav() {
  return (
    <nav>
      <div className="nav__items">
        <a href="/" className="nav__item--left">
          <img
            className="nav__item--logo"
            src={logo}
            alt="Traveller Pack Logo"
          />
        </a>
        <Link
          className={
            window.location.href.indexOf("contact") > 0
              ? "nav__item--link active"
              : "nav__item--link"
          }
          to="/contact"
        >
          Contact
        </Link>
        <Link
          className={
            window.location.href.indexOf("blog") > 0 ||
            window.location.href.indexOf("category") > 0
              ? "nav__item--link active"
              : "nav__item--link"
          }
          to="/blog"
        >
          Blog
        </Link>
      </div>
    </nav>
  )
}
export default Nav
