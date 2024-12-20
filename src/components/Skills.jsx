import React, { useState } from 'react';
import { FaDatabase, FaRProject, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaNode, FaReact, FaDocker, FaBootstrap } from 'react-icons/fa';
import { SiTypescript, SiFigma, SiCanva, SiPostgresql, SiExpress, SiTailwindcss, SiAdobe, SiAdobeaftereffects, SiAdobephotoshop, SiAdobeillustrator, SiAdobelightroomclassic, SiAdobepremierepro, SiAdobeaudition, SiPostman } from 'react-icons/si';

const Skills = () => {
  const [hoverIndex, setHoverIndex] = useState(-1);
  

  return (
    <div className="flex flex-col items-center p-4">
      <h3 className="text-3xl font-bold">Skills</h3>
      <div className="divider my-0"></div>

      <div className = "flex flex-col items-start justify-items-start w-full">

            <ul>
                <li><strong>Programming: </strong>HTML, CSS (SCSS), JavaScript (TypeScript), Python, Postman, Node.js</li>
                <li><strong>Data Analysis: </strong>Excel, R, PostgreSQL</li>
                <li><strong>Design: </strong>Figma, Canva, Storyboard</li>
                <li><strong>Media: </strong>Premiere Pro, After Effect, Photoshop, Illustrator, Lightroom, Audition</li>
            </ul>

      </div>

      <div className="flex justify-center gap-4 p-4">
        {[FaHtml5, FaCss3Alt, FaJsSquare, SiTypescript, FaReact, SiTailwindcss, FaBootstrap, FaPython, FaNode, SiExpress, FaDatabase, FaRProject, SiPostgresql, SiPostman, FaDocker,  SiFigma, SiCanva, SiAdobe, SiAdobeaftereffects, SiAdobephotoshop, SiAdobeillustrator, SiAdobelightroomclassic, SiAdobepremierepro, SiAdobeaudition].map((Icon, index) => (
          <div 
            key={index}
            className="transition-all duration-300"
            style={{
              transform: hoverIndex === index ? 'scale(2)' : hoverIndex === index - 1 || hoverIndex === index + 1 ? 'scale(0.8) translateX(' + (hoverIndex === index - 1 ? '15px' : '-15px') + ')' : 'scale(1)',
              zIndex: hoverIndex === index ? '10' : '1'
            }}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(-2)}
          >
            <Icon size={40} />
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Skills;