import React, {useState} from 'react'
import style from './Navbar.module.css'
import CloseMenu from '../../assets/navbar/close.svg'
import HamburgerMenu from '../../assets/navbar/hamburgerMenu.svg'


function Navbar() {
    const [isOpen, setIsOpen] = useState(false)
    let prevScrollpos = window.pageYOffset;

    window.addEventListener('scroll', () => {
        const currentScrollPos = window.pageYOffset;
        
        if (window.pageYOffset > document.getElementById('homeSection').scrollHeight) {
            document.getElementById('hamburgerButton').classList.add(style.hamburgerButtonInverted)
        } else {
            document.getElementById('hamburgerButton').classList.remove(style.hamburgerButtonInverted)
        }

        if (prevScrollpos > currentScrollPos) {
          document.getElementById("hamburgerMenu").classList.remove(style.hideMenu);
        } else {
          document.getElementById("hamburgerMenu").classList.add(style.hideMenu);
        }
        prevScrollpos = currentScrollPos;

    })

  return (
    <div id="hamburgerMenu" className={style.hamburgerMenu}>
        <button id="hamburgerButton" className={style.hamburgerButton} onClick={() => setIsOpen(!isOpen)} type="button">
          <img className={style.hamburgerImage} src={isOpen ? CloseMenu : HamburgerMenu} alt="logo" />
        </button>
    </div>
  )
}

export default Navbar