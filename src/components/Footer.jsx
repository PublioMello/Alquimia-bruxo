import { Link } from "react-router";

import "./Footer.css";

// O ano atualiza sozinho.
const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer className="footer">
      <nav className="footer__nav">
        <Link to="/">Home</Link>
        <Link to="/consultoria">Consultoria</Link>
        <Link to="/posts">Posts</Link>
      </nav>

      <p className="footer__copy">
        © {year} ALQUIMIA™. Todos os direitos reservados.
      </p>
      <p className="footer__note">
        O conteúdo deste site é informativo e não substitui avaliação médica.
      </p>
    </footer>
  );
}
