import {
  Route,
  BrowserRouter,
  Link,
  Navigation,
  Switch,
  Redirect,
} from "react-router-dom";
import Promotions from "./pages/Promotions";
import Products from "./pages/Products";
import MainHeader from "./components/MainHeader";
import logo from "./logo.svg";
import Welcome from "./pages/Welcome";
import "./App.css";
import ProductDetail from "./pages/ProductDetail";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <header className="App-header">
          <MainHeader />
        </header>
        <Welcome />
        <Switch>
          <Route path="/" exact>
            <Redirect to="/welcome" />
          </Route>
          <Route path="/promotions" component={Promotions} />
          <Route path="/products" component={Products} exact />

          <Route path="/products/:productId" component={ProductDetail} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
