import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const BookingForm = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const worker = state?.worker || {};

  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    date: "",
    time: "",
    address: "",
    description: "",
    name: "",
    phone: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/booking-confirmation", {
      state: { formData, worker }
    });
  };

  return (
    <div className="booking-wrapper">
      <div className="booking-card">

        {/* Header */}
        <div className="booking-header">
          <h2>Book a Fundi</h2>
          {worker.name && (
            <p className="worker-tag">
              Booking: <strong>{worker.name}</strong>
            </p>
          )}
        </div>

        {/* Progress Steps */}
        <div className="booking-steps">
          <div className={`booking-step ${step >= 1 ? "step-active" : ""}`}>
            <div className="step-circle">1</div>
            <span>Service</span>
          </div>
          <div className="step-line" />
          <div className={`booking-step ${step >= 2 ? "step-active" : ""}`}>
            <div className="step-circle">2</div>
            <span>Schedule</span>
          </div>
          <div className="step-line" />
          <div className={`booking-step ${step >= 3 ? "step-active" : ""}`}>
            <div className="step-circle">3</div>
            <span>Contact</span>
          </div>
        </div>

        <form onSubmit={handleSubmit}>

          {/* Step 1 — Service */}
          {step === 1 && (
            <div className="form-step">
              <h3 className="step-title">What service do you need?</h3>

              <div className="form-group">
                <label>Service Type</label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">-- Select a service --</option>
                  <option value="Plumbing">Plumbing</option>
                  <option value="Electrical">Electrical</option>
                  <option value="Cleaning">Cleaning</option>
                  <option value="Painting">Painting</option>
                  <option value="Carpentry">Carpentry</option>
                  <option value="Welding">Welding & Metalwork</option>
                  <option value="Tiling">Tiling & Masonry</option>
                  <option value="Moving">Moving & Lifting</option>
                </select>
              </div>

              <div className="form-group">
                <label>Describe the job</label>
                <textarea
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  placeholder="e.g. Fix a leaking pipe under the kitchen sink..."
                  rows={4}
                  required
                />
              </div>

              <div className="form-group">
                <label>Your Location</label>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  placeholder="e.g. Westlands, Nairobi"
                  required
                />
              </div>

              <div className="btn-row">
                <button
                  type="button"
                  className="btn-fundi-primary"
                  onClick={nextStep}
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* Step 2 — Schedule */}
          {step === 2 && (
            <div className="form-step">
              <h3 className="step-title">When do you need the fundi?</h3>

              <div className="form-group">
                <label>Preferred Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label>Preferred Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="btn-row">
                <button
                  type="button"
                  className="btn-fundi-secondary"
                  onClick={prevStep}
                >
                  ← Back
                </button>
                <button
                  type="button"
                  className="btn-fundi-primary"
                  onClick={nextStep}
                >
                  Next →
                </button>
              </div>
            </div>
          )}

          {/* Step 3 — Contact */}
          {step === 3 && (
            <div className="form-step">
              <h3 className="step-title">Your contact details</h3>

              <div className="form-group">
                <label>Full Name</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="e.g. John Kamau"
                  required
                />
              </div>

              <div className="form-group">
                <label>Phone Number (M-Pesa)</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="e.g. 0712 345 678"
                  required
                />
              </div>

              <div className="escrow-notice">
                🔒 Payment is held securely in <strong>escrow</strong> via
                M-Pesa and only released to the fundi after you confirm
                job completion.
              </div>

              <div className="btn-row">
                <button
                  type="button"
                  className="btn-fundi-secondary"
                  onClick={prevStep}
                >
                  ← Back
                </button>
                <button type="submit" className="btn-fundi-primary">
                  Confirm Booking ✓
                </button>
              </div>
            </div>
          )}

        </form>
      </div>
    </div>
  );
};

export default BookingForm;