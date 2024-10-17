import React from 'react';

const Education = () => {
  return (
    <div>


      <h3 className='section'>Education</h3>
      <div className = 'row'>
        <div class="row clearfix layout layout-left border-weak">
          <div class="col-xs-12 col-sm-4 col-md-3 col-print-12 details">
            <h4>University College Dublin</h4>
            <p><b>Master of Human Computer Interaction</b></p>
            <p>Sep. 2023 - Sep. 2024</p>
            <p class="no-print aditional-links"></p>
          </div>
          <div class="col-xs-12 col-sm-8 col-md-9 col-print-12 content">
            <p class="quote">UCD is a leading research-intensive university in Ireland.</p>
            <p><strong>Modules</strong>: UXD‑Centered Design, Quantitative Data Analysis, Topics in Digital Media & Comm, AI & Ethics</p>
            <p><strong>First-Class Honours</strong></p>

          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;