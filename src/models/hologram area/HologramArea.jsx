import React from "react"
import gsap from "gsap"

import GeneralInformation from "../../html/GeneralInformation"
import useMainStore from "../../store/useMainStore"

const HologramArea = ({ nodes, materials }) => {

    // Get state and setter from the store
    const isDeskFocused = useMainStore.useIsDeskFocused()

    const ref = React.useRef()
    const ref2 = React.useRef()

    materials['earth hologram_point'].transparent = true
    materials['earth hologram'].transparent = true

    if (isDeskFocused) {
        materials['earth hologram_point'].opacity = .1
        materials['earth hologram'].opacity = .1
    } else {
        materials['earth hologram_point'].opacity = 1
        materials['earth hologram'].opacity = 1
    }

    React.useEffect(() => {
        if (ref.current && ref2.current) {
            gsap.to(ref.current.rotation, {y: Math.PI*2, duration: 8, repeat: -1, ease: "none"})
        }
    }, [])


    return (
        <>
            <group position={[-0.569, 0.375, -0.142]} scale={0.75}>
                <mesh
                    geometry={nodes.Cylinder.geometry}
                    material={materials['network sculpture_base_main']}
                />
                <mesh
                    geometry={nodes.Cylinder_1.geometry}
                    material={materials['network sculpture_base_light']}
                />
            </group>
            <group ref={ref} position={[-0.569, 1.494, -0.17]} rotation={[0.41, 0, 0]}>
                <mesh
                    geometry={nodes.earth_hologram_point_01.geometry}
                    material={materials['earth hologram_point']}
                    position={[ -0.143, 0.285, -0.208 ]}
                    rotation={[-0.707, 0.192, 0.438]}
                    scale={[0.375, 0.094, 0.375]}
                />
                <mesh
                    geometry={nodes.earth_hologram_point_01.geometry}
                    material={materials['earth hologram_point']}
                    position={[ 0.365, 0.12, 0.025 ]}
                    rotation={[0.445, -0.088, -1.274]}
                    scale={[0.375, 0.094, 0.375]}
                />
                <mesh
                    geometry={nodes.earth_hologram_point_01.geometry}
                    material={materials['earth hologram_point']}
                    position={[ -0.349, 0.018, 0.159 ]}
                    rotation={[-2.666, -0.472, 1.894]}
                    scale={[0.375, 0.094, 0.375]}
                />
                <mesh
                    geometry={nodes.earth_hologram_point_01.geometry}
                    material={materials['earth hologram_point']}
                    position={[ 0.251, 0.269, 0.099 ]}
                    rotation={[0.433, 0.125, -0.692]}
                    scale={[0.375, 0.094, 0.375]}
                />
                <mesh
                    geometry={nodes.earth_hologram_point_01.geometry}
                    material={materials['earth hologram_point']}
                    position={[ 0.064, 0.269, -0.265 ]}
                    rotation={[-0.869, -0.033, -0.094]}
                    scale={[0.375, 0.094, 0.375]}
                />
                <mesh
                    geometry={nodes.earth_hologram_point_01.geometry}
                    material={materials['earth hologram_point']}
                    position={[ -0.154, 0.093, 0.339 ]}
                    rotation={[0.395, 1.084, 1.096]}
                    scale={[0.375, 0.094, 0.375]}
                />
                <mesh
                    geometry={nodes.earth_hologram_point_01.geometry}
                    material={materials['earth hologram_point']}
                    position={[ 0.23, -0.184, 0.244 ]}
                    rotation={[-2.69, 0.891, -1.31]}
                    scale={[0.375, 0.094, 0.375]}
                />
                <mesh
                    geometry={nodes.earth_hologram_point_01.geometry}
                    material={materials['earth hologram_point']}
                    position={[ -0.276, -0.104, -0.243 ]}
                    rotation={[-2.678, 0.664, 1.048]}
                    scale={[0.375, 0.094, 0.375]}
                />
                <mesh
                    geometry={nodes.earth_hologram_point_01.geometry}
                    material={materials['earth hologram_point']}
                    position={[ 0.304, -0.106, -0.203 ]}
                    rotation={[0.408, 0.492, -2.059]}
                    scale={[0.375, 0.094, 0.375]}
                />
                <mesh
                    ref={ref2}
                    geometry={nodes.earth.geometry}
                    material={materials['earth hologram']}
                    scale={0.75}
                />
            </group>

            <GeneralInformation />
        </>
    )
}

export default HologramArea