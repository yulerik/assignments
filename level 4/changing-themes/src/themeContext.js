import React, {useState} from "react"
const ThemeContext = React.createContext()

function ThemeContextProvider(props) {
    const [theme, setTheme] = useState("light-theme")
    
    function toggleTheme() {
        setTheme(prevTheme => prevTheme === "light-theme" ? "dark-theme" : "light-theme")
    }
    
    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}

export {ThemeContextProvider, ThemeContext}