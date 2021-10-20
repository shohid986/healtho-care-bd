import React, { createContext } from 'react';
import useFirebase from '../Hooks/useFirebase';
import useService from '../Hooks/useServices';

export const AuthContext = createContext();
const AuthProvider = ({children}) => {
    const services = useService();
    const firebase = useFirebase();
    return (
        <AuthContext.Provider value={services}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;