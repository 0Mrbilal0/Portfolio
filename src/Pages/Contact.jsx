import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import '../styles/Contact.css'
import { useState } from 'react'
import { Alert, Snackbar } from '@mui/material'

function Contact() {
    const [state, setState] = useState(false)

    function sendMail(e) {
        e.preventDefault()
        setState(true)
        console.log('envoie')
        setTimeout(() => {
            setState(false)
            handleClick()
        }, 2000);
    }

    const [open, setOpen] = useState(false);

    const handleClick = () => {
        setOpen(true);
    };

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }

        setOpen(false);
    };

    return (
        <>
            <Navigation />
            <main id='contact'>
                <form action="" onSubmit={sendMail}>
                    <section id='names'  >
                        <section>
                            <label htmlFor="Lastname" id='lastname-label'>Nom</label>
                            <input type="text" placeholder='Nom' id='lastname' className='input' required />
                        </section>

                        <section>
                            <label htmlFor="Firstname" id='firstname-label'>Prenom</label>
                            <input type="text" placeholder='Prenom' id='firstname' className='input' required />
                        </section>
                    </section>

                    <section>
                        <label htmlFor="Enterprise" id='enterprise-label'>Entreprise</label>
                        <input type="text" placeholder="Nom de l'Entreprise" id='enterprise' className='input' required />
                    </section>

                    <section>
                        <label htmlFor="Email" id='email-label'>Email</label>
                        <input type="email" placeholder='Email' id='email' className='input' required />
                    </section>

                    <section>
                        <label htmlFor="Message" id='message-label'>Message</label>
                        <textarea name="Message" id="message" className='input' cols="30" rows="10" placeholder='Message' required></textarea>
                    </section>

                    <button id='button' disabled={state}>{state ? 'Envoie ...' : 'Envoyer'}</button>
                </form>
            </main>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor: 'green'}}>
                    Le mail a bien été envoyé !
                </Alert>
            </Snackbar>
            <Footer />
        </>
    )
}


export default Contact