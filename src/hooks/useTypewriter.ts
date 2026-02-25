import { useEffect, useState } from "react";

function useTypewriter(words: string[], speed = 80, pause = 2200) {
  const [display, setDisplay] = useState("");
  const [wordIdx, setWordIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[wordIdx];
    let t: number;

    if (!deleting) {
      if (charIdx < current.length) {
        // Still typing — reveal next character
        t = setTimeout(() => {
          setDisplay(current.slice(0, charIdx + 1));
          setCharIdx((c) => c + 1);
        }, speed);
      } else {
        // Fully typed — pause, then begin deleting
        t = setTimeout(() => setDeleting(true), pause);
      }
    } else {
      if (charIdx > 0) {
        // Still deleting — remove last character
        t = setTimeout(() => {
          setDisplay(current.slice(0, charIdx - 1));
          setCharIdx((c) => c - 1);
        }, speed / 2.5);
      } else {
        // Fully deleted — advance word index, display stays ""
        setDeleting(false);
        setWordIdx((w) => (w + 1) % words.length);
      }
    }

    return () => clearTimeout(t);
  }, [charIdx, deleting, wordIdx, words, speed, pause]);

  return display;
}

export default useTypewriter;
