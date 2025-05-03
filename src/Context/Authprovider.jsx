import { createContext, useRef } from "react";
import React from 'react'

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

const DataProjectObj = [
    {
        "title": "News App",
        "skills": "ReactJS, ContextAPI",
        "linkURL": "https://github.com/arjethawa99/newsapp",
    },
    {
        "title": "Food-Hotel-Recommendation-System",
        "skills": "HTML,CSS,JS",
        "linkURL": "https://github.com/arjethawa99/Food-Hotel-Recommendation-System"
    },
    {
        "title": "Todo List",
        "skills": "ReactJS, ContextAPI",
        "linkURL": "https://github.com/arjethawa99/TodoList"
    },
    {
        "title": "EMS(Employee Management System)",
        "skills": "ReactJS, ContextAPI,Component Styling",
        "linkURL": "https://github.com/arjethawa99/EMS"
    },
    {
        "title": "Calculator",
        "skills": "Java Swing",
        "linkURL": "https://github.com/arjethawa99/Calculator"
    },
    {
        "title": "Travel",
        "skills": "HTML,CSS,JS",
        "linkURL": "https://github.com/arjethawa99/travel"
    }
]

const Authprovider = ({ children }) => {
    return (
        <AuthContext.Provider value={{ DataProjectObj}}>
            <div>{children}</div>
        </AuthContext.Provider>
    )
}

export default Authprovider