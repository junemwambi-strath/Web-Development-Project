import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <nav style={{
      display: "flex",
      alignItems: "center",
      padding: "15px 20px",
      backgroundColor: "#111",
      color: "white"
    }}>
      <h3 style={{ marginRight: "auto" }}>QuickFundi</h3>

      <div style={{ display: "flex", gap: "15px" }}>
        <Link to="/" style={{ color: "white", textDecoration: "none" }}>Home</Link>
        <Link to="/workers" style={{ color: "white", textDecoration: "none" }}>Workers</Link>
        <Link to="/booking" style={{ color: "white", textDecoration: "none" }}>Booking</Link>
      </div>
    </nav>
  );
}