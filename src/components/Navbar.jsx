import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <Link to="/">QuickFundi</Link>
      </div>

      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/workers">Find Fundis</Link>
        <Link to="/booking">Book a Service</Link>
      </div>

    </nav>
  );
}