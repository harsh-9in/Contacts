import { useState } from "react";
import RegisterUI from "../../layouts/Register";

export default () => {

    const[form,setForm]=useState({});

    const onChange=(e,{name,value}) =>{
        setForm({...form,[name]:value});
    };
    
    return {form,onChange};
};


