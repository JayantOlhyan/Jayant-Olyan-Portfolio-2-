import { useState, useEffect } from 'react';

const TypeWriter = ({ text, delay = 60, onComplete }) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let index = 0;
    setDisplayText("");
    setIsTyping(true);

    const typingInterval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text.charAt(index));
        index++;
      } else {
        clearInterval(typingInterval);
        setIsTyping(false);
        if (onComplete) onComplete();
      }
    }, delay);

    return () => clearInterval(typingInterval);
  }, [text, delay, onComplete]);

  return (
    <span>
      {displayText}
      {isTyping && <span className="bg-accent-green text-transparent w-2 inline-block animate-cursor-blink ml-[2px]">_</span>}
    </span>
  );
};

export default TypeWriter;
