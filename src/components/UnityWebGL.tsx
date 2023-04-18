import React, { useEffect, useRef } from "react";

interface UnityWebGLProps {
  buildUrl: string;
  width?: string | number;
  height?: string | number;
}

export const UnityWebGL: React.FC<UnityWebGLProps> = ({
  buildUrl,
  width = "100%",
  height = "100%",
}) => {
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    const iframe = document.createElement("iframe");
    iframe.src = buildUrl;
    iframe.style.width = typeof width === "number" ? `${width}px` : width;
    iframe.style.height = typeof height === "number" ? `${height}px` : height;
    iframe.style.border = "none";

    containerRef.current.appendChild(iframe);

    return () => {
      containerRef.current?.removeChild(iframe);
    };
  }, [buildUrl, width, height]);

  return <div ref={containerRef} />;
};
