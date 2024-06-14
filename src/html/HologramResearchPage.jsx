import useDataStore from '../store/dataStore';
import styles from './styles/HologramScreen.module.css'

const HologramResearchPage = () => {
    const research = useDataStore.useResearch()
    return (
        <>
            <h1 className={styles.title}>Daftar Penelitian</h1>
            <ul className={styles.list}>
                {research.map((research, index) => (
                    <li key={index}>{research.year} - {research.research_type} {research.title} {research.professor_fullname && `, ${research.professor_fullname}`}</li>
                ))}
            </ul>
        </>
    );
}

export default HologramResearchPage;