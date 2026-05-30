import Link from 'next/link';
import { MODULES } from '@/lib/content';

const PROFILES = [
  {
    icon: '👴',
    label: 'Seniors',
    desc: 'Votre PC rame ? Windows est trop compliqué ? Ubuntu peut tout changer — avec des explications ultra patientes.',
    color: '#E95420',
  },
  {
    icon: '🎓',
    label: 'Étudiants',
    desc: 'Gratuit, rapide, sécurisé. Ubuntu vous libère des licences coûteuses et booste votre productivité.',
    color: '#77216F',
  },
  {
    icon: '🦠',
    label: 'Victimes de virus',
    desc: 'Vous en avez assez des virus, des ransomwares, des ralentissements ? Sous Ubuntu, c\'est une autre vie.',
    color: '#0E8420',
  },
  {
    icon: '😤',
    label: 'Déçus de Windows',
    desc: 'Windows 10 qui expire, Windows 11 qui refuse de s\'installer, mises à jour forcées... Il y a une sortie.',
    color: '#0099CC',
  },
];

const STATS = [
  { n: '40M+', label: 'utilisateurs Ubuntu' },
  { n: '96%', label: 'des serveurs internet' },
  { n: '0€', label: 'pour toujours' },
  { n: '5 ans', label: 'de mises à jour garanties' },
];

export default function HomePage() {
  const totalLessons = MODULES.reduce((acc, m) => acc + m.lessons.length, 0);

  return (
    <div style={{ minHeight: '100vh', background: '#FBF7F4' }}>

      {/* NAV */}
      <nav style={{
        background: '#2C001E',
        padding: '0 24px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: '64px',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <span style={{ fontSize: '28px' }}>🐧</span>
          <span style={{
            fontFamily: 'Fraunces, serif',
            fontSize: '20px',
            fontWeight: 700,
            color: '#FBF7F4',
            letterSpacing: '-0.02em',
          }}>Ubuntu Pour Tous</span>
        </div>
        <div style={{ display: 'flex', gap: '24px', alignItems: 'center' }}>
          <Link href="/apprendre" style={{ color: '#AEA79F', textDecoration: 'none', fontSize: '14px' }}>Cours</Link>
          <Link href="/profils" style={{ color: '#AEA79F', textDecoration: 'none', fontSize: '14px' }}>Mon profil</Link>
          <Link href="/faq" style={{ color: '#AEA79F', textDecoration: 'none', fontSize: '14px' }}>FAQ</Link>
          <Link href="/apprendre" style={{
            background: '#E95420',
            color: 'white',
            padding: '8px 18px',
            borderRadius: '8px',
            textDecoration: 'none',
            fontSize: '14px',
            fontWeight: 600,
          }}>Commencer →</Link>
        </div>
      </nav>

      {/* HERO */}
      <div style={{
        background: 'linear-gradient(135deg, #2C001E 0%, #4a0d3a 60%, #2C001E 100%)',
        padding: '100px 24px 80px',
        textAlign: 'center',
        position: 'relative',
        overflow: 'hidden',
      }}>
        {/* Cercles décoratifs */}
        <div style={{
          position: 'absolute', top: '-100px', right: '-100px',
          width: '400px', height: '400px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(233,84,32,0.15) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />
        <div style={{
          position: 'absolute', bottom: '-80px', left: '-80px',
          width: '300px', height: '300px', borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(119,33,111,0.2) 0%, transparent 70%)',
          pointerEvents: 'none',
        }} />

        <div style={{
          display: 'inline-block',
          background: 'rgba(233,84,32,0.2)',
          border: '1px solid rgba(233,84,32,0.4)',
          borderRadius: '100px',
          padding: '6px 18px',
          fontSize: '13px',
          color: '#E95420',
          fontWeight: 600,
          marginBottom: '28px',
          letterSpacing: '0.05em',
        }}>
          🆓 100% gratuit · 0 inscription · Fait avec ❤️ pour la communauté
        </div>

        <h1 style={{
          fontFamily: 'Fraunces, serif',
          fontSize: 'clamp(2.5rem, 7vw, 5rem)',
          fontWeight: 700,
          color: '#FBF7F4',
          lineHeight: 1.1,
          marginBottom: '24px',
          letterSpacing: '-0.03em',
          maxWidth: '800px',
          margin: '0 auto 24px',
        }}>
          Linux, enfin expliqué<br />
          <span style={{ color: '#E95420', fontStyle: 'italic' }}>comme à un ami</span>
        </h1>

        <p style={{
          fontSize: 'clamp(16px, 2.5vw, 20px)',
          color: '#AEA79F',
          maxWidth: '560px',
          margin: '0 auto 40px',
          lineHeight: 1.7,
          fontWeight: 300,
        }}>
          Le guide Ubuntu le plus bienveillant du web français.
          Pas de jargon. Pas de prise de tête. Juste des étapes claires,
          des captures d'écran à chaque clic, et des quiz pour valider vos acquis.
        </p>

        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/apprendre" style={{
            display: 'inline-block',
            background: '#E95420',
            color: 'white',
            padding: '16px 36px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 700,
            letterSpacing: '-0.01em',
          }}>
            Je commence maintenant 🐧
          </Link>
          <Link href="/profils" style={{
            display: 'inline-block',
            background: 'rgba(255,255,255,0.08)',
            color: '#FBF7F4',
            border: '1px solid rgba(255,255,255,0.15)',
            padding: '16px 36px',
            borderRadius: '12px',
            textDecoration: 'none',
            fontSize: '16px',
            fontWeight: 500,
          }}>
            Trouver mon parcours →
          </Link>
        </div>

        {/* Stats */}
        <div style={{
          display: 'flex',
          gap: '48px',
          justifyContent: 'center',
          marginTop: '64px',
          flexWrap: 'wrap',
        }} className="home-stats">
          {STATS.map(s => (
            <div key={s.n} style={{ textAlign: 'center' }}>
              <div style={{
                fontFamily: 'Fraunces, serif',
                fontSize: '32px',
                fontWeight: 700,
                color: '#FBF7F4',
                lineHeight: 1,
              }}>{s.n}</div>
              <div style={{ fontSize: '12px', color: '#AEA79F', marginTop: '4px', letterSpacing: '0.08em', textTransform: 'uppercase' }}>{s.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* PROFILS */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 24px 0' }}>
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', color: '#AEA79F', textTransform: 'uppercase', marginBottom: '12px' }}>Ce site est fait pour vous si…</div>
          <h2 style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#2C001E',
            letterSpacing: '-0.03em',
          }}>Vous vous reconnaissez ici ?</h2>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(240px, 1fr))',
          gap: '20px',
          marginBottom: '80px',
        }}>
          {PROFILES.map(p => (
            <div key={p.label} style={{
              background: 'white',
              border: '1px solid #E8E0D8',
              borderRadius: '20px',
              padding: '28px 24px',
              transition: 'transform 0.2s, box-shadow 0.2s',
            }}>
              <div style={{ fontSize: '40px', marginBottom: '16px' }}>{p.icon}</div>
              <div style={{
                fontFamily: 'Fraunces, serif',
                fontSize: '20px',
                fontWeight: 700,
                color: p.color,
                marginBottom: '10px',
              }}>{p.label}</div>
              <div style={{ fontSize: '14px', color: '#6B5E55', lineHeight: 1.7 }}>{p.desc}</div>
            </div>
          ))}
        </div>

        {/* MODULES */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', color: '#AEA79F', textTransform: 'uppercase', marginBottom: '12px' }}>Le programme</div>
          <h2 style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 'clamp(1.8rem, 4vw, 3rem)',
            fontWeight: 700,
            color: '#2C001E',
            letterSpacing: '-0.03em',
            marginBottom: '12px',
          }}>{totalLessons} leçons. Un seul objectif.</h2>
          <p style={{ color: '#6B5E55', fontSize: '16px', maxWidth: '500px', margin: '0 auto' }}>
            Du premier contact avec Linux jusqu'à la maîtrise du quotidien — chaque étape est illustrée et validée par un quiz.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '80px' }}>
          {MODULES.map((mod, idx) => (
            <div key={mod.id} style={{
              background: 'white',
              border: '1px solid #E8E0D8',
              borderRadius: '20px',
              padding: '28px 32px',
              display: 'flex',
              alignItems: 'flex-start',
              gap: '24px',
            }}>
              <div style={{
                width: '56px', height: '56px', borderRadius: '16px',
                background: mod.color + '18',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                fontSize: '28px', flexShrink: 0,
              }}>{mod.icon}</div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: '#AEA79F', textTransform: 'uppercase', marginBottom: '4px' }}>Module {idx + 1}</div>
                <div style={{ fontFamily: 'Fraunces, serif', fontSize: '20px', fontWeight: 700, color: '#2C001E', marginBottom: '6px' }}>{mod.title}</div>
                <div style={{ fontSize: '14px', color: '#6B5E55', marginBottom: '16px', lineHeight: 1.6 }}>{mod.description}</div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {mod.lessons.map(lesson => (
                    <Link key={lesson.slug} href={`/apprendre/${lesson.slug}`} style={{
                      display: 'inline-flex', alignItems: 'center', gap: '6px',
                      background: '#FBF7F4',
                      border: '1px solid #E8E0D8',
                      borderRadius: '8px',
                      padding: '6px 12px',
                      textDecoration: 'none',
                      fontSize: '13px',
                      color: '#2C001E',
                      fontWeight: 500,
                    }}>
                      {lesson.icon} {lesson.title}
                    </Link>
                  ))}
                </div>
              </div>
              <div style={{ fontSize: '13px', color: '#AEA79F', flexShrink: 0 }}>
                {mod.lessons.length} leçon{mod.lessons.length > 1 ? 's' : ''}
              </div>
            </div>
          ))}
        </div>

        {/* PHILOSOPHIE */}
        <div style={{
          background: 'linear-gradient(135deg, #2C001E, #4a0d3a)',
          borderRadius: '28px',
          padding: '60px 48px',
          textAlign: 'center',
          marginBottom: '80px',
        }}>
          <div style={{ fontSize: '48px', marginBottom: '20px' }}>🤝</div>
          <h2 style={{
            fontFamily: 'Fraunces, serif',
            fontSize: 'clamp(1.6rem, 3.5vw, 2.5rem)',
            fontWeight: 700,
            color: '#FBF7F4',
            marginBottom: '16px',
            letterSpacing: '-0.02em',
          }}>Un projet communautaire, pas commercial</h2>
          <p style={{
            color: '#AEA79F', fontSize: '16px', maxWidth: '560px',
            margin: '0 auto 32px', lineHeight: 1.8,
          }}>
            Ubuntu Pour Tous est un projet bénévole, dans l'esprit du logiciel libre.
            Pas de publicité agressive, pas de données vendues, pas de compte requis.
            Juste du partage de connaissance, gratuitement, pour tout le monde.
          </p>
          <Link href="/apprendre" style={{
            display: 'inline-block',
            background: '#E95420',
            color: 'white',
            padding: '14px 32px',
            borderRadius: '10px',
            textDecoration: 'none',
            fontSize: '15px',
            fontWeight: 700,
          }}>
            Commencer le premier chapitre →
          </Link>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{
        background: '#2C001E',
        padding: '40px 24px',
        textAlign: 'center',
      }}>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: '20px', color: '#FBF7F4', marginBottom: '8px' }}>
          🐧 Ubuntu Pour Tous
        </div>
        <p style={{ fontSize: '13px', color: '#AEA79F', marginBottom: '16px' }}>
          Projet communautaire libre · Non affilié à Canonical
        </p>
        <div style={{ display: 'flex', gap: '24px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link href="/mentions-legales" style={{ color: '#AEA79F', textDecoration: 'none', fontSize: '13px' }}>Mentions légales</Link>
          <Link href="/confidentialite" style={{ color: '#AEA79F', textDecoration: 'none', fontSize: '13px' }}>Confidentialité</Link>
          <a href="https://github.com/ewfzapp/ubuntupourtous" style={{ color: '#AEA79F', textDecoration: 'none', fontSize: '13px' }}>GitHub</a>
        </div>
        <p style={{ fontSize: '12px', color: '#4a3040', marginTop: '24px' }}>
          © 2026 ubuntupourtous.org · Contenu sous licence CC BY-SA 4.0
        </p>
      </footer>
    </div>
  );
}
