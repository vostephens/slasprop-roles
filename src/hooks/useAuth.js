import React from 'react';
import { createContext, useContext, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useLocalStorage } from './useLocalStorage';
const AuthContext = createContext();

const users = [
    { id: 1, userID: 'landRecords', password: 'landRecords123', role: 'Land Records Officer' },
    { id: 2, userID: 'surveyorGeneral', password: 'surveyorGeneral123', role: 'Surveyor General' },
    { id: 3, userID: 'sensitizationOfficer', password: 'sensitizationOfficer123', role: 'Sensitization Officer' },
    { id: 4, userID: 'governor', password: 'Governor123', role: 'Governor' },
    { id: 5, userID: 'chiefRegistrar', password: 'chiefRegistrar123', role: 'Chief Registrar' },
    { id: 6, userID: 'assistantCR', password: 'assistantCR123', role: 'Assistant Chief Registrar' },
    { id: 7, userID: 'SLTROfficer', password: 'SLTROfficer123', role: 'SLTR Officer' },
    { id: 8, userID: 'deptSLTROfficer', password: 'deptSLTROfficer123', role: 'Deputy SLTR Officer' },
]

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useLocalStorage('user', null);
    const navigate = useNavigate();

    // call this function when you want to authenticate the user
    const login = async (data) => {

        let valid = false;

        if (users.some(item => item.userID===data.userID)){
            const val= users.find(item => item.userID===data.userID);            
            setUser({
                userID: data.userID,
                role: val.role,
            });
            navigate('/dashboard');
            valid=true;
        }

        else{
            valid=false;
        }
        
        return valid;
    };

    // call this function to sign out logged in user
    const logout = () => {
        setUser(null);
        navigate('/', { replace: true });
    };

    const value = useMemo(
        () => ({
            user,
            login,
            logout,            
        }),
        [user]
    );
    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
    return useContext(AuthContext);
};
