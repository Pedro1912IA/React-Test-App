import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import HomeContainer from "./containers/HomeContainer";
import ProductsContainer from "./containers/ProductsContainer";
import { EcommerceProvider } from "./Context/EcommerceContext";
import { addElementToCart } from "./redux/actions/cart";

const App = () => {
  const STATE = useSelector((state) => state.cartReducer);
  const dispatch = useDispatch();

  console.log(STATE);

  return (
    <div className="App">
      <button
        onClick={() => {
          dispatch(addElementToCart({ id: 1, name: "shirt", price: 3000 }));
        }}
      >
        Agregar al carrito
      </button>
      <BrowserRouter>
        <EcommerceProvider>
          <Routes>
            <Route
              exact
              path="/productos"
              element={<ProductsContainer />}
            ></Route>
            <Route exact path="/" element={<HomeContainer />}></Route>
            <Route
              path="/productos/:busqueda"
              element={<ProductsContainer />}
            ></Route>
          </Routes>
        </EcommerceProvider>
      </BrowserRouter>
    </div>
  );
};

export default App;
