import React from "react";
const project = {
  id: 2,
  title: "Book Buddy",
  subtitle: "MERN Stack",
  description:
    "It a book warehouse management website. Very exciting project using ReactJS, Tailwind and MongoDB. This project purpose is to implement User authentication, curd operation, work with both client and server, use JTW to make more secure to protect unauthentic access.",
  technologies: [
    "React",
    "Node",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Tailwind CSS Forms",
    "Firebase",
    "React Firebase Hooks",
    "React Router",
    "React Icons",
    "React Toastify",
  ],
  coverPhoto:
    "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/book-buddy.png",
  images: [
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/book-buddy-add-inventory.png",
      title: "Add Inventory Page",
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/book-buddy-inventory-details.png",
      title: "Inventory Details Page",
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/book-buddy-manage-inventories.png",
      title: "Manage Inventory Page",
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/book-buddy-my-items.png",
      title: "My Items Page",
    },
  ],
  live: "https://book-buddy01.web.app/",
  client: "https://github.com/SEC-MASUM/book-buddy-client",
  server: "https://github.com/SEC-MASUM/book-buddy-server",
};

const BookBuddyDetails = () => {
  const { title, description, technologies, images } = project;
  return (
    <div className="container mx-auto">
      <h1 className="text-4xl font-medium py-8 text-center">{title}</h1>
      <div>
        <p className="text-center max-w-2xl mx-auto">{description}</p>
      </div>
      <div>
        <ul className="flex text-center gap-8 px-8 py-4 text-2xl">
          <p className="space-x-3 space-y-3">
            {technologies.map((technology) => (
              <>
                <span className="inline-block border border-green-500 rounded-md p-2 whitespace-nowrap">
                  {technology}
                </span>
              </>
            ))}
          </p>
        </ul>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {images.map((img) => (
          <div>
            <div className="mockup-window border bg-base-300">
              <div className="flex justify-center  bg-base-200">
                <figure className="bg-slate-600">
                  <img src={img.imageURL} alt="" className="" />
                </figure>
              </div>
            </div>
            <p className="text-2xl py-2 text-secondary text-center">
              {img.title}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BookBuddyDetails;
