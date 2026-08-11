import React, { useEffect, useRef } from 'react';

export const MatrixRain = ({ active, onClose }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    if (!active) return;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    let animationFrameId;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };
    window.addEventListener('resize', handleResize);

    const katakana = 'アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン';
    const latin = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*';
    const alphabet = katakana + latin;

    const fontSize = 16;
    const columns = Math.floor(width / fontSize);
    const rainDrops = Array(columns).fill(1);

    const render = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, width, height);

      ctx.fillStyle = '#0F0';
      ctx.font = `${fontSize}px monospace`;

      for (let i = 0; i < rainDrops.length; i++) {
        const text = alphabet.charAt(Math.floor(Math.random() * alphabet.length));
        ctx.fillText(text, i * fontSize, rainDrops[i] * fontSize);

        if (rainDrops[i] * fontSize > height && Math.random() > 0.975) {
          rainDrops[i] = 0;
        }
        rainDrops[i]++;
      }
      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [active]);

  if (!active) return null;

  return (
    <div className="fixed inset-0 z-[999] pointer-events-auto bg-black/80 flex flex-col justify-between p-4">
      <canvas ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="relative z-10 flex justify-between items-center bg-black/60 backdrop-blur-md px-6 py-3 rounded-md border border-green-500/30 text-green-400 font-mono text-xs">
        <span>MATRIX RAIN ACTIVE | PRESS ESC OR CLICK TO EXIT</span>
        <button 
          onClick={onClose}
          className="px-3 py-1 bg-green-500/20 border border-green-500/50 hover:bg-green-500/40 rounded text-green-300 transition-all cursor-pointer"
        >
          [ Exit Matrix ]
        </button>
      </div>
    </div>
  );
};
