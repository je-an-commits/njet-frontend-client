import React from "react";
import { BrowserRouter, Route, Routes, useLocation } from "react-router-dom";
import Register from "./pages/Register";
import Login from "./pages/Login";
import Home from "./pages/Home";
import PageLayout from "./components/layout/PageLayout";
import VerifyOtp from "./pages/VerifyOtp";


const pageTitles: { [key: string]: string } = {
  "/": "Home",
  "/login": "Login",
  "/register": "Register",
  "/verify-otp": "Verify OTP",
};

const PageTitleUpdater: React.FC = () => {
  const location = useLocation();

  React.useEffect(() => {
    const title = pageTitles[location.pathname] || "My App";
    document.title = title;
  }, [location]);

  return null;
}

function App() {
  

  return (
    <BrowserRouter>
      <PageTitleUpdater />
      <PageLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/verify-otp" element={<VerifyOtp />} />
        </Routes>
      </PageLayout>
    </BrowserRouter>
  )
}

export default App;
