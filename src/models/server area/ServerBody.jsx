const ServerBody = ({ nodes, materials, ...props}) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.Cube017.geometry}
                material={materials.server_body_base}
            />
            <mesh
                geometry={nodes.Cube017_1.geometry}
                material={materials.server_body_indicator_red}
            />
            <mesh
                geometry={nodes.Cube017_2.geometry}
                material={materials.server_body_indicator_cyan}
            />
            <mesh
                geometry={nodes.Cube017_3.geometry}
                material={materials.server_body_button}
            />
        </group>
    )
}

export default ServerBody