import { Link } from "react-router-dom"
import * as React from 'react';
import '../styles/Navigation.css'
import photo from '/medias/PDP-Bilal_pro.JPG?url'
// { name: 'Accueil', link: '/' },

function Navigation() {
    const beforePages = [
        { name: 'Compétences', link: '/competences' },
        { name: 'Portfolio', link: '/portfolio' },
    ]
    const afterPages = [
        { name: 'About Me', link: '/aboutme' },
        { name: 'Contact', link: '/contact' },
    ]

    return (
        <header>
            <nav>
                <ul>
                    {beforePages.map((page) => (
                        <Link to={page.link} key={page.name}><li>{page.name}</li></Link>
                    ))}
                </ul>
                <Link to={'/'}><section id="avatar" ><img src={photo} alt="Avatar" /></section></Link>
                <ul>
                    {
                        afterPages.map((page) => (
                            <Link to={page.link} key={page.name}><li>{page.name}</li></Link>
                        ))
                    }
                </ul>
            </nav>
        </header>
    )
}

export default Navigation