import "../styles/SectionTitle.css";

function Lotus() {
  return (
    <svg viewBox="0 0 32 20" width="28" height="18" fill="none" stroke="currentColor" strokeWidth="1.2" aria-hidden="true">
      <path d="M16 2c3 3 3 8 0 12-3-4-3-9 0-12z" />
      <path d="M8 6c4 0 7 3 8 8-4 0-7-3-8-8zM24 6c-4 0-7 3-8 8 4 0 7-3 8-8z" />
      <path d="M2 11c4 0 9 2 14 7M30 11c-4 0-9 2-14 7" />
    </svg>
  );
}

export default function SectionTitle({ children }) {
  return (
    <div className="section-title">
      <span className="section-title__line" />
      <div className="section-title__center">
        <h2 className="section-title__text">{children}</h2>
        <span className="section-title__lotus">
          <Lotus />
        </span>
      </div>
      <span className="section-title__line" />
    </div>
  );
}
