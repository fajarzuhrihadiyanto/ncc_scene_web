const Chair = ({ nodes, materials, ...props }) => {
    return (
        <group {...props}>
            <mesh
                geometry={nodes.lab_chair_structure.geometry}
                material={materials['lab chair_structure']}
                position={[1.63, 0, -2.367]}
            />
            <mesh
                geometry={nodes.lab_chair_seat_pillow.geometry}
                material={materials['lab chair_pillow']}
                position={[1.832, 0.403, -2.367]}
                scale={[0.15, 1, 0.25]}
            />
            <mesh
                geometry={nodes.lab_chair_seat_base.geometry}
                material={materials['lab chair_base']}
                position={[1.832, 0.399, -2.367]}
                scale={[0.15, 1, 0.25]}
            />
            <mesh
                geometry={nodes.lab_chair_backrest_pillow.geometry}
                material={materials['lab chair_pillow']}
                position={[1.624, 0.65, -2.367]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.15, 1, 0.25]}
            />
            <mesh
                geometry={nodes.lab_chair_backrest_base.geometry}
                material={materials['lab chair_base']}
                position={[1.621, 0.65, -2.367]}
                rotation={[0, 0, -Math.PI / 2]}
                scale={[0.15, 1, 0.25]}
            />
        </group>
    )
}

export default Chair