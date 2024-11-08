import React from 'react';
import UCDLogo from '../University College Dublin.svg';
import ZUELLogo from '../ZUEL.svg';



const Education = () => {
  return (
    <div className="flex flex-col items-center p-4">

      <h3 className="text-3xl font-bold">Education</h3>
      <div className="divider my-0"></div>

      <div className="p-3 flex bg-whit rounded-lg w-full">
        <div className="w-1/4">
          <h4 className="font-semibold">University College Dublin</h4>
          <p><b>MSc in Human Computer Interaction</b></p>
          <p>Sep. 2023 - Sep. 2024</p>
          <div>
            <img src = {UCDLogo} alt="UCD logo" className="w-24" />
          </div>
        </div>

        <div className="flex flex-col w-3/4">
          <div className="flex flex-col items-center space-x-2">
            <p className="italic flex">UCD is a leading research-intensive university in Ireland.</p>
          </div>
          <p><strong>Modules</strong>: UXD‑Centered Design, Quantitative Data Analysis, Topics in Digital Media & Comm, AI & Ethics</p>
          <div>
            <p><b>First-Class Honours</b></p>
          </div>
        </div>
      </div>
      

      <div className="p-3 flex rounded-lg w-full">
        <div className="w-1/4">
          <h4 className="font-semibold">University of ZUEL</h4>
          <p><b>BFA in Digital Media</b></p>
          <p>Sep. 2014 - Jun. 2018</p>
          <div>
            <img src = {ZUELLogo} alt="ZUEL logo" className="w-12 ml-6" />
          </div>
        </div>

        <div className="flex flex-col  w-3/4">
          <div className="flex flex-col items-center space-x-2">
            <p className="italic flex">ZUEL is one of the China's key universities of "Project 211", directly administered by the Ministry of Education.</p>
          </div>
          <p><strong>Modules: </strong>Photography and Camera Shooting, Film and Television Editing and Compositing, Writing Scripts, Shooting Script Design, Directing, 3D Animation Creation, Digital Sculpture, UI Design, Digital Interactive Design</p>
          <div>

              <p><b>First-Class Honours</b></p>

          </div>
        </div>
      </div>
    </div>
 
  );
};

export default Education;