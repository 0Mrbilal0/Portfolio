function ProjectsCards(projects) {
    return (
        <>
            <h2>{projects.project.name}</h2>
            {
                projects.project.images.map(item => (
                    <figure key={item.image}>
                        <img src={item.image} alt={item.alt} />
                        <figcaption>
                            <h4>{item.description}</h4>
                        </figcaption>
                    </figure>
                ))
            }
        </>
    )
}

export default ProjectsCards