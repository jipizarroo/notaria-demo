import { useState, useEffect } from 'react';

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

const templates = [
  { num: 1, name: 'Obsidiana Luxury', path: `${base}/template-1` },
  { num: 2, name: 'Editorial Esmeralda', path: `${base}/template-2` },
  { num: 3, name: 'Dossier Legal', path: `${base}/template-3` },
  { num: 4, name: 'Terciopelo Rosa', path: `${base}/template-4` },
  { num: 5, name: 'Salvia & Blush', path: `${base}/template-5` },
];

export default function TemplateNav() {
  const [current, setCurrent] = useState<number | null>(null);
  const [hovered, setHovered] = useState<number | null>(null);

  useEffect(() => {
    const path = window.location.pathname;
    const match = path.match(/template-(\d+)/);
    if (match) setCurrent(parseInt(match[1]));
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        zIndex: 9999,
        display: 'flex',
        flexDirection: 'column',
        gap: '0.65rem',
      }}
    >
      {templates.map((t) => (
        <div
          key={t.num}
          style={{
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
        >
          {hovered === t.num && (
            <div
              style={{
                position: 'absolute',
                right: '3.4rem',
                background: 'rgba(10,10,10,0.92)',
                color: '#F0EAD6',
                padding: '0.3rem 0.75rem',
                borderRadius: '3px',
                fontSize: '0.72rem',
                whiteSpace: 'nowrap',
                fontFamily: 'Georgia, serif',
                letterSpacing: '0.05em',
                boxShadow: '0 2px 12px rgba(0,0,0,0.4)',
              }}
            >
              {t.name}
            </div>
          )}
          <a
            href={t.path}
            onMouseEnter={() => setHovered(t.num)}
            onMouseLeave={() => setHovered(null)}
            style={{
              width: '2.6rem',
              height: '2.6rem',
              borderRadius: '50%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              background: current === t.num ? '#C9A44E' : 'rgba(12, 12, 14, 0.88)',
              color: current === t.num ? '#0A1628' : '#E8DCC8',
              fontWeight: '700',
              fontSize: '0.9rem',
              textDecoration: 'none',
              border: `2px solid ${current === t.num ? '#C9A44E' : 'rgba(201, 164, 78, 0.4)'}`,
              transition: 'all 0.25s ease',
              backdropFilter: 'blur(10px)',
              boxShadow: current === t.num
                ? '0 0 18px rgba(201, 164, 78, 0.5)'
                : '0 2px 14px rgba(0,0,0,0.45)',
              fontFamily: 'Georgia, serif',
              transform: hovered === t.num ? 'scale(1.12)' : 'scale(1)',
            }}
            aria-label={`Ver template ${t.num}: ${t.name}`}
          >
            {t.num}
          </a>
        </div>
      ))}
    </div>
  );
}
