import React from "react"

const ServerDoor = React.forwardRef(({ nodes, materials, ...props}, ref) => {
    return (
        <group {...props} ref={ref}>
            <mesh
                geometry={nodes.Cube030.geometry}
                material={materials['Material.001']}
            />
            <mesh
                geometry={nodes.Cube030_1.geometry}
                material={materials['Material.002']}
            />
        </group>
    )
})

export default ServerDoor