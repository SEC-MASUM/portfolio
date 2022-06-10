import React from "react";
const project = {
  id: 1,
  title: "Auto Zone",
  subtitle: "MERN Stack",
  description:
    "It is a automobile parts manufacturer website. In this web site has 2 panel. One is for customer or consumer and another is Admin panel. Admin panel secured from both client and server side. It was a challenging project for me. I learnt many things when I do this project.",
  technologies: [
    "React",
    "Node",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Firebase",
    "React Firebase Hooks",
    "React Router",
    "React Query",
    "React Hook Form",
    "React Icons",
    "React Toastify",
    "Tailwindcss Forms",
    "Daisy UI",
    "React Stripe-js",
    "stripe-js",
    "Axios",
    "Devicon",
  ],
  coverPhoto:
    "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/auto-zone.png",
  images: [
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/auto-zone-add-product.png",
      title: "Add Product Page",
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/auto-zone-manage-orders.png",
      title: "Manage Orders Page",
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/auto-zone-purchase.png",
      title: "Product Purchase Page",
    },
    {
      imageURL:
        "https://raw.githubusercontent.com/SEC-MASUM/portfolio-resource/main/images/auto-zone-user-role.png",
      title: "Manage User Role Page",
    },
  ],
  live: "https://auto-zone-01.web.app/",
  client: "https://github.com/SEC-MASUM/auto-zone-client",
  server: "https://github.com/SEC-MASUM/auto-zone-server",
};

const AutoZoneDetails = () => {
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
        {images?.map((img) => (
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

export default AutoZoneDetails;
