import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { ThemeProvider, THEME_ID, createTheme } from '@mui/material/styles';
import { Switch } from "@mui/material";
const navLinks = [
  { name: "Home", route: "/" },
  { name: "Instructor", route: "/instructors" },
  { name: "Classes", route: "/classes" },
];

const theme= createTheme({
  
  palette: {
    primary: {
      main: "#ff0000",
    },
    secondary: {
      main: "#00ff00",
    }
  }

});

const navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const[isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const[isHome, setIsHome]= useState(false);
  const[isLogin, setIsLogin] = useState(false);
  const[scrollPosition, SetScrollPosition] =useState(0);
  const [isFixed,setIsFixed] = useState(false);
  const[isDarkMode, SetIsDarkMode]= useState(false);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  };

  useEffect(()=> {
    const darkClass = 'dark';
    const root = window.document.documentElement;
    if(isDarkMode){
      root.classList.add(darkClass);

    } else {
      root.classList.remove(darkClass);
    }
  }, [isDarkMode])

  useEffect(() => {
    setIsHome(location.pathname === '/' );
    setIsLogin(location.pathname === '/login');
    setIsFixed(location.pathname === '/register' || location.pathname === '/login')
  }, [location]);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.pageYOffset;
      SetScrollPosition(currentPosition);
    };
    window.addEventListener('scroll',handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  },[])


  useEffect(()=> {
    if(scrollPosition > 100) {
      if(isHome){
        setNavBg('bg-white backdrop-filter backdrop-blur-xl bg-opacity-0 dark:text-white text-black')
      }
      else{
        setNavBg('bg-white dark:bg-black dark:text-white text-black')
      } 
       
    } else {
      setNavBg(`${isHome || location.pathname === '/' ? 'bg-transparent' : 'bg-white dark:bg-black'} dark:text-white text-white`)
    }
  },[scrollPosition])

  const [navBg, setNavBg]= useState('bg-[#15151580]');

  return (
    <nav className="">
      <div className="lg: w-[95%] mx-auto sm:px-6 lg: px-6">
        <div className="px-4 py-4 flex items-center justify-between">
          {/* {logo} */}
          <div>
            <h1 className="text-2xl inline-flex gap-3 items-center font-bold">
              YogaMaster <img src="/yoga-logo.png" alt="" className="w-8 h-8" />
            </h1>
            <p className="font-bold text-[13px] tracking-[8px]">
              Quick Explore
            </p>
          </div>

          {/* mobile menu icons */}

          {/* Navigation Links */}
          <div className="hidden md:block dark:text-white">
            <div className="flex">
              <ul className="ml-10 flex items-center space-x-4 pr-4">
                {navLinks.map((Link) => (
                  <li key={Link.route}>
                    <NavLink
                      to={Link.route}
                      className={({ isActive }) =>
                        `font-bold ${isActive ? 'text-secondary' : `${navBg.includes('bg-transparent') ? 
                          'text-white' : 'text-black dark:text-white'}`} hover:text-secondary duration-300`
                      }
                    >
                      {Link.name}
                    </NavLink>
                  </li>
                ))}

                {/* based on users */}

               <li>
               <NavLink to="/login"  className={({ isActive }) =>
                        `font-bold ${isActive ? 'text-secondary' : `${navBg.includes('bg-transparent') ? 
                          'text-white' : 'text-black dark:text-white'}`} hover:text-secondary duration-300`
                      }>Login</NavLink>
               </li>

               {/* color toggle */}
               <li>
               <ThemeProvider theme={theme}>
                <div className="flex flex-col justify-center items-center">
                  <Switch onChange={() => SetIsDarkMode(!isDarkMode)}/>
                    <h1 className="text-[8px]">Light/Dark</h1>
                </div>
                </ThemeProvider> 
               </li>

              </ul>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default navbar;
