import React from "react";
import Left from "./Components/Left/Left";
import Right from "./Components/Right/Right";
import Logout from "./Components/Left/Left1/Logout";
import SignUp from "./Components/Login,Signup page/SignUp";
import Login from "./Components/Login,Signup page/Login";
import { useAuth } from "./context Api/AuthProvider";
import { Routes, Route, Navigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="flex h-screen">
                <Logout />
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to={"/Login"} />
            )
          }
        />
        <Route
          path="/Login"
          element={authUser ? <Navigate to={"/" }/> : <Login />}
        />
        
        <Route
          path="/Signup"
          element={authUser ? <Navigate to={"/"} /> : <SignUp />}
        />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;
