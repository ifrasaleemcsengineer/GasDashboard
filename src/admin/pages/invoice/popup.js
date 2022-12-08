import React from 'react';
import './popup.css';
import { GrClose } from "react-icons";
function Popup(props){
    return(props.trigger)?(
        <div className='popups'>
           <div className='popups-inner'>
        
           <p className='closeButton' onClick={() => props.setTrigger(false)}> X </p>  
           {props.children}
            </div>  



        </div>
    ):"";
}
export default Popup