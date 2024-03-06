import React, { useState } from 'react';
import './Navbar.css';

// Imported Icons
import { SiConsul } from 'react-icons/si';
import { BsPhoneVibrate } from 'react-icons/bs';
import { AiOutlineGlobal } from 'react-icons/ai';
import { CgMenuGridO } from 'react-icons/cg';

const Navbar = () => {
  // remove the NavBar in the small width screens
  const [active, setActive] = useState('navBarMenu');
  const showNavBar = () => {
    setActive('navBarMenu showNavBar');
  };
  const removeNavBar = () => {
    setActive('navBarMenu');
  };

  // add a background color to the second Navbar
  const [noBg, addBg] = useState('navBarTwo');
  const addBgColor = () => {
    if (window.scrollY >= 10) {
      addBg('navBarTwo navbar_With_Bg');
    } else {
      addBg('navBarTwo');
    }
  };
  window.addEventListener('scroll', addBgColor);

  return (
    <div className='navBar flex'>
      <div className='navBarOne flex'>
        <div>
          <SiConsul />
        </div>
        <div className='none flex'>
          <li className='flex'>
            <BsPhoneVibrate className='icon' /> Support
          </li>
          <li className='flex'>
            <AiOutlineGlobal className='icon' /> Languages
          </li>
        </div>
      </div>
      <div className={noBg}>
        <div className='logoDiv'>
          {/* <img src={logo} className='Logo' /> */}
        </div>

        <div className={active}>
          <ul className='menu flex'>
            <li onClick={removeNavBar} className='listItem'>
              1
            </li>
            <li onClick={removeNavBar} className='listItem'>
              2
            </li>
            <li onClick={removeNavBar} className='listItem'>
              3
            </li>
            <li onClick={removeNavBar} className='listItem'>
              4
            </li>
            <li onClick={removeNavBar} className='listItem'>
              5
            </li>
          </ul>

          <button onClick={removeNavBar} className='btn flex btnOne'>
            Contact
          </button>
        </div>
        <button className='btn flex btnTwo'>Contact</button>
        <div onClick={showNavBar} className='toggleIcon'>
          <CgMenuGridO className='icon' />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
