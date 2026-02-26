import "./Contact.css";
import { useState } from "react";
import {
  FaWhatsapp,
  FaYoutube,
  FaFacebookF,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaTimes
} from "react-icons/fa";


const Contact = () => {
    const [showMapCard, setShowMapCard] = useState(true);

  return (
    <section className="contact-page">

      {/* GOOGLE MAP */}
      <div className="map-container">
        <iframe
          title="school-location"
          src="https://www.google.com/maps/d/u/0/embed?mid=1vysYDr9CP-jcM6gqsC2EaVM6FMmMrtw&ehbc=2E312F&noprof=1" 
          allowFullScreen=""
          loading="lazy"
        ></iframe>

        {showMapCard && (
  <div className="map-card">

    <button
      className="close-map"
      onClick={() => setShowMapCard(false)}
    >
      <FaTimes />
    </button>

    <FaMapMarkerAlt className="map-icon" />

    <div>
      <h4>Vidyashilp International School</h4>
      <p>Haveri Best Education Campus</p>
    </div>

  </div>
)}
      </div>

{/* CONTACT SECTION */}
<div className="contact-section">

  <div className="contact-main-card">

    <div className="contact-header">
      <h3>Contact</h3>
      <h2>Vidyashilp International School</h2>
    </div>

    <div className="contact-cards">

      {/* CARD 1 - INFO */}
      <div className="contact-card info-card">
        <h4>About Us</h4>
        <p>
          Welcome to Vidyashilp International School, where we are dedicated
          to providing quality education. Feel free to reach out to us for
          inquiries regarding admissions, facilities or curriculum.
        </p>

        <p>
        We appreciate your interest in Vidyashilp International School. Our team will get in touch with you shortly. For immediate assistance, please call our main reception between <strong>9:00 am – 3:30 pm</strong> at  <strong>9480696165</strong>
        </p>
      </div>

      {/* CARD 2 - FORM */}
      <div className="contact-card form-card">
        <h4>Send Us a Message</h4>

        <form className="contact-form">
          <input type="text" placeholder="Name" required />
          <input type="email" placeholder="Email" required />
          <input type="text" placeholder="Subject" required />
          <textarea placeholder="Message" rows="4" required></textarea>
          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* CARD 3 - DETAILS */}
      <div className="contact-card details-card">
        <h4>School Details</h4>

        <p><FaMapMarkerAlt /> Haveri, Karnataka 581110</p>
        <p><FaPhone /> 9480696165</p>
        <p><FaEnvelope /> vidya@vidyashilphaveri.in</p>
      </div>

    </div>

  </div>

</div>

      {/* GET IN TOUCH */}
      <div className="get-in-touch">

        <h2>Get in Touch</h2>

        <div className="social-grid">

          <a href="#" className="social-box whatsapp">
            <FaWhatsapp size={50} />
            <p>Whatsapp</p>
          </a>

          <a href="#" className="social-box youtube">
            <FaYoutube size={50} />
            <p>Youtube</p>
          </a>

          <a href="#" className="social-box facebook">
            <FaFacebookF size={50} />
            <p>Facebook</p>
          </a>

          <a href="#" className="social-box instagram">
            <FaInstagram size={50} />
            <p>Instagram</p>
          </a>

        </div>

      </div>

    </section>
  );
};

export default Contact;