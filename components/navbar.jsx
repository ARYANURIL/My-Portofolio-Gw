"use client"

import { useState } from 'react';
import { Link } from 'react-scroll'
import styles from './navbar.module.css'

export default function navbar() {
    const [activeNav, setActiveNav] = useState('about');
    const [diPenek, pasLagiDiPenek] = useState(false);

    const setGeserDewe = (namaTombol) => {
        if (diPenek) return;
        setActiveNav(namaTombol);
    }

    const pasTombolDiklik = (namaTombol) => {
        pasLagiDiPenek(true);
        setActiveNav(namaTombol);

        setTimeout(() => {
            pasLagiDiPenek(false);
        }, 600);
    }

    return (
        <div className={styles.container}>
            <div className={styles.box_name}>
                <div className={styles.firstname}>Arya</div>    
                <div className={styles.lastname}>Nuril</div>
                <div className={styles.titik}></div>
            </div>
            
            <div className={styles.brand}>
                <ul className="flex gap-6"> 
                    
                    <li>
                        <Link
                            to="about"
                            smooth={true}
                            duration={10}
                            offset={-190}
                            spy={true}
                            ignoreCancelEvents={true}
                            className={`cursor-pointer ${activeNav === 'about' ? styles.activeMenu : ''}`}
                            onSetActive={() => setGeserDewe('about')}
                            onClick={() => pasTombolDiklik('about')}
                        >
                            ABOUT
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="skill"
                            smooth={true} 
                            duration={10}
                            offset={-160}
                            spy={true}
                            ignoreCancelEvents={true}
                            className={`cursor-pointer ${activeNav === 'skill' ? styles.activeMenu : ''}`}
                            onSetActive={() => setGeserDewe('skill')}
                            onClick={() => pasTombolDiklik('skill')}                 
                        >
                            SKILLS
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="jurney"
                            smooth={true}
                            duration={10}
                            offset={-125}
                            spy={true}
                            ignoreCancelEvents={true}
                            className={`cursor-pointer ${activeNav === 'jurney' ? styles.activeMenu : ''}`}
                            onSetActive={() => setGeserDewe('jurney')}
                            onClick={() => pasTombolDiklik('jurney')}
                        >
                            JURNEY
                        </Link>
                    </li>

                    <li>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={10}
                            offset={-90}
                            spy={true}
                            ignoreCancelEvents={true}
                            className={`cursor-pointer ${activeNav === 'contact' ? styles.activeMenu : ''}`}
                            onSetActive={() => setGeserDewe('contact')}
                            onClick={() => pasTombolDiklik('contact')}
                        >
                            CONTACT
                        </Link>
                    </li>

                </ul>
            </div>  
        </div>
    )
}