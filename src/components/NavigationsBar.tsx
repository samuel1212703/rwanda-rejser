import './NavigationsBar.css'
import Logo from '../images/logo.png'

export default function NavigationsBar() {
    return (
        <div id="bar">
            <img src={Logo} id='bar-logo'></img>
            <div id="links">
                <a href="/">Forside</a>
                <a href='/rejsetemaer'>Rejsetemaer</a>
                <a href='/overnatning'>Overnatning</a>
                <a href='/info'>Praktisk info</a>
                <a href='/kontakt'>Info & Kontakt</a>
            </div>
        </div>
    )
}