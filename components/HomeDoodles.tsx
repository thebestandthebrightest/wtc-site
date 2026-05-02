"use client";

import Image from "next/image";
import { useEffect } from "react";
import { homeDoodles } from "./site-data";

export function HomeDoodles() {
  useEffect(() => {
    const doodles = document.querySelectorAll<HTMLElement>(".home-doodle");

    const handleMove = (e: MouseEvent) => {
      const x = (e.clientX / window.innerWidth - 0.5) * 10;
      const y = (e.clientY / window.innerHeight - 0.5) * 10;

      doodles.forEach((el, index) => {
        const depth = 1 + index * 0.08;
        el.style.setProperty("--tilt-x", `${-y * depth}deg`);
        el.style.setProperty("--tilt-y", `${x * depth}deg`);
      });
    };

    window.addEventListener("mousemove", handleMove);
    return () => window.removeEventListener("mousemove", handleMove);
  }, []);

  return (
    <>
      {homeDoodles.map((asset) => (
        <Image
          key={asset.src}
          className="home-doodle"
          src={asset.src}
          alt={asset.alt}
          width={asset.width}
          height={asset.height}
          sizes={`${asset.width}px`}
          style={asset.style}
        />
      ))}
    </>
  );
}