import { Link } from "react-router-dom"

function Navigation() {
    return (
        <nav>
            <img src="" alt="LOGO" />
            <ul>
                <Link to={"/"}><li>Acceuil</li></Link>
                <Link to={"/competences"}><li>Compétences</li></Link>
                <Link to={"/portfolio"}><li>Portfolio</li></Link>
                <Link to={"/contact"}><li>Contact</li></Link>
            </ul>
        </nav>
    )
}

export default Navigation