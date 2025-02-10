import './css/Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Left Section: Logo & Description */}
        <div className="footer-left">
          <img src="./images/nexoLogo.png" alt="Nexora Academy Logo" className="footer-logo" />
          <p className="footer-text">
            No. 20 Galadima Aminu Way,    
            Jimeta - Yola, 
            Adamawa State
          </p>
          <div className="footer-socials">
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-linkedin"></i></a>
          </div>
        </div>

        {/* Center Section: Featured Links */}
        <div className="footer-center">
          <h3 className="footer-title">Featured Links</h3>
          <ul className="footer-links">
            <li><a href="/admissions">Admission</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/check-results">Check Results</a></li>
            <li><a href="/newsletter">Newsletter</a></li>
            <li><a href="/faqs">FAQs</a></li>
          </ul>
        </div>

        {/* Right Section: Contact Information */}
        <div className="footer-right">
          <h3 className="footer-title">Information</h3>
          <ul className="footer-contact">
            <li><i className="fas fa-phone-alt"></i> <a href="tel:+2349065974003">+234 906 597 4003</a></li>
            <li><i className="fas fa-envelope"></i> <a href="mailto:nexoraacademyltd@gmail.com">nexoraacademyltd@gmail.com</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section: Copyright */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Nexora Academy LTD. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
