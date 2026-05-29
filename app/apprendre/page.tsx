import Link from 'next/link';
import { MODULES } from '@/lib/content';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

export default function ApprendrePage() {
  const totalLessons = MODULES.reduce((acc, m) => acc + m.lessons.length, 0);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--upt-cream)' }}>
      <Navbar backLink="/" backLabel="Accueil" />

      {/* HERO */}
      <div style={{
        background: 'linear-gradient(135deg, var(--upt-aubergine) 0%, var(--upt-aubergine2) 100%)',
        padding: '60px 32px 52px',
        textAlign: 'center',
      }}>
        <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--upt-bark)', textTransform: 'uppercase', marginBottom: '14px' }}>
          {MODULES.length} modules · {totalLessons} leçons · Quiz inclus
        </div>
        <h1 style={{
          fontFamily: 'Fraunces, serif',
          fontSize: 'clamp(2rem, 5vw, 3.5rem)',
          fontWeight: 700,
          color: '#FBF7F4',
          letterSpacing: '-0.03em',
          marginBottom: '12px',
        }}>
          Tous les cours 📚
        </h1>
        <p style={{ fontSize: '16px', color: 'var(--upt-bark)', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
          Suivez les modules dans l'ordre pour une progression optimale. Chaque leçon se termine par un quiz.
        </p>
      </div>

      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '56px 24px 80px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
          {MODULES.map((mod, idx) => (
            <div key={mod.id}>
              {/* En-tête module */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '20px' }}>
                <div style={{
                  width: '48px', height: '48px', borderRadius: '14px',
                  background: mod.color + '20',
                  border: `1px solid ${mod.color}30`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '24px',
                }}>
                  {mod.icon}
                </div>
                <div>
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--upt-bark)', textTransform: 'uppercase' }}>
                    Module {idx + 1}
                  </div>
                  <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '22px', fontWeight: 700, color: 'var(--upt-text)' }}>
                    {mod.title}
                  </h2>
                </div>
                <div style={{
                  marginLeft: 'auto',
                  fontSize: '13px', color: 'var(--upt-bark)',
                  background: 'white', border: '1px solid var(--upt-border)',
                  borderRadius: '20px', padding: '4px 14px',
                }}>
                  {mod.lessons.length} leçon{mod.lessons.length > 1 ? 's' : ''}
                </div>
              </div>

              {/* Leçons */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {mod.lessons.map((lesson, lIdx) => (
                  <Link key={lesson.slug} href={`/apprendre/${lesson.slug}`} style={{
                    display: 'flex', alignItems: 'center', gap: '18px',
                    background: 'white',
                    border: '1px solid var(--upt-border)',
                    borderRadius: '16px',
                    padding: '18px 24px',
                    textDecoration: 'none',
                    color: 'var(--upt-text)',
                    transition: 'border-color 0.2s, transform 0.2s, box-shadow 0.2s',
                  }}>
                    <div style={{
                      width: '44px', height: '44px', borderRadius: '12px',
                      background: mod.color + '15',
                      border: `1px solid ${mod.color}25`,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: '22px', flexShrink: 0,
                    }}>
                      {lesson.icon}
                    </div>
                    <div style={{ flex: 1, minWidth: 0 }}>
                      <div style={{ fontFamily: 'Fraunces, serif', fontSize: '17px', fontWeight: 600, color: 'var(--upt-text)', marginBottom: '3px' }}>
                        {lesson.title}
                      </div>
                      <div style={{ fontSize: '13px', color: 'var(--upt-bark)', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
                        {lesson.subtitle}
                      </div>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
                      <span style={{ fontSize: '12px', color: 'var(--upt-bark)' }}>⏱ {lesson.duration}</span>
                      <span style={{ fontSize: '12px', color: 'var(--upt-bark)' }}>🎯 {lesson.quiz.length}Q</span>
                      <span style={{ color: mod.color, fontSize: '20px', fontWeight: 300 }}>→</span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
