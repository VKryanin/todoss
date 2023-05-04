import React, { useState } from "react";
import { LoginPage } from "./LoginPage/LoginPage";
import { Content } from "./Content/Content";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const handleLogin = (username, password) => {
    fetch('https://untiwedev.ru/api/Auth/GetToken', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        login: `${username}`,
        password: `${password}`
    })
    })
    .then(res => {
      if(res.ok) {
        return res.json();
      }
      throw new Error('Не верный логин или пароль');
    })
      .then(data => {
        console.log(data.token)
      })
      .catch(err => console.log(err))
  }
  const handleLogout = () => {
    setIsAuthenticated(false);
  };
  return (
    isAuthenticated ? (
      <Content onLogout={handleLogout} />
    ) : (
      <LoginPage onLogin={handleLogin} />
    )
  );
}

export default App;
