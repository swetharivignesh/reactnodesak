import React, { useContext, useRef, useState } from "react";
import "./Contact.css";
import MusicApp from '../../img/products/Code typing-bro.png';



<script src="https://www.google.com/recaptcha/api.js" async defer></script>

const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:3001/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_name: form.current.user_name.value,
          user_email: form.current.user_email.value,
          message: form.current.message.value,
        }),
      });

      if (response.ok) {
        setDone(true);
        form.current.reset();
      } else {
        console.error("Failed to send email");
      }
    } catch (error) {
      console.error("Error sending email", error);
    }
  };

  return (
    
   
      <div className="contact-container">
        <div className="contact-form" id="contact">
          <form ref={form} onSubmit={sendEmail}>
            <div className="form-partition">
              <div className="form-group">
                <label htmlFor="user_name">Name:</label>
                <input type="text" name="user_name" id="user_name" className="user" placeholder="Your Name" required />
              </div>
              <div className="form-group">
                <label htmlFor="user_email">Email:</label>
                <input type="email" name="user_email" id="user_email" className="user" placeholder="Your Email" required />
              </div>
             
              <div className="form-group">
                <label htmlFor="message">Message:</label>
                <textarea name="message" id="message" className="user" placeholder="Your Message" required />
              </div>
              <div className="form-group">
                {/* Add reCAPTCHA here */}
                <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
              </div>
              <div className="form-group">
                <input type="submit" value="Send" className="button" />
              </div>
              <span>{done && "Thanks for Contacting Us"}</span>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  
  

export default Contact;