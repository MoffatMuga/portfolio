import React, { useState, useEffect } from 'react';
import { FaMoon } from 'react-icons/fa';
import { BsSunFill } from 'react-icons/bs';

export default function ThemeToggle() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const theme = localStorage.getItem("theme");
      if (theme === "dark") {
        setDarkMode(true);
        document.documentElement.classList.add('dark');
      }
    }
  }, []);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.setItem("theme", "dark");
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem("theme", "light");
      }
    }
  }, [darkMode]);

  return (
    <div
      className='relative flex items-center w-16 h-8 dark:bg-gray-800 bg-gray-200 rounded-full p-1 cursor-pointer gap-2'
      onClick={() => setDarkMode(!darkMode)}
    >
      <FaMoon className={`text-main ${darkMode ? 'block' : 'hidden'}`} size={18} />
      <div
        className={`absolute bg-white dark:bg-gray-800 h-6 w-6 rounded-full shadow-md transform transition-transform duration-300 ${darkMode ? 'translate-x-6' : 'translate-x-0'}`}
      />
      <BsSunFill className={`ml-auto text-main ${!darkMode ? 'block' : 'hidden'}`} size={18} />
    </div>
  );
}
