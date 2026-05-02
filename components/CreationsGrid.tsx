"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Piece = { key: string; src: string; alt: string };

export function CreationsGrid({ pieces }: { pieces: Piece[] }) {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const root = gridRef.current;
    if (!root) return;

    const cards = root.querySelectorAll<HTMLElement>(".creation-card");
    cards.forEach((card) => card.classList.add("visible"));

    const targets = new Map<HTMLElement, { x: number; y: number }>();

    const handleMove = (e: MouseEvent) => {
      cards.forEach((card) => {
        const rect = card.getBoundingClientRect();
        const dx = e.clientX - (rect.left + rect.width / 2);
        const dy = e.clientY - (rect.top + rect.height / 2);
        const distance = Math.sqrt(dx * dx + dy * dy);
        const strength = Math.max(0, 140 - distance) / 140;

        targets.set(card, {
          x: dx * 0.035 * strength,
          y: dy * 0.035 * strength,
        });
      });
    };

    const resetMagnet = () => {
      cards.forEach((card) => targets.set(card, { x: 0, y: 0 }));
    };

    let rafId: number;

    const animate = () => {
      cards.forEach((card) => {
        const target = targets.get(card) || { x: 0, y: 0 };
        const currentX = parseFloat(card.style.getPropertyValue("--magnet-x")) || 0;
        const currentY = parseFloat(card.style.getPropertyValue("--magnet-y")) || 0;

        card.style.setProperty("--magnet-x", `${currentX + (target.x - currentX) * 0.06}px`);
        card.style.setProperty("--magnet-y", `${currentY + (target.y - currentY) * 0.06}px`);
      });

      rafId = requestAnimationFrame(animate);
    };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseleave", resetMagnet);
    rafId = requestAnimationFrame(animate);

    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseleave", resetMagnet);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <div className="creations-grid" aria-label="Clay creations gallery" ref={gridRef}>
      {pieces.map((piece) => (
        <figure className="creations-item creation-card reveal visible" key={piece.key}>
          <Image
            src={piece.src}
            alt={piece.alt}
            width={400}
            height={400}
            sizes="(max-width: 640px) 50vw, (max-width: 960px) 33vw, 25vw"
          />
        </figure>
      ))}
    </div>
  );
}