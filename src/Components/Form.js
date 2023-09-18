import React,{useState} from "react";


const Form=()=>{


    const [name,setName]=useState("");
    const [btnclicked,setBtnclicked]=useState(false);

    function updateName(event)
    {
        setBtnclicked(false);
        setName(event.target.value);
       
    }
    function upper()
    {
        
        setBtnclicked(true);
    }

    return (
        <div>
            <input placeholder="Enter your name" type="text" onChange={updateName}></input>
            <br/>
            <button onClick={upper}>UpperCase</button>
            <p>Your name is :{
                btnclicked==true&&name.toUpperCase()
                
                }</p>
           
        </div>
    )
}

export default Form;