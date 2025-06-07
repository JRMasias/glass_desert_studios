import { useEffect, useRef, useState } from "react";
import Image from "next/image";

export default function ScaleOnView({ src, alt, width, height }) {
  const containerRef = useRef(null);
  const [spinning, setSpinning] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setSpinning(entry.isIntersecting);
      },
      { threshold: 0.5 } // when 50% of the image is visible
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, []);

  return (
    <div
      ref={containerRef}
      className={spinning ? "spin" : ""}
      style={{ display: "inline-block" /* prevent transform origin issues */ }}
    >
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="w-24 h-24 rounded-full object-cover"
      />
    </div>
  );
}
