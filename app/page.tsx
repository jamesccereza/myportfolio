"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      <header className="nav">
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#contact">Get in touch</a></li>
          </ul>
        </nav>
      </header>

      <section className="home">
        <div className="desc">
          <h1>James Lewis Cereza</h1>
          <p>The future of tech industry lies on creativity</p>
          <button>Let's get started </button>
        </div>

        <div className="myimg">
          <Image src="/me.png" alt="Profile" width={350} height={350} />
        </div>
      </section>

      <section id="about" className="about">
        <h2>ABOUT ME</h2>
        <p>
          I’m James Lewis Cereza aspiring to be a full-stack developer in the future.<br/><br/>
          I can only do little front end and designing in Figma at the moment but I’m striving to create more complex websites.
        </p>

        <div className="skills">
          <h3>Using now:</h3>
          <div className="skill-icons">

            <div className="skill">
              <Image src="/html.svg" alt="HTML" width={50} height={50} />
              <p>HTML</p>
            </div>

            <div className="skill">
              <Image src="/css.svg" alt="CSS" width={50} height={50} />
              <p>CSS</p>
            </div>

            <div className="skill">
              <Image src="/figma.svg" alt="Figma" width={50} height={50} />
              <p>Figma</p>
            </div>

          </div>
        </div>
      </section>

      <section id="contact" className="contact">
        <h2>My Contacts</h2>

        <form className="contact-form">
          <label>Email</label>
          <input type="email" placeholder="Please enter your email here" />

          <label>Mobile</label>
          <input type="tel" placeholder="Enter Mobile" />

          <label>Message</label>
          <textarea placeholder="Enter your message"></textarea>

          <button type="submit">Submit </button>
        </form>
      </section>
    </>
  );
}
