import { createContext, useState, useEffect } from 'react';

// Import Components
import Navbar from './Components/Navbar/Navbar';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Footer from './Components/Footer/Footer';
import Router from './Components/Router/Router';

import { Routes, Route } from 'react-router-dom';

export const ThemeContext = createContext(null);

function App() {
  // Dark Mode
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
  };

  // Right-click protection
  useEffect(() => {
    document.oncontextmenu = function () {
      return false;
    };
  }, []);

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <div id={theme}>
          <Routes>
            <Route
              index
              element={
                <>
                  <Navbar theme={theme} toggleTheme={toggleTheme} />
                  <Home />
                  <About />
                  <Skills />
                  <Projects />
                  <Footer />
                </>
              }
            />
          </Routes>
          <Router />
        </div>
      </ThemeContext.Provider>
    </>
  );
}

export default App;
