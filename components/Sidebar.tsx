'use client';
import { useState } from 'react';
import Link from 'next/link';
import { MODULES, getAllLessons } from '@/lib/content';
import type { QuizQuestion } from '@/lib/content';

export default function Sidebar({ currentSlug, quizQuestion }: { currentSlug: string; quizQuestion: QuizQuestion }) {
  const allLessons = getAllLessons();
  const currentIndex = allLessons.findIndex(l => l.slug === currentSlug);
  const completed = currentIndex;
  const total = allLessons.length;
  const pct = Math.round((completed / total) * 100);

  const [selected, setSelected] = useState<number | null>(null);

  // Afficher les leçons autour de la courante
  const start = Math.max(0, currentIndex - 3);
  const end = Math.min(total, currentIndex + 4);
  const visibleLessons = allLessons.slice(start, end);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', position: 'sticky', top: '80px' }}>

      {/* PROGRESSION */}
      <div style={{ background: 'white', border: '1px solid var(--upt-border)', borderRadius: '16px', padding: '18px' }}>
        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', color: 'var(--upt-bark)', textTransform: 'uppercase', marginBottom: '12px' }}>
          Votre progression
        </div>
        <div style={{ height: '6px', background: '#E2D9D0', borderRadius: '3px', marginBottom: '6px', overflow: 'hidden' }}>
          <div style={{ height: '100%', background: 'var(--upt-orange)', borderRadius: '3px', width: `${pct}%`, transition: 'width 0.5s ease' }} />
        </div>
        <div style={{ fontSize: '11px', color: 'var(--upt-bark)', marginBottom: '14px' }}>{completed} / {total} leçons · {pct}%</div>

        {/* Liste des leçons */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '0' }}>
          {visibleLessons.map((lesson, i) => {
            const idx = start + i;
            const isDone = idx < currentIndex;
            const isActive = lesson.slug === currentSlug;
            return (
              <Link key={lesson.slug} href={`/apprendre/${lesson.slug}`} style={{
                display: 'flex', alignItems: 'center', gap: '8px',
                padding: '7px 0',
                borderBottom: '1px solid #F0EBE6',
                textDecoration: 'none',
              }}>
                <div style={{
                  width: '18px', height: '18px', borderRadius: '50%', flexShrink: 0,
                  border: isDone ? 'none' : isActive ? '2px solid var(--upt-orange)' : '1.5px solid #E2D9D0',
                  background: isDone ? 'var(--upt-orange)' : 'transparent',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '10px', color: 'white',
                }}>
                  {isDone ? '✓' : ''}
                </div>
                <span style={{
                  fontSize: '12px',
                  color: isDone ? 'var(--upt-bark)' : isActive ? 'var(--upt-orange)' : 'var(--upt-text)',
                  fontWeight: isActive ? 600 : 400,
                  lineHeight: 1.4,
                  flex: 1,
                }}>
                  {lesson.title}
                </span>
                {isActive && <span style={{ fontSize: '10px', color: 'var(--upt-orange)' }}>←</span>}
              </Link>
            );
          })}
        </div>

        <Link href="/apprendre" style={{ display: 'block', textAlign: 'center', marginTop: '12px', fontSize: '11px', color: 'var(--upt-orange)', textDecoration: 'none', fontWeight: 600 }}>
          Voir tous les modules →
        </Link>
      </div>

      {/* QUIZ RAPIDE */}
      <div style={{ background: 'var(--upt-aubergine)', borderRadius: '16px', padding: '18px' }}>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: '15px', color: '#FBF7F4', marginBottom: '4px' }}>🎯 Question rapide</div>
        <div style={{ fontSize: '12px', color: 'var(--upt-bark)', marginBottom: '12px', lineHeight: 1.5 }}>{quizQuestion.question}</div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
          {quizQuestion.options.map((opt, i) => {
            const isSelected = selected === i;
            const isCorrect = i === quizQuestion.correct;
            const showResult = selected !== null;
            let bg = 'rgba(255,255,255,0.06)';
            let border = 'rgba(255,255,255,0.1)';
            let color = '#FBF7F4';
            if (showResult && isCorrect) { bg = 'rgba(14,132,32,0.2)'; border = 'rgba(14,132,32,0.4)'; color = '#7df9c2'; }
            else if (showResult && isSelected && !isCorrect) { bg = 'rgba(239,68,68,0.15)'; border = 'rgba(239,68,68,0.3)'; color = '#fca5a5'; }
            else if (!showResult && isSelected) { bg = 'rgba(233,84,32,0.2)'; border = 'rgba(233,84,32,0.4)'; color = '#E95420'; }
            return (
              <div key={i} onClick={() => { if (selected === null) setSelected(i); }} style={{
                background: bg, border: `1px solid ${border}`, borderRadius: '8px',
                padding: '8px 10px', fontSize: '12px', color, cursor: selected === null ? 'pointer' : 'default',
                display: 'flex', alignItems: 'center', gap: '6px', transition: 'all 0.15s',
              }}>
                <span style={{ fontWeight: 700, fontSize: '10px', opacity: 0.7 }}>{String.fromCharCode(65 + i)}.</span>
                {opt}
              </div>
            );
          })}
        </div>
        {selected !== null && (
          <div style={{ marginTop: '10px', fontSize: '11px', color: selected === quizQuestion.correct ? '#7df9c2' : '#fca5a5', lineHeight: 1.5, padding: '8px 10px', background: 'rgba(255,255,255,0.05)', borderRadius: '8px' }}>
            {selected === quizQuestion.correct ? '✅' : '❌'} {quizQuestion.explanation}
          </div>
        )}
      </div>

      {/* EMPLACEMENT PUB */}
      <div style={{
        background: 'white',
        border: '1.5px dashed var(--upt-border)',
        borderRadius: '16px',
        padding: '20px',
        textAlign: 'center',
        minHeight: '200px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '8px',
      }}>
        {/* AdSense ici — remplacer ce bloc par le script AdSense */}
        <div style={{ fontSize: '10px', fontWeight: 700, letterSpacing: '0.12em', color: '#C8BDB5', textTransform: 'uppercase' }}>Publicité</div>
        <div style={{ fontSize: '11px', color: '#C8BDB5' }}>250 × 200</div>
        {/* <ins class="adsbygoogle" ... /> */}
      </div>

    </div>
  );
}
