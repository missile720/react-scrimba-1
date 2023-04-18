import "./Navbar.css"
import ReactIcon from "../images/react-icon-small.png"

function Navbar() {
    return (
        <nav className="navBar">
            <img src={ReactIcon} alt="react-icon" id="navIcon"/>
            <h2 className="iconText">ReactFacts</h2>
            <h3 className="navInfo">React Course - Project 1</h3>
        </nav>
    )
}

export default Navbar