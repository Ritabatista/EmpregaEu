import "./Testimonials.css";

function Testimonials() {
  return (
    <section className="testimonials">
      <h2>Depoimentos de Nossos Usuários</h2>
      <div className="testimonial">
        <img src="/imagens/persona1.png" alt="Imagem do Usuário 1" />
        <p>
          "Encontrei meu emprego dos sonhos através do EmpregaEu. Agradeço por
          essa plataforma incrível!"
        </p>
        <p>
          <strong>João Silva</strong>, Desenvolvedor Front-end
        </p>
      </div>
      <div className="testimonial">
        <img src="/imagens/persona2.png" alt="Imagem do Usuário 2" />
        <p>
          "O EmpregaEu me ajudou a dar um salto na minha carreira. Recomendo a
          todos que buscam oportunidades na área de tecnologia."
        </p>
        <p>
          <strong>Maria Souza</strong>, Engenheira de Software
        </p>
      </div>
    </section>
  );
}

export default Testimonials;
