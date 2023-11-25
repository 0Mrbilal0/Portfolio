import * as React from 'react'
import { Input } from '@mui/material'
import { Search } from '@mui/icons-material'

import Footer from "../Components/Footer"
import Navigation from "../Components/Navigation"
import Etoiles from '../Components/Etoiles'
import '../styles/Competences.css'
import competences from '../assets/Competences.json'

function Competences() {
    return (
        <>
            <Navigation />
            <main id='competences'>
                
                <section id='langages'>
                    <h2>Langages:</h2>
                    {
                        competences.Langages.map((competence) => (
                            <section className="competence-cards" key={competence.name}>
                                <ul>
                                    <li>{competence.name}</li>
                                    <li><Etoiles niveau={competence.niveau} /> </li>
                                </ul>
                            </section>
                        ))
                    }
                </section>

                <section id='frameworks'>
                    <h2>Frameworks:</h2>
                    {
                        competences.Frameworks.map((competence) => (
                            <section className="competence-cards" key={competence.name}>
                                <ul>
                                    <li>{competence.name}</li>
                                    <li><Etoiles niveau={competence.niveau} /> </li>
                                </ul>
                            </section>
                        ))
                    }
                </section>

                <section id='cms'>
                    <h2>CMS:</h2>
                    {
                        competences.CMS.map((competence) => (
                            <section className="competence-cards" key={competence.name}>
                                <ul>
                                    <li>{competence.name}</li>
                                    <li><Etoiles niveau={competence.niveau} /> </li>
                                </ul>
                            </section>
                        ))
                    }
                </section>

                <section id='softwares'>
                    <h2>Softwares:</h2>
                    {
                        competences.Softwares.map((competence) => (
                            <section className="competence-cards" key={competence.name}>
                                <ul>
                                    <li>{competence.name}</li>
                                    <li><Etoiles niveau={competence.niveau} /> </li>
                                </ul>
                            </section>
                        ))
                    }
                </section>

            </main>
            <Footer />
        </>
    )
}

export default Competences