import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="upt-footer">
      <div className="upt-footer-logo">🐧 Ubuntu Pour Tous</div>
      <div className="upt-footer-sub">Projet communautaire libre · Non affilié à Canonical</div>
      <div className="upt-footer-links">
        <Link href="/mentions-legales" className="upt-footer-link">Mentions légales</Link>
        <Link href="/confidentialite" className="upt-footer-link">Confidentialité</Link>
        <Link href="/faq" className="upt-footer-link">FAQ</Link>
        <a href="https://github.com/ewfzapp/ubuntupourtous" className="upt-footer-link">GitHub</a>
      </div>
      <div className="upt-footer-copy">© 2026 ubuntupourtous.org · Contenu sous licence CC BY-SA 4.0</div>
    </footer>
  );
}
