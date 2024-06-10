import React from "react"
import { Html } from "@react-three/drei"

import styles from './styles/Facilities.module.css'
import useMainStore from "../store/useMainStore"
import { FOCUS_FACILITIES } from "../constants"

const Facilities = ({ ...props }) => {

    // Get state and setter from the store
    const focusTarget = useMainStore.useFocusTarget()

    // setting ref for the screen
    const screenRef = React.useRef()

    React.useEffect(() => {
        if (screenRef.current) {
            if (focusTarget === FOCUS_FACILITIES) {
                screenRef.current.scale.set(...props.scale || [1, 1, 1])
            } else {
                // hide the screen after .2s
                setTimeout(() => {
                    screenRef.current.scale.set(0, 0, 0)
                }, 200)
            }
        }
    }, [focusTarget])

    return (
        <group {...props} scale={[0,0,0]} ref={screenRef}>
            <Html
                transform occlude
                className={styles.html}
                style={{
                    opacity: Number(focusTarget === FOCUS_FACILITIES)
                }}
            >
                <div className={styles.container}>
                    <h1 className={styles.title}>Fasilitas</h1>
                    <ul className={styles.list}>
                        <li>Processor Intel Core i3 Gen-3, i5 Gen-8, sampai Intel® Xeon® E5-2640 dengan RAM 4GB-16GB.</li>
                        <li>Untuk HDD sebagian besar minimal 1TB.</li>
                        <li>Semua monitor berukuran 19″ untuk memudahkan mahasiswa dalam melakukan penelitian dan pembelajaran rekayasa perangkat lunak ataupun pemrograman.</li>
                        <li>Dilengkapi LED TV 55″ untuk mahasiswa dalam melakukan demo pembelajaran.</li>
                    </ul>
                </div>
            </Html>
        </group>
    )
}

export default Facilities