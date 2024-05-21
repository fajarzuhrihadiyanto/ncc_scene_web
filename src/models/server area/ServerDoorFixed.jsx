const ServerDoorFixed = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.Cube028.geometry}
                material={materials['Material.001']}
            />
            <mesh
                geometry={nodes.Cube028_1.geometry}
                material={materials['Material.002']}
            />
        </group>
    )
}

export default ServerDoorFixed