import React from 'react';
import clsx from 'clsx';
import DocsVersionDropdownNavbarItem from '@theme/NavbarItem/DocsVersionDropdownNavbarItem';
import SearchBar from '@theme/SearchBar';
import {useNavbarSecondaryMenu} from '@docusaurus/theme-common/internal';
import styles from './styles.module.css';
import DocsVersionNavbarItem from '@theme/NavbarItem/DocsVersionNavbarItem';
export default function NavbarMobileSidebarLayout({
  header,
  primaryMenu,
  secondaryMenu,
}) {
  const {shown: secondaryMenuShown} = useNavbarSecondaryMenu();
  return (
    <div className="navbar-sidebar">
      {header}
      
      <div
        className={clsx('navbar-sidebar__items', {
          'navbar-sidebar__items--show-secondary': secondaryMenuShown,
        })}>
        <div className="navbar-sidebar__item menu">{primaryMenu}</div>
        <div className="navbar-sidebar__item menu">{secondaryMenu}</div>
        
      </div>
    </div>
    

  );
}
