import "./App.css";
import FilterProducts from "./components/FilterProducts/FilterProducts";
import Main from "./components/Main/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SingleProduct from "./components/FilterProducts/SingleProduct";
import Login from "./components/Login/Login";
import { useSelector } from "react-redux";

function App() {
  const user = useSelector((state) => state.auth.user);
  const { authUser } = user;

  console.log("user data", user);
  console.log("authuser", authUser);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={authUser ? <Main /> : <Login />} />
          <Route path="/filteredProducts/:type" element={<FilterProducts />} />
          <Route
            path="/filteredProducts/:type/:id"
            element={<SingleProduct />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
