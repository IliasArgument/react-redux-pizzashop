import React from 'react';
import './header.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';


const Header = ({totalPrice,items}) => {


        return (
        <div className="head">
     
    <div className="list">
    <div style={{position:'relative',left:'105px',top:'13px',fontSize:'9px',width:'12px',height:'12px',background:'red',color:'white',textAlign:'center',borderRadius:'50px'}}>
    {items.map(u => u.qtty).reduce((cur, urr) => cur+urr,0)}
    </div>
           <Link to='/' className="item">Menu</Link>
            <Link to='/cart' className="item">
            
                <img className="header__cart" src="https://raw.githubusercontent.com/yankovalenko94/JS_task_answers/bec35a53098d12fc28744761365495798934c9db/React_step_14/src/components/app-header/shopping-cart-solid.svg" alt="cart"></img>
                
                <span>Total: {totalPrice} $</span>
                 </Link>
                 
    </div>
    
        </div>
    );
   
}

const mapStateToProps = (state) => {
    return {
        totalPrice: state.totalPrice,
        items:state.items
    }
}
export default connect(mapStateToProps)(Header);