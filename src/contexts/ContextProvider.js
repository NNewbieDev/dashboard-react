import React, { createContext, useState, useContext } from "react";

const StateContext = createContext();

const initialState = {
    chat: false,
    cart: false,
    useProfile: false,
    notification: false,
}

export const ContextProvider = ({ children }) => {
    const [activeMenu, setActiveMenu] = useState(true)
    const [isClicked, setIsClicked] = useState(initialState)
    const [screenSize, setScreenSize] = useState()
    const [currentColor, setCurrentColor] = useState('#03C9D7')
    const [currentMode, setCurrentMode] = useState('Light')
    const [themeSettings, setThemeSettings] = useState(false)

    function setMode(e) {
        setCurrentMode(e.target.value)

        localStorage.setItem('themee.target.val', e.target.value)
        setThemeSettings(false)
    }
    function setColor(color) {
        setCurrentColor(color)

        localStorage.setItem('colorMode', color)
        setThemeSettings(false)
    }

    function handleClick(clicked) {
        return setIsClicked({ ...initialState, [clicked]: true })
    }


    return (
        <StateContext.Provider value={{
            activeMenu,
            setActiveMenu,
            isClicked,
            setIsClicked,
            handleClick,
            screenSize,
            setScreenSize,
            currentColor, currentMode,
            setCurrentColor, setCurrentMode,
            themeSettings, setThemeSettings,
            setColor, setMode
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext)