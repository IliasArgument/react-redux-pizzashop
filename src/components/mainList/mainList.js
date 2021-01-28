import React, { useEffect } from "react";
import "./mainList.css";
import ItemLists from "../itemLists/itemLists";
import { connect } from "react-redux";
import { menuLoaded, addToCart, onError,onSort,onSearch} from "../../actions/index";
import Error from "../../error/error";
import WithRestoService from "../../hoc";




const MainList = ({ menu, addToCart, onError, menuLoaded, error, RestoService,onSort,onSearch,value}) => {


 
  useEffect(() => {
    RestoService.getMenuItem()
      .then((a) => menuLoaded(a))
      .catch(() => onError());
  }, [RestoService, menuLoaded, onError]);



  if (error) {
    return <Error />;
  } else {
    return (
      <>
      <div className="">
         <div className="blc">
       <div className="btn">
            <button  className="btn1" onClick={() => onSort('title')}>Size</button>
            <button  className="btn1" onClick={onSort.bind(this, 'price')}>Price</button>
            <button className="btn1" onClick={onSort.bind(this, 'catecory')}>Category</button>
       </div>
       <div className="search">
         <input className="inp" placeholder="...search" value={value} onChange={(e) => onSearch(e.target.value)}></input>         
       </div>
      </div>
      </div>
      
      <ul className="menu">
          {menu.map((item) => (
            <ItemLists
              key={item.id}
              menu={item}
              onAddToCart={() => addToCart(item.id)}
            />
          ))}
        </ul>
 
       
      </>
      
    );
  }
};

const mapStateToProps = (state) => {
  return {
    menu: state.menu && state.menu.filter(o => o.category.indexOf(state.value) >= 0),
    error: state.error,
    value: state.value,
  };
};

const mapDispatchToProps = {
  menuLoaded,
  addToCart,
  onError,
  onSort,
  onSearch
};

export default WithRestoService()(
  connect(mapStateToProps, mapDispatchToProps)(MainList)
);
