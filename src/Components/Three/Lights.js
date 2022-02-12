import React from 'react';

function Lights() {
  return (
    <>
      <ambientLight intensity={1} color="white" />
      {/* <directionalLight position={[-5, 0, 0]} intensity={2} color="#639aff" /> */}
      <directionalLight position={[5, -5, 10]} intensity={1} color="#ffad7d" />
      <pointLight intensity={2} position={[-1, 1, 3]} color="red" />
      <pointLight intensity={2} position={[1, 1, 3]} color="blue" />
      <pointLight intensity={2} position={[0, 3, -10]} color="white" />
    </>
  );
}

export default Lights;
