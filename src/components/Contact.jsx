import { useState } from "react";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null);

  // ✅ ALL 3 VALUES READY!
  const SERVICE_ID = 'service_efjtjil';
  const TEMPLATE_ID = 'template_c6cikko';
  const PUBLIC_KEY = 'Od8Nw8MMic9Hk9vfK';

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("loading");

    try {
      await emailjs.send(SERVICE_ID, TEMPLATE_ID, form, PUBLIC_KEY);
      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="title" data-aos="fade-up" data-aos-duration="800">
          Get In Touch<div className="underline"></div>
        </h2>

        <div className="contact-hero" data-aos="fade-up" data-aos-delay="200">
          <div className="contact-pattern"></div>
          <div className="contact-content">
            <div className="contact-left" data-aos="fade-right" data-aos-delay="300">
              <div className="contact-avatar">
                <img src="/assests/arnav.jpg" alt="Arnav Kaneriya" />
                <div className="avatar-ring"></div>
              </div>
              
              <div className="contact-details">
                <h3>Let's Create Something Amazing Together</h3>
                <p className="contact-subtitle highlight-tagline">
                  🚀 Available for Freelance | Full-Time | Open to Collaborate
                </p>
                <p className="contact-subtitle">
                  Need a dev, a teammate, or just a meme partner? I'm available!😎
                </p>
                
                <div className="resume-btn-wrap">
                  <a
                    href="/assests/Arnav_Kaneriya_Resume.pdf"
                    className="resume-download-btn"
                    target="_blank"
                    rel="noreferrer"
                  >
                    📄 View Resume
                  </a>
                </div>
                
                <div className="contact-links">
                  <a href="tel:+917909895850" className="contact-link">
                    <i className="bx bxs-phone"></i>
                    <span>+91 7909895850</span>
                  </a>
                  <a href="mailto:kaneriyaarnav@gmail.com" className="contact-link">
                    <i className="bx bx-envelope"></i>
                    <span>kaneriyaarnav@gmail.com</span>
                  </a>
                  <a href="#" className="contact-link">
                    <i className="bx bxs-map"></i>
                    <span>Indore, MP, India</span>
                  </a>
                </div>
              </div>
            </div>

            <div className="contact-right" data-aos="fade-left" data-aos-delay="400">
              <div className="contact-form-card">
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <input
                      name="name"
                      placeholder="Your Name"
                      value={form.name}
                      onChange={handleChange}
                      required
                    />
                    <span className="form-line"></span>
                  </div>
                 
                  <div className="form-group">
                    <input
                      name="email"
                      type="email"
                      placeholder="Your Email"
                      value={form.email}
                      onChange={handleChange}
                      required
                    />
                    <span className="form-line"></span>
                  </div>
                 
                  <div className="form-group">
                    <textarea
                      name="message"
                      rows="5"
                      placeholder="Tell me about your project..."
                      value={form.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <span className="form-line"></span>
                  </div>
                 
                  <button type="submit" className={`form-btn ${status === "loading" ? "loading" : ""}`} disabled={status === "loading"}>
                    {status === "loading" ? (
                      <>
                        <span className="btn-loader"></span>
                        Sending...
                      </>
                    ) : status === "success" ? (
                      <>
                        <i className="bx bx-check-circle"></i>
                        Sent! 🎉
                      </>
                    ) : status === "error" ? (
                      "Try Again"
                    ) : (
                      "Send Message"
                    )}
                  </button>
                </form>

                <div className="form-socials">
                  <p className="social-label">Or connect on:</p>
                  <div className="social-icons">
                    <a href="https://www.linkedin.com/in/arnav-kaneriya" target="_blank" rel="noreferrer">
                      <i className="bx bxl-linkedin"></i>
                    </a>
                    <a href="https://github.com/Arnav-techh" target="_blank" rel="noreferrer">
                      <i className="bx bxl-github"></i>
                    </a>
                    <a href="https://www.instagram.com/arnav_kaneriya/" target="_blank" rel="noreferrer">
                      <i className="bx bxl-instagram"></i>
                    </a>
                    <a href="https://api.whatsapp.com/send?phone=917909895850&text=Hi%20Arnav%2C%20I%20just%20visited%20your%20portfolio%20and%20would%20like%20to%20connect." target="_blank" rel="noreferrer">
                      <i className="bx bxl-whatsapp"></i>
                    </a>
                    <a href="mailto:kaneriyaarnav@gmail.com?subject=Let's%20connect&body=Hi%20Arnav%2C%0A%0AI%20just%20visited%20your%20portfolio." target="_blank" rel="noreferrer">
                      <i className="bx bx-envelope"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
