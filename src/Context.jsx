import { createContext, useContext, useEffect, useState } from "react";

const AppContext = createContext();

const getInitialDarkMode = () => {
    const prefersDarkMode = window.matchMedia('(prefers-color-schema:dark)').matches
    return prefersDarkMode
}

export const AppProvider = ({ children }) => {
    const [isDarkTheme, setIsDarkTheme] = useState(getInitialDarkMode())
    const [searchTerm, setSearchTerm] = useState('lion')

    const toggleDarkTheme = () => {
        const theme = !isDarkTheme
        setIsDarkTheme(theme)
    }
    useEffect(() => {
        document.body.classList.toggle("dark-theme", isDarkTheme)
    }, [isDarkTheme])

    return (
        <AppContext.Provider value={{isDarkTheme, toggleDarkTheme, searchTerm, setSearchTerm}}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => useContext(AppContext)