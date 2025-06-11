import React from "react";

const WaveText = ({ text }) => {
  return (
    <h2 className="text-3xl font-bold Libre Caslon Display text-center mb-8 text-silver">
      {text.split('').map((char, i) => (
        <span
          key={i}
          className="wave-letter"
          style={{ animationDelay: `${i * 0.15}s` }}
        >
          {char}
        </span>
      ))}
    </h2>
  );
};

const ProjectBlock = ({ imageSrc, imageAlt, link, text, reverse = false }) => (
  <div className={`flex flex-col md:flex-row ${reverse ? 'md:flex-row-reverse' : ''} items-center gap-6 my-6 text-roboto`}>
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-6 border rounded-lg shadow transition-transform duration-300"
      style={{ minWidth: 140, maxWidth: 220 }}
      onMouseEnter={(e) =>
        e.currentTarget.classList.add("animate-pulse-scale")
      }
      onMouseLeave={(e) =>
        e.currentTarget.classList.remove("animate-pulse-scale")
      }
    >
      <img
        src={imageSrc}
        alt={imageAlt}
        className="mx-auto h-20 w-auto"
      />
    </a>
    <p className="max-w-md text-gray-300 text-center md:text-left">{text}</p>
  </div>
);

const MyProject = () => {
  return (
    <section className="max-w-5xl mx-auto mt-20">
      <WaveText text="MyCreations" />

      <ProjectBlock 
        imageSrc="/images/Logo.png"
        imageAlt="LoveStalker Logo"
        link="https://lovestalkerfrontend.onrender.com"
        text="Full-stack dating app, with a server on Node and Express. 
        Information is stored in the database, and photos in the Clowdinary. 
        Authorization, real-time messages, geolocation and push notifications are implemented."
      />

      <ProjectBlock
        imageSrc="/images/Logo_ToDo.png"
        imageAlt="ToDo List Logo"
        link="https://github.com/ElenaZht/hackaton-1"
        text="Adaptive ToDo List written in Python and connected to PostgresQL. Classical terminal application."
        reverse
      />

      <ProjectBlock
        imageSrc="/images/GoMafia.webp"
        imageAlt="GoMafia Logo"
        link="https://gomafia.pro/"
        text="Joint participation in the preparation of animation, dynamic updating of blocks, forms, 
        modal windows and processing of received information."
      />

      <style>
        {`
          @keyframes pulse-scale {
            0%, 100% {
              transform: scale(1);
            }
            50% {
              transform: scale(1.07);
            }
          }
          .animate-pulse-scale {
            animation: pulse-scale 1.5s infinite;
          }
        `}
      </style>
    </section>
  );
};

export default MyProject;