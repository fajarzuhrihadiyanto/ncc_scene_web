import { BOOKS } from '../data/books';
import styles from './styles/HologramScreen.module.css'

const HologramBookPage = () => {
    return (
        <>
            <h1 className={styles.title}>Daftar Buku</h1>
            <ul className={styles.list}>
                {BOOKS.map((data, index) => (
                    <li key={index}>{data.year} - {data.title}</li>
                ))}
            </ul>
            {BOOKS.length === 0 && <p className={styles.description}>Tidak ada data</p>}
        </>
    );
}

export default HologramBookPage;