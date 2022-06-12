import * as React from "react";
import { Link, Route, Routes } from "react-router-dom";
import MyPurveyors from "../purveyor/pages/MyPurveyors";
import NewPurveyor from "../purveyor/pages/NewPurveyor";
import "../App.css";
import NewProduct from "../product/pages/NewProduct";
import MyProducts from "../product/pages/MyProducts";
import MyReceipts from "../receipt/pages/MyReceipts";
import NewReceipt from "../receipt/pages/NewReceipt";
import NewBill from "../bill/pages/NewBill";
import MyBills from "../bill/pages/MyBills";

interface PrivateRoutesProps {}

const PrivateRoutes: React.FunctionComponent<PrivateRoutesProps> = () => {
  return (
    <div>
      <nav className="navbar">
        <Link to="/purveyor">New Purveyor</Link>
        <Link to="/my_purveyors">My Purveyors</Link>
        <Link to="/products">Products</Link>
        <Link to="/">My Products</Link>
        <Link to="/receipt">new Receipt</Link>
        <Link to="/my_receipts">My Receipts</Link>
        <Link to="/bill">Bill</Link>
        <Link to="/my_bills">My Bills</Link>
      </nav>
      <Routes>
        <Route path="/purveyor" element={<NewPurveyor/>} />
        <Route path="/my_purveyors" element={<MyPurveyors />} />
        <Route path="/products" element={<NewProduct />} />
        <Route path="/" element={<MyProducts />} />
        <Route path="/receipt" element={<NewReceipt />} />
        <Route path="/my_receipts" element={<MyReceipts />} />
        <Route path="/bill" element={<NewBill />} />
        <Route path="/my_bills" element={<MyBills />} />
      </Routes>
    </div>
  );
};

export default PrivateRoutes;
