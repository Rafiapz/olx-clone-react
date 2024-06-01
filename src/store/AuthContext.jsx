import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth, db } from "../firebase/config";

export const AuthContext = createContext(null);

const AuthContextComponent = ({ children }) => {
   const navigate = useNavigate();
   const [isLoggedIn, setIsLoggedIn] = useState(false);
   const [tooltip, setTooltip] = useState(false);
   const [user, setUser] = useState(null);
   useEffect(() => {
      onAuthStateChanged(auth, (user) => {
         if (user) {
            getDoc(doc(db, "users", user.uid))
               .then((result) => {
                  const list = result.data().wishlist;
                  setUser({
                     name: user.displayName,
                     userId: user.uid,
                     wishlist: list,
                  });
               })
               .catch((err) => {
                  console.log("error", err);
               });
         } else {
            setUser(null);
         }
      });
   }, [user]);

   const handleSignup = () => {};

   const handleLogin = () => {
      navigate("/");
   };

   const logout = () => {
      setUser(false);
      signOut(auth).then(() => {
         console.log("signout");
      });
   };

   const handleProfileTooltip = () => {
      setTooltip(!tooltip);
   };
   return (
      <AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, handleLogin, handleSignup, logout, handleProfileTooltip, tooltip }}>
         {children}
      </AuthContext.Provider>
   );
};

export default AuthContextComponent;
