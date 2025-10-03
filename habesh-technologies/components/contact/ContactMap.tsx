import React from 'react'

type Props = {}

const ContactMap = (props: Props) => {
  return (
    <div>
      <div className="tp-contact-map p-relative fix">
        <div className="tp-contact-map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1510540.0480819119!2d42.0385954955818!3d42.31536428549862!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40440cd7e64f626b%3A0x4f907964122d4ac2!2sGeorgia!5e0!3m2!1sen!2sbd!4v1714619203308!5m2!1sen!2sbd"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
}

export default ContactMap