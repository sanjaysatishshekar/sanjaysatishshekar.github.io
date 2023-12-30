import { useState } from "react";

export function Header() {
  const [openMenu, setOpenMenu] = useState(false);
  const [openIcon, setOpenIcon] = useState(false);

  const toggle = () => {
    setOpenMenu(!openMenu);
    setOpenIcon(!openIcon);
  }

  return (
    <>
      <nav id="desktop-nav">
        <div className="logo">Sanjay Satish Shekar</div>
        <div>
          <ul className="nav-links">
            <li>
              <a href="#about">About</a>
            </li>
            {/* <li>
              <a href="#experience">Experience</a>
            </li>
            <li>
              <a href="#projects">Projects</a>
            </li> */}
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
      <nav id="hamburger-nav">
        <div className="logo">Sanjay Satish Shekar</div>
        <div className="hamburger-menu">
          <div className={"hamburger-icon" + (openIcon ? " open": "")} onClick={toggle}>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className={"menu-links" + (openMenu ? " open": "")}>
            <li>
              <a href="#about" onClick={toggle}>About</a>
            </li>
            {/* <li>
              <a href="#experience" onClick={toggle}>Experience</a>
            </li>
            <li>
              <a href="#projects" onClick={toggle}>Projects</a>
            </li> */}
            <li>
              <a href="#contact" onClick={toggle}>Contact</a>
            </li>
          </div>
        </div>
      </nav>
    </>
  );
}
