import React from 'react'

type Props = {}

const ContactMap = (props: Props) => {
  return (
    <div>
      <div className="tp-contact-map p-relative fix">
        <div className="tp-contact-map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126103.05428734896!2d38.66950664335938!3d8.997850700000008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b85a8d5d33137%3A0x51d0cd723f979d39!2sSelam%20building!5e0!3m2!1sen!2set!4v1762959784662!5m2!1sen!2set"
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