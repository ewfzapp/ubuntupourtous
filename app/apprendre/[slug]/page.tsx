import { getLessonBySlug, getModuleForLesson, getAllLessons } from '@/lib/content';
import Link from 'next/link';
import Quiz from '@/components/Quiz';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllLessons().map(l => ({ slug: l.slug }));
}

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) notFound();
  const mod = getModuleForLesson(slug);

  return (
    <div style={{ minHeight: '100vh', background: 'var(--upt-cream)' }}>
      <Navbar backLink="/apprendre" backLabel="Tous les cours" />

      {/* HERO LEÇON */}
      <div style={{
        background: 'linear-gradient(135deg, var(--upt-aubergine) 0%, var(--upt-aubergine2) 100%)',
        padding: '52px 32px 48px',
      }}>
        <div style={{ maxWidth: '820px', margin: '0 auto' }}>

          {/* Breadcrumb */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: 'var(--upt-bark)', marginBottom: '28px' }}>
            <Link href="/apprendre" style={{ color: 'var(--upt-bark)', textDecoration: 'none' }}>Cours</Link>
            <span style={{ opacity: 0.5 }}>›</span>
            <span style={{ color: mod?.color }}>{mod?.title}</span>
            <span style={{ opacity: 0.5 }}>›</span>
            <span style={{ color: 'rgba(251,247,244,0.7)' }}>{lesson.title}</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '20px' }}>
            <span style={{ fontSize: '52px', lineHeight: 1 }}>{lesson.icon}</span>
            <div style={{ flex: 1 }}>
              <div style={{ display: 'flex', gap: '10px', marginBottom: '14px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', color: 'var(--upt-bark)', background: 'rgba(255,255,255,0.08)', padding: '4px 12px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  ⏱ {lesson.duration}
                </span>
                <span style={{ fontSize: '12px', color: 'var(--upt-bark)', background: 'rgba(255,255,255,0.08)', padding: '4px 12px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>
                  🎯 {lesson.quiz.length} question{lesson.quiz.length > 1 ? 's' : ''}
                </span>
                <span style={{ fontSize: '12px', color: mod?.color, background: `${mod?.color}22`, padding: '4px 12px', borderRadius: '20px', border: `1px solid ${mod?.color}44` }}>
                  {mod?.icon} {mod?.title}
                </span>
              </div>
              <h1 style={{
                fontFamily: 'Fraunces, serif',
                fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
                fontWeight: 700,
                color: '#FBF7F4',
                letterSpacing: '-0.03em',
                marginBottom: '10px',
                lineHeight: 1.15,
              }}>
                {lesson.title}
              </h1>
              <p style={{ fontSize: '16px', color: 'var(--upt-bark)', lineHeight: 1.5, fontStyle: 'italic' }}>
                {lesson.subtitle}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CONTENU */}
      <div style={{ maxWidth: '820px', margin: '0 auto', padding: '48px 24px 80px' }}>

        {/* INTRO */}
        <div style={{
          background: 'rgba(233,84,32,0.06)',
          border: '1px solid rgba(233,84,32,0.18)',
          borderLeft: '4px solid var(--upt-orange)',
          borderRadius: '0 14px 14px 0',
          padding: '22px 26px',
          marginBottom: '40px',
          fontSize: '16px',
          color: 'var(--upt-text)',
          lineHeight: 1.8,
          fontStyle: 'italic',
        }}>
          {lesson.intro}
        </div>

        {/* SECTIONS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '28px', marginBottom: '56px' }}>
          {lesson.sections.map((section, idx) => (
            <div key={idx} className="upt-card">

              {/* Titre section */}
              <h2 style={{
                fontFamily: 'Fraunces, serif',
                fontSize: '21px',
                fontWeight: 700,
                color: 'var(--upt-text)',
                marginBottom: '18px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px',
                lineHeight: 1.3,
              }}>
                <span style={{
                  background: 'var(--upt-orange)',
                  color: 'white',
                  borderRadius: '9px',
                  width: '34px',
                  height: '34px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '14px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontWeight: 700,
                  flexShrink: 0,
                }}>{idx + 1}</span>
                {section.title}
              </h2>

              {/* Contenu texte */}
              {section.content.split('\n\n').map((para, i) => (
                <p key={i} style={{
                  fontSize: '15px',
                  color: 'var(--upt-muted)',
                  lineHeight: 1.85,
                  marginBottom: '14px',
                }}>
                  {para}
                </p>
              ))}

              {/* Emplacement capture d'écran */}
              <div className="upt-screenshot">
                <div className="upt-screenshot-label">📸 Capture d'écran</div>
                <div className="upt-screenshot-desc">{section.title}</div>
              </div>

              {/* Étapes */}
              {section.steps && (
                <div className="upt-steps">
                  <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--upt-bark)', textTransform: 'uppercase', marginBottom: '14px' }}>
                    📋 Étapes à suivre
                  </div>
                  {section.steps.map((step, si) => (
                    <div key={si} className="upt-step">
                      <span className="upt-step-num">{si + 1}</span>
                      <span className="upt-step-text">{step}</span>
                    </div>
                  ))}
                </div>
              )}

              {/* Tip */}
              {section.tip && (
                <div className="upt-tip">
                  <span style={{ fontSize: '18px', flexShrink: 0 }}>💡</span>
                  <span className="upt-tip-text"><strong>Astuce :</strong> {section.tip}</span>
                </div>
              )}

              {/* Warning */}
              {section.warning && (
                <div className="upt-warning">
                  <span style={{ fontSize: '18px', flexShrink: 0 }}>⚠️</span>
                  <span className="upt-warning-text"><strong>Important :</strong> {section.warning}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* QUIZ */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ textAlign: 'center', marginBottom: '28px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--upt-bark)', textTransform: 'uppercase', marginBottom: '10px' }}>Validation des acquis</div>
            <h2 style={{
              fontFamily: 'Fraunces, serif',
              fontSize: 'clamp(1.5rem, 3vw, 2rem)',
              fontWeight: 700,
              color: 'var(--upt-text)',
              marginBottom: '8px',
            }}>
              🎯 Quiz du chapitre
            </h2>
            <p style={{ fontSize: '14px', color: 'var(--upt-bark)' }}>
              Score minimum recommandé : 70%. Vous pouvez recommencer autant de fois que nécessaire.
            </p>
          </div>
          <Quiz questions={lesson.quiz} />
        </div>

        {/* NAVIGATION */}
        <div style={{ display: 'grid', gridTemplateColumns: lesson.prevLesson && lesson.nextLesson ? '1fr 1fr' : '1fr', gap: '12px' }}>
          {lesson.prevLesson && (() => {
            const prev = getAllLessons().find(l => l.slug === lesson.prevLesson);
            return (
              <Link href={`/apprendre/${lesson.prevLesson}`} style={{
                display: 'flex', alignItems: 'center', gap: '14px',
                background: 'white', border: '1px solid var(--upt-border)',
                borderRadius: '16px', padding: '18px 22px',
                textDecoration: 'none', color: 'var(--upt-text)',
                transition: 'border-color 0.2s',
              }}>
                <span style={{ fontSize: '22px', flexShrink: 0 }}>←</span>
                <div>
                  <div style={{ fontSize: '11px', color: 'var(--upt-bark)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>Précédent</div>
                  <div style={{ fontSize: '15px', fontWeight: 600, fontFamily: 'Fraunces, serif' }}>{prev?.title}</div>
                </div>
              </Link>
            );
          })()}
          {lesson.nextLesson && (() => {
            const next = getAllLessons().find(l => l.slug === lesson.nextLesson);
            return (
              <Link href={`/apprendre/${lesson.nextLesson}`} style={{
                display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '14px',
                background: 'var(--upt-orange)', borderRadius: '16px',
                padding: '18px 22px', textDecoration: 'none', color: 'white',
              }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '11px', opacity: 0.75, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>Suivant</div>
                  <div style={{ fontSize: '15px', fontWeight: 600, fontFamily: 'Fraunces, serif' }}>{next?.title}</div>
                </div>
                <span style={{ fontSize: '22px', flexShrink: 0 }}>→</span>
              </Link>
            );
          })()}
          {!lesson.nextLesson && (
            <Link href="/apprendre" style={{
              display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '14px',
              background: 'var(--upt-aubergine)', borderRadius: '16px',
              padding: '18px 22px', textDecoration: 'none', color: 'white',
            }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', opacity: 0.75, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '3px' }}>Module terminé ! 🎉</div>
                <div style={{ fontSize: '15px', fontWeight: 600, fontFamily: 'Fraunces, serif' }}>Voir tous les cours</div>
              </div>
              <span style={{ fontSize: '22px' }}>→</span>
            </Link>
          )}
        </div>
      </div>

      <Footer />
    </div>
  );
}
