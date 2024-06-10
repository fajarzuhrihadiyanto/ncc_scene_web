import React from "react"
import { useCursor } from "@react-three/drei"
import { Select } from "@react-three/postprocessing"

import { FOCUS_LECTURER } from "../../constants"
import useMainStore from "../../store/useMainStore"
import LecturerPage from "../../html/LecturerPage"
import Tooltip from "../../components/Tootlip"
import { useResponsiveScreen } from "../../utils"

const ProjectorScreen = ({ nodes, materials }) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()
    const {isMobile} = useResponsiveScreen()

    const [isHovered, setIsHovered] = React.useState(false)

    const onPointerOver = React.useCallback(() => {
        if (focusTarget === null) setIsHovered(true)
    }, [focusTarget])

    const onPointerOut = React.useCallback(() => {
        if (focusTarget === null) setIsHovered(false)
    }, [focusTarget])

    const onClick = React.useCallback(() => {
        const cameraPosition = isMobile ? [2.85,1.5,0] : [2.9,1.5,1.5]
        setIsHovered(false)
        setFocusTarget(FOCUS_LECTURER)
        setCameraPosition(cameraPosition)
        setControlsTargetOffset([0,0,0.01])
    }, [])
        

    useCursor(isHovered)

    return (
        <>
            <Select enabled={isHovered} onPointerOver={onPointerOver} onPointerOut={onPointerOut} onClick={onClick}>
                <group>
                    <mesh
                        geometry={nodes.screen_projector_base.geometry}
                        material={materials['screen projector_base']}
                        position={[2.851, 0.05, 2.414]}
                        rotation={[Math.PI, 0, Math.PI]}
                    />
                    <mesh
                        geometry={nodes.screen_projector_pole.geometry}
                        material={materials['screen projector_base']}
                        position={[2.851, 1.1, 2.414]}
                        rotation={[Math.PI, 0, Math.PI / 2]}
                        scale={[2, 0.75, 0.75]}
                    />
                    <mesh
                        geometry={nodes.screen_projector_hanger_top.geometry}
                        material={materials['screen projector_base']}
                        position={[2.851, 2.01, 2.339]}
                        rotation={[Math.PI, 0, 0]}
                        scale={[1.5, 0.5, 0.5]}
                    />
                    <mesh
                        geometry={nodes.screen_projector_hanger_bottom.geometry}
                        material={materials['screen projector_base']}
                        position={[2.851, 1.01, 2.339]}
                        rotation={[Math.PI, 0, 0]}
                        scale={[1.5, 0.5, 0.5]}
                    />
                    <mesh
                        geometry={nodes.screen_projector_screen.geometry}
                        material={materials['screen projector_screen']}
                        position={[2.851, 1.51, 2.344]}
                        rotation={[Math.PI / 2, 0, Math.PI]}
                        scale={[0.75, 1, 0.475]}
                    />
                    <LecturerPage shown={focusTarget === FOCUS_LECTURER} scale={[.05,.05,.05]} position={[2.851, 1.51, 2.344]}/>
                </group>
            </Select>
            <Tooltip position={[2.851, 2.4, 2.339]} rotation={[0, Math.PI,0]} opacity={Number(isHovered)}>
                <p style={{
                    fontSize: '6pt',
                    margin: 0
                }}>Daftar Dosen</p>
            </Tooltip>
        </>
    )
}

export default ProjectorScreen