import { useReducer, useEffect } from "react";

import Cube from "./Styles/Cube";
import Button from "./Styles/Button";
import { Canvas } from "react-three-fiber";

import { stateInit, reducer } from "./reducers/cube";

function App() {
  const [state, dispatch] = useReducer(reducer, stateInit);
  const { cubes, number, easter_egg } = state;

  useEffect(() => {
    if (number === easter_egg) {
      dispatch({ type: "EASTER_EGGS", number: number });
    }
  }, [number]);

  return (
    <>
      <Button onClick={() => dispatch({ type: "ADD_CUBE" })}>ADD CUBE</Button>
      <Button primary onClick={() => dispatch({ type: "SHUFFLE" })}>
        SHUFFLE
      </Button>
      <Button primary onClick={() => dispatch({ type: "STOP_ODD" })}>
        STOP ODD NUMBER
      </Button>
      <Button primary onClick={() => dispatch({ type: "CHANGE_ODD" })}>
        START ODD NUMBER
      </Button>
      <Canvas>
        <ambientLight />
        <pointLight position={[10, 10, 10]} />
        {cubes.length > 0 &&
          cubes.map((cube, i) => (
            <Cube
              key={i}
              {...cube}
              easter_egg={easter_egg}
              position={[-3.5 + 1.1 * (i % 7), 2 - 1.1 * Math.floor(i / 7), 0]}
            />
          ))}
      </Canvas>
    </>
  );
}

export default App;
