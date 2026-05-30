import { getLessonBySlug, getModuleForLesson, getAllLessons } from '@/lib/content';
import Link from 'next/link';
import Quiz from '@/components/Quiz';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import { notFound } from 'next/navigation';

export async function generateStaticParams() {
  return getAllLessons().map(l => ({ slug: l.slug }));
}

export default async function LessonPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const lesson = getLessonBySlug(slug);
  if (!lesson) notFound();
  const mod = getModuleForLesson(slug);
  const allLessons = getAllLessons();
  const prevLesson = lesson.prevLesson ? allLessons.find(l => l.slug === lesson.prevLesson) : null;
  const nextLesson = lesson.nextLesson ? allLessons.find(l => l.slug === lesson.nextLesson) : null;

  return (
    <div style={{ minHeight: '100vh', background: 'var(--upt-cream)' }}>
      <Navbar backLink="/apprendre" backLabel="Cours" />

      {/* HERO */}
      <div className="lesson-hero" style={{
        background: 'linear-gradient(135deg, var(--upt-aubergine) 0%, var(--upt-aubergine2) 100%)',
        padding: '36px 24px 30px',
      }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          {/* Breadcrumb — masqué sur très petit écran */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '11px', color: 'var(--upt-bark)', marginBottom: '16px', flexWrap: 'wrap' }}>
            <Link href="/apprendre" style={{ color: 'var(--upt-bark)', textDecoration: 'none' }}>Cours</Link>
            <span style={{ opacity: 0.5 }}>›</span>
            <span style={{ color: mod?.color }}>{mod?.title}</span>
            <span style={{ opacity: 0.5 }}>›</span>
            <span style={{ color: 'rgba(251,247,244,0.7)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: '160px' }}>{lesson.title}</span>
          </div>

          <div className="lesson-hero-inner" style={{ display: 'flex', alignItems: 'flex-start', gap: '14px' }}>
            <span className="lesson-hero-icon" style={{ fontSize: '40px', lineHeight: 1, flexShrink: 0 }}>{lesson.icon}</span>
            <div style={{ flex: 1, minWidth: 0 }}>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '10px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '11px', color: 'var(--upt-bark)', background: 'rgba(255,255,255,0.08)', padding: '3px 9px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', whiteSpace: 'nowrap' }}>⏱ {lesson.duration}</span>
                <span style={{ fontSize: '11px', color: 'var(--upt-bark)', background: 'rgba(255,255,255,0.08)', padding: '3px 9px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', whiteSpace: 'nowrap' }}>🎯 {lesson.quiz.length} question{lesson.quiz.length > 1 ? 's' : ''}</span>
                <span style={{ fontSize: '11px', color: mod?.color, background: `${mod?.color}22`, padding: '3px 9px', borderRadius: '20px', border: `1px solid ${mod?.color}44`, whiteSpace: 'nowrap' }}>{mod?.icon} {mod?.title}</span>
              </div>
              <h1 className="lesson-hero-title" style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(1.4rem, 4vw, 2.2rem)', fontWeight: 700, color: '#FBF7F4', letterSpacing: '-0.02em', marginBottom: '6px', lineHeight: 1.2 }}>
                {lesson.title}
              </h1>
              <p style={{ fontSize: '14px', color: 'var(--upt-bark)', fontStyle: 'italic' }}>{lesson.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* LAYOUT DEUX COLONNES → UNE COLONNE SUR MOBILE */}
      <div className="lesson-layout">

        {/* COLONNE PRINCIPALE */}
        <div>
          {/* INTRO */}
          <div style={{
            background: 'rgba(233,84,32,0.06)',
            border: '1px solid rgba(233,84,32,0.18)',
            borderLeft: '4px solid var(--upt-orange)',
            borderRadius: '0 14px 14px 0',
            padding: '16px 20px',
            marginBottom: '20px',
            fontSize: '14px',
            color: 'var(--upt-text)',
            lineHeight: 1.8,
            fontStyle: 'italic',
          }}>
            {lesson.intro}
          </div>

          {/* SECTIONS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '32px' }}>
            {lesson.sections.map((section, idx) => (
              <div key={idx} className="upt-card">
                <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '18px', fontWeight: 700, color: 'var(--upt-text)', marginBottom: '12px', display: 'flex', alignItems: 'flex-start', gap: '10px', lineHeight: 1.3 }}>
                  <span style={{ background: 'var(--upt-orange)', color: 'white', borderRadius: '7px', width: '28px', height: '28px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, flexShrink: 0, marginTop: '2px' }}>{idx + 1}</span>
                  {section.title}
                </h2>

                {section.content.split('\n\n').map((para, i) => (
                  <p key={i} style={{ fontSize: '14px', color: 'var(--upt-muted)', lineHeight: 1.85, marginBottom: '10px' }}>{para}</p>
                ))}

                {/* Screenshot */}
                <div style={{ background: 'linear-gradient(135deg, #f5f0eb 0%, #ede7e0 100%)', border: '1.5px dashed #c8bdb5', borderRadius: '10px', padding: '24px 16px', textAlign: 'center', margin: '14px 0' }}>
                  <div style={{ fontSize: '24px', marginBottom: '6px' }}>📸</div>
                  <div style={{ fontSize: '10px', fontWeight: 700, color: 'var(--upt-orange)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '3px' }}>Capture d'écran</div>
                  <div style={{ fontSize: '11px', color: 'var(--upt-bark)' }}>{section.screenshot || section.title}</div>
                </div>

                {section.steps && (
                  <div className="upt-steps">
                    <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--upt-bark)', textTransform: 'uppercase', marginBottom: '10px' }}>📋 Étapes à suivre</div>
                    {section.steps.map((step, si) => (
                      <div key={si} className="upt-step">
                        <span className="upt-step-num">{si + 1}</span>
                        <span className="upt-step-text">{step}</span>
                      </div>
                    ))}
                  </div>
                )}

                {section.tip && (
                  <div className="upt-tip">
                    <span style={{ fontSize: '16px', flexShrink: 0 }}>💡</span>
                    <span className="upt-tip-text"><strong>Astuce :</strong> {section.tip}</span>
                  </div>
                )}

                {section.warning && (
                  <div className="upt-warning">
                    <span style={{ fontSize: '16px', flexShrink: 0 }}>⚠️</span>
                    <span className="upt-warning-text"><strong>Important :</strong> {section.warning}</span>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* QUIZ COMPLET */}
          <div style={{ marginBottom: '32px' }}>
            <div style={{ textAlign: 'center', marginBottom: '18px' }}>
              <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--upt-bark)', textTransform: 'uppercase', marginBottom: '6px' }}>Validation des acquis</div>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(1.2rem, 3vw, 1.7rem)', fontWeight: 700, color: 'var(--upt-text)', marginBottom: '6px' }}>🎯 Quiz du chapitre</h2>
              <p style={{ fontSize: '13px', color: 'var(--upt-bark)' }}>Score minimum recommandé : 70%.</p>
            </div>
            <Quiz questions={lesson.quiz} />
          </div>

          {/* NAVIGATION */}
          <div className="lesson-nav" style={{ display: 'grid', gridTemplateColumns: prevLesson && nextLesson ? '1fr 1fr' : '1fr', gap: '10px' }}>
            {prevLesson && (
              <Link href={`/apprendre/${lesson.prevLesson}`} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'white', border: '1px solid var(--upt-border)', borderRadius: '14px', padding: '14px 16px', textDecoration: 'none', color: 'var(--upt-text)' }}>
                <span style={{ fontSize: '18px' }}>←</span>
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--upt-bark)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>Précédent</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, fontFamily: 'Fraunces, serif' }}>{prevLesson.title}</div>
                </div>
              </Link>
            )}
            {nextLesson ? (
              <Link href={`/apprendre/${lesson.nextLesson}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px', background: 'var(--upt-orange)', borderRadius: '14px', padding: '14px 16px', textDecoration: 'none', color: 'white' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '10px', opacity: 0.75, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>Suivant</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, fontFamily: 'Fraunces, serif' }}>{nextLesson.title}</div>
                </div>
                <span style={{ fontSize: '18px' }}>→</span>
              </Link>
            ) : (
              <Link href="/apprendre" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '10px', background: 'var(--upt-aubergine)', borderRadius: '14px', padding: '14px 16px', textDecoration: 'none', color: 'white' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '10px', opacity: 0.75, marginBottom: '2px' }}>Module terminé 🎉</div>
                  <div style={{ fontSize: '13px', fontWeight: 600, fontFamily: 'Fraunces, serif' }}>Voir tous les cours</div>
                </div>
                <span style={{ fontSize: '18px' }}>→</span>
              </Link>
            )}
          </div>
        </div>

        {/* SIDEBAR — passe en dessous sur mobile */}
        <div className="lesson-sidebar" style={{ position: 'sticky', top: '72px' }}>
          <Sidebar currentSlug={slug} quizQuestion={lesson.quiz[0]} />
        </div>
      </div>

      <Footer />
    </div>
  );
}
