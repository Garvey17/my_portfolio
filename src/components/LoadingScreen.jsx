import React, { useEffect, useState } from 'react';
import avatar from '../assets/avatar.png';

function LoadingScreen({ onDone }) {
  // Phase: 'enter' → 'visible' → 'exit'
  const [phase, setPhase] = useState('enter');

  useEffect(() => {
    // Quickly transition from enter → visible
    const enterTimer = setTimeout(() => setPhase('visible'), 50);

    // After 2s start exit animation
    const exitTimer = setTimeout(() => setPhase('exit'), 2000);

    // After exit animation finishes (~600ms), tell parent we're done
    const doneTimer = setTimeout(() => onDone(), 2650);

    return () => {
      clearTimeout(enterTimer);
      clearTimeout(exitTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div
      style={{
        position: 'fixed',
        inset: 0,
        zIndex: 9999,
        backgroundColor: '#000',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '1.5rem',
        opacity: phase === 'exit' ? 0 : 1,
        transform: phase === 'exit' ? 'scale(1.02)' : 'scale(1)',
        transition: 'opacity 600ms ease, transform 600ms ease',
        pointerEvents: phase === 'exit' ? 'none' : 'all',
      }}
    >
      {/* Avatar */}
      <div
        style={{
          opacity: phase === 'enter' ? 0 : 1,
          transform: phase === 'enter' ? 'translateY(16px) scale(0.92)' : 'translateY(0) scale(1)',
          transition: 'opacity 600ms cubic-bezier(0.22,1,0.36,1), transform 600ms cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <div
          style={{
            width: '88px',
            height: '88px',
            borderRadius: '50%',
            overflow: 'hidden',
            border: '2px solid #B6FF5E',
            boxShadow: '0 0 40px rgba(182,255,94,0.25)',
          }}
        >
          <img
            src={avatar}
            alt="Adebola"
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>
      </div>

      {/* Name wordmark */}
      <div
        style={{
          opacity: phase === 'enter' ? 0 : 1,
          transform: phase === 'enter' ? 'translateY(12px)' : 'translateY(0)',
          transition: 'opacity 600ms 120ms cubic-bezier(0.22,1,0.36,1), transform 600ms 120ms cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <p
          style={{
            fontFamily: 'Aeonik, sans-serif',
            fontSize: '2.25rem',
            fontWeight: 700,
            color: '#fff',
            letterSpacing: '-0.03em',
            lineHeight: 1,
          }}
        >
          adebola<span style={{ color: '#B6FF5E' }}>.</span>
        </p>
      </div>

      {/* Subtle tagline */}
      <div
        style={{
          opacity: phase === 'enter' ? 0 : 0.45,
          transform: phase === 'enter' ? 'translateY(8px)' : 'translateY(0)',
          transition: 'opacity 600ms 220ms cubic-bezier(0.22,1,0.36,1), transform 600ms 220ms cubic-bezier(0.22,1,0.36,1)',
        }}
      >
        <p
          style={{
            fontFamily: 'Montserrat, sans-serif',
            fontSize: '0.7rem',
            color: '#a1a1aa',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
          }}
        >
          AI Engineer
        </p>
      </div>
    </div>
  );
}

export default LoadingScreen;
