const LogoArea = ({ nodes, materials }) => {
    return (
        <>
            <mesh
                geometry={nodes.logo_Text.geometry}
                material={materials.logo_text}
                position={[-4.648, 2.604, 0.524]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={0.25}
            />
            <mesh
                geometry={nodes.logo_image.geometry}
                material={materials.logo_image}
                position={[-4.648, 2.545, 0.844]}
                rotation={[Math.PI / 2, 0, -Math.PI / 2]}
                scale={[0.25, 0.25, 0.188]}
            />
        </>
    )
}

export default LogoArea