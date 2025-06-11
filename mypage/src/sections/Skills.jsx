import React from 'react';
import {
  SiNodedotjs,
  SiExpress,
  SiPython,
  SiSocketdotio,
  SiReact,
  SiRedux,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiDocker,
  SiGit,
  SiRender,
} from 'react-icons/si';
import { GiElephant } from 'react-icons/gi';
import { RiDatabase2Line } from 'react-icons/ri';

const iconsMap = {
  'Node.js': <SiNodedotjs className="inline-block mr-2 text-green-500" />,
  Express: <SiExpress className="inline-block mr-2 text-gray-300" />,
  Python: <SiPython className="inline-block mr-2 text-yellow-400" />,
  'JWT, Socket.IO': <SiSocketdotio className="inline-block mr-2 text-purple-500" />,
  React: <SiReact className="inline-block mr-2 text-cyan-400" />,
  'Redux Toolkit': <SiRedux className="inline-block mr-2 text-purple-700" />,
  TypeScript: <SiTypescript className="inline-block mr-2 text-blue-600" />,
  'Tailwind, CSS, DaisyUI': <SiTailwindcss className="inline-block mr-2 text-teal-400" />,
  PostgreSQL: <SiPostgresql className="inline-block mr-2 text-blue-700" />,
  'Neon.tech': <RiDatabase2Line className="inline-block mr-2 text-pink-500" />,
  'pg (node-postgres)': <GiElephant className="inline-block mr-2 text-indigo-400" />,
  Docker: <SiDocker className="inline-block mr-2 text-blue-500" />,
  Render: <SiRender className="inline-block mr-2 text-sky-400" />,
  Git: <SiGit className="inline-block mr-2 text-orange-600" />,
};


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

const Skills = () => {
  return (
    <section className="py-12 px-4 text-white max-w-6xl mx-auto">
      <WaveText text="Tech Stack" />
      <div className="flex flex-col lg:flex-row gap-8">

        <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
          {[
            {
              title: 'Backend',
              items: ['Node.js', 'Express', 'Python', 'JWT, Socket.IO'],
            },
            {
              title: 'Frontend',
              items: ['React', 'Redux Toolkit', 'TypeScript', 'Tailwind, CSS, DaisyUI'],
            },
            {
              title: 'Database',
              items: ['PostgreSQL', 'Neon.tech', 'pg (node-postgres)'],
            },
            {
              title: 'Other',
              items: ['Docker', 'Render', 'Git'],
            },
          ].map((category, i) => (
            <div
              key={i}
              className="bg-zinc-800 p-4 rounded-lg shadow-md hover:shadow-[0_0_15px_#c0c0c0] hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl font-semibold mb-2">{category.title}</h3>
              <ul className="list-disc list-inside text-gray-300">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center">
                    {iconsMap[item] || null}
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
<div className="lg:w-1/2 text-gray-300 text-lg leading-relaxed text-roboto">
  <p className="mb-4">
    Communicative, able to work in a team and take responsibility. I quickly 
    adapt to new tasks and always see things through to completion. I am highly 
    trainable and capable of self-organization. Skilled in effective time management 
    and open to constructive criticism.
  </p>
  <p>
    I have been involved in sports all my life (hand-to-hand combat, capoeira).
    I am fond of chess and yoga. I have visited 10 countries, tried myself
    in three different fields and achieved certain heights in each.
  </p>
</div>
      </div>
    </section>
  );
};

export default Skills;