import styles from '../styles/Navbar.module.css'
import Link from 'next/link'

const Navbar =()=> {
    return(
        <nav>
            <div>
                <h1>Frank Craven</h1>
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            <Link href='/contact'><a>Contact</a></Link>
            <Link href='/experience'><a>Experience</a></Link>
            <Link href='/tech'><a>Tech</a></Link>
        </nav>

    )
}

export default Navbar;
