import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Header = () => {
  return (
    <div className="p-3 flex rounded-lg w-full">

        
          <div className="flex flex-col w-1/3">
            <h1>Wenzheng Huang</h1>
            <h2>HCI Student | Full-stack Developer</h2>
          </div>

          <div className="flex flex-col ml-4 w-2/3 ">
            <div className="flex flex-col items-end space-x-2">
              <div>
              <a href="https://github.com/Azementhusy" target="_blank" rel="noopener noreferrer" className="icon-button"><FaGithub size="3em" /></a>
              <a href="你的领英链接" target="_blank" rel="noopener noreferrer" className="icon-button"><FaLinkedin size="3em" /></a>
              </div>
              <p>Email: Azementhusy@gmail.com</p>
              <p>Website: Azementhusy</p>
            </div>
          </div>
  

    </div>
  );
};

export default Header;