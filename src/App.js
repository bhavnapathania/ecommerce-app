import "./App.css";
import FilterProducts from "./components/FilterProducts/FilterProducts";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./components/FilterProducts/SingleProduct";

function App() {
  // const cart = useSelector((state) => state.cart.cart);
  // const totalAmount = useSelector((state) => state.cart.totalAmount);
  // const totalPrice = useSelector((state) => state.cart.totalPrice);
  // console.log("cart here", cart);
  // console.log("totalAmount", totalAmount);
  // console.log("totalPrice", totalPrice);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Main />} path={"/"}></Route>
        <Route
          element={<FilterProducts />}
          path={"/filteredProducts/:type"}
        ></Route>
        <Route
          element={<SingleProduct />}
          path="/filteredProducts/:type/:id"
        ></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
