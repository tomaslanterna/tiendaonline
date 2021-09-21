import React,{createContext,useState} from 'react';


const userContext=createContext({});

export const UserProvider = ({children}) => {

    const [userLogin,setUserLogin]=useState({});

    const Login=(user)=>{
        setUserLogin(user);
    }

    const Logout=()=>{
        setUserLogin({});
    }

    return (
        <userContext.Provider value={{userLogin,Login,Logout}}>
            {children}
        </userContext.Provider>
    )
}

export default userContext;
