import { Link, NavLink } from "react-router";

import logo from "../assets/images.jpeg";
import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <Link to="/" className="header__logo">
        <img src={logo} alt="" className="header__logo-img" />
        Alquimia
      </Link>

      <nav className="header__nav">
        <NavLink to="/" end>
          Home
        </NavLink>

        <NavLink to="/consultoria">Consultoria</NavLink>
        <NavLink to="/posts">Posts</NavLink>
      </nav>
    </header>
  );
}
