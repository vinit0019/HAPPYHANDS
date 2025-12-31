import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from './Components/Login.jsx'
import Signup from './Components/Signup.jsx'
import Home from "./Components/Home.jsx";
import Forgot from "./Components/Forgot.jsx";
import SubmitOtp from "./Components/SubmitOtp.jsx";
import ComparePass from "./Components/ComparePass.jsx";
import Superadmin from "./Components/Superadmin.jsx";
import AdminPage from "./Components/AdminPage.jsx";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login/>} />
        <Route path="/signup" element={<Signup/>} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/forgot" element={<Forgot/>}/>
        <Route path="/submitOtp" element={<SubmitOtp/>}/>
        <Route path="/comparePass" element={<ComparePass/>}/>
        <Route path="/superadmin" element={<Superadmin/>}/>
        <Route path="/admin" element={<AdminPage/>}/>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
