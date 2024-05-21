const Projector = ({ nodes, materials }) => {

    materials.projector_light.transparent = true
    materials.projector_light.opacity = .1
    
    return (
        <>
            <group position={[2.851, 0.953, 0.063]} rotation={[1.388, 0, 0]}>
                <mesh
                    geometry={nodes.Cube002_1.geometry}
                    material={materials.projector_body}
                />
                <mesh
                    geometry={nodes.Cube002_2.geometry}
                    material={materials.projector_base}
                />
                <mesh
                    geometry={nodes.projector_light.geometry}
                    material={materials.projector_light}
                    position={[0, 0.612, 0]}
                    rotation={[-Math.PI, Math.PI / 4, 0]}
                    scale={[0.276, 0.716, 0.276]}
                />
            </group>
            <mesh
                geometry={nodes.projector_base.geometry}
                material={materials.projector_base}
                position={[2.851, 0.827, 0.063]}
            />
        </>
    )
}

export default Projector