import React from 'react';
import styles from './styles.module.css';
import {useState} from 'react';
import clsx from 'clsx';
import {useWindowSize,
    useNavbarSecondaryMenu
  } from '@docusaurus/theme-common/internal';
import NavbarMobileSidebarLayout from '../Navbar/MobileSidebar/Layout';
import {useNavbarMobileSidebar} from '@docusaurus/theme-common/internal';
import NavbarMobileSidebarToggle from '@theme/Navbar/MobileSidebar/Toggle';
import IconMenu from '@theme/Icon/Menu';

export default function MobileSidebar() {
    let [show, setShow] = useState(true);
    const windowSize = useWindowSize();
    const isMobile = windowSize !=='desktop';
    const {shown: secondaryMenuShown} = useNavbarSecondaryMenu();
    const secondaryMenu = useNavbarSecondaryMenu();
    const mobileSidebar = useNavbarMobileSidebar();

    show = show && isMobile;




    return (
        <div>
            <div style={{ display: show ? "block" : "none" }} onClick={() => setShow((s) => !s)}>
                <button className={styles.mobileSidebar} onClick={mobileSidebar.toggle} >
                <span className={styles.mobileSidebarArrow}></span>
                </button>
            </div>

            <div style={{ display: show ? "none" : "block" }}>
                  
                
            </div>
        </div>
        
    );
  }
