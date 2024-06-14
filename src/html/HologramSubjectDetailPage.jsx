import { FOCUS_SUBJECT } from '../constants';
import useMainStore from '../store/useMainStore';
import styles from './styles/HologramScreen.module.css'

const HologramSubjectDetailPage = () => {

    // Get state and setter from the store
    const subjectData = useMainStore.useSubjectData()
    const setFocusTarget = useMainStore.useSetFocusTarget()

    const onClick = () => {
        setFocusTarget(FOCUS_SUBJECT)
    }

    return (
        <>
            <h1 className={styles.title}>{subjectData.name}</h1>
            <p className={styles.description}>Mata kuliah {subjectData.is_compulsory ? 'wajib' : 'pilihan'}</p>
            <div>
                <h2>Deskripsi Mata Kuliah</h2>
                <p className={styles.description}>{subjectData.description}</p>
            </div>
            <div>
                <h2>Capaian Pembelajaran Mata Kuliah</h2>
                <ul className={styles.list}>
                    {subjectData.objective.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))}
                </ul>
            </div>
            
            <button className={styles.button} onClick={onClick} style={{marginTop: 24}}>Back</button>
        </>
    );
}

export default HologramSubjectDetailPage;