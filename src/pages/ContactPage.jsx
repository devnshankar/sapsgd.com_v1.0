import React, { useState } from 'react'
import "../pages/styles/ContactPage.scss"

function ContactPage() {
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // send email using email, subject, and message state variables
    // you can use a library like nodemailer to send emails in React
    alert(`Email sent to ${email} with subject ${subject} and message ${message}`);
    // clear form after sending email
    setEmail('');
    setSubject('');
    setMessage('');
  };


  return (
    <div className='contactpage'>
      <div className='direct-email'>
        <h1>Send us a message</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="email">Your email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

           <label htmlFor="subject">Subject</label>
            <input
              type="text"
              id="subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />

            <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
              ></textarea>

            <button type="submit">Send</button>
        </form>
      </div>

      <div className='contact-info'>
        <h2>Contact information</h2>
        <ul>
          <li>Phone: 555-555-5555</li>
          <li><a className='contact-link' href="https://mail.google.com/mail/?view=cm&to=sapsgdofficial@gmail.com&su=Hello!!!&body=">sapsgdofficial@gmail.com</a></li>
          <li>
            <h3>Social media:</h3>
            <ul>
              <li>
                <a className='contact-link' href="https://twitter.com/sapsgd">Twitter</a>
              </li>
              <li>
                <a className='contact-link' href="https://www.facebook.com/profile.php?id=100090250130445">Facebook</a>
              </li>
              <li>
                <a className='contact-link' href="https://www.instagram.com/sapsgdnilgiri/">Instagram</a>
                
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ContactPage
