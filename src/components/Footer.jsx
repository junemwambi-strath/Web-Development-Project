import { Link } from "react-router-dom";

function Footer() {
  const linkStyle = {
    textDecoration: "none",
    color: "#666",
    fontSize: "15px",
    fontWeight: "500",
    marginBottom: "12px",
    display: "block",
  };

  return (
    <footer
      style={{
        background: "#F4ECE5",
        marginTop: "80px",
        padding: "60px 40px 30px",
        borderTop: "1px solid #E6DDD5",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "50px",
        }}
      >
        {/* Brand */}
        <div style={{ flex: "1", minWidth: "250px" }}>
          <Link
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            <h2
              style={{
                color: "#A65A3A",
                marginBottom: "15px",
                fontSize: "30px",
              }}
            >
              QuickFundi
            </h2>
          </Link>

          <p
            style={{
              color: "#666",
              lineHeight: "1.7",
              maxWidth: "320px",
            }}
          >
            Connecting trusted local fundis with homes and businesses across
            Kenya. Find skilled professionals for plumbing, electrical work,
            carpentry, painting, cleaning, and more.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ minWidth: "180px" }}>
          <h4
            style={{
              color: "#333",
              marginBottom: "18px",
            }}
          >
            Quick Links
          </h4>

          <Link to="/" style={linkStyle}>
            Home
          </Link>

          <Link to="/workers" style={linkStyle}>
            Find Fundis
          </Link>

          <Link to="/booking" style={linkStyle}>
            Book a Service
          </Link>
        </div>

        {/* Contact */}
        <div style={{ minWidth: "220px" }}>
          <h4
            style={{
              color: "#333",
              marginBottom: "18px",
            }}
          >
            Contact
          </h4>

          <p
            style={{
              color: "#666",
              marginBottom: "12px",
            }}
          >
            📧 support@quickfundi.co.ke
          </p>

          <p
            style={{
              color: "#666",
              marginBottom: "12px",
            }}
          >
            📞 +254 700 123 456
          </p>

          <p
            style={{
              color: "#666",
            }}
          >
            📍 Nairobi, Kenya
          </p>
        </div>
      </div>

      <hr
        style={{
          margin: "40px 0 20px",
          border: "none",
          borderTop: "1px solid #DDD",
        }}
      />

      <p
        style={{
          textAlign: "center",
          color: "#777",
          fontSize: "14px",
          margin: 0,
        }}
      >
        © 2026 QuickFundi. All rights reserved.
      </p>
    </footer>
  );
}

export default Footer;