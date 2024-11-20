"use client";

import { useEffect, useRef, useState } from "react";

export default function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const [animationSpeed, setAnimationSpeed] = useState(0.1);
  // 아래 위로 왔다 갔다 하는 점 만들기.
  // 1. 일단 점을 중간에 찍어보자.
  // 2. 움직이게.. ?

  const drawCircle = () => {};

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.beginPath();

      ctx.fillStyle = "#f1f1f1";
      ctx.arc(canvas.width / 2, canvas.height / 2, 30, 0, 2 * Math.PI);
      ctx.fill();
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-dvh">
      <canvas
        ref={canvasRef}
        className="w-full border aspect-square"
        width={1280}
        height={1280}
      />
    </div>
  );
}
