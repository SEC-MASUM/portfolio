import React from "react";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear()
  return (
    <section
      id="footer"
      className="px-10 py-4 border-t text-base-content border-base-300"
    >
      <footer class="container mx-auto flex flex-col justify-center sm:flex-row-reverse sm:justify-between sm:items-center">
        <div class="flex justify-center sm:justify-end gap-4">
          <a>
            <i class="devicon-linkedin-plain text-2xl"></i>
          </a>
          <a>
            <i class="devicon-github-original text-2xl"></i>
          </a>
          <a>
            <i class="devicon-facebook-plain text-2xl"></i>
          </a>
        </div>
        <div class="items-center text-center">
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
