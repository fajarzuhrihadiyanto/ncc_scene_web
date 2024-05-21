import React from "react"
import { Html } from "@react-three/drei"

import styles from './styles/LecturerPage.module.css'
import { LECTURERS } from "../data/lecturers"

const LecturerPage = ({ shown, ...props}) => {

    // setting ref for the screen
    const screenRef = React.useRef()

    const [lecturerId, setLecturerId] = React.useState(0)
    const lecturer = LECTURERS[lecturerId]

    React.useEffect(() => {
        if (screenRef.current) {
            if (shown) {
                setTimeout(() => {
                    screenRef.current.scale.set(...props.scale)
                }, 1000)
            } else {
                // hide the screen after .2s
                setTimeout(() => {
                    screenRef.current.scale.set(0, 0, 0)
                }, 200)
            }
        }
    }, [shown])

    return (
        <group {...props} scale={[1,1,1]} ref={screenRef} rotation={[0, Math.PI, 0]}>
            <Html
                className={styles.html}
                transform
                style={{
                    transition: 'opacity .2s',
                    opacity: Number(1)
                }}>
                    <div className={`${styles.container}`}>
                        <div className={styles.image_container}>
                            <img className={styles.image} src={lecturer?.pictureUrl} alt={lecturer?.name} width={512}/>
                        </div>
                        <div className={styles.data_container}>
                            <h1 className={styles.title}>{lecturer?.name}</h1>
                            <p>{lecturer?.isHeadLab && 'Kepala Laboratorium'}</p>
                            <p>NIDN : {lecturer?.nidn}</p>
                            <p>Email : {lecturer?.email}</p>
                            <p>Pendidikan terakhir : {lecturer?.last_education}</p>
                            <p>Jabatan terakhir</p>
                            <ul>
                                {lecturer?.last_position.map((position, i) => (
                                    <li key={i}>{position}</li>
                                ))}

                                {lecturer?.last_position.length === 0 && '-'}
                            </ul>
                            <div>
                                <h3>Publikasi</h3>
                                <div className={styles.publication}>
                                    <a href={`https://www.scopus.com/authid/detail.uri?authorId=${lecturer?.scopusId}`} target="_blank" rel="noreferrer">Scopus</a>
                                    <a href={`https://scholar.google.co.id/citations?user=${lecturer?.scholarId}&hl=id`} target="_blank" rel="noreferrer">Google Scholar</a>
                                    <a href={`https://sinta.kemdikbud.go.id/authors/profile/${lecturer?.sintaId}`} target="_blank" rel="noreferrer">Sinta</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.button_container}>
                        <button className={styles.button} onClick={() => setLecturerId((lecturerId - 1 + LECTURERS.length) % LECTURERS.length)}>Previous</button>
                        <button className={styles.button} onClick={() => setLecturerId((lecturerId + 1) % LECTURERS.length)}>Next</button>
                    </div>
            </Html>
        </group>
    )
}

export default LecturerPage