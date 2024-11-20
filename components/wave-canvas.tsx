"use client";

import { useEffect, useRef } from "react";

export default function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 아래 위로 왔다 갔다 하는 점 만들기.
  // 1. 일단 점을 중간에 찍어보자.
  // 2. 움직이게.. ?
  // 3. 기하학 특성 가진 sin 사용 -> (0 = 0 , 90 = 1, 180 = 0 , 270 = -1 , 360 = 0)
  // 450 -> 하나의 주기가 360 을 넘을 경우 450 - 360 = 90 => 90 = 1 이니 sin(450) -> 1

  // TODO: 위 아래로 움직이는 구 출력 해보기.
  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      // 각도 (90 직각 180 반원.)
      const angle = 90;
      // Math.sin은 라디안 단위로 계산하기에 각도를 라디안으로 변환.
      // 360도는 2PI 라디안 => 1도는 PI/180 즉 각도 * PI / 180 으로 라디안을 구할 수 있음.
      const radians = (angle * Math.PI) / 180;
      // sin설명은 위에 있음.
      console.log(Math.sin(radians));
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
