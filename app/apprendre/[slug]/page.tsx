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
      <Navbar backLink="/apprendre" backLabel="Tous les cours" />

      {/* HERO */}
      <div style={{
        background: 'linear-gradient(135deg, var(--upt-aubergine) 0%, var(--upt-aubergine2) 100%)',
        padding: '40px 24px 36px',
      }}>
        <div style={{ maxWidth: '1060px', margin: '0 auto' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: 'var(--upt-bark)', marginBottom: '18px' }}>
            <Link href="/apprendre" style={{ color: 'var(--upt-bark)', textDecoration: 'none' }}>Cours</Link>
            <span style={{ opacity: 0.5 }}>›</span>
            <span style={{ color: mod?.color }}>{mod?.title}</span>
            <span style={{ opacity: 0.5 }}>›</span>
            <span style={{ color: 'rgba(251,247,244,0.7)' }}>{lesson.title}</span>
          </div>
          <div style={{ display: 'flex', alignItems: 'flex-start', gap: '16px' }}>
            <span style={{ fontSize: '44px', lineHeight: 1, flexShrink: 0 }}>{lesson.icon}</span>
            <div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', flexWrap: 'wrap' }}>
                <span style={{ fontSize: '12px', color: 'var(--upt-bark)', background: 'rgba(255,255,255,0.08)', padding: '3px 10px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>⏱ {lesson.duration}</span>
                <span style={{ fontSize: '12px', color: 'var(--upt-bark)', background: 'rgba(255,255,255,0.08)', padding: '3px 10px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)' }}>🎯 {lesson.quiz.length} question{lesson.quiz.length > 1 ? 's' : ''}</span>
                <span style={{ fontSize: '12px', color: mod?.color, background: `${mod?.color}22`, padding: '3px 10px', borderRadius: '20px', border: `1px solid ${mod?.color}44` }}>{mod?.icon} {mod?.title}</span>
              </div>
              <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(1.6rem, 3.5vw, 2.4rem)', fontWeight: 700, color: '#FBF7F4', letterSpacing: '-0.03em', marginBottom: '6px', lineHeight: 1.15 }}>
                {lesson.title}
              </h1>
              <p style={{ fontSize: '15px', color: 'var(--upt-bark)', fontStyle: 'italic' }}>{lesson.subtitle}</p>
            </div>
          </div>
        </div>
      </div>

      {/* LAYOUT DEUX COLONNES */}
      <div style={{ maxWidth: '1060px', margin: '0 auto', padding: '28px 20px 80px', display: 'grid', gridTemplateColumns: '1fr 260px', gap: '24px', alignItems: 'start' }}>

        {/* COLONNE PRINCIPALE */}
        <div>
          {/* INTRO */}
          <div style={{
            background: 'rgba(233,84,32,0.06)',
            border: '1px solid rgba(233,84,32,0.18)',
            borderLeft: '4px solid var(--upt-orange)',
            borderRadius: '0 14px 14px 0',
            padding: '18px 22px',
            marginBottom: '24px',
            fontSize: '15px',
            color: 'var(--upt-text)',
            lineHeight: 1.8,
            fontStyle: 'italic',
          }}>
            {lesson.intro}
          </div>

          {/* SECTIONS */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '36px' }}>
            {lesson.sections.map((section, idx) => (
              <div key={idx} className="upt-card">
                <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '19px', fontWeight: 700, color: 'var(--upt-text)', marginBottom: '14px', display: 'flex', alignItems: 'center', gap: '10px', lineHeight: 1.3 }}>
                  <span style={{ background: 'var(--upt-orange)', color: 'white', borderRadius: '8px', width: '30px', height: '30px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontFamily: 'DM Sans, sans-serif', fontWeight: 700, flexShrink: 0 }}>{idx + 1}</span>
                  {section.title}
                </h2>

                {section.content.split('\n\n').map((para, i) => (
                  <p key={i} style={{ fontSize: '14px', color: 'var(--upt-muted)', lineHeight: 1.85, marginBottom: '12px' }}>{para}</p>
                ))}

                {/* Screenshot placeholder */}
                <div style={{
                  background: 'linear-gradient(135deg, #f5f0eb 0%, #ede7e0 100%)',
                  border: '1.5px dashed #c8bdb5',
                  borderRadius: '12px',
                  padding: '32px 20px',
                  textAlign: 'center',
                  margin: '16px 0',
                }}>
                  <div style={{ fontSize: '28px', marginBottom: '8px' }}>📸</div>
                  <div style={{ fontSize: '11px', fontWeight: 700, color: 'var(--upt-orange)', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '4px' }}>Capture d'écran</div>
                  <div style={{ fontSize: '12px', color: 'var(--upt-bark)' }}>{section.screenshot || section.title}</div>
                </div>

                {section.steps && (
                  <div className="upt-steps">
                    <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--upt-bark)', textTransform: 'uppercase', marginBottom: '12px' }}>📋 Étapes à suivre</div>
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
          <div style={{ marginBottom: '36px' }}>
            <div style={{ textAlign: 'center', marginBottom: '20px' }}>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.15em', color: 'var(--upt-bark)', textTransform: 'uppercase', marginBottom: '8px' }}>Validation des acquis</div>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(1.3rem, 2.5vw, 1.8rem)', fontWeight: 700, color: 'var(--upt-text)', marginBottom: '6px' }}>🎯 Quiz du chapitre</h2>
              <p style={{ fontSize: '13px', color: 'var(--upt-bark)' }}>Score minimum recommandé : 70%. Recommencez autant que nécessaire.</p>
            </div>
            <Quiz questions={lesson.quiz} />
          </div>

          {/* NAVIGATION */}
          <div style={{ display: 'grid', gridTemplateColumns: prevLesson && nextLesson ? '1fr 1fr' : '1fr', gap: '10px' }}>
            {prevLesson && (
              <Link href={`/apprendre/${lesson.prevLesson}`} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'white', border: '1px solid var(--upt-border)', borderRadius: '14px', padding: '16px 18px', textDecoration: 'none', color: 'var(--upt-text)' }}>
                <span style={{ fontSize: '20px' }}>←</span>
                <div>
                  <div style={{ fontSize: '10px', color: 'var(--upt-bark)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>Précédent</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, fontFamily: 'Fraunces, serif' }}>{prevLesson.title}</div>
                </div>
              </Link>
            )}
            {nextLesson ? (
              <Link href={`/apprendre/${lesson.nextLesson}`} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px', background: 'var(--upt-orange)', borderRadius: '14px', padding: '16px 18px', textDecoration: 'none', color: 'white' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '10px', opacity: 0.75, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>Suivant</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, fontFamily: 'Fraunces, serif' }}>{nextLesson.title}</div>
                </div>
                <span style={{ fontSize: '20px' }}>→</span>
              </Link>
            ) : (
              <Link href="/apprendre" style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px', background: 'var(--upt-aubergine)', borderRadius: '14px', padding: '16px 18px', textDecoration: 'none', color: 'white' }}>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontSize: '10px', opacity: 0.75, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '2px' }}>Module terminé 🎉</div>
                  <div style={{ fontSize: '14px', fontWeight: 600, fontFamily: 'Fraunces, serif' }}>Voir tous les cours</div>
                </div>
                <span style={{ fontSize: '20px' }}>→</span>
              </Link>
            )}
          </div>
        </div>

        {/* SIDEBAR */}
        <Sidebar currentSlug={slug} quizQuestion={lesson.quiz[0]} />
      </div>

      <Footer />
    </div>
  );
}
