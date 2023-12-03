import React from "react";

const Vagas = () => {
  const vagas = [
    {
      id: 1,
      cargo: "Desenvolvedor Front-end",
      empresa: "TechCorp",
      localizacao: "São Paulo, SP",
      descricao:
        "Estamos procurando um desenvolvedor front-end para se juntar à nossa equipe inovadora. Se você é apaixonado por criar interfaces incríveis e tem experiência sólida em tecnologias front-end, venha fazer parte do nosso time!",
    },
    {
      id: 2,
      cargo: "Analista de Dados",
      empresa: "Data Insights",
      localizacao: "Rio de Janeiro, RJ",
      descricao:
        "Procuramos um analista de dados experiente para trabalhar em projetos desafiadores. Se você tem habilidades analíticas afiadas, conhecimento em ferramentas de análise de dados e gosta de resolver problemas complexos, esta é a oportunidade certa para você!",
    },
    // Adicione mais vagas conforme necessário
  ];

  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#f0f0f0",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "20px",
          borderRadius: "8px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
          width: "80%",
          maxWidth: "800px",
        }}
      >
        <h2
          style={{
            color: "#007bff",
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "28px",
          }}
        >
          Vagas de Emprego
        </h2>

        {vagas.map((vaga) => (
          <div
            key={vaga.id}
            style={{
              marginBottom: "20px",
              border: "1px solid #ddd",
              padding: "15px",
              borderRadius: "8px",
              background: "#fff",
              transition: "transform 0.2s ease-in-out",
              cursor: "pointer",
            }}
          >
            <h3
              style={{
                color: "#007bff",
                marginBottom: "10px",
                fontSize: "20px",
              }}
            >
              {vaga.cargo}
            </h3>
            <p>
              <strong>Empresa:</strong> {vaga.empresa}
            </p>
            <p>
              <strong>Localização:</strong> {vaga.localizacao}
            </p>
            <p>{vaga.descricao}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Vagas;
