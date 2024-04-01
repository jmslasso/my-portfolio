// components/Header.js
'use client';
import Link from 'next/link';
import styles from '../styles/header.module.css';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();
  return (
    <header className={styles.headerContainer}>
      <nav className={styles.navHeader}>
        <Link href="/projects" className={pathname === "/projects" ? styles.activeLink: styles.link}>Projects</Link>
        <Link href="/contact" className={styles.link}>Contact</Link>
        <Link href="/cv" className={styles.link}>CV</Link>
        <Link href="/about" className={pathname === "/about" ? styles.activeLink : styles.link}>About</Link>
      </nav>
    </header>
  )
  };

export default Header;