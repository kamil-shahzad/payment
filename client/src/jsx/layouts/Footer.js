import React from "react";

const Footer = () => {
  const d = new Date();
  return (
    <div className="footer">
      <div className="copyright">
        <p>
          Copyright © Designed &amp; Developed by{" "}
          <a href="http://ovexsoftware.com/" target="_blank"  rel="noreferrer">
            Ovex Software
          </a>{" "}
          {d.getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
