
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Contact.css';

// Replace this with your real contact email.
const contactEmail = 'your-email@example.com';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: 'Trekking destination enquiry',
    message: '',
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  }

  function handleSubmit(event) {
    event.preventDefault();

    const emailSubject = encodeURIComponent(formData.subject);

    const emailBody = encodeURIComponent(
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n\n` +
      `Message:\n${formData.message}`
    );

    const mailtoLink =
      `mailto:${contactEmail}?subject=${emailSubject}&body=${emailBody}`;

    window.location.href = mailtoLink;
  }

  return (
    <main className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <span className="contact-eyebrow">WE'D LOVE TO HEAR FROM YOU</span>

        <h1>
          Let's Talk <em>Trails.</em>
        </h1>

        <p>
          Have a question, a suggestion, or a destination we
          should explore? Drop us a message. Every great adventure
          begins with a conversation.
        </p>
      </section>

      {/* Contact content */}
      <section className="contact-section">
        <div className="contact-info">
          <span className="contact-section-label">GET IN TOUCH</span>

          <h2>
            Your next adventure
            <br />
            starts with a hello.
          </h2>

          <p className="contact-intro">
            We're here to help you discover trails, learn about
            destinations, and make your trekking research easier.
          </p>

          <div className="contact-detail">
            <span className="contact-detail-icon">✉</span>
            <div>
              <h3>Email us</h3>
              <a href={`mailto:${contactEmail}`}>
                {contactEmail}
              </a>
            </div>
          </div>

          <div className="contact-detail">
            <span className="contact-detail-icon">⛰</span>
            <div>
              <h3>What can we help with?</h3>
              <p>
                Trek information, destination suggestions, and
                feedback about TrekMate.
              </p>
            </div>
          </div>

          <div className="contact-social">
            <span>FOLLOW YOUR CURIOSITY</span>
            <p>More trails. More stories. More adventures.</p>

            {/* Replace # with your actual social profile URL. */}
            <a href="#" onClick={(event) => event.preventDefault()}>
              Instagram ↗
            </a>
          </div>
        </div>

        {/* Form */}
        <div className="contact-form-card">
          <h2>Send us a message</h2>
          <p>Fill in the details below and we'll be in touch.</p>

          <form onSubmit={handleSubmit}>
            <div className="contact-form-row">
              <div className="contact-field">
                <label htmlFor="contact-name">Your name</label>
                <input
                  id="contact-name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="contact-field">
                <label htmlFor="contact-email">Email address</label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-subject">What's it about?</label>
              <select
                id="contact-subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
              >
                <option>Trekking destination enquiry</option>
                <option>Suggest a trek</option>
                <option>Website feedback</option>
                <option>Other question</option>
              </select>
            </div>

            <div className="contact-field">
              <label htmlFor="contact-message">Your message</label>
              <textarea
                id="contact-message"
                name="message"
                rows="5"
                placeholder="Tell us what's on your mind..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit-btn">
              Prepare Email <span>↗</span>
            </button>

            <p className="contact-form-note">
              This opens your email app. Review the message and
              send it there to contact us.
            </p>
          </form>
        </div>
      </section>
    </main>
  );
}

export default Contact;
