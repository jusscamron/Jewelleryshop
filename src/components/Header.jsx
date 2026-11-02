import { useState } from "react";
import "../styles/Header.css";

const NAV_LINKS = [
  { label: "Home", href: "#", active: true },
  { label: "Gold", href: "#sarees", dropdown: true },
  { label: "Diamond", href: "#bijoux", dropdown: true },
  { label: "Collections", href: "#nouveautes", accent: true },
  { label: "Bridal", href: "#collections" },
  { label: "About Us", href: "#apropos" },
  { label: "Contact", href: "#contact" },
];

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="11" cy="11" r="7" />
      <path d="M20 20l-4-4" strokeLinecap="round" />
    </svg>
  );
}

function UserIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
      <circle cx="12" cy="8" r="4" />
      <path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7" strokeLinecap="round" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" width="22" height="22" fill="none" stroke="currentColor" strokeWidth="1.5">
      <path d="M5 8h14l-1 12H6L5 8z" strokeLinejoin="round" />
      <path d="M9 8V6a3 3 0 016 0v2" />
    </svg>
  );
}

function Logo() {
  return (
    <a href="#" className="logo" aria-label="Indra Sarees & Jewels">
      <span className="logo__name">Vyra jewellers</span>
    </a>
  );
}

export default function Header() {
  const [open, setOpen] = useState(false);
  const [count] = useState(0);

  return (
    <header className="header">
      <div className="container header__inner">
        <button
          className={`burger ${open ? "burger--open" : ""}`}
          aria-label="Menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>

        <Logo />

        <nav className={`nav ${open ? "nav--open" : ""}`} aria-label="Navigation principale">
          <ul className="nav__list">
            {NAV_LINKS.map((l) => (
              <li key={l.label}>
                <a
                  href={l.href}
                  className={[
                    "nav__link",
                    l.active ? "nav__link--active" : "",
                    l.accent ? "nav__link--accent" : "",
                  ].join(" ")}
                  onClick={() => setOpen(false)}
                >
                  {l.label}
                  {l.dropdown && <span className="nav__caret"> ⌄</span>}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header__icons">
          <button aria-label="Rechercher" className="icon-btn"><SearchIcon /></button>
          <button aria-label="Mon compte" className="icon-btn icon-btn--hide-sm"><UserIcon /></button>
          <button aria-label="Panier" className="icon-btn icon-btn--bag">
            <BagIcon />
            <span className="badge">{count}</span>
          </button>
        </div>
      </div>
    </header>
  );
}
