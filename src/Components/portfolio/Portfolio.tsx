
interface Projects {
    Titre: string
    Description: string
    links: {
        demo: string
        github: string
    }

}

function Portfolio() {
    const projects: Projects[] = [
        {
            Titre: "CINEMAX",
            Description: "Ce projet est un site qui permet de rechercher un film spécifique via le nom du film et ainsi mettre certains film qui vous ont l'air interressants en favorie",
            links: {
                github: "https://github.com/0Mrbilal0/CINEMAX",
                demo: "https://cinemax-sage.vercel.app/"
            }
        },
        {
            Titre: "BOU",
            Description: "Ce projet est un site qui permet de rechercher un film spécifique via le nom du film et ainsi mettre certains film qui vous ont l'air interressants en favorie",
            links: {
                github: "https://github.com/0Mrbilal0/CINEMAX",
                demo: "https://cinemax-sage.vercel.app/"
            }
        }
    ]
    return (
        <>
            {
                projects.map((projet,i) => {
                    return (
                        <section className="d-flex flex-column align-items-center" key={projet.Titre}>
                            <div className="p-5 text-center m-1 d-flex justify-content-center gap-4 flex-wrap w-auto">
                                <img src="CINEMAX.png" alt="img_cinemax" className="w-50"/>
                                <section className="d-flex flex-column align-items-center justify-content-center gap-3">
                                    <h1 className="text-light">{projet.Titre}</h1>
                                    <p className=" fs-5 text-light">
                                        {projet.Description}
                                    </p>
                                    <div className="d-inline-flex gap-2">
                                        <a className="d-inline-flex align-items-center btn btn-outline-secondary btn-lg px-4 rounded-pill gap-2 text-light" href={projet.links.demo} target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-book" viewBox="0 0 16 16">
                                                <path d="M1 2.828c.885-.37 2.154-.769 3.388-.893 1.33-.134 2.458.063 3.112.752v9.746c-.935-.53-2.12-.603-3.213-.493-1.18.12-2.37.461-3.287.811zm7.5-.141c.654-.689 1.782-.886 3.112-.752 1.234.124 2.503.523 3.388.893v9.923c-.918-.35-2.107-.692-3.287-.81-1.094-.111-2.278-.039-3.213.492zM8 1.783C7.015.936 5.587.81 4.287.94c-1.514.153-3.042.672-3.994 1.105A.5.5 0 0 0 0 2.5v11a.5.5 0 0 0 .707.455c.882-.4 2.303-.881 3.68-1.02 1.409-.142 2.59.087 3.223.877a.5.5 0 0 0 .78 0c.633-.79 1.814-1.019 3.222-.877 1.378.139 2.8.62 3.681 1.02A.5.5 0 0 0 16 13.5v-11a.5.5 0 0 0-.293-.455c-.952-.433-2.48-.952-3.994-1.105C10.413.809 8.985.936 8 1.783" />
                                            </svg>
                                            Demo
                                        </a>
                                        <a className="d-inline-flex align-items-center btn btn-primary btn-lg px-4 rounded-pill gap-2 " href={projet.links.github} target="_blank">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="black" className="bi bi-github" viewBox="0 0 16 16">
                                                <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8" />
                                            </svg>
                                            Github
                                        </a>
                                    </div>
                                </section>
                            </div>
                            {
                                i != projects.length-1 ? <hr className="w-75 border-light" /> : null
                            }
                        </section>
                    )
                })
            }
        </>
    )
}

export default Portfolio