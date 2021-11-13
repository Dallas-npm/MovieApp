import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-main-section-logo'>
        <h4>
          Powered By <i className='fas fa-level-down-alt' />
        </h4>
        <a
          href='https://www.themoviedb.org/'
          target='_blank'
          className='footer-main-section-link'
          rel='noreferrer'
        >
          <img
            src='https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_1-5bdc75aaebeb75dc7ae79426ddd9be3b2be1e342510f8202baf6bffa71d7f5c4.svg'
            alt='movie db logo'
          />
        </a>
      </div>
      <a
        href='https://www.linkedin.com/in/irnis-saric-abb36a204/'
        target='_blank'
        className='footer-main-section-link-name'
        rel='noreferrer'
      >
        Copyright&copy; Irnis Saric, 2021
      </a>
    </footer>
  );
};

export default Footer;
