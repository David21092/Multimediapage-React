import React, { useRef, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import '../css/Contact.css'

const Contact = () => {
  const form = useRef()

  const sendEmail = (e) => {
    e.preventDefault()

    emailjs
      .sendForm('service_inqvhic', 'template_5hsfpi8', form.current, 'mhVsvImPiL6A9eM5F')
      .then(
        (result) => {
          console.log(result.text)
          console.log('message sent')
          e.target.reset()
        },
        (error) => {
          console.log(error.text)
        }
      )
  }

  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places'
    script.async = true
    document.body.appendChild(script)

    return () => {
      document.body.removeChild(script)
    }
  }, [])

  return (
    <div id="contact">
        <br />
      <form ref={form} onSubmit={sendEmail}>
        <p>Name</p>
        <input type="text" className="input" name="user_name" placeholder="Name" required />
        <p>E-mail</p>
        <input type="email" className="input" name="user_email" placeholder="E-Mail" required />
        <p>Nachricht</p>
        <textarea
          name="message"
          className="message"
          placeholder="Nachricht..."
          cols="40"
          rows="7"
          required
        />
        <input type="submit" className="submitinput" value="Send" />
      </form>
      <div id="map"></div>
    </div>
  )
}

export default Contact
