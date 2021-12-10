import React from "react"
import { useState } from "react"

import NavLinks from "./NavLinks"

const Navbar = ({ theme }) => {
  const [toggle, setToggle] = useState(false)

  return (
    <header>
      <nav className={`nav ${theme ? theme : ''} flex flex-jc-sb flex-ai-c`}>
        <p className="nav__logo">
          seri <span>putra</span>
        </p>

        <button className="toggle-btn" onClick={() => setToggle(!toggle)}>
          <span></span>
          <span></span>
        </button>

        <ul className="nav__links-for-desktop flex-ai-c">
          <NavLinks active={"active"} />
        </ul>

        {toggle && (
          <ul className="nav__links-for-mobile">
            <NavLinks active={"active"} />
          </ul>
        )}
      </nav>
    </header>
  )
}

export default Navbar
