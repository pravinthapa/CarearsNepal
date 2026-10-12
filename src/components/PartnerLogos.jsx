import React from 'react';

const PARTNERS = [
  {
    name: 'Asterdio',
    logoText: 'Asterdio',
    hoverImg: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=384&auto=format&fit=crop&q=75'
  },
  {
    name: 'Mandarix',
    logoText: 'MANDARIX',
    hoverImg: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=384&auto=format&fit=crop&q=75'
  },
  {
    name: 'Khalti',
    logoText: 'Khalti',
    hoverImg: 'https://images.unsplash.com/photo-1556742049-0a67daf64f42?w=384&auto=format&fit=crop&q=75'
  },
  {
    name: 'Yeti Labs',
    logoText: 'YETI LABS',
    hoverImg: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=384&auto=format&fit=crop&q=75'
  },
  {
    name: 'Rain',
    logoText: 'RAIN',
    hoverImg: null
  }
];

export default function PartnerLogos() {
  return (
    <ul className="partners-logos">
      {PARTNERS.map((p) => (
        <li key={p.name} className={p.hoverImg ? "has-hover-image" : ""}>
          <span className="font-bold text-lg font-headline tracking-wider text-zinc-700 hover:text-zinc-900 transition-colors px-2 py-1">
            {p.logoText}
          </span>
          {p.hoverImg && (
            <span className="partners-hover-card" aria-hidden="true">
              <img
                alt={p.name}
                loading="lazy"
                width="280"
                height="180"
                className="partners-hover-img"
                src={p.hoverImg}
              />
              <span className="partners-hover-name">{p.name}</span>
            </span>
          )}
        </li>
      ))}
    </ul>
  );
}
