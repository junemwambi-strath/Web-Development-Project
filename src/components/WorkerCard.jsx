import React from 'react';
import { Link } from 'react-router-dom';

export default function WorkerCard({ worker }) {
  const styles = {
    card: {
      border: '1px solid #eee',
      borderRadius: '12px',
      padding: '20px',
      backgroundColor: '#fff',
      boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
      display: 'flex',
      flexDirection: 'column',
      gap: '12px',
      transition: 'box-shadow 0.2s ease',
    },
    header: {
      display: 'flex',
      alignItems: 'center',
      gap: '14px',
    },
    avatar: {
      width: '56px',
      height: '56px',
      borderRadius: '50%',
      backgroundColor: '#eef2f3',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      fontSize: '22px',
      flexShrink: 0,
    },
    name: {
      fontSize: '16px',
      fontWeight: '600',
      color: '#333',
      margin: 0,
    },
    title: {
      fontSize: '13px',
      color: '#666',
      margin: '2px 0 0 0',
    },
    location: {
      fontSize: '13px',
      color: '#888',
    },
    rating: {
      fontSize: '13px',
      color: '#e67e22',
    },
    skillsRow: {
      display: 'flex',
      gap: '6px',
      flexWrap: 'wrap',
    },
    skill: {
      backgroundColor: '#eef2f3',
      padding: '4px 10px',
      borderRadius: '20px',
      fontSize: '12px',
      fontWeight: '500',
      color: '#444',
    },
    footer: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      marginTop: '4px',
    },
    availableBadge: {
      fontSize: '12px',
      fontWeight: '500',
      padding: '3px 10px',
      borderRadius: '20px',
      backgroundColor: '#E1F5EE',
      color: '#0F6E56',
    },
    unavailableBadge: {
      fontSize: '12px',
      fontWeight: '500',
      padding: '3px 10px',
      borderRadius: '20px',
      backgroundColor: '#f0f0f0',
      color: '#999',
    },
    viewButton: {
      backgroundColor: '#0F6E56',
      color: 'white',
      border: 'none',
      padding: '8px 18px',
      borderRadius: '6px',
      fontSize: '13px',
      fontWeight: '600',
      cursor: 'pointer',
      textDecoration: 'none',
      display: 'inline-block',
    },
  };

  // Show only first 3 skills on the card to keep it compact
  const visibleSkills = worker.skills.slice(0, 3);
  const extraSkills = worker.skills.length - 3;

  return (
    <div style={styles.card}>
      {/* Header: avatar + name + title */}
      <div style={styles.header}>
        <div style={styles.avatar}>🛠️</div>
        <div>
          <p style={styles.name}>{worker.name}</p>
          <p style={styles.title}>{worker.title}</p>
        </div>
      </div>

      {/* Location & Rating */}
      <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '13px' }}>
        <span style={styles.location}>📍 {worker.location}</span>
        <span style={styles.rating}>⭐ {worker.rating} ({worker.reviewsCount})</span>
      </div>

      {/* Skills */}
      <div style={styles.skillsRow}>
        {visibleSkills.map((skill, i) => (
          <span key={i} style={styles.skill}>{skill}</span>
        ))}
        {extraSkills > 0 && (
          <span style={{ ...styles.skill, backgroundColor: '#fff', border: '1px solid #ddd', color: '#888' }}>
            +{extraSkills} more
          </span>
        )}
      </div>

      {/* Footer: availability + CTA */}
      <div style={styles.footer}>
        <span style={worker.available ? styles.availableBadge : styles.unavailableBadge}>
          {worker.available ? '● Available' : '● Unavailable'}
        </span>
        <Link to={`/worker/${worker.id}`} style={styles.viewButton}>
          View Profile
        </Link>
      </div>
    </div>
  );
}
