import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const PROFILES = [
  {
    icon: '👴',
    label: 'Senior',
    slug: 'senior',
    tagline: 'Votre PC mérite mieux que de ramer',
    desc: 'Vous avez un ordinateur qui ralentit, des virus qui s\'accumulent, des mises à jour Windows qui tombent au mauvais moment ? Ubuntu peut transformer votre expérience du quotidien — sans avoir besoin d\'être informaticien.',
    challenges: ['Windows trop lent ou trop cher', 'Peur des virus et arnaques', 'Mises à jour forcées intempestives', 'Interface trop compliquée'],
    gains: ['Interface simple et épurée', 'Zéro virus, zéro antivirus à payer', 'Gratuit pour toujours', 'PC ressuscité même vieux'],
    color: '#E95420',
    start: 'cest-quoi-linux',
  },
  {
    icon: '🎓',
    label: 'Étudiant',
    slug: 'etudiant',
    tagline: 'Gratuit, puissant, respecté dans le monde pro',
    desc: 'Licences Office hors de prix, antivirus à renouveler, PC qui rame sous Windows 11... Ubuntu vous libère de toutes ces contraintes. Et dans le monde professionnel de l\'informatique, Linux est partout.',
    challenges: ['Budget serré — les licences coûtent cher', 'PC qui rame pendant les cours', 'Besoin d\'outils de développement', 'Sécurité sur les réseaux publics'],
    gains: ['Suite bureautique complète et gratuite', 'Terminal et outils dev natifs', 'Performances décuplées', 'Compétence valorisée dans le CV'],
    color: '#77216F',
    start: 'pourquoi-changer',
  },
  {
    icon: '🦠',
    label: 'Victime de virus',
    slug: 'victime-virus',
    tagline: 'Repartir sur de bonnes bases, proprement',
    desc: 'Ransomware, cheval de Troie, PC bloqué ou ralenti par des malwares... Sous Ubuntu, les virus Windows ne fonctionnent tout simplement pas. Repartez sur une base saine, définitivement.',
    challenges: ['PC infecté ou ralenti', 'Méfiance envers les téléchargements', 'Antivirus qui ne suffit plus', 'Données potentiellement compromises'],
    gains: ['Immunité naturelle aux virus Windows', 'Aucun antivirus nécessaire', 'Architecture sécurisée par conception', 'Paix de l\'esprit retrouvée'],
    color: '#0E8420',
    start: 'pourquoi-changer',
  },
  {
    icon: '😤',
    label: 'Déçu de Windows',
    slug: 'decu-windows',
    tagline: 'Il existe une sortie — et elle est gratuite',
    desc: 'Windows 10 qui expire, Windows 11 qui refuse de s\'installer sur votre PC "trop vieux", publicités dans le menu Démarrer, télémétrie envahissante... Vous avez le droit d\'en avoir assez. Et il y a mieux.',
    challenges: ['Windows 10 en fin de vie en 2025', 'PC "incompatible" Windows 11', 'Pub et télémétrie dans le système', 'Mises à jour forcées non désirées'],
    gains: ['Aucune obsolescence programmée', 'Votre PC fonctionne encore 10 ans', 'Zéro publicité dans le système', 'Vous décidez de tout'],
    color: '#0099CC',
    start: 'linux-windows-mac',
  },
  {
    icon: '🔍',
    label: 'Curieux',
    slug: 'curieux',
    tagline: 'Explorez un monde différent',
    desc: 'Vous avez entendu parler de Linux, ça vous intrigue, mais vous ne savez pas par où commencer. Ce guide est fait pour vous — on commence par le tout début, sans supposer que vous savez quoi que ce soit.',
    challenges: ['Par où commencer ?', 'Peur de casser quelque chose', 'Jargon technique incompréhensible', 'Manque de tutoriels en français'],
    gains: ['Progression guidée et bienveillante', 'Test sans risque en live USB', 'Tout expliqué en français clair', 'Communauté francophone active'],
    color: '#f97316',
    start: 'cest-quoi-linux',
  },
];

const AUTHOR = {
  name: 'Elvis',
  role: 'Geek autodidacte · Passionné de homelab',
  avatar: '🐧',
  quote: 'Je ne suis pas informaticien de formation. J\'ai tout appris sur le tas, par curiosité, par obstination, et par passion. Et c\'est exactement pourquoi je peux vous l\'expliquer — parce que je me souviens de chaque obstacle, de chaque moment de doute, de chaque victoire.',
  story: [
    {
      icon: '💡',
      title: 'Autodidacte avant tout',
      text: 'Pas de diplôme informatique, pas de formation officielle. Juste des heures passées à expérimenter, à chercher, à rater, à recommencer. C\'est la meilleure école qui soit.',
    },
    {
      icon: '🏠',
      title: 'Homelab passionné',
      text: 'Serveurs à la maison, NAS, machines virtuelles, Docker, Cloudflare Tunnel... Ubuntu est au cœur de toute mon infrastructure personnelle depuis des années.',
    },
    {
      icon: '🤝',
      title: 'Transmettre ce que j\'ai appris',
      text: 'J\'ai bénéficié d\'une communauté open source généreuse. Ubuntu Pour Tous est ma façon de rendre ce que j\'ai reçu — avec le même esprit de partage.',
    },
    {
      icon: '🇫🇷',
      title: 'En français, vraiment',
      text: 'Trop de ressources Linux sont en anglais ou rédigées par des experts pour des experts. Ici, on explique comme à un ami — avec patience et sans condescendance.',
    },
  ],
};

export default function ProfilsPage() {
  return (
    <div style={{ minHeight: '100vh', background: 'var(--upt-cream)' }}>
      <Navbar />

      {/* HERO */}
      <div style={{
        background: 'linear-gradient(135deg, var(--upt-aubergine) 0%, var(--upt-aubergine2) 100%)',
        padding: '80px 32px 72px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        <div style={{ position: 'absolute', top: '-120px', right: '-120px', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(233,84,32,0.15) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-80px', left: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(119,33,111,0.2) 0%, transparent 70%)', pointerEvents: 'none' }} />

        <div style={{ position: 'relative' }}>
          <div style={{ display: 'inline-block', background: 'rgba(233,84,32,0.2)', border: '1px solid rgba(233,84,32,0.35)', borderRadius: '100px', padding: '6px 18px', fontSize: '13px', color: '#E95420', fontWeight: 600, marginBottom: '24px', letterSpacing: '0.05em' }}>
            Trouvez votre point de départ
          </div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(2.2rem, 6vw, 4.5rem)', fontWeight: 700, color: '#FBF7F4', letterSpacing: '-0.03em', marginBottom: '20px', lineHeight: 1.1 }}>
            Quel est<br /><span style={{ color: '#E95420', fontStyle: 'italic' }}>votre profil ?</span>
          </h1>
          <p style={{ fontSize: 'clamp(15px, 2vw, 18px)', color: 'var(--upt-bark)', maxWidth: '520px', margin: '0 auto', lineHeight: 1.75, fontWeight: 300 }}>
            Ubuntu Pour Tous s'adresse à tout le monde — mais votre point de départ dépend de qui vous êtes. Choisissez votre profil pour un parcours adapté.
          </p>
        </div>
      </div>

      {/* PROFILS */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '72px 24px 0' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '20px', marginBottom: '100px' }}>
          {PROFILES.map(p => (
            <div key={p.slug} style={{
              background: 'white',
              border: '1px solid var(--upt-border)',
              borderRadius: '24px',
              padding: '32px',
              display: 'flex',
              flexDirection: 'column',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Accent couleur */}
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '4px', background: p.color }} />

              <div style={{ fontSize: '48px', marginBottom: '16px' }}>{p.icon}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: '22px', fontWeight: 700, color: p.color, marginBottom: '4px' }}>{p.label}</div>
              <div style={{ fontSize: '13px', fontStyle: 'italic', color: 'var(--upt-bark)', marginBottom: '14px' }}>{p.tagline}</div>
              <p style={{ fontSize: '14px', color: 'var(--upt-muted)', lineHeight: 1.75, marginBottom: '24px', flex: 1 }}>{p.desc}</p>

              {/* Challenges & gains */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#ef4444', textTransform: 'uppercase', marginBottom: '8px' }}>😤 Problèmes</div>
                  {p.challenges.map((c, i) => (
                    <div key={i} style={{ fontSize: '12px', color: 'var(--upt-muted)', lineHeight: 1.6, paddingLeft: '8px', borderLeft: '2px solid #fca5a5', marginBottom: '4px' }}>{c}</div>
                  ))}
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.1em', color: '#16a34a', textTransform: 'uppercase', marginBottom: '8px' }}>✅ Avec Ubuntu</div>
                  {p.gains.map((g, i) => (
                    <div key={i} style={{ fontSize: '12px', color: 'var(--upt-muted)', lineHeight: 1.6, paddingLeft: '8px', borderLeft: '2px solid #86efac', marginBottom: '4px' }}>{g}</div>
                  ))}
                </div>
              </div>

              <Link href={`/apprendre/${p.start}`} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                background: p.color, color: 'white',
                padding: '13px 20px', borderRadius: '12px',
                textDecoration: 'none', fontSize: '14px', fontWeight: 700,
              }}>
                Commencer mon parcours →
              </Link>
            </div>
          ))}
        </div>

        {/* SÉPARATEUR */}
        <div style={{ textAlign: 'center', marginBottom: '72px' }}>
          <div style={{ width: '60px', height: '3px', background: 'var(--upt-orange)', borderRadius: '2px', margin: '0 auto 48px' }} />
          <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--upt-bark)', textTransform: 'uppercase', marginBottom: '14px' }}>Derrière le site</div>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(1.8rem, 4vw, 3rem)', fontWeight: 700, color: 'var(--upt-text)', letterSpacing: '-0.03em' }}>
            Qui a créé Ubuntu Pour Tous ?
          </h2>
        </div>

        {/* PROFIL AUTEUR */}
        <div style={{
          background: 'linear-gradient(135deg, var(--upt-aubergine) 0%, var(--upt-aubergine2) 100%)',
          borderRadius: '28px',
          padding: '56px 48px',
          marginBottom: '48px',
          position: 'relative',
          overflow: 'hidden',
        }}>
          <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '250px', height: '250px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(233,84,32,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '32px', flexWrap: 'wrap', position: 'relative' }}>
            {/* Avatar */}
            <div style={{ flexShrink: 0 }}>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'rgba(233,84,32,0.2)', border: '3px solid rgba(233,84,32,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '52px' }}>
                {AUTHOR.avatar}
              </div>
              <div style={{ textAlign: 'center', marginTop: '10px' }}>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: '18px', fontWeight: 700, color: '#FBF7F4' }}>{AUTHOR.name}</div>
                <div style={{ fontSize: '12px', color: 'var(--upt-bark)', lineHeight: 1.5 }}>{AUTHOR.role}</div>
              </div>
            </div>

            {/* Citation */}
            <div style={{ flex: 1, minWidth: '280px' }}>
              <div style={{ fontSize: '32px', color: 'var(--upt-orange)', fontFamily: 'Fraunces, serif', lineHeight: 1, marginBottom: '8px' }}>"</div>
              <p style={{ fontSize: '17px', color: '#FBF7F4', lineHeight: 1.8, fontStyle: 'italic', fontFamily: 'Fraunces, serif', fontWeight: 300, marginBottom: '0' }}>
                {AUTHOR.quote}
              </p>
            </div>
          </div>
        </div>

        {/* STORY CARDS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))', gap: '16px', marginBottom: '100px' }}>
          {AUTHOR.story.map((s, i) => (
            <div key={i} style={{ background: 'white', border: '1px solid var(--upt-border)', borderRadius: '20px', padding: '28px 24px' }}>
              <div style={{ fontSize: '36px', marginBottom: '14px' }}>{s.icon}</div>
              <div style={{ fontFamily: 'Fraunces, serif', fontSize: '17px', fontWeight: 700, color: 'var(--upt-text)', marginBottom: '10px' }}>{s.title}</div>
              <p style={{ fontSize: '14px', color: 'var(--upt-muted)', lineHeight: 1.75 }}>{s.text}</p>
            </div>
          ))}
        </div>

        {/* CTA FINAL */}
        <div style={{ background: 'white', border: '1px solid var(--upt-border)', borderRadius: '28px', padding: '56px 48px', textAlign: 'center', marginBottom: '80px' }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🐧</div>
          <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)', fontWeight: 700, color: 'var(--upt-text)', letterSpacing: '-0.02em', marginBottom: '14px' }}>
            Prêt à vous lancer ?
          </h2>
          <p style={{ color: 'var(--upt-muted)', fontSize: '16px', maxWidth: '480px', margin: '0 auto 32px', lineHeight: 1.75 }}>
            Le premier chapitre prend 8 minutes. Il ne nécessite aucune connaissance préalable. Et vous ne risquez absolument rien.
          </p>
          <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <Link href="/apprendre/cest-quoi-linux" style={{ display: 'inline-block', background: 'var(--upt-orange)', color: 'white', padding: '15px 32px', borderRadius: '12px', textDecoration: 'none', fontSize: '15px', fontWeight: 700 }}>
              Commencer maintenant 🐧
            </Link>
            <Link href="/apprendre" style={{ display: 'inline-block', background: 'var(--upt-cream)', border: '1px solid var(--upt-border)', color: 'var(--upt-text)', padding: '15px 32px', borderRadius: '12px', textDecoration: 'none', fontSize: '15px', fontWeight: 600 }}>
              Voir tous les cours →
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
