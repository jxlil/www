"use client";

import { useEffect, useRef } from "react";

type CountdownClockProps = {
  size?: number;
  lineWidth?: number;
  linePadding?: number;
  start?: Date;
  target: Date;
  font?: string;
  color?: string;
  className?: string;
};

export default function CountdownClock({
  size = 400,
  lineWidth = 2,
  linePadding = 20,
  start = new Date("1996-08-10T00:00:00"),
  target = new Date("2066-08-10T00:00:00"),
  font = "1px monospace",
  color = "#fff",
  className,
}: CountdownClockProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const dpr = Math.max(1, window.devicePixelRatio || 1);
    const cssSize = size;
    canvas.style.width = `${cssSize}px`;
    canvas.style.height = `${cssSize}px`;
    canvas.width = Math.floor(cssSize * dpr);
    canvas.height = Math.floor(cssSize * dpr);

    const startAngle = -Math.PI / 2;

    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    ctx.lineWidth = lineWidth;
    ctx.textAlign = "center";
    ctx.font = font;
    ctx.fillStyle = color;
    ctx.strokeStyle = color;

    const arc = (position: number, value: number, max = 1) => {
      const radius = (lineWidth + linePadding) * position;
      const angle = (2 * Math.PI * value) / max;
      ctx.beginPath();
      ctx.arc(cssSize / 2, cssSize / 2, radius, startAngle, startAngle + angle);
      ctx.stroke();
    };

    const diff = (from: Date, to: Date) => {
      let years = to.getFullYear() - from.getFullYear();
      let months = to.getMonth() - from.getMonth();
      let days = to.getDate() - from.getDate();
      let hours = to.getHours() - from.getHours();
      let minutes = to.getMinutes() - from.getMinutes();
      let seconds = to.getSeconds() - from.getSeconds();
      let milliseconds = to.getMilliseconds() - from.getMilliseconds();

      const adjust = (unit: number, base: number, max: number) => {
        if (unit < 0) {
          unit += max;
          base -= 1;
        }
        return [unit, base] as const;
      };

      [milliseconds, seconds] = adjust(milliseconds, seconds, 1000);
      [seconds, minutes] = adjust(seconds, minutes, 60);
      [minutes, hours] = adjust(minutes, hours, 60);
      [hours, days] = adjust(hours, days, 24);

      const daysInPrevMonth = new Date(to.getFullYear(), to.getMonth(), 0).getDate();
      [days, months] = adjust(days, months, daysInPrevMonth);
      [months, years] = adjust(months, years, 12);

      return { years, months, days, hours, minutes, seconds, milliseconds };
    };

    const progress = (from: Date | number, to: Date | number, current: Date | number) => {
      const f = from instanceof Date ? +from : from;
      const t = to instanceof Date ? +to : to;
      const c = current instanceof Date ? +current : current;
      return Math.min(Math.max((c - f) / (t - f), 0), 1);
    };

    const draw = () => {
      ctx.clearRect(0, 0, cssSize, cssSize);

      const now = new Date();
      const t = diff(now, target);

      const milliseconds = t.milliseconds;
      let seconds = t.seconds + milliseconds / 1000;
      let minutes = t.minutes + seconds / 60;
      let hours = t.hours + minutes / 60;
      let days = t.days + hours / 24;
      const monthDays = new Date(now.getFullYear(), now.getMonth() + 1, 0).getDate();
      let months = t.months + days / monthDays;
      let years = t.years + months / 12;

      if (t.years < 0) {
        seconds = minutes = hours = days = months = years = 0;
      }

      arc(7, progress(start, target, now));
      arc(6, progress(0, 11, 12 - months));
      arc(5, progress(0, monthDays - 1, monthDays - days));
      arc(4, progress(0, 24, 24 - hours));
      arc(3, progress(0, 60, 60 - minutes));
      arc(2, progress(0, 60, 60 - seconds));
      arc(1, progress(0, 1000, 1000 - milliseconds));

      const str = [years, months, days, hours, minutes, seconds, milliseconds / 10]
        .map((n) => String(Math.floor(n)).padStart(2, "0"))
        .join(":");

      ctx.fillText(str, cssSize / 2, cssSize - 10);
    };

    const loop = () => {
      draw();
      rafRef.current = requestAnimationFrame(loop);
    };

    loop();

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, [size, lineWidth, linePadding, start, target, font, color]);

  return (
    <canvas
      ref={canvasRef}
      className={className ?? "block"}
      aria-label="Countdown clock"
      role="img"
    />
  );
}

