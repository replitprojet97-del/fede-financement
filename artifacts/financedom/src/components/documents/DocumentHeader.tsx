import React from "react";

type DocBadge = "OFFICIEL" | "CONFIDENTIEL" | "PROVISOIRE" | "ARCHIVE";

interface DocumentHeaderProps {
  title: string;
  subtitle?: string;
  reference: string;
  date: string;
  territory?: string;
  badge?: DocBadge;
}

const BADGE_STYLES: Record<DocBadge, { bg: string; text: string; label: string }> = {
  OFFICIEL:      { bg: "#0B1F4D", text: "#ffffff",  label: "DOCUMENT OFFICIEL" },
  CONFIDENTIEL:  { bg: "#7F1D1D", text: "#ffffff",  label: "CONFIDENTIEL" },
  PROVISOIRE:    { bg: "#78350F", text: "#ffffff",  label: "PROVISOIRE" },
  ARCHIVE:       { bg: "#374151", text: "#ffffff",  label: "ARCHIVE" },
};

export function DocumentHeader({
  title,
  subtitle,
  reference,
  date,
  territory,
  badge = "OFFICIEL",
}: DocumentHeaderProps) {
  const b = BADGE_STYLES[badge];

  return (
    <header className="doc-header">
      <div className="doc-header-band">
        <div className="doc-header-logo">
          <span className="doc-logo-cap">CAP</span>
          <span className="doc-logo-sub">SUBVENTION</span>
        </div>
        <div className="doc-header-meta">
          {territory && <span className="doc-meta-territory">{territory}</span>}
          <span className="doc-meta-ref">Réf. {reference}</span>
          <span className="doc-meta-date">{date}</span>
        </div>
      </div>

      <div className="doc-header-title-zone">
        <div className="doc-header-title-left">
          <div
            className="doc-badge"
            style={{ backgroundColor: b.bg, color: b.text }}
          >
            {b.label}
          </div>
          <h1 className="doc-title">{title}</h1>
          {subtitle && <p className="doc-subtitle">{subtitle}</p>}
        </div>
        <div className="doc-header-gold-line" />
      </div>
    </header>
  );
}
