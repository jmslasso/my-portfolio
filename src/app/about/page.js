import React from 'react';
import styles from '../../styles/about.module.css'
import Image from 'next/image';
import Spotify from '../../components/Spotify';
import Link from 'next/link';
import { ImInstagram } from "react-icons/im";
import { FaGithubSquare } from "react-icons/fa";
import { RiLinkedinBoxLine } from "react-icons/ri";

const AboutPage = () => {
  return(
    <div className={styles.descriptionContainer}>
      <section className={styles.profileContainer}>
        <Image src='/img/me.jpg' alt="Picture of the author" width={300} height={300} className={styles.backgroundImage} priority={true}/>
      </section>
      <section className={styles.textContainer}>
        <h1 className={styles.headerText}>Who's Juan Manuel?</h1>
        <span className={styles.spanText}>I’m a 24 years old electronical and telecommunications engineer passionate about learning new things. I’m always listening music, or traveling, reading, meeting new fabulous places, enjoying the little time that we have on the world, and discovering the purpose of life...</span>
      </section>
      <section className={styles.socialGrid}>
        <div className={styles.socialItems}>
          <Image src="/img/imgGrid1.jpg" alt='Picture 1' width={150} height={150} className={styles.socialImage} priority={true}/>
          <Image src="/img/imgGrid2.jpg" alt='Picture 2' width={150} height={150} className={styles.socialImage} priority={true}/>
          <Image src="/img/imgGrid3.jpg" alt='Picture 3' width={150} height={150} className={styles.socialImage} priority={true}/>
          <Image src="/img/imgGrid4.jpg" alt='Picture 4' width={150} height={150} className={styles.socialImage} priority={true}/>
        </div>
        <p>Some impressions taken on my camera!</p>
      </section>
      <section className={styles.socialContainer}>
        <aside>
          <div className={styles.spotifyWrapper}>
            <h2 style={{textAlignLast: 'center'}}>What I'm listening to on Spotify</h2>
            <Spotify />
          </div>
          <div className={styles.socialMedia}>
            <h2>Social Media</h2>
            <div className={styles.socialIcons}>
              <Link href="https://www.instagram.com/jmslasso" passHref={true}><ImInstagram size={30} /></Link>
              <Link href="https://github.com/jmslasso" passHref={true}><FaGithubSquare size={32} /></Link>
              <Link href="https://linkedin.com/in/jmslasso" passHref={true}><RiLinkedinBoxLine size={35} /></Link>
            </div>
          </div>
        </aside>
      </section>
      <nav>
        <div></div>
      </nav>
    </div>
  );
};

export default AboutPage;