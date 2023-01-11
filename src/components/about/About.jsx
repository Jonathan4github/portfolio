import React from 'react';
import './about.css';
import ME from '../../asserts/me3.jpg';
import {BsAward} from 'react-icons/bs';
import {FiUsers} from 'react-icons/fi';
import {VscFolderLibrary} from 'react-icons/vsc';

const About = () => {
  return (
    <section id="about">
      <h5>Get to Know</h5>
      <h2>About me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <BsAward className="about__icon" />
              <h5>Experience</h5>
              <small>3+ Years Working</small>
            </article>
            <article className="about__card">
              <FiUsers className="about__icon" />
              <h5>Clients</h5>
              <small>67+ Worldwide</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Projects</h5>
              <small>12+ Completed</small>
            </article>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Libero quasi officia magni. Dolores ipsa ut vel ab vero, sint rerum,
            sequi nesciunt saepe,placeat dolor expedita recusandae perspiciatis quisquam numquam.
          </p>
          <a href="contact" className="btn btn-primary">Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default About;
