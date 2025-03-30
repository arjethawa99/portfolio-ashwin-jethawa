import { createContext } from "react";
import React from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const DataProjectObj = [
    {
        "title": "lorem lorem lorem",
        "linkURL": "https://www.google.com/"
    },
    {
        "title": "lorem lorem lorem",
        "linkURL": "https://www.google.com/"
    },
    {
        "title": "lorem lorem lorem",
        "linkURL": "https://www.google.com/"
    },
    {
        "title": "lorem lorem lorem",
        "linkURL": "https://www.google.com/"
    },
    {
        "title": "lorem lorem lorem",
        "linkURL": "https://www.google.com/"
    },
    {
        "title": "lorem lorem lorem",
        "linkURL": "https://www.google.com/"
    },
    {
        "title": "lorem lorem lorem",
        "linkURL": "https://www.google.com/"
    },
    {
        "title": "lorem lorem lorem",
        "linkURL": "https://www.google.com/"
    },
    {
        "title": "lorem lorem lorem",
        "linkURL": "https://www.google.com/"
    },
    {
        "title": "lorem lorem lorem",
        "linkURL": "https://www.google.com/"
    }
]

const Authprovider = ({ children }) => {
    return (
        <AuthContext.Provider value={DataProjectObj}>
            <div>{children}</div>
        </AuthContext.Provider>
    )
}

export default Authprovider