import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    senha: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      loginData.email === "usuario@example.com" &&
      loginData.senha === "senha123"
    ) {
      console.log("Login bem-sucedido:", loginData);
      setError("");
    } else {
      setError("Credenciais inválidas. Por favor, tente novamente.");
    }
  };

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <form
        onSubmit={handleSubmit}
        style={{
          backgroundColor: "#f8f9fa",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
          width: "300px",
        }}
      >
        <h2
          style={{
            color: "#007bff",
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Login
        </h2>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "8px", color: "#495057" }}
          >
            E-mail:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            value={loginData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="senha"
            style={{ display: "block", marginBottom: "8px", color: "#495057" }}
          >
            Senha:
          </label>
          <input
            type="password"
            id="senha"
            name="senha"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            value={loginData.senha}
            onChange={handleChange}
            required
          />
        </div>

        {error && (
          <p
            style={{ color: "#e74c3c", marginTop: "10px", textAlign: "center" }}
          >
            {error}
          </p>
        )}

        <button
          type="submit"
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            padding: "10px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            width: "100%",
          }}
        >
          Entrar
        </button>
      </form>
    </div>
  );
};

export default Login;
