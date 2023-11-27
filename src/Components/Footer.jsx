function Footer() {
    return(
        <footer style={{display: 'flex', flexDirection: "column", background: 'url(/medias/bg.jpg) no-repeat',backgroundSize: 'cover', boxShadow: '0 0 2px 2px black', padding: 10, alignItems: 'center', textAlign: 'center', height: '100%' }}>
            <p>Remerciements: </p>
            <ul>
                <li>Prépavenir</li>
                <li>Raphaël</li>
                <li>Jenson</li>
                <li>Mr.Toulouse</li>
            </ul>
        </footer>
    )
}

export default Footer