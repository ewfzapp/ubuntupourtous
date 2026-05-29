import Link from 'next/link';
import { MODULES } from '@/lib/content';

export default function ApprendrePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#FBF7F4' }}>
      {/* NAV */}
      <nav style={{ background: '#2C001E', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <span style={{ fontSize: '24px' }}>🐧</span>
          <span style={{ fontFamily: 'Fraunces, serif', fontSize: '18px', fontWeight: 700, color: '#FBF7F4' }}>Ubuntu Pour Tous</span>
        </Link>
        <Link href="/" style={{ color: '#AEA79F', textDecoration: 'none', fontSize: '14px' }}>← Accueil</Link>
      </nav>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '60px 24px' }}>
        <div style={{ marginBottom: '48px' }}>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(2rem, 5vw, 3.5rem)', fontWeight: 700, color: '#2C001E', letterSpacing: '-0.03em', marginBottom: '12px' }}>
            Tous les cours 📚
          </h1>
          <p style={{ fontSize: '16px', color: '#6B5E55', lineHeight: 1.7 }}>
            Suivez les modules dans l'ordre pour une progression optimale. Chaque leçon se termine par un quiz pour valider vos acquis.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
          {MODULES.map((mod, idx) => (
            <div key={mod.id}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: mod.color + '20', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>{mod.icon}</div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: '#AEA79F', textTransform: 'uppercase' }}>Module {idx + 1}</div>
                  <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '22px', fontWeight: 700, color: '#2C001E' }}>{mod.title}</h2>
                </div>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                {mod.lessons.map((lesson, lIdx) => (
                  <Link key={lesson.slug} href={`/apprendre/${lesson.slug}`} style={{
                    display: 'flex', alignItems: 'center', gap: '20px',
                    background: 'white', border: '1px solid #E8E0D8', borderRadius: '16px',
                    padding: '20px 24px', textDecoration: 'none', color: 'inherit',
                  }}>
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: mod.color + '15', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '20px', flexShrink: 0 }}>{lesson.icon}</div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: 'Fraunces, serif', fontSize: '17px', fontWeight: 600, color: '#2C001E', marginBottom: '4px' }}>{lesson.title}</div>
                      <div style={{ fontSize: '13px', color: '#6B5E55' }}>{lesson.subtitle}</div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', flexShrink: 0 }}>
                      <span style={{ fontSize: '12px', color: '#AEA79F' }}>⏱ {lesson.duration}</span>
                      <span style={{ fontSize: '12px', color: '#AEA79F' }}>{lesson.quiz.length} question{lesson.quiz.length > 1 ? 's' : ''}</span>
                      <span style={{ color: mod.color, fontSize: '18px' }}>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
