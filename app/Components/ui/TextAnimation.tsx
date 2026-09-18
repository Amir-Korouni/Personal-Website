"use client";

import { useEffect, useState } from "react";

type AnimationProp = {
  message: string;
  speed?: number;
};

const TextAnimation = ({ message, speed }: AnimationProp) => {
  const [animationText, setAnimationText] = useState<string>("");

  useEffect(() => {
    setAnimationText("");
    let i = 0;

    const interval = setInterval(() => {
      if (i < message.length) {
        setAnimationText((prev) => prev + message.charAt(i));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [message]);

  return (
    <>
      <h2 className="text-2xl text-[clamp(0.9rem,1.5vw,1.6rem)] leading-relaxed">{animationText}</h2>
    </>
  );
};

export default TextAnimation;
