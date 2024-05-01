import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MIPLAB from '../Projects/Project1/MIPLAB';
import BeCleverROI from '../Projects/Project2/BeCleverROI';
import DigitalGameNomad from '../Projects/Project3/DigitalGameNomad';
import Luna from '../Projects/Project4/Luna';

function Router() {
  return (
    <div>
      <Routes>
        <Route path='/MIPLAB' element={<MIPLAB />} />
        <Route path='/BeCleverROI' element={<BeCleverROI />} />
        <Route path='/DigitalGameNomad' element={<DigitalGameNomad />} />
        <Route path='/Luna' element={<Luna />} />
      </Routes>
    </div>
  );
}

export default Router;
