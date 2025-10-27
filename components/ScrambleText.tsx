"use client";

import { useEffect, useState } from "react";
import { useScramble } from "use-scramble";

type ScrambleTextProps = {
  text: string;
  className?: string;
  auto?: boolean;
  onVisible?: boolean;
  onHover?: boolean;
  onClick?: boolean;
  speed?: number;
  tick?: number;
  chance?: number;
  scramble?: number;
};

export default function ScrambleText({
  text,
  className,
  auto = true,
  onVisible = false,
  onHover = false,
  onClick = false,
  speed = 0.5,
  tick = 1,
  chance = 0.4,
  scramble = 8,
}: ScrambleTextProps) {
  const { ref, replay } = useScramble({
    text,
    speed,
    tick,
    chance,
    scramble,
    playOnMount: false,
  });

  useEffect(() => {
    if (auto) replay();
  }, [text, auto, replay]);

  useEffect(() => {
    if (!onVisible) return;
    const el = ref.current;
    if (!el) return;

    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) replay();
      },
      { threshold: 0.2 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, [onVisible, replay, ref]);

  return (
    <span
      ref={ref}
      className={className}
      onMouseEnter={onHover ? () => replay() : undefined}
      onClick={onClick ? () => replay() : undefined}
    />
  );
}

type ScrambleTextRotatorProps = {
  phrases: ReadonlyArray<string>;
  intervalMs?: number;
  className?: string;
  randomStart?: boolean;
};

export function ScrambleTextRotator({
  phrases,
  intervalMs = 2500,
  className,
  randomStart = true,
}: ScrambleTextRotatorProps) {
  const [idx, setIdx] = useState(() =>
    randomStart && phrases.length ? Math.floor(Math.random() * phrases.length) : 0
  );

  useEffect(() => {
    if (!phrases.length) return;
    const id = setInterval(
      () => setIdx((i) => (i + 1) % phrases.length),
      intervalMs
    );
    return () => clearInterval(id);
  }, [phrases.length, intervalMs]);

  if (!phrases.length) return null;

  return <ScrambleText text={phrases[idx]} className={className} auto />;
}

