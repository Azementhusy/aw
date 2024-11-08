import React from 'react';
import AzemPhoto from "./Azem.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center p-4">
      <h3 className="text-3xl font-bold">About Me</h3>
      <div className="divider my-0"></div>

      <div className="flex p-3 ">

        <div className="flex flex-col ml-4 w-1/4 items-center">
          <div className="avatar">
            <div className="w-60 rounded-full flex-shrink-0">
              <img src={AzemPhoto} alt="personal phote" />
            </div>
          </div>
        </div>
        
        <div className="flex flex-col ml-4 w-3/4">
          <div>
            <p>I am a full-stack developer with a background in the arts. I possess fluent English communication skills and strong self-learning abilities, enabling me to quickly adapt to different work environments and master the latest technological trends. I studied for a Masters in Human-Computer Interaction at UCD and graduated with First Class HonoursI am passionate about creative front-end design and enjoy exploring new ideas and solutions in projects.</p>
            <p>HTML, CSS, JavaScript, React, Node.js, Express, Java, Spring, Python</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;