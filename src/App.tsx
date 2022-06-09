import { useContext, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <PrivateRoutes />
      <footer className="footer">This is my footer</footer>
    </BrowserRouter>
  );
}

export default App;
