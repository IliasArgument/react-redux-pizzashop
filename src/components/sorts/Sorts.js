import React from 'react';
import {connect} from 'react-redux';
import {onSearch,onSort} from '../../actions';
import WithRestoService from "../../hoc";

import './sortOn.css'


const SortOn = ({menu, onSearch, value,onSort}) => {



   return (
<div>
         <div className="blc">
       <div className="btn">
            <button  className="btn1" onClick={() => console.log(onSort('price'))}>Price</button>
            <button  className="btn1" onClick={() => console.log(onSort('title'))}>Size</button>
            <button className="btn1"  onClick={() => console.log(onSort('category'))}>Category</button>
       </div>
       <div className="search">
         <input className="inp" placeholder="...search" value={value} onChange={(e) => onSearch(e.target.value)}></input>         
       </div>
      </div>
      </div>
   );
    
}

const mapStateToProps = (state) => {
    return {
      menu: state.menu,
      value: state.value
    };
  };
  
  const mapDispatchToProps = {
    onSearch,
    onSort
  };
  

export default WithRestoService()(connect(mapStateToProps, mapDispatchToProps)(SortOn));