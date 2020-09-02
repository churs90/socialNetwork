import React from 'react';
import styles from './Header.module.css';
import Logo from "./Logo";
import HeaderTitle from "./HeaderTitle";

const Header = () => {
  return (
    <div className={styles.header}>
      <Logo/>
      <HeaderTitle/>
    </div>
    )
}

export default Header;
