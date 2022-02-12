/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useAnimations } from '@react-three/drei'

export default function Model({ ...props }) {
  const group = useRef()
  const { nodes, materials, animations } = useGLTF('/Archer.glb')
  const { actions } = useAnimations(animations, group)
  return (
    <group ref={group} {...props} dispose={null}>
      <group rotation={[Math.PI / 2, 0, 0]} scale={0.01}>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          geometry={nodes.Erika_Archer_Body_Mesh.geometry}
          material={materials.Body_MAT}
          skeleton={nodes.Erika_Archer_Body_Mesh.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Erika_Archer_Bow_Mesh.geometry}
          material={materials.Bow_MAT}
          skeleton={nodes.Erika_Archer_Bow_Mesh.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Erika_Archer_Clothes_Mesh.geometry}
          material={materials.Akai_MAT}
          skeleton={nodes.Erika_Archer_Clothes_Mesh.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Erika_Archer_Eyelashes_Mesh.geometry}
          material={materials.Lashes_MAT}
          skeleton={nodes.Erika_Archer_Eyelashes_Mesh.skeleton}
        />
        <skinnedMesh
          geometry={nodes.Erika_Archer_Eyes_Mesh.geometry}
          material={materials.EyeSpec_MAT}
          skeleton={nodes.Erika_Archer_Eyes_Mesh.skeleton}
        />
      </group>
    </group>
  )
}

useGLTF.preload('/Archer.glb')
