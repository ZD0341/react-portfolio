import React from 'react';
import ContactForm from '../components/ContactForm';

const Contact = () => {
    return (
        <section>
          <h2>Contact</h2>
          <p>
            Feel free to reach out to me! You can contact me through the form below or via email at{' '}
            <a href="mailto:your.email@example.com">Zechiel97@yahoo.com</a>
            </p>
      <ContactForm />
    </section>
      );
    };

export default Contact;