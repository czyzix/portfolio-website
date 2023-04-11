import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <ul className="navbar-list">
                <li><a href="#about">ABOUT</a></li>
                <li><a href="#projects">PROJECTS</a></li>
                <li><a href="#contact">CONTACT</a></li>
            </ul>
        </div>
    );
}
 
export default Navbar;