import React, { useState } from "react";
import { Login } from "./Login";
import { Content } from "./Content";
import { Registration } from "./Registration";
import { ProtectedRoute } from "./ProtectedRoute";
import { Route, Routes, Navigate, useNavigate } from "react-router-dom";


function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const navigate = useNavigate()

  const handleLogin = () => {
    setLoggedIn(true);
  }

  function handleExit() {
    localStorage.clear()
    setLoggedIn(false)
  }

  return (
    <>
      <Routes>
        <Route path="/content" element={<ProtectedRoute element={Content} loggedIn={loggedIn} />} />
        <Route path="/login" element={
          <div className="authForm">
            <Login handleLogin={handleLogin}/>
          </div>} />
        <Route path="/registration" element={
          <div className="authForm">
            <Registration />
          </div>} />
        <Route path="/" element={loggedIn ? <Navigate to='/content' /> : <Navigate to='/login' replace />} />
      </Routes>
    </>

  )
}

export default App;
