import { createContext, useState, useEffect } from 'react';

// Import Pages
import Navbar from './components/pages/Navbar/Navbar';
import Home from './components/pages/Home/Home';
import About from './components/pages/About/About';
import Skills from './components/pages/Skills/Skills';
import Projects from './components/pages/Projects/Projects';
import Footer from './components/pages/Footer/Footer';
import Router from './components/Router';

// Import Router
import { Routes, Route } from 'react-router-dom';

// Import Loading
import Loading from './components/Loading/Loading';

// 테마 관련 정보를 전역으로 사용할 수 있는 Context 생성
export const ThemeContext = createContext(null);

function App() {
  // 다크모드
  const [theme, setTheme] = useState(() => {
    // localStorage에서 theme 값을 불러오고, 없을 경우 기본값 'light' 설정
    const savedTheme = localStorage.getItem('theme');
    return savedTheme || 'light';
  });

  const toggleTheme = () => {
    setTheme((curr) => {
      // 현재 테마와 반대되는 테마로 변경
      const newTheme = curr === 'light' ? 'dark' : 'light';
      // 변경된 테마를 localStorage에 저장
      localStorage.setItem('theme', newTheme);
      return newTheme;
    });
  };

  // 우클릭 방지
  useEffect(() => {
    document.oncontextmenu = function () {
      return false;
    };
  }, []);

  // 로딩 페이지
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // setTimeout을 사용하여 1초 후에 isLoading 상태를 false로 변경
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    // 컴포넌트가 unmount 되기 전에 타이머 클리어
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading theme={theme} toggleTheme={toggleTheme} />
      ) : (
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
      )}
    </>
  );
}

export default App;
