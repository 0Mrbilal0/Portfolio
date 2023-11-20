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
                    <section className="profil">
                        <img src={photo} alt="photo" />
                    </section>

                    <figcaption>
                        <h1>Presentation :</h1>
                        <ul style={{ display: 'flex', flexDirection: "column", gap: '1rem' }}>
                            <li>Je m'appelle Bilal ITCHIR.</li>
                            <li>Je suis à la recherche d'une nouvelle opportunité professionnelle. Fort de [nombre d'années d'expérience] ans d'expérience dans [domaine d'activité], je peux apporter à votre entreprise mes compétences en [compétence principale]. J'ai travaillé précédemment chez [ancienne entreprise] où j'ai occupé le poste de [ancien poste]. Je suis une personne motivée, dynamique et prête à relever de nouveaux défis. Je suis convaincu que mon expérience et mes compétences répondent parfaitement aux attentes du poste de [intitulé du poste] au sein de votre entreprise.</li>
                        </ul>
                    </figcaption>
                </figure>
            </main>
            <Footer />
        </>
    )
}

export default Accueil