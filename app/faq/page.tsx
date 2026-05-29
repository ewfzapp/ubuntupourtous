import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const FAQS = [
  { q: "Faut-il des connaissances en informatique pour suivre ce guide ?", a: "Absolument pas. Ce guide est conçu spécifiquement pour les débutants complets. Chaque terme technique est expliqué, chaque étape est illustrée. Si vous savez utiliser un navigateur internet, vous pouvez suivre ce guide." },
  { q: "Est-ce que je vais perdre mes fichiers en installant Ubuntu ?", a: "Non, si vous suivez bien les instructions. En mode live (clé USB), vous ne touchez à rien. En dual boot, Ubuntu s'installe à côté de Windows sans toucher à vos fichiers. Cependant, nous recommandons toujours une sauvegarde préalable." },
  { q: "Mes logiciels Windows fonctionneront-ils sous Ubuntu ?", a: "Les logiciels Windows ne fonctionnent pas nativement sous Ubuntu. Mais il existe des alternatives gratuites pour tout : LibreOffice remplace Microsoft Office, GIMP remplace Photoshop, VLC lit tous les formats vidéo." },
  { q: "Ubuntu est-il adapté aux personnes âgées ?", a: "Tout à fait. Ubuntu est même souvent plus simple que Windows pour les seniors : moins de pub, moins de pop-ups, moins de virus. L'interface GNOME est épurée et lisible. De nombreuses personnes de 70, 80 ans ou plus utilisent Ubuntu au quotidien." },
  { q: "Comment obtenir de l'aide si je suis bloqué ?", a: "La communauté Ubuntu francophone est très active et bienveillante. Le forum ubuntu-fr.org rassemble des milliers de bénévoles prêts à aider. Il suffit de décrire votre problème — on ne vous fera jamais sentir 'nul'." },
  { q: "Ubuntu fonctionne-t-il sur mon vieil ordinateur ?", a: "Probablement oui ! Ubuntu fonctionne très bien sur des PC de 10 à 15 ans avec au minimum 4 Go de RAM. Si votre PC est encore plus ancien, des versions légères comme Lubuntu ou Xubuntu sont faites pour lui." },
  { q: "Est-ce que je peux revenir à Windows si je n'aime pas ?", a: "En dual boot, oui — Windows reste intact sur votre disque. En mono-boot, vous pouvez réinstaller Windows avec une clé USB officielle Microsoft. Mais la plupart des gens qui passent à Ubuntu ne font pas marche arrière !" },
];

export default function FAQ() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--upt-cream)' }}>
      <Navbar />
      <div style={{
        background: 'linear-gradient(135deg, var(--upt-aubergine) 0%, var(--upt-aubergine2) 100%)',
        padding: '60px 32px 52px', textAlign: 'center',
      }}>
        <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: 700, color: '#FBF7F4', letterSpacing: '-0.03em', marginBottom: '12px' }}>
          Questions fréquentes
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--upt-bark)', maxWidth: '480px', margin: '0 auto', lineHeight: 1.7 }}>
          Toutes les questions qu'on se pose avant de se lancer — répondues honnêtement.
        </p>
      </div>
      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '56px 24px 80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {FAQS.map((faq, i) => (
            <div key={i} className="upt-card">
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '18px', fontWeight: 700, color: 'var(--upt-text)', marginBottom: '10px', lineHeight: 1.4 }}>
                {faq.q}
              </h2>
              <p style={{ fontSize: '15px', color: 'var(--upt-muted)', lineHeight: 1.8 }}>{faq.a}</p>
            </div>
          ))}
        </div>
        <div style={{ marginTop: '48px', background: 'var(--upt-aubergine)', borderRadius: '20px', padding: '40px', textAlign: 'center' }}>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '24px', fontWeight: 700, color: '#FBF7F4', marginBottom: '12px' }}>Prêt à vous lancer ?</h2>
          <p style={{ color: 'var(--upt-bark)', marginBottom: '24px', fontSize: '15px' }}>Le premier chapitre prend 8 minutes. Vous ne risquez rien.</p>
          <Link href="/apprendre/cest-quoi-linux" style={{ display: 'inline-block', background: 'var(--upt-orange)', color: 'white', padding: '14px 32px', borderRadius: '10px', textDecoration: 'none', fontSize: '15px', fontWeight: 700 }}>
            Commencer maintenant →
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
