"use client";

import { useEffect, useRef } from "react";

export default function WaveCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  // 아래 위로 왔다 갔다 하는 점 만들기.
  // 1. 일단 점을 중간에 찍어보자.
  // 2. 움직이게.. ?
  // 3. 기하학 특성 가진 sin 사용 -> (0 = 0 , 90 = 1, 180 = 0 , 270 = -1 , 360 = 0)
  // 450 -> 하나의 주기가 360 을 넘을 경우 450 - 360 = 90 => 90 = 1 이니 sin(450) -> 1
  // 4. 움직이는 공을 선으로 연결.

  useEffect(() => {
    if (canvasRef.current) {
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      const animationSpeed = 0.5;

      const centerY = canvas.height / 2;
      const canvasWidth = canvas.width;

      const startWaveAnimation = () => {
        /**
         *  baseX => 기본 X값 canvas 에서 위 아래로 움직이는 원의 기본 위치값입니다.
         *  baseY => 기본 Y값 원의 시작 Y점. 이 Y점을 기준으로 위 아래로 움직입니다.
         *  positionY => 화면에 표시되는 Y의 위치입니다. 이 값으로 위 아래로 움직입니다.
         *  max => 위 아래로 움직일 수 있는 최대 값입니다. 이 값이 클수록 변동 폭이 큽니다. (랜덤 으로 260 시작, 270 시작 이렇게 사용 하고 있습니다. )
         *  angle => sin 함수를 사용하기 위한 값입니다. sin 특성 상 90도, 180도 .. 360 도 이렇게 돌면서 -1~1 사이의 값을 뽑아 낼 수 있기에 이 값을 기준으로 위 아래로 움직입니다. 그렇기에 이 값을 변경하면 시작 위치를 변경 할 수 있습니다.
         */
        const circles = [
          {
            baseX: canvasWidth * 0,
            baseY: centerY,
            positionY: centerY,
            max: Math.random() * 100 + 150,
            angle: 90,
          },
          {
            baseX: canvasWidth * 0.2,
            baseY: centerY,
            positionY: centerY,
            max: Math.random() * 100 + 150,
            angle: 90,
          },
          {
            baseX: canvasWidth * 0.4,
            baseY: centerY,
            positionY: centerY,
            max: Math.random() * 100 + 150,
            angle: 90,
          },
          {
            baseX: canvasWidth * 0.6,
            baseY: centerY,
            positionY: centerY,
            max: Math.random() * 100 + 150,
            angle: 90,
          },
          {
            baseX: canvasWidth * 0.8,
            baseY: centerY,
            positionY: centerY,
            max: Math.random() * 100 + 150,
            angle: 90,
          },
          {
            baseX: canvasWidth * 1,
            baseY: centerY,
            positionY: centerY,
            max: Math.random() * 100 + 150,
            angle: 90,
          },
        ];

        const drawFrame = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          circles.forEach((circle) => {
            // Math.sin은 라디안 단위로 계산하기에 각도를 라디안으로 변환.
            const radians = (circle.angle * Math.PI) / 180;
            const sine = Math.sin(radians);

            circle.positionY = circle.baseY + sine * circle.max;

            ctx.beginPath();
            ctx.arc(circle.baseX, circle.positionY, 50, 0, 2 * Math.PI);
            ctx.fillStyle = "#f1f1f1";
            ctx.fill();
            circle.angle += animationSpeed;
          });
          // TODO: 선으로 연결 하는 부분 작성.

          requestAnimationFrame(drawFrame);
        };

        requestAnimationFrame(drawFrame);
      };

      startWaveAnimation();
    }
  }, []);

  return (
    <div className="flex justify-center items-center w-full h-dvh">
      <canvas
        ref={canvasRef}
        className="max-w-4xl border aspect-square"
        width={1080}
        height={1080}
      />
    </div>
  );
}
