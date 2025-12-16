import { Route, Routes } from "react-router-dom";
import { HomePage } from "../Pages";
import { Login } from "../Pages/Login";
import { Register } from "../Pages/Register";
import { ProductList } from "../Pages";
import ProductDetails from "../Pages/ProductDetails";
import ProductsDemo from "../Pages/ProductsDemo";
import CartPage from "../Pages/Cart/CartPage";
import Dashboardpage from "../Pages/Dashboard/Dashboardpage";
import Order from "../Pages/Order/Order";
import AdminPage from "../Pages/Admin/AdminPage";
import AdminProtectedRoute from "./AdminProtectedRoute";


export const AllRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<Register/>}/>
         <Route path="/products" element={<ProductList/>}/>
        <Route path="products/:id" element={<ProductDetails/>}/>
       <Route path="/demo" element={<ProductsDemo/>}/>
       <Route path="/cart" element={<CartPage/>}/>
       <Route path="/dashboard" element={<Dashboardpage/>} />
       <Route path="/order-summary" element={<Order/>}/>
       <Route path="/admin" element=
       {<AdminProtectedRoute>
        <AdminPage/>
       </AdminProtectedRoute>}/>
      </Routes>
    </>
  )
}