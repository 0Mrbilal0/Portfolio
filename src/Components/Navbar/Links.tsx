import { useEffect, useState } from "react";
import { Links } from "../../@types/linksType";
import { useLocation } from "react-router-dom";

function Link(link: Links) {
    const [isActive, setIsActive] = useState<string>("")
    const actualPage: string = useLocation().pathname

    useEffect(() => {
        actualPage === link.link ? setIsActive("active") : setIsActive("")
    }, [actualPage])

    return (
        <li className="nav-item">
            <a href={link.link} className={`nav-link py-3 ${isActive} border border-dark rounded-circle`}>
                {link.icon}
            </a>
        </li>
    )
}

export default Link