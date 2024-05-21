import NetworkNodes from "./NetworkNodes"

const Room = ({ nodes, materials }) => {
    materials.room_glass.transmission = .95
    return (
        <>
            <group scale={[4.67, 7.801, 2.75]}>
                <mesh
                    geometry={nodes.Plane.geometry}
                    material={materials.room_glass}
                />
                <mesh
                    geometry={nodes.Plane_1.geometry}
                    material={materials.room_out}
                />
                <mesh
                    geometry={nodes.Plane_2.geometry}
                    material={materials.room_light_off}
                />
                <mesh
                    geometry={nodes.Plane_3.geometry}
                    material={materials.room_2}
                />
            </group>
            <group scale={[4.67, 7.801, 2.75]}>
                <mesh
                    geometry={nodes.Plane035.geometry}
                    material={materials.room_1}
                />
                <mesh
                    geometry={nodes.Plane035_1.geometry}
                    material={materials.room_out}
                />
                <mesh
                    geometry={nodes.Plane035_2.geometry}
                    material={materials.room_light_on}
                />
            </group>
            
            <mesh
                geometry={nodes.door_frame.geometry}
                material={materials['Material.009']}
                position={[0, 2.325, 2.76]}
                scale={[1, 0.075, 0.1]}
            />

            <NetworkNodes nodes={nodes} materials={materials} position={[2.305, 0.816, 4.715]} rotation={[Math.PI / 2, 0, 0]}/>
            <NetworkNodes nodes={nodes} materials={materials} position={[2.305 - 5, 0.816 + 1.5, 4.715]} rotation={[Math.PI / 2, 0, 0]}/>
            <NetworkNodes nodes={nodes} materials={materials} position={[2.305 - 10, 0.816 + .5, 4.715]} rotation={[Math.PI / 2, 0, 0]}/>
        </>
    )
}

export default Room