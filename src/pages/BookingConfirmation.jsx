import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";


const BookingConfirmation = () => {
  const { state } = useLocation();
  const navigate = useNavigate();
  const { formData, worker } = state || {};

  const [otp] = useState(() => Math.floor(1000 + Math.random() * 9000));

  return (
    <div className="confirmation-wrapper">
      <div className="confirmation-card">

        <div className="confirmation-icon">✅</div>
        <h2>Booking Confirmed!</h2>
        <p className="confirmation-subtitle">
          Your fundi will be with you shortly.
        </p>

        {/* Booking Details */}
        <div className="confirmation-details">
          <div className="detail-row">
            <span className="detail-label">Service</span>
            <span className="detail-value">{formData?.service}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Fundi</span>
            <span className="detail-value">
              {worker?.name || "Assigned Fundi"}
            </span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Date</span>
            <span className="detail-value">{formData?.date}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Time</span>
            <span className="detail-value">{formData?.time}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Location</span>
            <span className="detail-value">{formData?.address}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Name</span>
            <span className="detail-value">{formData?.name}</span>
          </div>
          <div className="detail-row">
            <span className="detail-label">Phone</span>
            <span className="detail-value">{formData?.phone}</span>
          </div>
        </div>

        {/* OTP Box */}
        <div className="otp-box">
          <p className="otp-label">Your Arrival OTP Code</p>
          <h1 className="otp-code">{otp}</h1>
          <p className="otp-hint">
            Give this code to the fundi when they arrive to verify
            and start the job
          </p>
        </div>

        {/* Escrow Notice */}
        <div className="escrow-notice">
          🔒 Payment is held in <strong>escrow</strong> via M-Pesa.
          Funds are only released to the fundi after you tap
          "Job Complete" in the app.
        </div>

        <button
          className="btn-fundi-primary btn-full"
          onClick={() => navigate("/")}
        >
          Back to Home
        </button>

      </div>
    </div>
  );
};

export default BookingConfirmation;