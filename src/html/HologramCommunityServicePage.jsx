import useDataStore from '../store/dataStore';
import styles from './styles/HologramScreen.module.css'

const HologramCommunityServicePage = () => {
    const communityServices = useDataStore.useCommunityServices()
    return (
        <>
            <h1 className={styles.title}>Daftar Pengabdian Masyarakat</h1>
            <ul className={styles.list}>
                {communityServices.map((communityService, index) => (
                    <li key={index}>{communityService.year} - {communityServices.community_service_type} {communityService.title} {communityService.professor_fullname && `, ${communityService.professor_fullname}`}</li>
                ))}
            </ul>
        </>
    );
}

export default HologramCommunityServicePage;