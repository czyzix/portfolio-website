import { SiGithub } from 'react-icons/si';
import { SiLinkedin } from 'react-icons/si';
import { RiInstagramFill } from 'react-icons/ri';
import "./sidebar.css"

const Sidebar = () => {
    return (
        <>
        <div className="sidebar-container">
            <ul className="sidebar-list">
                <li><a className="ico" href="https://github.com/czyzix"><SiGithub /></a></li>
                <li><a className="ico" href="https://www.linkedin.com/in/radoslawczyzewski"><SiLinkedin /></a></li>
                <li><a className="ico" href="https://www.instagram.com/rdc_graphics"><RiInstagramFill /></a></li>
            </ul>
            <p className='social-text'>my social media</p>
        </div>
        </> 
    );
}
 
export default Sidebar;