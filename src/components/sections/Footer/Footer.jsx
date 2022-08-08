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
    </footer>
  )
}

export default Footer