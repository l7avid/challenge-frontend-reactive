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
import { useSelector } from "react-redux";
import { stateTypeRedux } from "../store/store";

import SignIn from "../login/components/SingIn";
import LogIn from "../login/components/LogIn";
import GoogleLogin from "../login/GoogleLogin"
import LogOut from "../login/components/LogOut";

interface PrivateRoutesProps {}

const PrivateRoutes: React.FunctionComponent<PrivateRoutesProps> = () => {

  const {user} = useSelector((state: stateTypeRedux) => state.logged)

  return (
    <div>
      {user != null?

      <nav className="navbar">
      <Link to="/purveyor">New Purveyor</Link>
      <Link to="/my_purveyors">My Purveyors</Link>
      <Link to="/products">Products</Link>
      {/* <Link to="/myproducts">My Products</Link> */}
      <Link to="/">My Products</Link>
      <Link to="/receipt">new Receipt</Link>
      <Link to="/my_receipts">My Receipts</Link>
      <Link to="/bill">Bill</Link>
      <Link to="/my_bills">My Bills</Link>
      <LogOut/>
      </nav>:
       <nav className="navbar">
       <Link to="/logIn">Log in</Link>
       <Link to="/SignIn">Sign in</Link>
     </nav>
    }
     
      <Routes>
        <Route path="/purveyor" element={<NewPurveyor/>} />
        <Route path="/my_purveyors" element={<MyPurveyors />} />
        <Route path="/products" element={<NewProduct />} />
        {/* <Route path="/myproducts" element={<MyProducts />} /> */}
        <Route path="/" element={<MyProducts />} />
        <Route path="/receipt" element={<NewReceipt />} />
        <Route path="/my_receipts" element={<MyReceipts />} />
        <Route path="/bill" element={<NewBill />} />
        <Route path="/my_bills" element={<MyBills />} />
        {/* <Route path="/logInGoogle" element={<GoogleLogin />}/> */}
        <Route path="/SignIn" element={<SignIn />}/>
        <Route path="/logIn" element={<LogIn />}/>
        <Route path="/logout" element={<LogOut />}/>
      </Routes>
    </div>
  );
};

export default PrivateRoutes;
