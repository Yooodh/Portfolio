import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component/Main';
import Header from './component/Header';
import Menu2 from './component/Menu2';
import Menu3 from './component/Menu3';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Main />} />

          <Route path='Menu2' element={<Menu2 />} />

          <Route path='Menu3' element={<Menu3 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
