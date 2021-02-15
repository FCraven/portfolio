import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub,
         faInstagram,
         faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faFile } from '@fortawesome/free-regular-svg-icons'

const MenuLink =(props)=> {
  return (
    <>
      <li className={`${styles.neumorphic} ${styles.li}`}>
                <a  className={styles.a}
                    href='Resume-Francis-Craven.pdf'
                    target='_blank'>
                    <div className={styles.iconLinkContainer}>
                      <div className={`${styles.iconContainer} ${styles.neumorphic}`}>
                        <FontAwesomeIcon  className={styles.faIcon}
                                          icon={faFile}/>
                      </div>
                      <h3 className={`${styles.linkText} ${styles.text}`}>Resume</h3>
                    </div>
                </a>
              </li>
    </>
  )
}



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
          <div className={`${styles.headlineText} ${styles.text}`}>
            This site will undergo renovations from 2/13/2021 - 2/20/2021

          </div>
        </div>

        {/* LINKS CONTAINER */}
        <div className={`${styles.linksContainer} ${styles.neumorphic}`}>

          <ul className={styles.ul}>

            {/* Resume */}
              <li className={`${styles.neumorphic} ${styles.li}`}>
                <a  className={styles.a}
                    href='Resume-Francis-Craven.pdf'
                    target='_blank'>
                    <div className={styles.iconLinkContainer}>
                      <div className={`${styles.iconContainer} ${styles.neumorphic}`}>
                        <FontAwesomeIcon  className={styles.faIcon}
                                          icon={faFile}/>
                      </div>
                      <h3 className={`${styles.linkText} ${styles.text}`}>Resume</h3>
                    </div>
                </a>
              </li>


             {/* LinkedIn */}
            <li className={`${styles.neumorphic} ${styles.li}`}>
              <a  className={styles.a}
                  href='https://www.linkedin.com/in/frank-craven-ab1029b3/'
                  target='_blank'>
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon  className={styles.faIcon}
                                    icon={faLinkedin}/>
                </div>
                <h3 className={`${styles.linkText} ${styles.text}`}>LinkedIn</h3>
              </a>
            </li>

            {/* Github */}
              <li className={`${styles.neumorphic} ${styles.li}`}>
                <a  className={styles.a}
                    href='https://www.github.com/fcraven'
                    target='_blank'>
                  <div className={styles.iconContainer}>
                    <FontAwesomeIcon  className={styles.faIcon}
                                      icon={faGithub} />
                  </div>
                  <h3 className={`${styles.linkText} ${styles.text}`}>Github</h3>
                </a>
              </li>

            {/* Instagram */}
            <li className={`${styles.neumorphic} ${styles.li}`}>
              <a  className={styles.a}
                  href='https://www.instagram.com/francois_letanqa/'
                  target='_blank'>
                <div className={styles.iconContainer}>
                  <FontAwesomeIcon  className={styles.faIcon}
                                    icon={faInstagram}/>
                </div>
                <h3 className={`${styles.linkText} ${styles.text}`}>Instagram</h3>
              </a>
            </li>

          </ul>
        </div>
      </main>

    </div>
  )
}
