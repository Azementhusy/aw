import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <div class="container">
      <div class="row">
        
          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-8 header-left" >
            <h1>Wenzheng Huang</h1>
            <h2>HCI Student | Full-stack Developer</h2>
          </div>

          <div class="col-xs-12 col-sm-6 col-md-6 col-lg-4 header-right">
            <a href="你的GitHub链接" target="_blank" rel="noopener noreferrer" className="icon-button"><FaGithub size="3em" /></a>
            <a href="你的领英链接" target="_blank" rel="noopener noreferrer" className="icon-button"><FaLinkedin size="3em" /></a>
            <p>Email: Azementhusy@gmail.com</p>
            <p>Website:Azementhusy</p>
          </div>
  
      </div>
    </div>
  );
};

export default Header;