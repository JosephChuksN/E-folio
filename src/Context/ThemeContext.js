import React, { useState, createContext, useEffect} from 'react'




const ThemeContext = createContext()

const ThemeProvider = ({initailTheme, children}) => {

const getInitailTheme = () =>{
    if(typeof window !== "undefined" && window.localStorage){
        const storedPrefs = window.localStorage.getItem("color-pref")

    if(typeof storedPrefs === "string"){
        return storedPrefs;
    }
    if(window.matchMedia("prefers-color-theme: dark")){
        return "dark"
    }
    }
    return "light"
}
const [theme, setTheme] = useState(getInitailTheme);

const checkTheme = (existing) =>{
const root = window.document.documentElement;
const isDark = existing === "dark"
root.classList.remove(isDark ? "light" : "dark")
root.classList.add(existing)
localStorage.setItem("color-theme", existing)

}

if (initailTheme) {
    checkTheme(initailTheme)
  }
  useEffect(() => {
    checkTheme(theme)
  }, [theme])
 return(
<ThemeContext.Provider value={{theme, setTheme}}>
      {children}
</ThemeContext.Provider>
 )

}
export {
    ThemeProvider
}

export default ThemeContext;