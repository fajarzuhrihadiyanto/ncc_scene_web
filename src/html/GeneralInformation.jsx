import React from "react"
import { Html } from "@react-three/drei"
import { useFrame, useThree } from "@react-three/fiber"

import styles from './styles/GeneralInformation.module.css'
import buttonStyles from './styles/Buttons.module.css'
import useMainStore from "../store/useMainStore"
import { FOCUS_BOOKS, FOCUS_COMMUNITY_SERVICE, FOCUS_RESEARCH, FOCUS_SUBJECT } from "../constants"
import { useResponsiveScreen } from "../utils"
import useDataStore from "../store/dataStore"

const GeneralInformation = () => {

    // Get state and setter from the store
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setCameraPosition = useMainStore.useSetCameraPosition()
    const setControlsTargetOffset = useMainStore.useSetControlsTargetOffset()
    const isDeskFocused = useMainStore.useIsDeskFocused()
    const setIsDeskFocused = useMainStore.useSetIsDeskFocused()
    const labDescription = useDataStore.useLabDescription()
    const {isMobile} = useResponsiveScreen()

    const ref = React.useRef()
    const buttonRef = React.useRef()
    const screenRef = React.useRef()
    const buttonScreenRef = React.useRef()

    const { camera } = useThree()

    // Show general information hologram based on camera position
    const threshold = -.8
    useFrame(() => {
        if (screenRef.current && ref.current && buttonRef.current && buttonScreenRef.current) {
            if (camera.position.x < threshold) {
                screenRef.current.style.opacity = isDeskFocused ? .1 : .9
                ref.current.scale.set(.05, .05, .05)

                buttonScreenRef.current.style.opacity = .9
                buttonRef.current.scale.set(.05, .05, .05)
            } else {
                screenRef.current.style.opacity = 0
                buttonScreenRef.current.style.opacity = 0
                setTimeout(() => {
                    ref.current.scale.set(0,0,0)
                    buttonRef.current.scale.set(0,0,0)
                }, 200)
            }
        }
    })

    const onButtonOver = React.useCallback(() => {
        setIsDeskFocused(true)
    }, [])

    const onButtonOut = React.useCallback(() => {
        setIsDeskFocused(false)
    }, [])

    const onButtonClick = React.useCallback(focusTarget => {
        const cameraPosition = isMobile ? [1.25,1.3,-1.5] : [2,1.3,-1.5]
        setIsDeskFocused(false)
        setFocusTarget(focusTarget)
        setCameraPosition(cameraPosition)
        // setControlsTargetOffset([.01,0,0])

        setControlsTargetOffset([1,0,0])
    }, [])

    return (
        <>
            <group scale={[.05, .05, .05]} rotation={[0, -Math.PI / 2, 0]} position={[-1,1.5,-.1]} ref={ref}>
                <Html
                    ref={screenRef}
                    transform
                    className={styles.html}>
                    <div className={styles.container}>
                        <h1 className={styles.title}>Selamat Datang di halaman Laboratorium Komputasi Berbasis Jaringan.</h1>
                        <p className={styles.description}>{labDescription}</p>
                    </div>
                </Html>
            </group>

            <group scale={[.05, .05, .05]} rotation={[0, -Math.PI / 2, 0]} position={[-1,1.9,-.1]} ref={buttonRef}>
                <Html
                    ref={buttonScreenRef}
                    transform
                    className={buttonStyles.html}>
                    <div className={buttonStyles.container}>
                        <button className={buttonStyles.button} onPointerOver={onButtonOver} onPointerOut={onButtonOut} onClick={() => {onButtonClick(FOCUS_SUBJECT)}}>Mata Kuliah</button>
                        <button className={buttonStyles.button} onPointerOver={onButtonOver} onPointerOut={onButtonOut} onClick={() => {onButtonClick(FOCUS_RESEARCH)}}>Penelitian</button>
                        <button className={buttonStyles.button} onPointerOver={onButtonOver} onPointerOut={onButtonOut} onClick={() => {onButtonClick(FOCUS_COMMUNITY_SERVICE)}}>Pengabdian Masyarakat</button>
                        <button className={buttonStyles.button} onPointerOver={onButtonOver} onPointerOut={onButtonOut} onClick={() => {onButtonClick(FOCUS_BOOKS)}}>Buku</button>
                    </div>
                </Html>
            </group>
        </>
    )
}

export default GeneralInformation