// import React, { createContext, useState, useEffect, useContext } from 'react'
// import { createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut,  } from 'firebase/auth'
// import  auth  from '../firebaseSettings.js'

// const FirebaseContext = createContext()
// export function useAuth() {
//     return useContext(FirebaseContext)
// }

// export function FirebaseProvider({ children }) {
//     const [accessToken, setAuthToken] = useState('')
//     const [currentUser, setCurrentUser] = useState()
//     const [isLoading, setLoading] = useState(true)

//     const [authState, setAuthState] = useState(false || window.localStorage.getItem('auth') === 'true');

//     useEffect(() => {

//         const unsubscriber = auth.onAuthStateChanged((userCredential) => {
//             setAuthState(true);
//             window.localStorage.setItem('auth','true');
//             // userCredential.getIdToken().then((accessToken) => {
//             //     setAuthToken(accessToken);
//             // });
//            // setAuthToken(userCredential.accessToken);
            
//             setCurrentUser(userCredential)
//             setLoading(false)
//             window.localStorage.setItem('token', userCredential.accessToken);
//             console.log(userCredential);
//             console.log(userCredential.accessToken);
//             console.log(localStorage);
//         })
//         return unsubscriber
//     }, [])


//     const login = async(email,password) => {
//         // // const result = await signInWithEmailAndPassword(auth, email, password)
//         // // setCurrentUser(result.user)
//         // // setAuthToken(result.user.accessToken)
//         // // .then((userCredential) => {
//         // //     console.log(userCredential);
//         // // }).catch((error) => {
//         // //     console.log(error);
//         // // });
//         // try{
//         // const result = await signInWithEmailAndPassword(auth, email, password)
//         // setCurrentUser(result.user)
//         // setAuthToken(result.user.accessToken)
//         // console.log(result);}
//         // catch(error){
//         //     console.log(error);
//         // };

//         await signInWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             if(userCredential){
//                 setAuthState(true);
//                 window.localStorage.setItem('auth','true');
//                 // userCredential.getIdToken().then((accessToken) => {
//                 //     setAuthToken(accessToken);
//                 // });
//                 setAuthToken(userCredential.accessToken);
//             }
//             setCurrentUser(userCredential)
            
//             window.localStorage.setItem('token', userCredential.accessToken);
//             console.log(userCredential);
//         }).catch((error) => {
//             console.log(error);
//         });
//     }

//     const register = async(email,password) => {
//         // // createUserWithEmailAndPassword(auth, email, password)
//         // // .then((userCredential) => {
//         // //     console.log(userCredential);
//         // // }).catch((error) => {
//         // //     console.log(error);
//         // // });
//         // try{
//         // const result = await createUserWithEmailAndPassword(auth, email, password)
//         // setCurrentUser(result.user)
//         // setAuthToken(result.user.accessToken)
//         // console.log(result);}
//         // catch(error){
//         //     console.log(error);
//         // };

//          createUserWithEmailAndPassword(auth, email, password)
//         .then((userCredential) => {
//             if(userCredential){
//                 setAuthState(true);
//                 window.localStorage.setItem('auth','true');
//                 // userCredential.getIdToken().then((accessToken) => {
//                 //     setAuthToken(accessToken);
//                 // });
//                  setAuthToken(userCredential.accessToken);
//             }
//             setCurrentUser(userCredential)
//             window.localStorage.setItem('token', userCredential.accessToken);
//             console.log(userCredential);
//         }).catch((error) => {
//             console.log(error);
//         });
//     }

    
//     const value = {
//         currentUser,
//         register,
//         login,
//         accessToken,
//         authState
//     }

//     return (
//         <FirebaseContext.Provider value={value}>
//             {!isLoading && children}
//         </FirebaseContext.Provider>

//     )
// }
// // export const FirebaseProvider = ({ children }) => {
// //     const [authToken, setAuthToken] = useState(null)
// //     const [user, setUser] = useState(null)

// //     const register = async(email, password) => {
// //         try {
// //             const result = await createUserWithEmailAndPassword(auth, email, password)
// //             setUser(result.user)
// //             setAuthToken(result.user.accessToken)
// //         }catch(error){
// //             console.log("signIn error: ", error)
// //         }
// //     } 

// //     return (
// //         <FirebaseContext.Provider value = {{
// //             authToken,
// //             user,
// //             register,
// //         }}>{children}</FirebaseContext.Provider>
// //     )
// // }

// export default FirebaseContext