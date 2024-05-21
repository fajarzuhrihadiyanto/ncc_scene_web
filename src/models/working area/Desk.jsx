const Desk = ({ nodes, materials }) => {
    return (
        <>
            <group position={[2.862, 0.8, -0.249]}>
                <mesh
                    geometry={nodes.Cylinder002.geometry}
                    material={materials.desk_wood}
                />
                <mesh
                    geometry={nodes.Cylinder002_1.geometry}
                    material={materials.desk_metal}
                />
            </group>
            <group position={[2.862, 0.837, -1.499]}>
                <mesh
                    geometry={nodes.Cube001.geometry}
                    material={materials.desk_11}
                />
                <mesh
                    geometry={nodes.Cube001_1.geometry}
                    material={materials.desk_12}
                />
            </group>
        </>
    )
}

export default Desk