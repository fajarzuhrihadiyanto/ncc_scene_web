import { RESEARCH } from '../data/research';
import styles from './styles/HologramScreen.module.css'

const HologramResearchPage = () => {
    return (
        <>
            <h1 className={styles.title}>Daftar Penelitian</h1>
            <ul className={styles.list}>
                {RESEARCH.map((research, index) => (
                    <li key={index}>{research.year} - {research.title}</li>
                ))}
            </ul>
        </>
    );
}

export default HologramResearchPage;