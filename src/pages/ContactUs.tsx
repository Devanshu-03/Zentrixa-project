import React, { useState } from "react";
import "../styles/ContactUs.css";
import "../styles/screen_resolution/common_media_query.css";

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [showPopup, setShowPopup] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // show success popup
    setShowPopup(true);

    // reset form
    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

    // auto-close popup after 3 seconds
    setTimeout(() => {
      setShowPopup(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      <div className="contact-content">
        <div className="contact-container">
          <div className="contact-title">
            <h2>Contact Us</h2>
            <p>
              Have questions or want to work together? Fill out the form below!
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
              required
            />

            <textarea
              name="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
              required
            />

            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>

      {/* =========================
          THANK YOU POPUP
      ========================== */}
      {showPopup && (
        <div className="thankyou-overlay">
          <div className="thankyou-popup">
            <div className="thankyou-icon">✔</div>
            <h3>Thank You!</h3>
            <p>
              Your message has been sent successfully. We’ll get back to you
              soon.
            </p>
            <button onClick={() => setShowPopup(false)}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ContactUs;
