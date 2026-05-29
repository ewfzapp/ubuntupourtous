import Link from 'next/link';
export default function Confidentialite() {
  return (
    <div style={{ minHeight: '100vh', background: '#FBF7F4', padding: '60px 24px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <Link href="/" style={{ color: '#E95420', textDecoration: 'none', fontSize: '14px' }}>← Accueil</Link>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: '2.5rem', fontWeight: 700, color: '#2C001E', margin: '24px 0 32px' }}>Confidentialité</h1>
        <div style={{ background: 'white', borderRadius: '20px', padding: '32px', border: '1px solid #E8E0D8', fontSize: '15px', color: '#3D2E26', lineHeight: 1.8 }}>
          <p><strong>Aucune donnée personnelle collectée.</strong></p>
          <p>Ubuntu Pour Tous ne collecte, ne stocke et ne transmet aucune donnée personnelle. Aucun cookie de traçage, aucun compte utilisateur, aucune analytics invasive.</p>
          <p style={{ marginTop: '16px' }}>Votre progression dans les quiz est stockée uniquement dans votre navigateur (localStorage) et ne quitte jamais votre appareil.</p>
          <p style={{ marginTop: '16px' }}>Ce site peut utiliser Cloudflare comme CDN, qui applique sa propre politique de confidentialité pour les requêtes réseau.</p>
        </div>
      </div>
    </div>
  );
}
