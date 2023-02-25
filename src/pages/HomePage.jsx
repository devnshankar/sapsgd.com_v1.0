import React from 'react'
import { Link } from 'react-router-dom'
import "../pages/styles/HomePage.scss"



function HomePage() {
  return (
    <div className='homepage'>
      <p className='home-text'>
        <header className='home-header'>
		      <h1>Welcome to Shree Aurobindo Purnanga Siksha Gabeshana Dham</h1>
		      <h2>Preparing Students for the Future</h2>
	      </header>

	      <main className='home-main'>
		      <section>
			      <h3>About Us</h3>
			      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Shree Aurobindo Purnanga Siksha Gabeshana Dham is a school that is blessed by The Mother and Shree Aurobindo. This educational institution is founded on the principles of Integral Education, which integrates the spiritual and material dimensions of life. The school's name itself is a testament to its philosophy, as "Purnanga" means the complete or integral development of a person, and "Siksha Gabeshana Dham" means the place where education is explored and researched.</p>
            <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;At this school, spirituality is not just a peripheral aspect of education, but rather, it is an integral and foundational part of the curriculum. The aim of the school is to provide a holistic education that develops the physical, emotional, mental, and spiritual aspects of the individual. The school recognizes that true education goes beyond the mere accumulation of knowledge, and that it must also cultivate a deeper understanding of the self and the world. <Link to="/about" className='home-link'>more.</Link></p>
		      </section>

		      <section>
			      <h3>Our Programs</h3>
			      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;We offer a comprehensive curriculum that includes STEM, humanities, and the arts. Our students also have the opportunity to participate in extracurricular activities such as robotics club, debate team, and theater productions. <Link to="/academics" className='home-link'>more.</Link></p>
		      </section>

		      <section>
			      <h3>Admissions</h3>
			      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;If you are interested in applying to ABC School, please visit our <Link to="/admission" className='home-link'>admission</Link> page for more information. We welcome students from all backgrounds and strive to create a diverse and inclusive community.</p>
		      </section>

          <section>
			      <h3>Administration</h3>
			      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;To ensure the smooth functioning of the school, a dedicated team of administrators is responsible for overseeing various aspects of its operations. The administration of the Shree Aurobindo Purnanga Siksha Gabeshana Dham is headed by a principal, who is responsible for the overall management of the school. The principal is assisted by a team of coordinators, who oversee different departments and ensure that they are functioning effectively. These departments include academics, sports, extracurricular activities, and discipline. <Link to="/administration" className='home-link'>more.</Link></p>
		      </section>

		      <section>
			      <h3>Contact Us</h3>
			      <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Feel free to reach out to us if you have any questions or would like to schedule a visit. You can contact us by phone or email, or visit our campus in person.</p>
            <ul>
				      <li>Phone: 123-456-7898</li>
				      <li><a className='home-mail' href="https://mail.google.com/mail/?view=cm&to=sapsgdofficial@gmail.com&su=Hello!!!&body=">sapsgdofficial@gmail.com</a></li>
				      <li>Address: Nilgiri, Balasore, Odisha</li>
              <li><Link to="/contact" className='home-link'>more.</Link></li>
			      </ul>
		      </section>
	      </main>
      </p>
      
    </div>
  )
}

export default HomePage
