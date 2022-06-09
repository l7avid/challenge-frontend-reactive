import * as React from "react";
import { Link, Route, Routes } from "react-router-dom";
import MyPurveyors from "../purveyor/pages/MyPurveyors";
import Purveyor from "../purveyor/pages/Purveyor";
import "../App.css";

interface PrivateRoutesProps {}

const PrivateRoutes: React.FunctionComponent<PrivateRoutesProps> = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/purveyor">Purveyor</Link>
        <Link to="/my_purveyors">My Purveyor</Link>
        {/* <Link to="/products">Products</Link>
        <Link to="/my_products">My Products</Link>
        <Link to="/bill">Bill</Link>
        <Link to="/receipt">Receipt</Link> */}
      </nav>
      <Routes>
        <Route path="/purveyor" element={<Purveyor />} />
        <Route path="/my_purveyors" element={<MyPurveyors />} />
        {/* <Route path="/products" element={<Products />} />
        <Route path="/my_products" element={<My_Products />} />
        <Route path="/bill" element={<Bill />} />
        <Route path="/receipt" element={<Receipt />} /> */}
      </Routes>
    </div>
  );
};

export default PrivateRoutes;
