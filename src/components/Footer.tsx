import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-primary text-center text-white py-3 text-capitalize border-top ">
      <div className="container">
        <p className="mb-0">
          © {new Date().getFullYear()} My Website. All rights reserved.
          <br />
          Created and designed by Mahmoud Ghoraba
        </p>
      </div>
    </footer>
  );
};

export default Footer;
