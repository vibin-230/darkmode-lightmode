import React, { useState, useEffect } from "react";
import { FaGithub, FaLinkedinIn, FaWhatsapp, FaTwitter } from "react-icons/fa";

import "./Contacts.css";

export const Contacts = () => {
  const [numberCopied, setNumberCopied] = useState(false);
  function textToClipboard(text) {
    setNumberCopied(true);
    var dummy = document.createElement("textarea");
    document.body.appendChild(dummy);
    dummy.value = text;
    dummy.select();
    document.execCommand("copy");
    document.body.removeChild(dummy);
  }
  useEffect(() => {
    if (numberCopied) {
      setTimeout(() => {
        setNumberCopied(false);
      }, 1000);
    }
  }, [numberCopied]);
  return (
    <>
      <div className="contacts-parent-container">
        <div className="contacts-icons-container">
          <a className="icon" href="https://github.com/vibin-230/">
            <FaGithub size="2.5rem" />
          </a>
          <a
            className="icon"
            href="https://www.linkedin.com/in/vibin-senniappan-097802136/"
          >
            <FaLinkedinIn size="2.5rem" />
          </a>
          <a className="icon" onClick={() => textToClipboard("9944994477")}>
            <FaWhatsapp size="2.5rem" />
          </a>
          <a className="icon" href="https://twitter.com/home?lang=en">
            <FaTwitter size="2.5rem" />
          </a>
        </div>
        <div className="contacts-bottom-mirror"></div>
      </div>
      {numberCopied && (
        <div style={{ position: "fixed", bottom: 30, zIndex: 20 }}>
          Number copied to Clipboard
        </div>
      )}
    </>
  );
};
