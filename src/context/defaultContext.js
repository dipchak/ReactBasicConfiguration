import { createContext, useContext, useState } from "react";

const defaultContext = createContext()

export default function DefaultProvider({ children }) {
    const [isAutorized, setisAutorized] = useState(false)

    return (
        <defaultContext.Provider value={{ isAutorized }}> {children} </defaultContext.Provider>
    )
}

export const DefaultState = () => {
    return useContext(defaultContext)
}