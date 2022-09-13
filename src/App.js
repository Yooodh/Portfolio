import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component/Main';
import Header from './component/Header';
import Menu2 from './component/Menu2';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Main />} />

          <Route path='Menu2' element={<Menu2 />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
