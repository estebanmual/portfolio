import React, { useState, useId, useEffect } from "react";
import style from "./Navbar.module.css";
import CloseMenu from "../../assets/navbar/close.svg";
import HamburgerMenu from "../../assets/navbar/hamburgerMenu.svg";
import Angelist from '../../assets/social_icons/angelist.svg'
import Github from '../../assets/social_icons/github.svg'
import Linkedin from '../../assets/social_icons/linkedin.svg'
import Medium from '../../assets/social_icons/medium.svg'
import Twitter from '../../assets/social_icons/twitter.svg'
import Instagram from '../../assets/social_icons/instagram.svg'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const navLinks = [
    {
      id: useId(),
      path: "homeSection",
      name: "Home",
    },
    {
      id: useId(),
      path: "projectSection",
      name: "Projects",
    },
    {
      id: useId(),
      path: "aboutMeSection",
      name: "About",
    },
    {
      id: useId(),
      path: "blogSection",
      name: "Blog",
    },
    {
      id: useId(),
      path: "contactSection",
      name: "Contact",
    },
  ];

  let prevScrollpos = window.pageYOffset;

  const clickLink = (e) => {
    e.preventDefault();
    setIsOpen(!isOpen);
    window.scrollTo(0, document.getElementById(e.target.getAttribute('href')).offsetTop);
  }
  
  useEffect(() => {
    const body = document.querySelector("body");
    isOpen ? body.style.overflow = "hidden" : body.style.overflow = "scroll";
    if(isOpen) {
      document.getElementById("hamburgerButton").classList.remove(style.hamburgerButtonInverted);
    }
  }, [isOpen]);

  window.addEventListener("scroll", () => {
    const currentScrollPos = window.pageYOffset;

    if (
      currentScrollPos > document.getElementById("homeSection").scrollHeight
    ) {
      document
        .getElementById("hamburgerButton")
        .classList.add(style.hamburgerButtonInverted);
    } else {
        document
        .getElementById("hamburgerButton")
        .classList.remove(style.hamburgerButtonInverted);
    }

    if (prevScrollpos > currentScrollPos || currentScrollPos === 0) {
      document.getElementById("hamburgerMenu").classList.remove(style.hideMenu);
    } else {
      document.getElementById("hamburgerMenu").classList.add(style.hideMenu);
    }
    prevScrollpos = currentScrollPos;
  });

  return (
    <>
      <div id="hamburgerMenu" className={style.hamburgerMenu}>
        <button
          id="hamburgerButton"
          className={style.hamburgerButton}
          onClick={() => setIsOpen(!isOpen)}
          type="button"
        >
          <img
            className={style.hamburgerImage}
            src={isOpen ? CloseMenu : HamburgerMenu}
            alt="logo"
          />
        </button>
      </div>
      <nav className={isOpen ? `${style.open} ${style.menu}` : `${style.menu}`}>
        <div className={style.blueBox}>
          <p>LET'S CONNECT</p>
        </div>
        <ul>
          {navLinks.map(({ id, name, path }) => (
            <li key={id}>
              <a href={path} onClick={(e) => clickLink(e)}>{name}</a>
            </li>
          ))}
        </ul>
        <div className={style.icons}>
            <a href="https://github.com/estebanmual"> 
                <button><img src={Github} alt="" className={style.icon} /></button>
            </a>
            <a href="https://www.linkedin.com/in/estebanmual"> 
                <button><img src={Linkedin} alt="" className={style.icon} /></button>
            </a>
            <a href="https://medium.com/@estebanmual"> 
                <button><img src={Medium} alt="" className={style.icon} /></button>
            </a>
            <a href="https://twitter.com/estebanmual"> 
                <button><img src={Twitter} alt="" className={style.icon} /></button>
            </a>
            <a href="https://angel.co/u/estebanmual"> 
                <button><img src={Angelist} alt="" className={style.icon} /></button>
            </a>
            <a href="https://www.instagram.com/estebanmual/"> 
                <button><img src={Instagram} alt="" className={style.icon} /></button>
            </a>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
