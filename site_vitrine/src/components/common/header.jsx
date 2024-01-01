import logo from '../../assets/gcam.png';
import './header.css';
import { Link } from 'react-router-dom';

function Navbar() {
    const title = "G Cam";
    return (
        <div className="gcam-navbar">
            <img src={logo} alt = "gcam" className='gcam-logo ' />
            <ul >
                <li>
                    <a href='#Accueil' >Accueil</a>
                </li>
                <li>
                    <a href='#Documentation'>Documentation</a>
                </li>
                <li>
                    <a href='#Télécharger'>Télécharger</a>
                </li>
                <li>
                    <a href='#Contact'>Contact</a>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;