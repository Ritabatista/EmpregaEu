import "./Areas.css";

function Areas() {
  return (
    <section className="areas">
      <h2>Principais Áreas de Atuação</h2>
      <ul>
        <li>
          <img src="imagens/desenvolvimentoWeb.png" alt="Imagem da Área 1" />
          Desenvolvimento Web
        </li>
        <li>
          <img src="/imagens/mobile.png" alt="Imagem da Área 2" />
          Desenvolvimento Mobile
        </li>
        <li>
          <img src="imagens/cienciaDados.png" alt="Imagem da Área 3" />
          Ciência de Dados
        </li>
        <li>
          <img src="imagens/segurancaInformacao.png" alt="Imagem da Área 4" />
          Segurança da Informação
        </li>
        <li>
          <img src="imagens/redes.png" alt="Imagem da Área 5" />
          Redes e Infraestrutura
        </li>
        <li>
          <img src="/imagens/ia.png" alt="Imagem da Área 6" />
          Inteligência Artificial
        </li>
      </ul>
    </section>
  );
}

export default Areas;
