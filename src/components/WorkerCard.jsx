export default function WorkerCard({ worker }) {
  return (
    <div style={{
      border: "1px solid #ddd",
      padding: "15px",
      borderRadius: "10px",
      width: "200px"
    }}>
      <h3>{worker.name}</h3>
      <p>{worker.skill}</p>
      <p>📍 {worker.location}</p>
      <p>⭐ {worker.rating}</p>
      <p>Ksh {worker.price}</p>
    </div>
  );
}