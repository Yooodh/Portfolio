import React from 'react';
import { Routes, Route } from 'react-router-dom';

// Import FramerMotion
import { AnimatePresence } from 'framer-motion';

// Import ScrollToTop
import ScrollToTop from './ScrollToTop';

// Import Pages
import MIPLAB from './pages/Projects/Project1/MIPLAB';
import BeCleverROI from './pages/Projects/Project2/BeCleverROI';
import DigitalGameNomad from './pages/Projects/Project3/DigitalGameNomad';
import Luna from './pages/Projects/Project4/Luna';

function Router() {
  return (
    <AnimatePresence mode='wait'>
      <ScrollToTop />
      <Routes>
        <Route path='/MIPLAB' element={<MIPLAB />} />
        <Route path='/BeCleverROI' element={<BeCleverROI />} />
        <Route path='/DigitalGameNomad' element={<DigitalGameNomad />} />
        <Route path='/Luna' element={<Luna />} />
      </Routes>
    </AnimatePresence>
  );
}

export default Router;
