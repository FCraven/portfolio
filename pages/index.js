import Head from 'next/head'
import styles from '../styles/Home.module.css'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Frank Craven's Portfolio</title>
        <link rel="icon" href="/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@600&display=swap" rel="stylesheet" />
      </Head>

      <main className={`${styles.main} ${styles.neumorphic}`}>
        <div className={`${styles.headline} ${styles.neumorphic}`}>
          <h3 className={styles.h3}>
            This site is currently being upgraded
          </h3>
        </div>
        <div className={`${styles.linksContainer} ${styles.neumorphic}`}>
          {/* <ul className={styles.linksList}>
            <li className={styles.neumorphic}>LinkedIn</li>
            <li>Instagram</li>
            <li>GitHub</li>
            <li>Resume</li>
          </ul> */}
        </div>
      </main>

    </div>
  )
}
