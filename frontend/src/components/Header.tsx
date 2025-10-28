import { Link } from "react-router-dom";

export function Header() {
  return (
    <header className="header">
      <Link to="/"><h1>World explorer</h1></Link>
      <Link to="/countries">Countries</Link>
      <Link to="/continents">Continents</Link>
    </header>
  );
}
