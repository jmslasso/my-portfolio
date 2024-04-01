'use client';
import styles from '../styles/page.module.css'
import Introduction from '../components/Introduction'

export default function Home() {
  return (
    <main className={styles.main}>
      <Introduction />
    </main>
  )
}
