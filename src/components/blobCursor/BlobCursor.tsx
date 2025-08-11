// components/BlobCursor.tsx
"use client";

import { useEffect } from "react";

const BlobCursor = () => {
  useEffect(() => {
    const blob = document.getElementById("blob");
    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      if (blob) {
        blob.style.transform = `translate(${clientX - 325}px, ${clientY - 325}px)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default BlobCursor;
