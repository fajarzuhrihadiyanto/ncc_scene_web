import { FOCUS_SUBJECT_DETAIL } from '../constants';
import useDataStore from '../store/dataStore';
import useMainStore from '../store/useMainStore';
import styles from './styles/HologramScreen.module.css'

const HologramSubjectPage = () => {

    // Get state and setter from the store
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setSubjectData = useMainStore.useSetSubjectData()
    const subjects = useDataStore.useSubjects()

    const onClick = (id) => {
        setFocusTarget(FOCUS_SUBJECT_DETAIL)
        setSubjectData(subjects[id])
    }

    return (
        <>
            <h1 className={styles.title}>Daftar Mata Kuliah</h1>
            <div className={styles.grid_container}>
                {subjects.map((subject, index) => (
                    <button className={styles.button} key={index} onClick={() => onClick(index)}>{subject.name}</button>
                ))}
            </div>
        </>
    );
}

export default HologramSubjectPage;