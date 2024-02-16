import Image from 'next/image'
import styles from '../styles/page.module.css'
import Header from '../components/Header'
import Typewriter from '../components/Typewriter'

export default function Home() {
  return (
    <main className={styles.main}>
      <Header />
      <Typewriter text="Hello, World!" delay={100}/>
    </main>
  )
}
