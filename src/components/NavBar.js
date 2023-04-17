import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <nav className='navBar_flex'>
                <Link to='/'>Home</Link>
                <Link to='/about'>About</Link>
                <Link to='/service'>Service</Link>
                <Link to='/contact'>Contact</Link>
            </nav>
        </header>
    );
}

export default NavBar;