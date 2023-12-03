import React from "react";

const CadastroForm = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
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
          Cadastro de Usuário
        </h2>
        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="nome"
            style={{ display: "block", marginBottom: "8px", color: "#495057" }}
          >
            Nome:
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            required
          />
        </div>

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
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="endereco"
            style={{ display: "block", marginBottom: "8px", color: "#495057" }}
          >
            Endereço:
          </label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            required
          />
        </div>

        <div style={{ marginBottom: "15px" }}>
          <label
            htmlFor="telefone"
            style={{ display: "block", marginBottom: "8px", color: "#495057" }}
          >
            Telefone:
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            style={{ width: "100%", padding: "8px", boxSizing: "border-box" }}
            required
          />
        </div>

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
          Cadastrar
        </button>
      </form>
    </div>
  );
};

export default CadastroForm;
