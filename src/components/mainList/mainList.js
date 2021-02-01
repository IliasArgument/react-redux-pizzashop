import React, { useEffect } from "react";
import "./mainList.css";
import ItemLists from "../itemLists/itemLists";
import { connect } from "react-redux";
import { menuLoaded, addToCart, onError,onSort,onSearch} from "../../actions/index";
import Error from "../../error/error";
import WithRestoService from "../../hoc";
import SortOn from '../onSort';
import U from '../../db.json';





const MainList = ({ menu, addToCart, onError, menuLoaded, error, RestoService,onSort,onSearch,value}) => {

  
  
 
  useEffect(() => {
    menuLoaded(U.menu)
    // RestoService.getMenuItem()
    //   .then((art) => menuLoaded(art))
    //   .catch(() => onError());
  }, [RestoService, menuLoaded, onError]);

console.log(99)



  if (error) {
    return <Error />;
  } else {
    return (
      <>   
      <SortOn/>
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
