import React, { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";
import app from "../FireBase/FireBase.config";

export const AuthContext = createContext();

const auth = getAuth(app);
const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading,setLoading]= useState(true)

  const creatUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false)
    });

    return () => {
      unsubscribe();
    };
  }, []);
   const updateUser=(updateData)=>{
      return updateProfile(auth.currentUser,updateData)
    }

  const logOut = () => {
    return signOut(auth);
  };
  const signIn=(email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth,email,password)
  }

  const data = {
    user,
    setUser,
    creatUser,
    logOut,
    signIn,
    loading,
    setLoading,
    updateUser,

  };
  return <AuthContext value={data}> {children} </AuthContext>;
};

export default AuthProvider;
