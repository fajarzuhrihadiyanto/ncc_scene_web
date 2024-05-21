const NetworkNodes = ({ nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane033.geometry}
                material={materials['network nodes_wire']}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Plane033_1.geometry}
                material={materials['network nodes_point']}
            />
        </group>
    )
}

export default NetworkNodes