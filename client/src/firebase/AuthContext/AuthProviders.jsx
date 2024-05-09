import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import React, { createContext, useEffect, useState } from "react";
import { app } from "../firebase.fonfig";
import { GoogleAuthProvider } from "firebase/auth/cordova";

export const AuthContext = createContext();
const AuthProviders = ({ children }) => {
  //user
  const [user, setUser] = useState(null);
  //loading
  const [loading, setLoading] = useState(true);
  //get auth
  const auth = getAuth(app);

//google provider
const googleProvider =new GoogleAuthProvider()

  //create a user

  const createUser = (email, password) => {
    setLoading(true);

    return createUserWithEmailAndPassword(auth, email, password);
  };
  //siginIn With email and password
  const singInEmailAndPassWord = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  //google login

  const googleLogIn=()=>{
    setLoading(true)
    return signInWithPopup(auth,googleProvider)
  }

//onAuthStateChange

useEffect(()=>{

setLoading(true)

const unSubscribe= onAuthStateChanged(auth,currentUser=>{
setUser(currentUser)
console.log('current USer',currentUser)
setLoading(false)
return ()=>{
  unSubscribe()
}

})



},[])


  //logOut
  const logOut = () => {
    setLoading(true);
    return signOut(auth);
  };

  //authoraization /consent value

  const authInfo = {
    user,
    loading,
    setLoading,
    createUser,
    singInEmailAndPassWord,
    googleLogIn,
    logOut,
  };

  return (
    <div>
      <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
    </div>
  );
};

export default AuthProviders;
