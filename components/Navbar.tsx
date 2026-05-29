import Link from 'next/link';

export default function Navbar({ backLink, backLabel }: { backLink?: string; backLabel?: string }) {
  return (
    <nav className="upt-nav">
      <Link href="/" className="upt-nav-brand">
        <span style={{ fontSize: '28px' }}>🐧</span>
        <span className="upt-nav-brand-text">Ubuntu Pour Tous</span>
      </Link>
      <div className="upt-nav-links">
        {backLink ? (
          <Link href={backLink} className="upt-nav-link">← {backLabel || 'Retour'}</Link>
        ) : (
          <>
            <Link href="/apprendre" className="upt-nav-link">Cours</Link>
            <Link href="/faq" className="upt-nav-link">FAQ</Link>
            <Link href="/apprendre" className="upt-nav-cta">Commencer →</Link>
          </>
        )}
      </div>
    </nav>
  );
}
