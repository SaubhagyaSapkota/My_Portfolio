import { useEffect, useRef } from "react";

const letters =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_+-=[]{}|;:',.<>?/";

export const ScrambleText = ({ text, className = "" }) => {
  const textRef = useRef(null);
  const intervalRef = useRef(null);

  useEffect(() => {
    const el = textRef.current;
    if (!el) return;

    const originalText = text;

    const handleMouseEnter = () => {
      clearInterval(intervalRef.current);
      let currentIndex = 0;

      intervalRef.current = setInterval(() => {
        const scrambled = originalText
          .split("")
          .map((char, i) =>
            i < currentIndex
              ? originalText[i]
              : letters[Math.floor(Math.random() * letters.length)]
          )
          .join("");

        el.innerText = scrambled;
        currentIndex++;

        if (currentIndex > originalText.length) {
          clearInterval(intervalRef.current);
          el.innerText = originalText;
        }
      }, 65);
    };

    const handleMouseLeave = () => {
      clearInterval(intervalRef.current);
      let currentIndex = originalText.length;

      intervalRef.current = setInterval(() => {
        const scrambled = originalText
          .split("")
          .map((char, i) =>
            i < currentIndex
              ? originalText[i]
              : letters[Math.floor(Math.random() * letters.length)]
          )
          .join("");

        el.innerText = scrambled;
        currentIndex--;

        if (currentIndex < 0) {
          clearInterval(intervalRef.current);
          el.innerText = originalText;
        }
      }, 65);
    };

    el.addEventListener("mouseenter", handleMouseEnter);
    el.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      clearInterval(intervalRef.current);
      el.removeEventListener("mouseenter", handleMouseEnter);
      el.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, [text]);

  return (
    <span ref={textRef} className={className}>
      {text}
    </span>
  );
};
