import "../styles/modal.css";

export default function CookieModal({ onClose }) {
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <button className="close" onClick={onClose}>×</button>

        <h3>Manage Cookie Consent Preferences</h3>

        <label><input type="checkbox" checked disabled /> Essentials (Always active)</label>
        <label><input type="checkbox" defaultChecked /> Marketing</label>
        <label><input type="checkbox" defaultChecked /> Personalization</label>
        <label><input type="checkbox" defaultChecked /> Analytics</label>

        <div className="cookie-actions">
          <button>Accept All</button>
          <button>Save Preferences</button>
          <button>Reject All</button>
        </div>
      </div>
    </div>
  );
}
