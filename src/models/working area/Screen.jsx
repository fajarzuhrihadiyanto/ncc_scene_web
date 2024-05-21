import React from "react"
import gsap from "gsap"

import HologramScreen from "../../html/HologramScreen"
import useMainStore from "../../store/useMainStore"
import { FOCUS_SUBJECT_DETAIL } from "../../constants"

const Screen = ({ nodes, materials }) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()

    const ref = React.useRef()

    React.useEffect(() => {
        if (ref.current) {
            if (focusTarget !== null) {
                gsap.to(ref.current.position, {duration: 1, y: 1.225})
                if (focusTarget === FOCUS_SUBJECT_DETAIL) {
                    gsap.to(ref.current.rotation, {duration: 1, x: 0, y: Math.PI, z: 0})
                } else {
                    gsap.to(ref.current.rotation, {duration: 1, x: 0, y: 0, z: 0})
                }
            } else {
                gsap.to(ref.current.position, {duration: 1, y: 0})
            }
        }
    }, [focusTarget])



    return (
        <group position={[2.862, 0, -1.496]} ref={ref}>
            <mesh
                geometry={nodes.Cube_1.geometry}
                material={materials['screen transparent_frame']}
            />
            <mesh
                geometry={nodes.Cube_2.geometry}
                material={materials['screen transparent_screen']}
            />

            <HologramScreen />
        </group>
    )
}

export default Screen