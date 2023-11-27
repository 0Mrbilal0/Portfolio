import Footer from "../Components/Footer"
import Navigation from "../Components/Navigation"
import '../styles/Portfolio.css'
import ProjectsCards from "../Components/ProjectsCards"

import cinemaxHome from '/medias/cinemax-Home.png'
import cinemaxSearch from '/medias/cinemax-Search.png'
import cinemaxFavorites from '/medias/cinemax-Fav.png'

import GPTHome from '/medias/GPT-Home.png'
import GPTQuest from '/medias/GPT-Quest.png'
import GPTLoading from '/medias/GPT-Loading.png'
import GPTRes from '/medias/GPT-Res.png'
import GPTHRes from '/medias/GPT-HRes.png'

function Portfolio() {
    const projects = [
        {
            "name": "Cinemax",
            "images": [
                { "image": cinemaxHome, "description": "Page principal avec la navigation en haut, une barre de recherche et un boutton", "alt": "cinemax home" },
                { "image": cinemaxSearch, "description": "Page principal avec une recherche qui a été faite, chaque films est dans une card avec la jaquette, le titre, un lien vers imdb ainsi qu'un boutton pour mettre en favorie", "alt": "cinemax search" },
                { "image": cinemaxFavorites, "description": "Visualisation des favories enregistrer", "alt": "cinemax favorites" }
            ]
        },
        {
            "name": "Projet GPT",
            "images": [
                { "image": GPTHome, "description": "Voici la page d'accueil, on a un formulaire qui contient un champs pour le nom et un champs pour le sujet.", "alt": "GPT home" },
                { "image": GPTQuest, "description": "Voici la page où on pause la question", "alt": "GPT question" },
                { "image": GPTLoading, "description": "Lorsque la question est envoyer le boutton change pour un loading qui est desactivé afin de notifier l'utillisateur que la requete est envoyé et est en attente de reponse.", "alt": "GPT loading" },
                { "image": GPTRes, "description": "Ici on peut voir que la reponse est bien recu.", "alt": "GPT reponse" },
                { "image": GPTHRes, "description": "Ici on peut voir une reponse si lla question ne correspond pas au sujet.", "alt": "GPT hors sujet" }
            ]
        },
    ]
    return (
        <>
            <Navigation />
            <main id="portfolio">
                {
                    projects.map(project => (
                        <section key={project.name}>
                            <ProjectsCards project={project} />
                        </section>
                    ))
                }
            </main>
            <Footer />
        </>
    )
}

export default Portfolio