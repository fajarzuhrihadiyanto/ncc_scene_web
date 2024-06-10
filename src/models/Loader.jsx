import React from "react"
import gsap from "gsap"
import { Text } from "@react-three/drei"
import { useThree } from "@react-three/fiber"
import { useResponsiveScreen } from "../utils"

const Loader = () => {
    const { isMobile } = useResponsiveScreen()
    const fontSize = isMobile ? .1 : .25

    const ref = React.useRef()

    const { camera } = useThree()

    React.useEffect(() => {

        // Adjust camera position and rotation
        camera.position.set(0, 2, 0)
        camera.rotation.set(-Math.PI/2, 0, 0)

        if (ref.current) {
            gsap.to(ref.current.rotation, {x: Math.PI*2, y: Math.PI*2, duration: 4, repeat: -1, ease: "none"})
        }

        // Set camera position and rotation back to initial (App.js)
        return () => {
            camera.position.set(-1.5,2,0)
            camera.rotation.set(0, 0, 0)
        }
    }, [])

    return (
        <>
            <directionalLight intensity={1} position={[0, 5, 0]} />
            <ambientLight intensity={1} />
            <mesh ref={ref} position={[0, 0, -.5]}>
                <boxGeometry args={[.5, .5, .5]} />
                <meshStandardMaterial color="lightblue" />
            </mesh>
            <Text color={'black'} position={[0, 0, .5]} rotation={[-Math.PI/2,0,0]} fontSize={fontSize}>
                Loading the models...
            </Text>
        </>
    )
}

export default Loader