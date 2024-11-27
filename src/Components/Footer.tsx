function Footer() {
    return (
        <section className="bg-gra w-100 footer border-top border-light" style={{ gridArea: "f" }}>
            <footer className="d-flex flex-wrap justify-content-between align-items-center py-1 px-5 my-1">
                <a href="/" className="mb-3 me-2 mb-md-0 text-light text-decoration-none lh-1">
                    <h4>Home</h4>
                </a>
                <section>
                    <ul className="nav col-md-4 justify-content-center list-unstyled d-flex">
                        <li className="ms-3"><a className="text-light" href="#">LinkedIn</a></li>
                        <li className="ms-3"><a className="text-light" href="#">Github</a></li>
                        {/* <li className="ms-3"><a className="text-body-secondary" href="#"></a></li> */}
                    </ul>
                </section>
                <span className="mb-3 mb-md-0 text-light">© 2024 Bilal ITCHIR</span>
            </footer>
        </section>
    )
}

export default Footer