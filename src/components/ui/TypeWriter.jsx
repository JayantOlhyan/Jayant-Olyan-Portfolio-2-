import { useTypewriter } from '../../hooks/useTypewriter';
import { useEffect } from 'react';

const TypeWriter = ({ text, delay = 60, onComplete }) => {
  const { displayText, isTyping } = useTypewriter(text, delay);

  useEffect(() => {
    if (text && displayText.length === text.length && onComplete) {
      onComplete();
    }
  }, [displayText, text, onComplete]);

  return (
    <span>
      {displayText}
      {isTyping && <span className="bg-accent-green text-transparent w-2 inline-block animate-cursor-blink ml-[2px]">_</span>}
    </span>
  );
};

export default TypeWriter;
