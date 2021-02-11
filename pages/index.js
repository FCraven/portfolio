import Head from 'next/head'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,
         faInstagram,
         faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'


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

        {/* HEADLINE */}
        <div className={`${styles.headline} ${styles.neumorphic}`}>
          <h3 className={styles.h3}>
            This site is currently being upgraded
          </h3>
        </div>

        {/* LINKS CONTAINER */}
        <div className={`${styles.linksContainer} ${styles.neumorphic}`}>

          <ul className={styles.ul}>

            {/* Resume */}
              <Link href='public/Resume-Francis-Craven.pdf' >
                <li className={`${styles.neumorphic} ${styles.li}`}>
                  <div className={`${styles.iconContainer} ${styles.neumorphic}`}>
                    <FontAwesomeIcon  className={styles.faIcon}
                                      icon={faFile}/>
                  </div>
                  <h3 className={styles.h3}>Resume</h3>
                </li>
              </Link>

             {/* LinkedIn */}
             <Link href='https://www.linkedin.com/in/frank-craven-ab1029b3/'>
              <li className={`${styles.neumorphic} ${styles.li}`}>
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon  className={styles.faIcon}
                                    icon={faLinkedin}/>
                </div>
                <h3 className={styles.h3}>LinkedIn</h3>
              </li>
            </Link>

            {/* Github */}
              <Link href='https://www.github.com/fcraven'>
                <li className={`${styles.neumorphic} ${styles.li}`}>
                  <div className={styles.iconContainer}>
                    <FontAwesomeIcon  className={styles.faIcon}
                                      icon={faGithub} />
                  </div>
                  <h3 className={styles.h3}>Github</h3>
                </li>
              </Link>

            {/* Instagram */}
            <Link href='https://www.instagram.com/francois_letanqa/'>
              <li className={`${styles.neumorphic} ${styles.li}`}>
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon  className={styles.faIcon}
                                    icon={faInstagram}/>
                </div>
                <h3 className={styles.h3}>Instagram</h3>
              </li>
            </Link>

          </ul>
        </div>
      </main>

    </div>
  )
}
