'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar({ backLink, backLabel }: { backLink?: string; backLabel?: string }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="upt-nav">
        <Link href="/" className="upt-nav-brand" style={{ whiteSpace: 'nowrap', flexShrink: 0 }}>
          <span style={{ fontSize: '22px' }}>🐧</span>
          <span className="upt-nav-brand-text">Ubuntu Pour Tous</span>
        </Link>

        {backLink ? (
          /* Pages intérieures : juste le lien retour */
          <Link href={backLink} style={{ color: 'var(--upt-bark)', textDecoration: 'none', fontSize: '13px', fontWeight: 500 }}>
            ← {backLabel || 'Retour'}
          </Link>
        ) : (
          <>
            {/* Desktop : liens normaux */}
            <div className="upt-nav-links" style={{ display: 'flex' }}>
              <Link href="/apprendre" className="upt-nav-link">Cours</Link>
              <Link href="/profils" className="upt-nav-link">Mon profil</Link>
              <Link href="/faq" className="upt-nav-link">FAQ</Link>
              <Link href="/apprendre" className="upt-nav-cta">Commencer →</Link>
            </div>

            {/* Mobile : bouton hamburger */}
            <button
              onClick={() => setOpen(!open)}
              style={{ display: 'none', background: 'none', border: 'none', cursor: 'pointer', padding: '4px', color: '#FBF7F4', fontSize: '22px' }}
              className="upt-hamburger"
              aria-label="Menu"
            >
              {open ? '✕' : '☰'}
            </button>
          </>
        )}
      </nav>

      {/* Menu mobile déroulant */}
      {open && (
        <div style={{
          position: 'fixed', top: '56px', left: 0, right: 0, zIndex: 99,
          background: '#2C001E',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          padding: '16px 20px',
          display: 'flex', flexDirection: 'column', gap: '0',
        }}>
          {[
            { href: '/apprendre', label: 'Cours' },
            { href: '/profils', label: 'Mon profil' },
            { href: '/faq', label: 'FAQ' },
          ].map(item => (
            <Link key={item.href} href={item.href} onClick={() => setOpen(false)} style={{
              color: '#FBF7F4', textDecoration: 'none', fontSize: '16px',
              padding: '14px 0',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              fontWeight: 500,
            }}>
              {item.label}
            </Link>
          ))}
          <Link href="/apprendre" onClick={() => setOpen(false)} style={{
            display: 'block', textAlign: 'center', marginTop: '14px',
            background: '#E95420', color: 'white',
            padding: '12px', borderRadius: '10px',
            textDecoration: 'none', fontSize: '15px', fontWeight: 700,
          }}>
            Commencer maintenant 🐧
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 640px) {
          .upt-nav-links { display: none !important; }
          .upt-hamburger { display: block !important; }
          .upt-nav-brand-text { font-size: 15px !important; }
        }
      `}</style>
    </>
  );
}
