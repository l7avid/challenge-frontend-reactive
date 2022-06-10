import * as React from "react";
import { Link, Route, Routes } from "react-router-dom";
import MyPurveyors from "../purveyor/pages/MyPurveyors";
import NewPurveyor from "../purveyor/pages/NewPurveyor";
import "../App.css";
import NewProduct from "../product/pages/NewProduct";
import MyProducts from "../product/pages/MyProducts";

interface PrivateRoutesProps {}

const PrivateRoutes: React.FunctionComponent<PrivateRoutesProps> = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/purveyor">New Purveyor</Link>
        <Link to="/my_purveyors">My Purveyors</Link>
        <Link to="/products">Products</Link>
        <Link to="/my_products">My Products</Link>
        {/*<Link to="/bill">Bill</Link>
        <Link to="/receipt">Receipt</Link> */}
      </nav>
      <Routes>
        <Route path="/purveyor" element={<NewPurveyor/>} />
        <Route path="/my_purveyors" element={<MyPurveyors />} />
        <Route path="/products" element={<NewProduct />} />
        <Route path="/my_products" element={<MyProducts />} />
        {/*<Route path="/bill" element={<Bill />} />
        <Route path="/receipt" element={<Receipt />} /> */}
      </Routes>
    </div>
  );
};

export default PrivateRoutes;
