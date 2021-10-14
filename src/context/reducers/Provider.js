import React,{ createContext,userReducer,Children } from "react";
import auth from "./auth";
import authinitialState from "../initialstates/authinitialState";
import contactsinitialState from "../initialstates/contactsinitialState";
import contacts from "../reducers/contacts"



export const GlobalContact= createContext({});
export const GlobalProvider= ({ children }) =>{

    const [authState,authDispatch ]=userReducer(auth,authinitialState); 
    const [contactState,contactDispatch ]=userReducer(
        contacts,
        contactsinitialState
    );

    return <GlobalContact.Provider 
    value={{
            authState,
            authDispatch,
            contactDispatch,
            contactState,
        }}
        >{Children}</GlobalContact.Provider>
};