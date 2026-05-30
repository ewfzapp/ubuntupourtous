'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar({ backLink, backLabel }: { backLink?: string; backLabel?: string }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth <= 768);
    check();
    window.addEventListener('resize', check);
    return () => window.removeEventListener('resize', check);
  }, []);

  return (
    <>
      <nav style={{
        background: '#2C001E',
        padding: '0 16px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '56px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
        borderBottom: '1px solid rgba(255,255,255,0.06)',
        overflow: 'hidden',
      }}>
        {/* LOGO */}
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '8px', textDecoration: 'none', flexShrink: 0, whiteSpace: 'nowrap' }}>
          <span style={{ fontSize: isMobile ? '20px' : '26px' }}>🐧</span>
          <span style={{ fontFamily: 'Fraunces, serif', fontSize: isMobile ? '14px' : '20px', fontWeight: 700, color: '#FBF7F4', whiteSpace: 'nowrap' }}>
            Ubuntu Pour Tous
          </span>
        </Link>

        {/* DROITE */}
        {backLink ? (
          <Link href={backLink} style={{ color: '#AEA79F', textDecoration: 'none', fontSize: '13px', fontWeight: 500, whiteSpace: 'nowrap' }}>
            ← {backLabel || 'Retour'}
          </Link>
        ) : isMobile ? (
          /* HAMBURGER */
          <button onClick={() => setMenuOpen(!menuOpen)} style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#FBF7F4', fontSize: '22px', padding: '4px 8px', flexShrink: 0,
          }}>
            {menuOpen ? '✕' : '☰'}
          </button>
        ) : (
          /* LIENS DESKTOP */
          <div style={{ display: 'flex', alignItems: 'center', gap: '24px' }}>
            <Link href="/apprendre" style={{ color: '#AEA79F', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Cours</Link>
            <Link href="/profils" style={{ color: '#AEA79F', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>Mon profil</Link>
            <Link href="/faq" style={{ color: '#AEA79F', textDecoration: 'none', fontSize: '14px', fontWeight: 500 }}>FAQ</Link>
            <Link href="/apprendre" style={{ background: '#E95420', color: 'white', padding: '9px 20px', borderRadius: '9px', textDecoration: 'none', fontSize: '14px', fontWeight: 600 }}>
              Commencer →
            </Link>
          </div>
        )}
      </nav>

      {/* MENU MOBILE DÉROULANT */}
      {menuOpen && isMobile && (
        <div style={{
          position: 'fixed', top: '56px', left: 0, right: 0, zIndex: 99,
          background: '#2C001E',
          borderBottom: '1px solid rgba(255,255,255,0.1)',
          padding: '8px 20px 16px',
        }}>
          {[
            { href: '/apprendre', label: '📚 Cours' },
            { href: '/profils', label: '👤 Mon profil' },
            { href: '/faq', label: '❓ FAQ' },
          ].map(item => (
            <Link key={item.href} href={item.href} onClick={() => setMenuOpen(false)} style={{
              display: 'block', color: '#FBF7F4', textDecoration: 'none',
              fontSize: '16px', padding: '14px 0',
              borderBottom: '1px solid rgba(255,255,255,0.07)',
              fontWeight: 500,
            }}>
              {item.label}
            </Link>
          ))}
          <Link href="/apprendre" onClick={() => setMenuOpen(false)} style={{
            display: 'block', textAlign: 'center', marginTop: '14px',
            background: '#E95420', color: 'white',
            padding: '14px', borderRadius: '10px',
            textDecoration: 'none', fontSize: '15px', fontWeight: 700,
          }}>
            Commencer maintenant 🐧
          </Link>
        </div>
      )}
    </>
  );
}
