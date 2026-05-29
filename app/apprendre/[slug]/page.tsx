import { MODULES, getLessonBySlug, getModuleForLesson, getAllLessons } from '@/lib/content';
import Link from 'next/link';
import Quiz from '@/components/Quiz';
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
    <div style={{ minHeight: '100vh', background: '#FBF7F4' }}>
      {/* NAV */}
      <nav style={{ background: '#2C001E', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', position: 'sticky', top: 0, zIndex: 100 }}>
        <Link href="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <span style={{ fontSize: '24px' }}>🐧</span>
          <span style={{ fontFamily: 'Fraunces, serif', fontSize: '18px', fontWeight: 700, color: '#FBF7F4' }}>Ubuntu Pour Tous</span>
        </Link>
        <Link href="/apprendre" style={{ color: '#AEA79F', textDecoration: 'none', fontSize: '14px' }}>← Tous les cours</Link>
      </nav>

      <div style={{ maxWidth: '780px', margin: '0 auto', padding: '48px 24px 80px' }}>

        {/* BREADCRUMB */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '13px', color: '#AEA79F', marginBottom: '32px' }}>
          <Link href="/apprendre" style={{ color: '#AEA79F', textDecoration: 'none' }}>Cours</Link>
          <span>›</span>
          <span style={{ color: mod?.color }}>{mod?.title}</span>
          <span>›</span>
          <span style={{ color: '#2C001E', fontWeight: 500 }}>{lesson.title}</span>
        </div>

        {/* HEADER LEÇON */}
        <div style={{
          background: 'linear-gradient(135deg, #2C001E, #4a0d3a)',
          borderRadius: '24px', padding: '40px 36px', marginBottom: '32px',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '20px' }}>
            <span style={{ fontSize: '48px' }}>{lesson.icon}</span>
            <div>
              <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', color: '#AEA79F', textTransform: 'uppercase', marginBottom: '4px' }}>{mod?.title}</div>
              <div style={{ display: 'flex', gap: '12px' }}>
                <span style={{ fontSize: '12px', color: '#AEA79F', background: 'rgba(255,255,255,0.08)', padding: '3px 10px', borderRadius: '20px' }}>⏱ {lesson.duration}</span>
                <span style={{ fontSize: '12px', color: '#AEA79F', background: 'rgba(255,255,255,0.08)', padding: '3px 10px', borderRadius: '20px' }}>🎯 {lesson.quiz.length} question{lesson.quiz.length > 1 ? 's' : ''}</span>
              </div>
            </div>
          </div>
          <h1 style={{ fontFamily: 'Fraunces, serif', fontSize: 'clamp(1.8rem, 4vw, 2.8rem)', fontWeight: 700, color: '#FBF7F4', letterSpacing: '-0.03em', marginBottom: '8px' }}>
            {lesson.title}
          </h1>
          <p style={{ fontSize: '16px', color: '#AEA79F', lineHeight: 1.5 }}>{lesson.subtitle}</p>
        </div>

        {/* INTRO */}
        <div style={{
          background: 'rgba(233,84,32,0.06)',
          border: '1px solid rgba(233,84,32,0.2)',
          borderLeft: '4px solid #E95420',
          borderRadius: '0 12px 12px 0',
          padding: '20px 24px',
          marginBottom: '40px',
          fontSize: '16px',
          color: '#2C001E',
          lineHeight: 1.75,
          fontStyle: 'italic',
        }}>
          {lesson.intro}
        </div>

        {/* SECTIONS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '32px', marginBottom: '48px' }}>
          {lesson.sections.map((section, idx) => (
            <div key={idx} style={{ background: 'white', border: '1px solid #E8E0D8', borderRadius: '20px', padding: '32px', overflow: 'hidden' }}>
              <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '22px', fontWeight: 700, color: '#2C001E', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <span style={{ background: '#E95420', color: 'white', borderRadius: '8px', width: '32px', height: '32px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontFamily: 'DM Sans, sans-serif', flexShrink: 0 }}>{idx + 1}</span>
                {section.title}
              </h2>

              {section.content.split('\n\n').map((para, i) => (
                <p key={i} style={{ fontSize: '15px', color: '#3D2E26', lineHeight: 1.8, marginBottom: '14px' }}>
                  {para.startsWith('•') ? (
                    <span>{para.split('\n').map((line, j) => (
                      <span key={j} style={{ display: 'block', paddingLeft: '8px' }}>{line}</span>
                    ))}</span>
                  ) : para}
                </p>
              ))}

              {/* ÉTAPES */}
              {section.steps && (
                <div style={{ background: '#FBF7F4', borderRadius: '14px', padding: '20px 24px', margin: '16px 0' }}>
                  <div style={{ fontSize: '12px', fontWeight: 700, letterSpacing: '0.1em', color: '#AEA79F', textTransform: 'uppercase', marginBottom: '14px' }}>📋 Étapes à suivre</div>
                  <ol style={{ paddingLeft: 0, listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {section.steps.map((step, si) => (
                      <li key={si} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                        <span style={{ background: '#E95420', color: 'white', borderRadius: '50%', width: '24px', height: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px', fontWeight: 700, flexShrink: 0, marginTop: '1px' }}>{si + 1}</span>
                        <span style={{ fontSize: '14px', color: '#2C001E', lineHeight: 1.6, flex: 1 }}>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>
              )}

              {/* TIP */}
              {section.tip && (
                <div style={{ background: 'rgba(14,132,32,0.06)', border: '1px solid rgba(14,132,32,0.2)', borderRadius: '12px', padding: '14px 18px', marginTop: '16px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '18px', flexShrink: 0 }}>💡</span>
                  <span style={{ fontSize: '14px', color: '#0E6620', lineHeight: 1.65 }}><strong>Astuce :</strong> {section.tip}</span>
                </div>
              )}

              {/* WARNING */}
              {section.warning && (
                <div style={{ background: 'rgba(234,179,8,0.08)', border: '1px solid rgba(234,179,8,0.3)', borderRadius: '12px', padding: '14px 18px', marginTop: '16px', display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <span style={{ fontSize: '18px', flexShrink: 0 }}>⚠️</span>
                  <span style={{ fontSize: '14px', color: '#854d0e', lineHeight: 1.65 }}><strong>Important :</strong> {section.warning}</span>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* QUIZ */}
        <div style={{ marginBottom: '48px' }}>
          <div style={{ textAlign: 'center', marginBottom: '24px' }}>
            <h2 style={{ fontFamily: 'Fraunces, serif', fontSize: '26px', fontWeight: 700, color: '#2C001E', marginBottom: '8px' }}>
              🎯 Quiz de validation
            </h2>
            <p style={{ fontSize: '14px', color: '#6B5E55' }}>
              Testez vos acquis avant de passer à la suite. Score minimum recommandé : 70%.
            </p>
          </div>
          <Quiz questions={lesson.quiz} />
        </div>

        {/* NAVIGATION */}
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'space-between' }}>
          {lesson.prevLesson ? (
            <Link href={`/apprendre/${lesson.prevLesson}`} style={{
              flex: 1, display: 'flex', alignItems: 'center', gap: '12px',
              background: 'white', border: '1px solid #E8E0D8', borderRadius: '14px',
              padding: '16px 20px', textDecoration: 'none', color: '#2C001E',
            }}>
              <span style={{ fontSize: '20px' }}>←</span>
              <div>
                <div style={{ fontSize: '11px', color: '#AEA79F', textTransform: 'uppercase', letterSpacing: '0.08em' }}>Chapitre précédent</div>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>{getLessonBySlug(lesson.prevLesson)?.title}</div>
              </div>
            </Link>
          ) : <div style={{ flex: 1 }} />}

          {lesson.nextLesson ? (
            <Link href={`/apprendre/${lesson.nextLesson}`} style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px',
              background: '#E95420', borderRadius: '14px',
              padding: '16px 20px', textDecoration: 'none', color: 'white',
            }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', opacity: 0.7, textTransform: 'uppercase', letterSpacing: '0.08em' }}>Chapitre suivant</div>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>{getLessonBySlug(lesson.nextLesson)?.title}</div>
              </div>
              <span style={{ fontSize: '20px' }}>→</span>
            </Link>
          ) : (
            <Link href="/apprendre" style={{
              flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end', gap: '12px',
              background: '#2C001E', borderRadius: '14px',
              padding: '16px 20px', textDecoration: 'none', color: 'white',
            }}>
              <div style={{ textAlign: 'right' }}>
                <div style={{ fontSize: '11px', opacity: 0.7 }}>Vous avez terminé ce module !</div>
                <div style={{ fontSize: '14px', fontWeight: 600 }}>Voir tous les cours</div>
              </div>
              <span style={{ fontSize: '20px' }}>🎉</span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
