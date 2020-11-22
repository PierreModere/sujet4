import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";

function Cube({ position, color, number, easter_egg, stop }) {
  const mesh = useRef();
  const [setHover] = useState(false);

  useFrame(() => {
    if (stop === true) {
      mesh.current.rotation.x = mesh.current.rotation.y += 0.01;
    }
  });

  if (easter_egg === number)
    return (
      <mesh position={position} ref={mesh}>
        <sphereBufferGeometry args={[0.5, 0, 0]} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
  else
    return (
      <mesh position={position} ref={mesh}>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={color} />
      </mesh>
    );
}

export default Cube;
