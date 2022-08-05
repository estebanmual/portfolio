import React from 'react'
import style from './Footer.module.css'
import Angelist from '../../../assets/social_icons/angelist.svg'
import Github from '../../../assets/social_icons/github.svg'
import Linkedin from '../../../assets/social_icons/linkedin.svg'
import Medium from '../../../assets/social_icons/medium.svg'
import Twitter from '../../../assets/social_icons/twitter.svg'
import Instagram from '../../../assets/social_icons/instagram.svg'

function Footer() {
  return (
    <footer className={style.footerSection}>
        <div className={style.icons}>
            <a href=""> 
                <button><img src={Github} alt="" className={style.icon} /></button>
            </a>
            <a href=""> 
                <button><img src={Linkedin} alt="" className={style.icon} /></button>
            </a>
            <a href=""> 
                <button><img src={Medium} alt="" className={style.icon} /></button>
            </a>
            <a href=""> 
                <button><img src={Twitter} alt="" className={style.icon} /></button>
            </a>
            <a href=""> 
                <button><img src={Angelist} alt="" className={style.icon} /></button>
            </a>
            <a href=""> 
                <button><img src={Instagram} alt="" className={style.icon} /></button>
            </a>
        </div>
    </footer>
  )
}

export default Footer