import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(MotionPathPlugin);

function NeuralNetwork() {
  const dataRef = useRef();

  useEffect(() => {
    const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.5 });

    // Animate data flow between layers
    timeline
      .to(dataRef.current, { x: -100, y: 100, duration: 1 })
      .to(dataRef.current, { y: 100, duration: 1 })
      .to(dataRef.current, { x: 200, duration: 1 })
      .to(dataRef.current, { y: 0, duration: 1 });
  }, []);
  return (
    <div className="relative">
      <div className="flex space-x-10">
        {/* Neural Network Layers */}
        {Array.from(Array(3), (_, index) => (
          <div
            key={index}
            className="w-8 h-40 bg-blue-500 rounded-md flex flex-col justify-center items-center space-y-4"
          >
            {[...Array(5)].map((_, idx) => (
              <div key={idx} className="w-4 h-4 bg-white rounded-full"></div>
            ))}
          </div>
        ))}

        {/* Data Node */}
        <div
          ref={dataRef}
          className="w-3 h-3 bg-yellow-400 rounded-full absolute top-2 -left-8"
        ></div>
      </div>
    </div>
  );
}

export default NeuralNetwork;
