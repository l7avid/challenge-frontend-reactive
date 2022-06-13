import { useContext, useState } from "react";
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./routes/PrivateRoutes";

function App() {
  return (
    <BrowserRouter>
      <PrivateRoutes />
      <footer className="footer">Developed by David Reina</footer>
    </BrowserRouter>
  );
}

export default App;
