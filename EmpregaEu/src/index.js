import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./componentes/Header";
import CadastroForm from "./rotas/CadastroForm";
import Home from "./rotas/Home";
import Login from "./rotas/Login";
import Vagas from "./rotas/Vagas";
import Sobre from "./rotas/Sobre";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      {/* inserir o Header para aparecer em todas as paginas */}
      <Header />
      <Routes>
        {/* parametros, path: caminho do site,  element: o que será carregado
        na pagina  */}
        <Route path="/cadastro" element={<CadastroForm />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Vagas" element={<Vagas />} />
        <Route path="/Sobre" element={<Sobre />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
