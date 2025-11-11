// src/pages/Login.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './login.css'

function Login({ setUserRole }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();

    if (username === "writer" && password === "1234") {
      setUserRole("writer");
      navigate("/writer");
    } else if (username === "dev" && password === "1234") {
      setUserRole("developer");
      navigate("/developer");
    } else {
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="login-container">
      <h2>Login Here</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

export default Login;
