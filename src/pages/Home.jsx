import { Link } from "react-router";

import { FORM_URL, beneficios } from "../data/consultoria.js";
import "./Pages.css";

// Resumo da consultoria. Os detalhes ficam em /consultoria.
export default function Home() {
  return (
    <div className="page">
      <section className="hero">
        <h1>ALQUIMIA™</h1>
        <p className="hero__lead">
          Consultoria hormonal individual, com protocolo personalizado e
          acompanhamento durante todo o processo.
        </p>
        <p>
          Protocolo genérico tirado da internet não leva em conta o seu
          histórico, os seus exames nem os seus objetivos. A receita é genérica,
          mas as consequências são individuais.
        </p>
        <p>
          Aqui o físico importa, mas a sua saúde, libido, disposição, aparência
          e vida fora da academia também entram na equação.
        </p>
      </section>

      <section>
        <h2>O que você recebe</h2>
        <ul className="checklist">
          {beneficios.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      </section>

      <div className="actions">
        <Link to="/consultoria" className="button button--secondary">
          Conheça a consultoria
        </Link>
        <a href={FORM_URL} target="_blank" rel="noreferrer" className="button">
          Preencher formulário
        </a>
      </div>
    </div>
  );
}
