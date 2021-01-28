import React from 'react';
import {Link} from 'react-router-dom';
import './modal.css';


const Modal = () => {
   
    return(
<div className="bcg">
<div className="modal">
           <div className="pos">
               <div><p>ЗАЯВКА УСПЕШНА ОТПРАВЛЕНА!</p></div>
               <div>
               <Link className="link-modal" to="/">
                   <button className="btns">Go to home page</button>
                </Link>
                </div>
           </div>                
        </div>
</div>

       

    );
}

export default Modal;
