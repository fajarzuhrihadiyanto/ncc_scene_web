import Facilities from "../../html/Facilities"
import ServerBody from "./ServerBody"

const ServerPc = ({ nodes, materials }) => {
    return (
        <group position={[-4.355, 1, 0]} scale={[1, 1, 1.1]}>
            <mesh
                geometry={nodes.Cube025.geometry}
                material={materials.server_pc_body}
            />
            <mesh
                geometry={nodes.Cube025_1.geometry}
                material={materials.server_pc_screen}
            />
            <mesh
                geometry={nodes.Cube025_2.geometry}
                material={materials.server_pc_keyboard}
            />
            <mesh
                geometry={nodes.Cube025_3.geometry}
                material={materials.server_frame_glass}
            />
            <mesh
                geometry={nodes.Cube025_4.geometry}
                material={materials.server_pc_touchpad}
            />

            <Facilities scale={[.02, .02, .02]} position={[0.01, 0.101, 0]} rotation={[0, Math.PI / 2, 0]} />

            {Array(7).fill(0).map((_, i) => (
                <ServerBody nodes={nodes} materials={materials} position={[0, -0.95 + i * 0.1, 0]} key={i} />
            ))}
            {Array(7).fill(0).map((_, i) => (
                <ServerBody nodes={nodes} materials={materials} position={[0, -0.95 + i * 0.1, 0]} scale={[1,1,-1]} key={i} />
            ))}


            {Array(5).fill(0).map((_, i) => (
                <ServerBody nodes={nodes} materials={materials} position={[0, 0.5 + i * 0.1, 0]} key={i} />
            ))}
            {Array(5).fill(0).map((_, i) => (
                <ServerBody nodes={nodes} materials={materials} position={[0, 0.5 + i * 0.1, 0]} scale={[1,1,-1]} key={i} />
            ))}
        </group>
    )
}

export default ServerPc