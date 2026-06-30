import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function WorkerCard({ worker }) {
  const [hovered, setHovered] = useState(false);

  const styles = {
    card: {
      border: "1px solid var(--border)",
      borderRadius: "18px",
      padding: "24px",
      backgroundColor: "var(--surface)",
      boxShadow: hovered
        ? "0 18px 40px rgba(0,0,0,.12)"
        : "var(--shadow)",
      display: "flex",
      flexDirection: "column",
      gap: "18px",
      transition: "all .3s ease",
      transform: hovered ? "translateY(-6px)" : "translateY(0)",
    },

    header: {
      display: "flex",
      alignItems: "center",
      gap: "16px",
    },

    avatar: {
      width: "68px",
      height: "68px",
      borderRadius: "50%",
      background: "#F4ECE5",
      color: "var(--primary)",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontSize: "30px",
      flexShrink: 0,
    },

    name: {
      margin: 0,
      fontSize: "20px",
      fontWeight: "700",
      color: "var(--heading)",
    },

    title: {
      margin: "4px 0 0",
      color: "var(--text)",
      fontSize: "15px",
    },

    infoRow: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      color: "var(--text)",
      fontSize: "14px",
    },

    rating: {
      color: "#D9902D",
      fontWeight: "600",
    },

    skillsRow: {
      display: "flex",
      flexWrap: "wrap",
      gap: "10px",
    },

    skill: {
      background: "#F4ECE5",
      color: "var(--primary)",
      padding: "7px 14px",
      borderRadius: "30px",
      fontSize: "13px",
      fontWeight: "600",
    },

    footer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "6px",
    },

    availableBadge: {
      background: "#EAF6EF",
      color: "#2F855A",
      padding: "8px 14px",
      borderRadius: "30px",
      fontSize: "13px",
      fontWeight: "600",
    },

    unavailableBadge: {
      background: "#F3F3F3",
      color: "#888",
      padding: "8px 14px",
      borderRadius: "30px",
      fontSize: "13px",
      fontWeight: "600",
    },

    button: {
      background: "var(--primary)",
      color: "#fff",
      padding: "10px 20px",
      borderRadius: "10px",
      textDecoration: "none",
      fontWeight: "600",
      transition: ".3s",
    },
  };

  const visibleSkills = worker.skills.slice(0, 3);
  const extraSkills = worker.skills.length - 3;

  return (
    <div
      style={styles.card}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <div style={styles.header}>
        <div style={styles.avatar}>🛠️</div>

        <div>
          <h3 style={styles.name}>{worker.name}</h3>
          <p style={styles.title}>{worker.title}</p>
        </div>
      </div>

      <div style={styles.infoRow}>
        <span>📍 {worker.location}</span>

        <span style={styles.rating}>
          ⭐ {worker.rating} ({worker.reviewsCount})
        </span>
      </div>

      <div style={styles.skillsRow}>
        {visibleSkills.map((skill, index) => (
          <span key={index} style={styles.skill}>
            {skill}
          </span>
        ))}

        {extraSkills > 0 && (
          <span
            style={{
              ...styles.skill,
              background: "#fff",
              border: "1px solid var(--border)",
              color: "var(--text)",
            }}
          >
            +{extraSkills}
          </span>
        )}
      </div>

      <div style={styles.footer}>
        <span
          style={
            worker.available
              ? styles.availableBadge
              : styles.unavailableBadge
          }
        >
          {worker.available ? "● Available" : "● Unavailable"}
        </span>

        <Link to={`/worker/${worker.id}`} style={styles.button}>
          View Profile →
        </Link>
      </div>
    </div>
  );
}