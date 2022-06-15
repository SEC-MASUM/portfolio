import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <section
      id="footer"
      className="px-10 py-4 border-t text-base-content border-base-300"
    >
      <footer className="container mx-auto flex flex-col justify-center sm:flex-row-reverse sm:justify-between sm:items-center">
        <div className="flex justify-center sm:justify-end gap-4">
          <a
            href="https://www.linkedin.com/in/sec-masum/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="devicon-linkedin-plain text-2xl"></i>
          </a>
          <a
            href="https://github.com/SEC-MASUM"
            target="_blank"
            rel="noreferrer"
          >
            <i className="devicon-github-original text-2xl"></i>
          </a>
          <a
            href="https://www.facebook.com/devbillah.masum/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="devicon-facebook-plain text-2xl"></i>
          </a>
        </div>
        <div className="items-center text-center">
          <p>
            Copyright &copy; {year}- All right reserved by{" "}
            <span className="">Md. Masum Billah</span>
          </p>
        </div>
      </footer>
    </section>
  );
};

export default Footer;
