import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import { auth } from '../Firebase/Firebase.config';

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {

    const [user , setUser] = useState(null);

    const [loading , setLoading] = useState(true);

    function registerUser(email,password){
        setLoading(true)
        return  createUserWithEmailAndPassword(auth,email,password)
    }

    function loginUser(email,password){
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)

    }

    function logOut(){
        setLoading(true)
        return signOut(auth)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth,currentUser =>{
            console.log("User in The Auth State Changed", currentUser);
            setUser(currentUser);
            setLoading(false)
        });
        return () => {
            unsubscribe();
        }
    }, [])

    const authInfo = {

        user,
        loading,
        registerUser,
        loginUser,
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {
                children
            }
        </AuthContext.Provider>
    );
};

export default AuthProvider;