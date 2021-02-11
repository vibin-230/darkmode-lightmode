import React from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaTwitter } from "react-icons/fa";

import "./Contacts.css";

export const Contacts = () => {
  return (
    <div className="contacts-parent-container">
      <div className="contacts-icons-container">
        <span className="icon">
          <FaGithub size="2.5rem" />
        </span>
        <span className="icon">
          <FaLinkedinIn size="2.5rem" />
        </span>
        <span className="icon">
          <FaWhatsapp size="2.5rem" />
        </span>
        <span className="icon">
          <FaTwitter size="2.5rem" />
        </span>
      </div>
      <div className="contacts-bottom-mirror"></div>
    </div>
  );
};
