export default function Home() {
  return (
    <div style={{ padding: "40px", textAlign: "center" }}>
      
      <h1 style={{ fontSize: "42px" }}>
        QuickFundi
      </h1>

      <p style={{ fontSize: "18px", color: "#555" }}>
        Connect with trusted fundis for plumbing, electrical work, carpentry and more.
      </p>

      <div style={{ marginTop: "30px" }}>
        <button style={{
          padding: "12px 20px",
          marginRight: "10px"
        }}>
          Find Workers
        </button>

        <button style={{
          padding: "12px 20px"
        }}>
          Become a Fundi
        </button>
      </div>

    </div>
  );
}