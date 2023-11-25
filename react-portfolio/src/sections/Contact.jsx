import React from 'react';

const Contact = () => {
    return (
        <section>
          <h2>Contact</h2>
          <p>
            Feel free to reach out to me! You can contact me through the form below or via email at{' '}
            <a href="mailto:your.email@example.com">your.email@example.com</a>.
          </p>
          {/* Add your contact form or information here */}
          <form>
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" required />
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" required />
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" required></textarea>
            <button type="submit">Submit</button>
          </form>
        </section>
      );
    };

export default Contact;