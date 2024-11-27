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
        <li className="nav-item" role="presentation">
            <a className={"nav-link "+isActive} href={link.link}>
                {link.name}
            </a>
        </li>
    )
}

export default Link