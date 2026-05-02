"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

import { creationsGallery } from "./site-data";

export function CreationsGrid() {
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const items = gridRef.current?.querySelectorAll<HTMLElement>(".reveal");
    if (!items) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08 }
    );

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="creations-grid" aria-label="Clay creations gallery" ref={gridRef}>
      {creationsGallery.map((piece) => (
        <figure className="creations-item creation-card reveal" key={piece.key}>
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
