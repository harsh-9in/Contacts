import React,{ useContext } from 'react'
import Header from '../../components/Header';
import { GlobalContact } from '../../context/reducers/Provider';


const Contacts = () => {
    const context=useContext(GlobalContact);
    console.log("context",context);
    return (
        <div>
            <Header />
            <h1>Contacts</h1>
        </div>
    )
}

export default Contacts;
