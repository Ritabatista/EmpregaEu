import "./Header.css";
import { Link } from "react-router-dom";

const textoOpcoes = ["HOME", "SOBRE", "CADASTRO", "VAGAS", "LOGIN"];

function Header() {
  return (
    <header>
      <div className="logo">
        <img src="/imagens/logo.png" alt="Logo EmpregaEu" />
      </div>
      <nav>
        <ul>
          {textoOpcoes.map((texto) => (
            <Link to={`/${texto.toLowerCase()}`}>
              <li>
                <p>{texto}</p>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
