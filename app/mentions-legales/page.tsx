import Link from 'next/link';
export default function MentionsLegales() {
  return (
    <div style={{ minHeight: '100vh', background: '#FBF7F4', padding: '60px 24px' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <Link href="/" style={{ color: '#E95420', textDecoration: 'none', fontSize: '14px' }}>← Accueil</Link>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: '2.5rem', fontWeight: 700, color: '#2C001E', margin: '24px 0 32px' }}>Mentions légales</h1>
        <div style={{ background: 'white', borderRadius: '20px', padding: '32px', border: '1px solid #E8E0D8', fontSize: '15px', color: '#3D2E26', lineHeight: 1.8 }}>
          <p><strong>Éditeur du site :</strong> Ubuntu Pour Tous — projet communautaire bénévole</p>
          <p><strong>Hébergement :</strong> GitHub Pages / Cloudflare</p>
          <p><strong>Contact :</strong> via GitHub Issues sur le dépôt du projet</p>
          <p style={{ marginTop: '20px' }}>Ce site est un projet indépendant, non affilié à Canonical Ltd., l'entreprise qui développe Ubuntu. Ubuntu est une marque déposée de Canonical Ltd.</p>
          <p>Le contenu est publié sous licence Creative Commons BY-SA 4.0.</p>
        </div>
      </div>
    </div>
  );
}
