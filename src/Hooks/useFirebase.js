import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, signOut, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { useHistory, useLocation } from "react-router";
import initializeAuthentication from "../Firebase/Firebase.init";


initializeAuthentication();
const googleProvider = new GoogleAuthProvider();
    
const useFirebase = () => {
    const auth = getAuth();
    const [name, setName] = useState('');
    const [user, setUser] = useState({});
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [error, setError] = useState("");
    const [isLogin, setIsLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    const handleGoogleSign = () => {
        setIsLoading(true);
        signInWithPopup(auth, googleProvider)
        .then(result => {
          const {displayName, email, photoURL} = result.user;
          const myObj = {
            name:displayName,
            email:email,
            image:photoURL
          }
          setUser(myObj);
        })
        .finally(()=> setIsLoading(false));
      }

      const handleUserName = e => {
        setName(e.target.value);
        console.log(e.target.value);
      }
      const handleChackbox = (e) => {
        setIsLogin(e.target.checked);
      }
      const handleEmailFeild = e => {
        setEmail(e.target.value);
      }
      const handlePasswordFeild = e => {
        setPassword(e.target.value);
      }

      const handleRegisterForm = e =>{
        e.preventDefault();
        setIsLoading(true);
        const createNewUser = (email, password) => {
            createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
              const user = result.user;
              console.log(user);
              setError('');
              setUserName();
            })
            .catch(error => {
              setError(error.message);
            })
            .finally(()=> setIsLoading(false))
          }
        console.log(email, password);
        isLogin ? processLogin(email, password) : createNewUser(email, password);
      }

      const processLogin = (email, password)=>{
          setIsLoading(true);
        signInWithEmailAndPassword(auth, email, password)
        .then(result=>{
          const user = result.user;
          console.log(user);
          
        })
        .catch(error => {
          setError(error.message);
        })
        .then(()=> setIsLoading(false));
      }

      const setUserName = () => {
          setIsLoading(true);
        updateProfile(auth.currentUser, {
          displayName : name
        })
        .then(()=>{

        })
        .finally(()=> setIsLoading(false))
      }

      const handleSignOut = () => {
        signOut(auth)
        .then( () => {
          setUser({});
        })
      }

      useEffect(()=>{
        onAuthStateChanged(auth, (user) => {
            if (user) {
              setUser(user);
            } else {
            }
            setIsLoading(false);
          });
      }, [])

      return{
          handleSignOut,
          handleGoogleSign,
          handleRegisterForm,
          handlePasswordFeild,
          handleEmailFeild,
          handleUserName,
          handleChackbox,
          user,
          isLogin,
          isLoading,
          setUser
      }
}

export default useFirebase;