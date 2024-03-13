import React, { useEffect } from 'react';
import './Project.css';

// Import Images
import bg1 from '../../imgs/yoo.jpg';
import bg2 from '../../imgs/yoo.jpg';
import bg3 from '../../imgs/yoo.jpg';
import bg4 from '../../imgs/yoo.jpg';

// Import project Images
import icon1 from '../../imgs/yoo.jpg';
import icon2 from '../../imgs/yoo.jpg';
import icon3 from '../../imgs/yoo.jpg';
import icon4 from '../../imgs/yoo.jpg';

// Import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

const projects = [
  {
    id: 1,
    backgroundImage: bg1,
    projectImage: icon1,
    projectName: 'MIP_LAB',
    projectLink: '@1',
  },
  {
    id: 2,
    backgroundImage: bg2,
    projectImage: icon2,
    projectName: 'BeClever_ROI',
    projectLink: '@2',
  },
  {
    id: 3,
    backgroundImage: bg3,
    projectImage: icon3,
    projectName: 'DigitalGameNomad',
    projectLink: '@3',
  },
  {
    id: 4,
    backgroundImage: bg4,
    projectImage: icon4,
    projectName: 'Luna',
    projectLink: '@4',
  },
];

const Project = () => {
  // UseEffect to set animation duration
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  return (
    <div className='projects container section'>
      <div className='sectionContainer'>
        <h2 data-aos='fade-down' data-aos-duration='2500'>
          Projects
        </h2>

        <div className='projectsContainer grid'>
          {projects.map(
            ({
              id,
              backgroundImage,
              projectImage,
              projectName,
              projectLink,
            }) => {
              return (
                /* single card */
                <div
                  data-aos='fade-up'
                  data-aos-duration='2500'
                  key={id}
                  className='singleproject'
                >
                  <img
                    src={backgroundImage}
                    className='backgroundImage'
                    alt='img1'
                  />
                  <div className='projectDetails'>
                    <div className='projectPicture'>
                      <img
                        src={projectImage}
                        className='projectImage'
                        alt='img2'
                      />
                    </div>
                    <div className='projectName'>
                      <span>{projectName}</span>
                      <p>{projectLink}</p>
                    </div>
                  </div>
                </div>
              );
            }
          )}
        </div>
      </div>
    </div>
  );
};

export default Project;
