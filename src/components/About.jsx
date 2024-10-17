import React from 'react';
import AzemPhoto from "./Azem.jpg";

const About = () => {
  return (
    <div>
      <h3 className='section'>About Me</h3>
      <div className='row'>
        <div className="col-xs-12 col-sm-4 col-md-3">
          <img src={AzemPhoto} alt="个人照片" style={{ width: '100%', height: '100%', borderRadius: '10%', maxWidth:'240px' }} />
        </div>
        <div className="col-xs-12 col-sm-8 col-md-9">
          <p>I am a front-end developer with a background in the arts, and I have also studied and researched back-end fields such
            as interface design and database management. I possess fluent English communication skills and strong self-learning
            abilities, enabling me to quickly adapt to different work environments and master the latest technological trends. I am
            passionate about creative front-end design and enjoy exploring new ideas and solutions in projects</p>
          <p>HTML, CSS, JavaScript, React, Node.js, Express, Java, Spring, Python</p>
        </div>
      </div>
    </div>
  );
};

export default About;