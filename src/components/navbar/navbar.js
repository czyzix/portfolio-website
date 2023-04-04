import "./navbar.css"

const Navbar = () => {
    return (
        <div className="navbar-container">
            <ul className="navbar-list">
                <li><a data-text="ABOUT" href="#about">ABOUT</a></li>
                <li><a data-text="PROJECTS" href="#projects">PROJECTS</a></li>
                <li><a data-text="CONTACT" href="#contact">CONTACT</a></li>
            </ul>
        </div>
    );
}
 
export default Navbar;