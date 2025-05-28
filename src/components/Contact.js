import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();

  const [formData, setFormData] = useState({
    user_name: "",
    user_email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7wy0gar",       // ✅ Service ID
        "template_h5x5sd6",      // ✅ Template ID
        form.current,
        "2s-XgSDFAggq1b18o"      // ✅ Public Key
      )
      .then(
        (result) => {
          console.log("Success:", result.text);
          alert("Your message was sent successfully!");
          setFormData({ user_name: "", user_email: "", message: "" });
        },
        (error) => {
          console.error("EmailJS Error:", error.text);
          alert("Failed to send the message. Check the console for details.");
        }
      );
  };

  return (
    <section id="contact">
      <div className="container contact-container">
        <h2>Contact Me</h2>
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Your Name"
            value={formData.user_name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="user_email"
            placeholder="Your Email"
            value={formData.user_email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            rows="6"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="btn">Send Message</button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
