import "./App.css";
import Header from "./components/header";
import MainList from "./components/mainList"
import ItemCart from "./components/itemCart";
import { Switch, Route } from "react-router-dom";
import Modal from "./components/modal";

function App() {
  return (
    <div className="App">
      <div className="app">
        <Header />
        <Switch>
          <Route path="/" exact component={MainList} />
          <Route path="/cart" component={ItemCart} />
          <Route path="/modal" component={Modal} />
          <Route exact component={MainList} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
