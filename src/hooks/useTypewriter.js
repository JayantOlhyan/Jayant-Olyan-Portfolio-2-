import { useState, useEffect } from 'react';

export const useTypewriter = (text, delay = 60, startDelay = 0) => {
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  useEffect(() => {
    let timeoutId;
    let index = 0;
    
    // reset
    setDisplayText("");

    const startTyping = () => {
      setIsTyping(true);
      const typingInterval = setInterval(() => {
        if (index < text.length) {
          setDisplayText((prev) => prev + text.charAt(index));
          index++;
        } else {
          clearInterval(typingInterval);
          setIsTyping(false);
        }
      }, delay);

      return () => clearInterval(typingInterval);
    };

    if (startDelay > 0) {
      timeoutId = setTimeout(() => {
        startTyping();
      }, startDelay);
    } else {
      startTyping();
    }

    return () => clearTimeout(timeoutId);
  }, [text, delay, startDelay]);

  return { displayText, isTyping };
};
