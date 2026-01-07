import "../styles/registerModal.css";

export default function RegisterModal({ onClose }) {
  return (
    <div className="register-overlay">
      <div className="register-modal">

        <button className="close-btn" onClick={onClose}></button>

        <h2 className="register-title">REGISTER YOUR INTEREST</h2>
        <p className="register-subtitle">
          Register to access the Brochure, Factsheet and Payment Plans.
        </p>

        <form className="register-form">
          
          <div className="radio-row">
            <label><input type="radio" name="type" /> Client</label>
            <label><input type="radio" name="type" /> Broker</label>
          </div>

          <input type="text" placeholder="Full Name" />
          <select><option>No. of Bedrooms</option></select>

          <select><option>Budget</option></select>
          <input type="email" placeholder="Email Address" />

          <input type="text" placeholder="+971 - Phone Number" />

          <div className="captcha-box">
            I'm not a robot (Mock Captcha)
          </div>

          <button className="submit-btn">SUBMIT</button>

        </form>

      </div>
    </div>
  );
}
