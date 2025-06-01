import { Link } from "react-router-dom"
import './Header.less'
import logo from '../assets/LOGO.svg'
function Header(){
    return (
        <header>
            <div className="container">
                <a href="/"><img src={logo} alt="logo" /></a>
                <menu>
                    <Link className="link" to="/">Home</Link>
                    <Link className="link" to="/about">About us</Link>
                    <Link className="link" to="/services">Services</Link>
                    <Link className="link" to="/blog ">Blog</Link>
                    <Link className="link" to="">Contact us</Link>
                </menu>
            </div>
        </header>
    )
}
export default Header
