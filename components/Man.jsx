/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.5.3 C:\Users\prath\person-tracker-demo\public\Man.glb 
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/Man.glb')
  return (
    <group {...props} dispose={null}>
      <mesh name="pCube3" geometry={nodes.pCube3.geometry} material={materials._006_Cappy} morphTargetDictionary={nodes.pCube3.morphTargetDictionary} morphTargetInfluences={nodes.pCube3.morphTargetInfluences} scale={100} />
    </group>
  )
}

useGLTF.preload('/Man.glb')
