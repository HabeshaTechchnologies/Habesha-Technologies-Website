import React from 'react'

type Props = {}

const ContactMap = (props: Props) => {
  return (
    <div>
      <div className="tp-contact-map p-relative fix">
        <div className="tp-contact-map-box">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8069774.227153786!2d29.621267774999996!3d9.034596299999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x164b91e914422f79%3A0x95b314d9f6de5cfd!2zS2lkdXMgTWljaGFlbCBCdWlsZGluZyB8IFdlc2VuIHwg4YmF4Yux4Yi1IOGImuGKq-GKpOGIjSDhiIXhipXhjLsgfCDhi4jhiLDhipU!5e0!3m2!1sen!2set!4v1758216688100!5m2!1sen!2set"
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