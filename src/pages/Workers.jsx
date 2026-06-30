import React, { useState } from 'react';
import WorkerCard from '../components/WorkerCard';
import workers from '../mockdata/workers';
import { useEffect} from 'react';

const SKILLS = ['All', 'Plumber', 'Electrician', 'Carpenter', 'Painter', 'Welder', 'Tiling', 'AC & Appliances', 'Cleaning'];

export default function WorkersPage() {
  const [search, setSearch] = useState('');
  const [activeFilter, setActiveFilter] = useState('All');
  const [allWorkers, setAllWorkers] = useState([]);

  useEffect(() => {
    const savedWorkers =
      JSON.parse(localStorage.getItem('quickfundi-workers')) || [];

    setAllWorkers([...workers, ...savedWorkers]);
  }, []);

  // Filter logic
  const filtered = allWorkers.filter((worker) => {
    const matchesSearch =
      worker.name.toLowerCase().includes(search.toLowerCase()) ||
      worker.title.toLowerCase().includes(search.toLowerCase()) ||
      worker.location.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      activeFilter === 'All' ||
      worker.title.toLowerCase().includes(activeFilter.toLowerCase()) ||
      worker.skills.some((s) => s.toLowerCase().includes(activeFilter.toLowerCase()));

    return matchesSearch && matchesFilter;
  });

  const styles = {
    page: {
      padding: '20px',
      maxWidth: '900px',
      margin: '0 auto',
      fontFamily: 'system-ui, sans-serif',
      color: '#333',
    },
    heading: {
      fontSize: '22px',
      fontWeight: '700',
      marginBottom: '4px',
    },
    subheading: {
      fontSize: '14px',
      color: '#888',
      marginBottom: '20px',
    },
    searchInput: {
      width: '100%',
      padding: '10px 16px',
      fontSize: '14px',
      border: '1px solid #ddd',
      borderRadius: '8px',
      outline: 'none',
      marginBottom: '14px',
      boxSizing: 'border-box',
    },
    filtersRow: {
      display: 'flex',
      gap: '8px',
      flexWrap: 'wrap',
      marginBottom: '24px',
    },
    filterBtn: (active) => ({
      padding: '6px 14px',
      borderRadius: '20px',
      border: '1px solid',
      fontSize: '13px',
      fontWeight: '500',
      cursor: 'pointer',
      backgroundColor: active ? '#0F6E56' : '#fff',
      color: active ? '#fff' : '#555',
      borderColor: active ? '#0F6E56' : '#ddd',
      transition: 'all 0.15s ease',
    }),
    grid: {
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))',
      gap: '16px',
    },
    empty: {
      textAlign: 'center',
      padding: '60px 20px',
      color: '#aaa',
      fontSize: '15px',
    },
    resultCount: {
      fontSize: '13px',
      color: '#888',
      marginBottom: '16px',
    },
  };

  return (
    <div style={styles.page}>
      {/* Page heading */}
      <h1 style={styles.heading}>Find a Fundi</h1>
      <p style={styles.subheading}>Browse skilled workers near you in Nairobi</p>

      {/* Search bar */}
      <input
        style={styles.searchInput}
        type="text"
        placeholder="Search by name, skill, or location..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Skill filters */}
      <div style={styles.filtersRow}>
        {SKILLS.map((skill) => (
          <button
            key={skill}
            style={styles.filterBtn(activeFilter === skill)}
            onClick={() => setActiveFilter(skill)}
          >
            {skill}
          </button>
        ))}
      </div>

      {/* Result count */}
      <p style={styles.resultCount}>
        {filtered.length} fundi{filtered.length !== 1 ? 's' : ''} found
        {activeFilter !== 'All' ? ` in "${activeFilter}"` : ''}
        {search ? ` for "${search}"` : ''}
      </p>

      {/* Worker cards grid */}
      {filtered.length > 0 ? (
        <div style={styles.grid}>
          {filtered.map((worker) => (
            <WorkerCard key={worker.id} worker={worker} />
          ))}
        </div>
      ) : (
        <div style={styles.empty}>
          <p>No fundis found.</p>
          <p style={{ fontSize: '13px', marginTop: '6px' }}>Try a different search or filter.</p>
        </div>
      )}
    </div>
  );
}
