import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import '../styles/Contact.css'

function Contact() {

    const champs = ["Nom", "Prénom", "Entreprise", "Email"]

    return (
        <>
            <Navigation />
            <main id='contact'>
                <form action="">
                    <section id='names'>
                        <section>
                            <label htmlFor="Lastname" id='lastname-label'>Nom</label>
                            <input type="text" placeholder='Nom' id='lastname' className='input'/>
                        </section>

                        <section>
                            <label htmlFor="Firstname" id='firstname-label'>Prenom</label>
                            <input type="text" placeholder='Prenom' id='firstname' className='input'/>
                        </section>
                    </section>

                    <section>
                        <label htmlFor="Enterprise" id='enterprise-label'>Entreprise</label>
                        <input type="text" placeholder="Nom de l'Entreprise" id='enterprise' className='input'/>
                    </section>

                    <section>
                        <label htmlFor="Email" id='email-label'>Email</label>
                        <input type="text" placeholder='Email' id='email' className='input'/>
                    </section>

                    <section>
                        <label htmlFor="Message" id='message-label'>Message</label>
                        <textarea name="Message" id="message" className='input' cols="30" rows="10" placeholder='Message'></textarea>
                    </section>

                    <button id='button'>Envoyer</button>
                </form>
            </main>
            <Footer />
        </>
    )
}


export default Contact