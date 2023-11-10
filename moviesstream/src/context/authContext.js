import { createContext, useContext, useEffect, useState } from 'react'
import {auth, db} from '../firebase'
import "firebase/firestore"
import { createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged } from 'firebase/auth'
  import { setDoc, doc } from 'firebase/firestore'
 const AuthContext = createContext();

export function AuthContextProvider({children}) {
  const [user, setUser] = useState({});

  function signUp(email, password) {
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        // Set document in the 'users' collection with the user's email
        const userDocRef = doc(db, 'users', email);
        setDoc(userDocRef, {
          savedShows: []
        });
      })
      .catch((error) => {
        console.error('Error signing up:', error);
      });
  }
  

  function login(email, password) {
    return signInWithEmailAndPassword(auth, email, password)
  }

  function logout() {
    return signOut(auth)
  }

  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (currentUser)=>{
      setUser(currentUser)
    })
    return()=>{
      unsubscribe();
    }
  }, [])

  return (
    <AuthContext.Provider value={{user, signUp, login, logout}}>
      {children}
    </AuthContext.Provider>
  )

}

export function UserAuth() {
  return useContext(AuthContext)
}