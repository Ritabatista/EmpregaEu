import React from "react";

const Sobre = () => {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <div
        style={{
          backgroundColor: "#ffffff",
          padding: "30px",
          borderRadius: "10px",
          boxShadow: "0 0 20px rgba(0, 0, 0, 0.1)",
          width: "70%",
          maxWidth: "600px",
          textAlign: "left",
        }}
      >
        <h2
          style={{
            color: "#007bff",
            textAlign: "center",
            marginBottom: "20px",
            fontSize: "24px",
          }}
        >
          Sobre a Plataforma
        </h2>

        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
          O EmpregaEu é a sua plataforma de busca de empregos na área de
          tecnologia. Em parceria com algumas das principais empresas do setor,
          incluindo Google, Microsoft, Amazon, Apple e outras, oferecemos
          oportunidades de carreira emocionantes para profissionais talentosos.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
          Nossa missão é simplificar o processo de busca por emprego na área de
          tecnologia, proporcionando uma experiência intuitiva e eficiente para
          candidatos e empresas. Acreditamos na importância da inovação e na
          formação de equipes diversificadas para impulsionar o crescimento e o
          sucesso no campo da tecnologia.
        </p>

        <p style={{ fontSize: "16px", lineHeight: "1.6" }}>
          Seja você um desenvolvedor experiente ou um talento em ascensão, o
          EmpregaEu está aqui para apoiar sua jornada profissional. Explore as
          oportunidades, conecte-se com empresas líderes e leve sua carreira
          para novos patamares conosco.
        </p>
      </div>
    </div>
  );
};

export default Sobre;
