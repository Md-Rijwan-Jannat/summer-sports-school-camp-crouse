import { useEffect } from "react";
import { useState } from "react";
import { FaMoon } from "react-icons/fa";
import { useLocation } from "react-router-dom";


const DarkTheme = () => {


    const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');
    const location = useLocation();

    const toggleTheme = () => {
        const newTheme = theme === 'light' ? 'dark' : 'light';
        setTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);
    return (

        <button
            className={`fixed bottom-4 bg-blue-800 opacity-50 text-white right-4 ${location.pathname === '/' ? 'z-10' : 'z-20'
                } bg-slate-400 text-gray-700 rounded p-2`}
            style={{ opacity: theme === 'light' ? 0.5 : 1 }}
            onClick={toggleTheme}
        >
            <FaMoon color="black" size={20}/>
        </button>
    );
};

export default DarkTheme;