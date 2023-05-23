import React, { useState, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import * as Auth from '../utils/Auth'

export function Login({ handleLogin }) {
  const [errorMessage, setErrorMessage] = useState('');
  const [formValue, setFormValue] = useState({
    login: '',
    password: ''
  });
  const navigate = useNavigate();
  const location = useLocation();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue({
      ...formValue,
      [name]: value
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formValue.password || !formValue.login) {
      setErrorMessage('Both fields are required')
      return;
    }
    const { login, password } = formValue;
    Auth.authorize(login, password)
      .then(data => {
        if (data.token) {
          localStorage.setItem('token', data.token)
          localStorage.setItem('login', login)
          handleLogin({ login, password });
          const url = location.state?.backUrl || '/content';
          navigate(url)
        }
      })
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        id="login"
        type="text"
        name="login"
        value={formValue.login}
        placeholder="Username"
        onChange={handleChange}
      />
      <input
        id="password"
        type="password"
        name="password"
        value={formValue.password}
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );

}


