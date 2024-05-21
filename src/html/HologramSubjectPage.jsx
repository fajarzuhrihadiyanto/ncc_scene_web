import { FOCUS_SUBJECT_DETAIL } from '../constants';
import { SUBJECT } from '../data/subject';
import useMainStore from '../store/useMainStore';
import styles from './styles/HologramScreen.module.css'

const HologramSubjectPage = () => {

    // Get state and setter from the store
    const setFocusTarget = useMainStore.useSetFocusTarget()
    const setSubjectData = useMainStore.useSetSubjectData()

    const onClick = (id) => {
        setFocusTarget(FOCUS_SUBJECT_DETAIL)
        setSubjectData(SUBJECT[id])
    }

    return (
        <>
            <h1 className={styles.title}>Daftar Mata Kuliah</h1>
            <div className={styles.grid_container}>
                {SUBJECT.map((subject, index) => (
                    <button className={styles.button} key={index} onClick={() => onClick(index)}>{subject.title}</button>
                ))}
            </div>
        </>
    );
}

export default HologramSubjectPage;