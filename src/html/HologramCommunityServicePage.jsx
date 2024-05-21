import { COMMUNITY_SERVICE } from '../data/communityService';
import styles from './styles/HologramScreen.module.css'

const HologramCommunityServicePage = () => {
    return (
        <>
            <h1 className={styles.title}>Daftar Pengabdian Masyarakat</h1>
            <ul className={styles.list}>
                {COMMUNITY_SERVICE.map((data, index) => (
                    <li key={index}>{data.year} - {data.title}</li>
                ))}
            </ul>
        </>
    );
}

export default HologramCommunityServicePage;