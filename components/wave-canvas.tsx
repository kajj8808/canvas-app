"use client";

import { useEffect, useRef } from "react";

export default function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 아래 위로 왔다 갔다 하는 점 만들기.
  // 1. 일단 점을 중간에 찍어보자.
  // 2. 움직이게.. ?

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      const max = Math.random() * 100 + 150; // 움직이는 폭 최대. 위아래 값.
      const frequency = 0.05; // sin 파동 주기 -> 작으면 느리게 파동이 흘러감. (animationSpeed 로 봐도 무방.)
      let elapsed = 0; // sin 특징 1 ~ -1 인데. 값을 바꾸면서 위 아래 변경 하기 위해 사용. 코드에선 ++ 으로 값을 올려서 위 아래 반복.

      const drawCircle = () => {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        ctx.beginPath();
        const y = canvas.height / 2 + Math.sin(elapsed * frequency) * max;
        ctx.arc(canvas.width / 2, y, 30, 0, 2 * Math.PI);
        ctx.fillStyle = "#f1f1f1";

        ctx.fill();

        elapsed++;
        requestAnimationFrame(drawCircle);
      };

      requestAnimationFrame(drawCircle);
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
