const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* MAIN FOOTER */}
        <div className="footer-main">
          <div className="footer-brand">
            <h3>Arnav Kaneriya</h3>
            <p>Software Engineer | Indore (M.P.)</p>
          </div>

          {/* Quick Links removed */}

          <div className="footer-contact">
            <h4>Get In Touch</h4>
            <div className="contact-items">
              <a href="mailto:kaneriyaarnav@gmail.com" className="contact-item">
                <i className="bx bx-envelope"></i>
                kaneriyaarnav@gmail.com
              </a>
              <a href="tel:+91798998850" className="contact-item">
                <i className="bx bxs-phone"></i>
                +91 7909895850
              </a>
            </div>
          </div>
        </div>

        {/* SOCIALS + COPYRIGHT */}
        <div className="footer-bottom">
          <div className="footer-socials">
            <a
              href="https://github.com/Arnav-techh"
              target="_blank"
              rel="noreferrer"
              title="GitHub"
            >
              <i className="bx bxl-github"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/arnav-kaneriya"
              target="_blank"
              rel="noreferrer"
              title="LinkedIn"
            >
              <i className="bx bxl-linkedin"></i>
            </a>
            <a
              href="https://www.instagram.com/arnav_kaneriya/"
              target="_blank"
              rel="noreferrer"
              title="Instagram"
            >
              <i className="bx bxl-instagram"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=917909895850&text=Hi%20Arnav%2C%20I%20just%20visited%20your%20portfolio%20and%20would%20like%20to%20connect."
              target="_blank"
              rel="noreferrer"
              title="WhatsApp"
            >
              <i className="bx bxl-whatsapp"></i>
            </a>
            <a
              href="mailto:kaneriyaarnav@gmail.com?subject=Let's%20connect&body=Hi%20Arnav%2C%0A%0AI%20just%20visited%20your%20portfolio."
              target="_blank"
              rel="noreferrer"
              title="Email"
            >
              <i className="bx bx-envelope"></i>
            </a>
          </div>

          <div className="footer-copyright">
            <p>© 2025 Arnav Kaneriya. Built with React & ❤️ from Indore.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
