import { Navbar, Footer} from './index'

const Layout =({children})=> {
    return (
        <div className='content'>
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}

export default Layout;
