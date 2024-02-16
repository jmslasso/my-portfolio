// components/Header.js

import Link from 'next/link';
import styles from '../styles/header.module.css';

const Header = () => (
  <header>
    <nav className={styles.navHeader}>
      <Link href="/" className={styles.link}>About Me</Link>
      <Link href="/" className={styles.link}>Projects</Link>
      <Link href="/" className={styles.link}>Contact</Link>
      <Link href="/" className={styles.link}>CV</Link>
    </nav>
  </header>
);

export default Header;