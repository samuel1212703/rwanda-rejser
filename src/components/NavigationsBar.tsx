import { useState } from 'react';
import './NavigationsBar.css';
import Logo from '../images/logo.png';
import { sider } from '../AppRouter';

export default function NavigationsBar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const mainLinks = sider.filter(side => !side.sti.startsWith('tilbud/'));
    const tilbudLinks = sider.filter(side => side.sti.startsWith('tilbud/'));

    return (
        <div id="bar">
            <img src={Logo} id='bar-logo' alt='logo'></img>
            <div id="menu-icon" onClick={toggleMenu}>
                &#9776; {/* hamburger toggle icon */}
            </div>
            <div id="links" className={isMenuOpen ? 'show' : ''}>
                {mainLinks.map((side) => {
                    if (side.sti !== "*") {
                        return (
                            <a href={"/" + side.sti} key={side.sti}>{side.titel}</a>
                        )
                    }
                })}
                <div className="dropdown">
                    <a href="/tilbud">Tilbud</a>
                    <div className="dropdown-content">
                        {tilbudLinks.map((side) => (
                            <a href={"/" + side.sti} key={side.sti}>{side.titel}</a>
                        ))}
                    </div>
                </div>
            </div>
            <div>
                <a href={"tel:" + process.env.REACT_APP_TELEFON_NUMMER}>{process.env.REACT_APP_TELEFON_NUMMER}</a>
            </div>
        </div>
    );
}
