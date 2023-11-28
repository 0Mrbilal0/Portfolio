import Navigation from '../Components/Navigation'
import Footer from '../Components/Footer'
import '../styles/Contact.css'
import { useRef, useState } from 'react'
import { Alert, Snackbar } from '@mui/material'
import emailjs from '@emailjs/browser';
const SERVICE_ID = import.meta.env.VITE_SERVICE_ID
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID
const TOKEN = import.meta.env.VITE_TOKEN

function Contact() {
    const [state, setState] = useState(false)
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        setState(true)
        emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, TOKEN)  
            .then(() => {
                handleClick()
                setState(false)
            }, (error) => {
                console.log(error.text);
                setState(false)
            })

    };

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
                <form ref={form} onSubmit={sendEmail}>
                    <section id='names'  >
                        <section>
                            <label htmlFor="Lastname" id='lastname-label'>Nom</label>
                            <input type="text" placeholder='Nom' id='lastname' className='input' name='to_lastname' required />
                        </section>

                        <section>
                            <label htmlFor="Firstname" id='firstname-label'>Prenom</label>
                            <input type="text" placeholder='Prenom' id='firstname' className='input' name='to_firstname' required />
                        </section>
                    </section>

                    <section>
                        <label htmlFor="Enterprise" id='enterprise-label'>Entreprise</label>
                        <input type="text" placeholder="Nom de l'Entreprise" id='enterprise' className='input' name='to_enterprise' required />
                    </section>

                    <section>
                        <label htmlFor="Email" id='email-label'>Email</label>
                        <input type="email" placeholder='Email' id='email' className='input' name='to_email' required />
                    </section>

                    <section>
                        <label htmlFor="Message" id='message-label'>Message</label>
                        <textarea name="to_message" id="message" className='input' cols="30" rows="10" placeholder='Message' required></textarea>
                    </section>

                    <button id='button' disabled={state}>{state ? 'Envoie ...' : 'Envoyer'}</button>
                </form>
            </main>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%', backgroundColor: 'green' }}>
                    Le mail a bien été envoyé !
                </Alert>
            </Snackbar>
            <Footer />
        </>
    )
}


export default Contact