import React from 'react';
import { FaGithub } from 'react-icons/fa';

const Projects = ({ projects }) => {
  return (
    <div className="flex flex-col items-center p-4">
      <h3 className="text-3xl font-bold">Projects</h3>
      <div className="divider my-0"></div>

      <div className="p-3 flex bg-whit rounded-lg w-full">
        <div className="w-1/4">
          <h4>LinkApp</h4>
          <p>Social Media App</p>
          <div className="p-3">
            <a href="https://github.com/Yieugene1/Link.git" target="_blank" rel="noopener noreferrer" className="icon-button"><FaGithub size="3em" /></a>
          </div>
        </div>

        <div className="w-3/4">
          <p><b>Tech Stack: </b>Django, REST Framework, React Vite, Docker, AWS, WebSocket, Redis, PostgreSQL, JWT, CICD</p>
          <p><b>Description: </b>Designed and developed a social networking platform enabling users to add friends, chat, share posts, and interact through likes, bookmarks, and comments. Users can personalise their profiles with custom bios and avatars.</p>
          <p><b>Front-end: </b>Built with a React+Vite architecture, using Tailwind CSS and DaisyUI for an enhanced, modern UI.</p>
          <p><b>Back-end: </b>Established a RESTful API to ensure a clean, scalable interface between front and back ends. Integrated WebSocket for real-time chat capabilities, with PostgreSQL for data storage.</p>
        </div>
      </div>

      <div className="p-3 flex bg-whit rounded-lg w-full">
        <div className="w-1/4">
          <h4>Article Search</h4>
          <p>Academic Search Chatbot</p>
          <div className="p-3">
            <a href="https://github.com/Azementhusy/articlesresearch-react-app.git" target="_blank" rel="noopener noreferrer" className="icon-button"><FaGithub size="3em" /></a>
          </div>
        </div>

        <div className="w-3/4">
          <p><b>Tech Stack: </b>React, Material UI, Axios, Node.js, Docker, Git & GitHub, Postman, RESTful API</p>
          <p><b>Description: </b>Developed a chatbot that retrieves academic articles via the OpenAlex API and generates GPT-based summaries.</p>
          <p><b>Front-end: </b>Built with a React architecture, using Material UI for an enhanced, modern UI.</p>
          <p><b>Back-end: </b>Built the backend with Node.js and Express, integrating RESTful API, ChatGPT API, and OpenAlex API to enable natural language queries for retrieving structured bibliographic data.</p>
        </div>
      </div>


    </div>
  );
};

export default Projects;