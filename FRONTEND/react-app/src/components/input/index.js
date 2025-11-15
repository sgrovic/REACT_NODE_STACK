import './index.css';

export default function Input({ label, type, placeholder, value, onChange }) {
    return (
        <div className="form-group">
            {label && <label>{label}</label>}
            <input type={type} placeholder={placeholder} value={value} onChange={onChange} required />
        </div>
    );
}
