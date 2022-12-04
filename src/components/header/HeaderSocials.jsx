import React from 'react'
import {BsLinkedin} from 'react-icons/bs';
import {FaGithub} from 'react-icons/fa';
import {FiDribbble} from 'react-icons/fi';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.linkedin.com/in/jonathan-williams-b6848012a/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/jonathan4github" target="_blank">
        <FaGithub />
      </a>
      <a href="https://dribble.com/" target="_blank">
        <FiDribbble />
      </a>
    </div>
  )
}

export default HeaderSocials;
