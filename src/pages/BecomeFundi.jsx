import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function BecomeFundi() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    county: "",
    location: "",
    skill: "",
    experience: "",
    bio: "",
    availability: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
  e.preventDefault();

  const existingWorkers =
    JSON.parse(localStorage.getItem("quickfundi-workers")) || [];

  const newWorker = {
    id: Date.now(),
    name: formData.name,
    title: formData.skill,
    location: `${formData.location}, ${formData.county}`,
    rating: 5.0,
    reviewsCount: 0,
    skills: [formData.skill],
    available: true,
    photo: null,

    priceEstimates: [
      {
        service: "Service",
        cost: "Contact for Quote",
      },
    ],

    reviews: [],
  };

  existingWorkers.push(newWorker);

  localStorage.setItem(
    "quickfundi-workers",
    JSON.stringify(existingWorkers)
  );

  setSubmitted(true);
};

  if (submitted) {
    return (
      <div
        style={{
          minHeight: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          background: "#FAF8F5",
          padding: "20px",
        }}
      >
        <div
          style={{
            background: "white",
            padding: "50px",
            borderRadius: "20px",
            boxShadow: "0 12px 35px rgba(0,0,0,.08)",
            maxWidth: "600px",
            width: "100%",
            textAlign: "center",
          }}
        >
          <div style={{ fontSize: "70px" }}>🎉</div>

          <h1
            style={{
              color: "#A65A3A",
              marginTop: "20px",
            }}
          >
            Application Submitted!
          </h1>

          <p
            style={{
              color: "#666",
              lineHeight: "1.8",
              marginTop: "15px",
            }}
          >
            Thank you for your interest in joining QuickFundi.
            <br />
            Our team will review your application and contact you shortly.
          </p>

          <button
            onClick={() => navigate("/")}
            style={{
              marginTop: "35px",
              padding: "14px 30px",
              background: "#A65A3A",
              color: "white",
              border: "none",
              borderRadius: "10px",
              cursor: "pointer",
              fontSize: "16px",
              fontWeight: "600",
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const inputStyle = {
    width: "100%",
    padding: "14px",
    borderRadius: "10px",
    border: "1px solid #ddd",
    fontSize: "15px",
    marginTop: "8px",
    boxSizing: "border-box",
  };

  return (
    <div
      style={{
        background: "#FAF8F5",
        minHeight: "100vh",
        padding: "60px 20px",
      }}
    >
      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          background: "white",
          padding: "45px",
          borderRadius: "20px",
          boxShadow: "0 12px 35px rgba(0,0,0,.08)",
        }}
      >
        <h1
          style={{
            color: "#A65A3A",
            marginBottom: "10px",
          }}
        >
          Become a QuickFundi Partner
        </h1>

        <p
          style={{
            color: "#666",
            marginBottom: "35px",
          }}
        >
          Join our growing network of trusted professionals and connect with
          customers looking for skilled fundis across Kenya.
        </p>

        <form onSubmit={handleSubmit}>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(280px,1fr))",
              gap: "20px",
            }}
          >
            <div>
              <label>Full Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label>Phone Number</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label>County</label>
              <input
                name="county"
                value={formData.county}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label>Town / Estate</label>
              <input
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label>Primary Skill</label>
              <select
                name="skill"
                value={formData.skill}
                onChange={handleChange}
                required
                style={inputStyle}
              >
                <option value="">Select a Skill</option>
                <option>Plumber</option>
                <option>Electrician</option>
                <option>Carpenter</option>
                <option>Painter</option>
                <option>Welder</option>
                <option>Cleaner</option>
                <option>Mason</option>
                <option>Appliance Repair</option>
              </select>
            </div>

            <div>
              <label>Years of Experience</label>
              <input
                type="number"
                name="experience"
                value={formData.experience}
                onChange={handleChange}
                required
                style={inputStyle}
              />
            </div>

            <div>
              <label>Availability</label>
              <select
                name="availability"
                value={formData.availability}
                onChange={handleChange}
                required
                style={inputStyle}
              >
                <option value="">Choose</option>
                <option>Available Today</option>
                <option>Weekdays</option>
                <option>Weekends</option>
                <option>Anytime</option>
              </select>
            </div>
          </div>

          <div style={{ marginTop: "25px" }}>
            <label>Tell customers about yourself</label>

            <textarea
              rows="5"
              name="bio"
              value={formData.bio}
              onChange={handleChange}
              style={{
                ...inputStyle,
                resize: "vertical",
              }}
            />
          </div>

          <div
            style={{
              marginTop: "25px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            <input type="checkbox" required />

            <span style={{ color: "#666" }}>
              I agree to QuickFundi's Terms & Conditions.
            </span>
          </div>

          <button
            type="submit"
            style={{
              width: "100%",
              marginTop: "35px",
              padding: "16px",
              background: "#A65A3A",
              color: "white",
              border: "none",
              borderRadius: "12px",
              fontSize: "17px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            Join QuickFundi
          </button>
        </form>
      </div>
    </div>
  );
}