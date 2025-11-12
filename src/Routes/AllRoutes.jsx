import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { ProductList } from "../Pages";
import ProductDetails from "../Pages/ProductDetails";
import ProductsDemo from "../Pages/ProductsDemo";


export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="register" element={<Register/>}/>
         <Route path="/products" element={<ProductList/>}/>
        <Route path="products/:id" element={<ProductDetails/>}/>
       <Route path="/demo" element={<ProductsDemo/>}/>
      </Routes>
    </>
  )
}