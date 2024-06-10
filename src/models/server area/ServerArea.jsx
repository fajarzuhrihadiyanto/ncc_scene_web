import React from "react"
import { Select } from "@react-three/postprocessing"
import { useCursor } from "@react-three/drei"
import gsap from "gsap"

import Server from "./Server"
import ServerPc from "./ServerPc"
import ServerDoorFixed from "./ServerDoorFixed"
import ServerDoor from "./ServerDoor"
import useMainStore from "../../store/useMainStore"
import Tooltip from "../../components/Tootlip"
import { FOCUS_FACILITIES } from "../../constants"
import { useResponsiveScreen } from "../../utils"

const ServerArea = ({ nodes, materials }) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()
    const {isMobile} = useResponsiveScreen()

    const ref = React.useRef()
    const leftDoor = React.useRef()
    const rightDoor = React.useRef()
    
    const [isHovered, setIsHovered] = React.useState(false)

    const onPointerOver = React.useCallback(() => {
        if (focusTarget === null) setIsHovered(true)
    }, [focusTarget])

    const onPointerOut = React.useCallback(() => {
        if (focusTarget === null) setIsHovered(false)
    }, [focusTarget])

    const onClick = React.useCallback(() => {
        const cameraPosition = isMobile ? [-3.5, 1.2, 0] : [-3.75, 1.2, 0]
        setIsHovered(false)
        setFocusTarget(FOCUS_FACILITIES)
        setCameraPosition(cameraPosition)
        setControlsTargetOffset([-.01,0,0])
    }, [])

    React.useEffect(() => {
        if (focusTarget === FOCUS_FACILITIES) {
            gsap.to(leftDoor.current.position, {duration: 1, z: 1.75})
            gsap.to(rightDoor.current.position, {duration: 1, z: -1.75})
        } else {
            gsap.to(leftDoor.current.position, {duration: 1, z: 0.75})
            gsap.to(rightDoor.current.position, {duration: 1, z: -0.75})
        }
    }, [focusTarget])
 
    useCursor(isHovered)

    return (
        <>
            <Select enabled={isHovered}>
                <group ref={ref} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                    <ServerDoorFixed nodes={nodes} materials={materials} position={[-3.655, 1, -2.006]} />
                    <ServerDoorFixed nodes={nodes} materials={materials} position={[-3.655, 1, 1.993]} />

                    <ServerDoor nodes={nodes} materials={materials} position={[-3.555, 1, -0.75]} ref={rightDoor}/>
                    <ServerDoor nodes={nodes} materials={materials} position={[-3.555, 1, 0.75]} ref={leftDoor}/>

                    <Server nodes={nodes} materials={materials} />
                    <Server nodes={nodes} materials={materials} position={[0,0,1.1]} />
                    
                    <Server nodes={nodes} materials={materials} position={[0,0,-2.2]} />
                    <Server nodes={nodes} materials={materials} position={[0,0,-3.3]} />
                    <ServerPc nodes={nodes} materials={materials} />
                </group>
            </Select>
            <Tooltip position={[-3.555, 2.5, 0]} rotation={[0, Math.PI/2,0]} opacity={Number(isHovered)}>
                <p style={{
                    fontSize: '6pt',
                    margin: 0
                }}>Fasilitas</p>
            </Tooltip>
        </>
    )
}

export default ServerArea