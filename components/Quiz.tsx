'use client';
import { useState } from 'react';
import type { QuizQuestion } from '@/lib/content';

export default function Quiz({ questions }: { questions: QuizQuestion[] }) {
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [submitted, setSubmitted] = useState(false);
  const [current, setCurrent] = useState(0);

  const q = questions[current];
  const total = questions.length;
  const score = submitted
    ? questions.filter(q => answers[q.id] === q.correct).length
    : 0;

  function select(qId: string, idx: number) {
    if (submitted) return;
    setAnswers(prev => ({ ...prev, [qId]: idx }));
  }

  function next() {
    if (current < total - 1) setCurrent(c => c + 1);
    else setSubmitted(true);
  }

  function reset() {
    setAnswers({});
    setSubmitted(false);
    setCurrent(0);
  }

  if (submitted) {
    const pct = Math.round((score / total) * 100);
    const pass = pct >= 70;
    return (
      <div style={{ background: pass ? '#f0fdf4' : '#fff7ed', border: `2px solid ${pass ? '#22c55e' : '#f97316'}`, borderRadius: '20px', padding: '40px', textAlign: 'center' }}>
        <div style={{ fontSize: '64px', marginBottom: '16px' }}>{pass ? '🎉' : '💪'}</div>
        <div style={{ fontFamily: 'Fraunces, serif', fontSize: '28px', fontWeight: 700, color: pass ? '#15803d' : '#c2410c', marginBottom: '8px' }}>
          {score}/{total} — {pct}%
        </div>
        <div style={{ fontSize: '16px', color: '#6B5E55', marginBottom: '24px', lineHeight: 1.6 }}>
          {pass
            ? 'Excellent ! Vous avez bien compris ce chapitre. Passez à la suite !'
            : 'Pas mal ! Revoyez le cours et réessayez — vous allez y arriver.'}
        </div>
        {/* Détail des réponses */}
        <div style={{ textAlign: 'left', marginBottom: '24px' }}>
          {questions.map((q, i) => {
            const isCorrect = answers[q.id] === q.correct;
            return (
              <div key={q.id} style={{ padding: '16px', borderRadius: '12px', marginBottom: '10px', background: isCorrect ? 'rgba(34,197,94,0.1)' : 'rgba(239,68,68,0.1)', border: `1px solid ${isCorrect ? 'rgba(34,197,94,0.3)' : 'rgba(239,68,68,0.3)'}` }}>
                <div style={{ fontWeight: 600, fontSize: '14px', marginBottom: '6px', color: '#2C001E' }}>
                  {isCorrect ? '✅' : '❌'} {q.question}
                </div>
                {!isCorrect && answers[q.id] !== undefined && (
                  <div style={{ fontSize: '13px', color: '#c2410c', marginBottom: '4px' }}>
                    Votre réponse : {q.options[answers[q.id]]}
                  </div>
                )}
                <div style={{ fontSize: '13px', color: '#15803d', marginBottom: '6px' }}>
                  Bonne réponse : {q.options[q.correct]}
                </div>
                <div style={{ fontSize: '13px', color: '#6B5E55', lineHeight: 1.6, background: 'rgba(255,255,255,0.6)', padding: '8px 12px', borderRadius: '8px' }}>
                  💡 {q.explanation}
                </div>
              </div>
            );
          })}
        </div>
        <button onClick={reset} style={{ background: '#E95420', color: 'white', border: 'none', borderRadius: '10px', padding: '12px 28px', fontSize: '15px', fontWeight: 600, cursor: 'pointer' }}>
          Recommencer le quiz
        </button>
      </div>
    );
  }

  const answered = answers[q.id] !== undefined;

  return (
    <div style={{ background: 'white', border: '1px solid #E8E0D8', borderRadius: '20px', padding: '32px' }}>
      {/* Progress */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '24px' }}>
        <span style={{ fontSize: '13px', fontWeight: 600, color: '#AEA79F' }}>Question {current + 1} sur {total}</span>
        <div style={{ display: 'flex', gap: '4px' }}>
          {questions.map((_, i) => (
            <div key={i} style={{ width: '24px', height: '4px', borderRadius: '2px', background: i < current ? '#E95420' : i === current ? '#E9542066' : '#E8E0D8' }} />
          ))}
        </div>
      </div>

      <h3 style={{ fontFamily: 'Fraunces, serif', fontSize: '20px', fontWeight: 600, color: '#2C001E', marginBottom: '24px', lineHeight: 1.4 }}>
        {q.question}
      </h3>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
        {q.options.map((opt, i) => {
          const selected = answers[q.id] === i;
          return (
            <button key={i} onClick={() => select(q.id, i)} style={{
              textAlign: 'left', padding: '14px 18px', borderRadius: '12px',
              border: `2px solid ${selected ? '#E95420' : '#E8E0D8'}`,
              background: selected ? 'rgba(233,84,32,0.06)' : '#FBF7F4',
              cursor: 'pointer', fontSize: '15px', color: '#2C001E',
              fontWeight: selected ? 600 : 400,
              transition: 'all 0.15s',
            }}>
              <span style={{ marginRight: '10px', color: selected ? '#E95420' : '#AEA79F', fontWeight: 700 }}>
                {String.fromCharCode(65 + i)}.
              </span>
              {opt}
            </button>
          );
        })}
      </div>

      <button onClick={next} disabled={!answered} style={{
        width: '100%', padding: '14px', borderRadius: '12px', border: 'none',
        background: answered ? '#E95420' : '#E8E0D8',
        color: answered ? 'white' : '#AEA79F',
        fontSize: '15px', fontWeight: 700, cursor: answered ? 'pointer' : 'not-allowed',
        transition: 'all 0.2s',
      }}>
        {current < total - 1 ? 'Question suivante →' : 'Voir mes résultats 🎯'}
      </button>
    </div>
  );
}
