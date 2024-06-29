import { useEffect } from "react"
import Logo from "../assets/logo.png"

export const Header = ({setTheme ,activeTheme}) => {

  useEffect(() => {
    document.documentElement.removeAttribute('class');
    document.documentElement.classList.add(activeTheme);
  
  }, [activeTheme])
  
  return (
    <header>
        <div className="logo">
            <img src={Logo} alt="Taskmate Logo" />
            <span>Taskmate</span>
        </div>
        <div className="themeSelector">
            <span className={activeTheme==='light' ? 'light activeTheme':'light'} onClick={()=>setTheme('light')}></span>
            <span className={activeTheme==='medium' ? 'medium activeTheme':'medium'} onClick={()=>setTheme('medium')}></span>
            <span className={activeTheme==='dark' ? 'dark activeTheme':'dark'} onClick={()=>setTheme('dark')}></span>
            <span className={activeTheme==='gOne' ? 'gOne activeTheme':'gOne'} onClick={()=>setTheme('gOne')}></span>
            <span className={activeTheme==='gTwo' ? 'gTwo activeTheme':'gTwo'} onClick={()=>setTheme('gTwo')}></span>
            <span className={activeTheme==='gThree' ? 'gThree activeTheme':'gThree'} onClick={()=>setTheme('gThree')}></span>
        </div>
    </header>
  )
}
