import React from 'react';
import '../Styles/footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <p>© {new Date().getFullYear()} Ajay's Portfolio</p>
        <p>Contact: ajayradhakrishnan.ar@gmail.com</p>
      </div>
    </footer>
  );
};

export default Footer;
