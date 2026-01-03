import { useEffect, useState } from 'react'

import './App.css'
import { ThemeContext, ThemeContextProvider } from './context/Theme'
import ThemeBtn from './components/Themebtn';
import Card from './components/Card';

function App() {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };
  useEffect(() => {
    document.querySelector("html").classList.remove(theme === "light" ? "dark" : "light");
    document.querySelector("html").classList.add(theme);
  }, [theme]);

  return (
    <ThemeContextProvider value={{ theme: "light", toggleTheme }}>
            <div className="flex flex-wrap min-h-screen items-center">
                <div className="w-full">
                    <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                        <ThemeBtn />
                    </div>

                    <div className="w-full max-w-sm mx-auto">
                      <Card />
                       
                    </div>
                </div>
            </div>
    </ThemeContextProvider>
  )
}

export default App
