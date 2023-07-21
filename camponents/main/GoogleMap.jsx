import React from "react";

const GoogleMap = () => {
  return (
    <div className="border-[1px] shadow-sm">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6487.966098279499!2d73.04405992653388!3d32.394660791661764!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3921b8e17bc86939%3A0xfd372e1238eb12c8!2sRato%20Kala%2C%20Sargodha%2C%20Punjab%2C%20Pakistan!5e0!3m2!1sen!2s!4v1689695073072!5m2!1sen!2s"
        width="100%"
        height="300px"
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"></iframe>
    </div>
  );
};

export default GoogleMap;
