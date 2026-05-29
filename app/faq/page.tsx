import Link from 'next/link';

const FAQS = [
  { q: "Faut-il des connaissances en informatique pour suivre ce guide ?", a: "Absolument pas. Ce guide est conçu spécifiquement pour les débutants complets. Chaque terme technique est expliqué, chaque étape est illustrée. Si vous savez utiliser un navigateur internet, vous pouvez suivre ce guide." },
  { q: "Est-ce que je vais perdre mes fichiers en installant Ubuntu ?", a: "Non, si vous suivez bien les instructions. En mode live (clé USB), vous ne touchez à rien. En dual boot, Ubuntu s'installe à côté de Windows sans toucher à vos fichiers. Cependant, nous recommandons toujours une sauvegarde préalable — c'est une bonne habitude informatique." },
  { q: "Mes logiciels Windows fonctionneront-ils sous Ubuntu ?", a: "Les logiciels Windows ne fonctionnent pas nativement sous Ubuntu. Mais il existe des alternatives gratuites pour tout : LibreOffice remplace Microsoft Office, GIMP remplace Photoshop, VLC lit tous les formats vidéo. Pour les cas spéciaux (jeux, logiciels professionnels), des solutions comme Wine ou des machines virtuelles existent." },
  { q: "Ubuntu est-il adapté aux personnes âgées ?", a: "Tout à fait. Ubuntu est même souvent plus simple que Windows pour les seniors : moins de pub, moins de pop-ups, moins de virus, moins de mises à jour forcées au mauvais moment. L'interface GNOME est épurée et lisible. De nombreuses personnes de 70, 80 ans ou plus utilisent Ubuntu au quotidien." },
  { q: "Comment obtenir de l'aide si je suis bloqué ?", a: "La communauté Ubuntu francophone est très active et bienveillante. Le forum ubuntu-fr.org rassemble des milliers de bénévoles prêts à aider. Il suffit de décrire votre problème — on ne vous fera jamais sentir 'nul'." },
  { q: "Ubuntu fonctionne-t-il sur mon vieil ordinateur ?", a: "Probablement oui ! Ubuntu fonctionne très bien sur des PC de 10 à 15 ans avec au minimum 4 Go de RAM et un processeur 64 bits. Si votre PC est encore plus ancien, des versions légères comme Lubuntu ou Xubuntu sont faites pour lui." },
  { q: "Est-ce que je peux revenir à Windows si je n'aime pas ?", a: "En dual boot, oui — Windows reste intact sur votre disque. En mono-boot (Ubuntu seul), vous pouvez réinstaller Windows avec une clé USB officielle Microsoft. Mais la plupart des gens qui passent à Ubuntu ne font pas marche arrière !" },
];

export default function FAQ() {
  return (
    <div style={{ minHeight: '100vh', background: '#FBF7F4' }}>
      <nav style={{ background: '#2C001E', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <span style={{ fontSize: '24px' }}>🐧</span>
          <span style={{ fontFamily: 'Fraunces, serif', fontSize: '18px', fontWeight: 700, color: '#FBF7F4' }}>Ubuntu Pour Tous</span>
        </Link>
        <Link href="/" style={{ color: '#AEA79F', textDecoration: 'none', fontSize: '14px' }}>← Accueil</Link>
      </nav>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '60px 24px 80px' }}>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 700, color: '#2C001E', marginBottom: '12px', letterSpacing: '-0.03em' }}>Questions fréquentes</h1>
        <p style={{ fontSize: '16px', color: '#6B5E55', marginBottom: '48px', lineHeight: 1.7 }}>Toutes les questions qu'on se pose avant de se lancer — répondues honnêtement.</p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
          {FAQS.map((faq, i) => (
            <div key={i} style={{ background: 'white', border: '1px solid #E8E0D8', borderRadius: '16px', padding: '24px 28px' }}>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '18px', fontWeight: 700, color: '#2C001E', marginBottom: '12px', lineHeight: 1.4 }}>{faq.q}</h2>
              <p style={{ fontSize: '15px', color: '#6B5E55', lineHeight: 1.75 }}>{faq.a}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '48px', background: '#2C001E', borderRadius: '20px', padding: '36px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '24px', fontWeight: 700, color: '#FBF7F4', marginBottom: '12px' }}>Prêt à vous lancer ?</h2>
          <p style={{ color: '#AEA79F', marginBottom: '24px', fontSize: '15px' }}>Le premier chapitre prend 8 minutes. Vous ne risquez rien.</p>
          <Link href="/apprendre/cest-quoi-linux" style={{ display: 'inline-block', background: '#E95420', color: 'white', padding: '14px 32px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: 700 }}>
            Commencer maintenant →
          </Link>
        </div>
      </div>
    </div>
  );
}
