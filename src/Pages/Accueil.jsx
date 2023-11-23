import Navigation from "../Components/Navigation"
import Footer from "../Components/Footer"
import photo from "/medias/PDP-Bilal_pro.JPG?url"
import '../styles/Accueil.css'

function Accueil() {
    return (
        <>
            <Navigation />
            <main>
                <figure >
                    <section id="avatar" style={{backgroundColor: "black"}}><img src={photo} alt="avatar"/></section>
                    <figcaption>
                        <ul className="label">
                            <li className="font-48">Bilal ITCHIR</li>
                            <li className="font-40">Développeur Concepteur D'application</li>
                        </ul>
                    </figcaption>
                </figure>
            </main>
            <Footer />
        </>
    )
}

export default Accueil