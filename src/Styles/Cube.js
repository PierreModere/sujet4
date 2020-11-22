import React, { useRef, useState } from "react";
import { useFrame } from "react-three-fiber";
import { FontLoader } from "three";

import Roboto from "../assets/Roboto_Bold.json";

function Cube({ position, color, number, easter_egg, stop,positionText }) {
  const mesh = useRef();
  const text = useRef();

  const font = new FontLoader().parse(Roboto);

  const textOptions = {
    font,
    size: 0.5,
    height: 1,
  };
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
      <>
        <mesh position={positionText} ref={text} rotation={[0, 0, 0]}>
          <textGeometry attach="geometry" args={[`${number}`, textOptions]} />
          <meshStandardMaterial color={color} />
        </mesh>
        <mesh position={position} ref={mesh}>
          <boxBufferGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={color} />
        </mesh>
      </>
    );
}

export default Cube;
