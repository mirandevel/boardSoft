import {createContext, useState} from 'react';
export const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [logged,setLogged]=useState(true);

    const contextValue = {
        isLogged() {
            return false;
        }
    }
    return <AuthContext.Provider value={contextValue}>
        {children}
    </AuthContext.Provider>

};

export default AuthProvider;