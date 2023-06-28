import React, { useRef } from 'react'
import emailjs from '@emailjs/browser'
import '../css/Contact.css'
export const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs.sendForm('service_inqvhic', 'template_5hsfpi8', form.current, 'mhVsvImPiL6A9eM5F')
      .then((result) => {
        console.log(result.text)
        console.log('message set')
        e.target.reset()
      }, (error) => {
        console.log(error.text)
      })
  }

  return (
        <div id='contact'>
        <form ref={form} onSubmit={sendEmail}>
            <br />
                <p>Name</p>
            <input type="text" className="input" name="user_name" placeholder='Name' required/>
            <p>E-mail</p>

            <input type="email" className="input" name="user_email" placeholder='E-Mail' required/>
            <p>Nachricht</p>

            <textarea name="message" className="message" placeholder='Nachricht...'cols="40" rows="7" required/>
            <input type="submit" className="submitinput" value="Send" />
        </form>
        </div>
  )
}
export default Contact
