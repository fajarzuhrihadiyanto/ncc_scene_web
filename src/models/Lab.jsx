/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React from 'react'
import { useGLTF } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import gsap from 'gsap'

import Room from './Room'
import ServerArea from './server area/ServerArea'
import HologramArea from './hologram area/HologramArea'
import LogoArea from './logo area/LogoArea'
import WorkingArea from './working area/WorkingArea'
import useMainStore from '../store/useMainStore'
import { addVector3 } from '../utils'
import { ControlsContext } from '../context/ControlsContext'

const Lab = (props) => {
  const { nodes, materials } = useGLTF(process.env.REACT_APP_MODEL_URL)

  // get the state and setter from the store
  const focusTarget = useMainStore.useFocusTarget()
  const cameraPosition = useMainStore.useCameraPosition()
  const controlsTargetOffset = useMainStore.useControlsTargetOffset()

  const controlsTarget = addVector3(cameraPosition, controlsTargetOffset)

  const { controls } = React.useContext(ControlsContext)

  const { camera } = useThree()

  React.useEffect(() => {
    if (controls.current) {
      if (focusTarget !== null) {
        // disable control rotation 
        controls.current.enableRotate = false

        // animate camera to focus target
        gsap.to(controls.current.target, {duration: 1, ease: 'power4.inOut', x: controlsTarget[0], y: controlsTarget[1], z: controlsTarget[2]})
        gsap.to(camera.position, {duration: 1, ease: 'power4.inOut', x: cameraPosition[0], y: cameraPosition[1], z: cameraPosition[2]})
      } else {
        // enable control rotation
        controls.current.enableRotate = true

        // animate back camera to original position 
        gsap.to(camera.position, {duration: 1, x: cameraPosition[0], y: cameraPosition[1], z: cameraPosition[2]})
        gsap.to(controls.current.target, {duration: 1, x: controlsTarget[0], y: controlsTarget[1], z: controlsTarget[2]})
      }
    }
  }, [controls, focusTarget])

  return (
    <group {...props} dispose={null}>
      <Room nodes={nodes} materials={materials} />
      <ServerArea nodes={nodes} materials={materials} />
      <HologramArea nodes={nodes} materials={materials} />
      <LogoArea nodes={nodes} materials={materials} />
      <WorkingArea nodes={nodes} materials={materials} />
    </group>
  )
}

useGLTF.preload(process.env.REACT_APP_MODEL_URL)

export default Lab
