import React, { useEffect } from 'react';
import './Projects.css';

// Import Images
import bg1 from '../../../assets/images/MIP_logo.png';
import bg2 from '../../../assets/images/BCL_logo.png';
import bg3 from '../../../assets/images/DGN_background.png';
import bg4 from '../../../assets/images/LUNA_background.png';

// Import project Images
import icon1 from '../../../assets/images/MIP_logo.png';
import icon2 from '../../../assets/images/BCL_logo.png';
import icon3 from '../../../assets/images/DGN_logo.png';
import icon4 from '../../../assets/images/LUNA_logo.png';

// Import AOS
import Aos from 'aos';
import 'aos/dist/aos.css';

// Import Router Link
import { Link } from 'react-router-dom';

const projects = [
  {
    id: 1,
    backgroundImage: bg1,
    projectImage: icon1,
    projectName: 'MIPLAB',
    projectLink: '/MIPLAB',
  },
  {
    id: 2,
    backgroundImage: bg2,
    projectImage: icon2,
    projectName: 'BeCleverROI',
    projectLink: '/BeCleverROI',
  },
  {
    id: 3,
    backgroundImage: bg3,
    projectImage: icon3,
    projectName: 'DigitalGameNomad',
    projectLink: '/DigitalGameNomad',
  },
  {
    id: 4,
    backgroundImage: bg4,
    projectImage: icon4,
    projectName: 'Luna',
    projectLink: '/Luna',
  },
];

const Projects = () => {
  // AOS 애니메이션 지속시간 설정
  useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);

  // Add url
  const url = 'https://github.com/Yooodh';

  return (
    <div className='projects container section' id='DetailProject'>
      <div className='sectionContainer'>
        <h2 data-aos='fade-down' data-aos-duration='2500'>
          Projects
        </h2>
        <button
          data-aos='fade-left'
          data-aos-duration='2500'
          className='btn'
          onClick={() => {
            window.open(url);
          }}
        >
          View All
        </button>

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
                      <Link to={projectLink}>
                        <p>View</p>
                      </Link>
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

export default Projects;
