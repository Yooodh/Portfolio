import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Main from './component/Main';
import Header from './component/Header';

function App() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes>
          <Route exact path='/' element={<Main />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
