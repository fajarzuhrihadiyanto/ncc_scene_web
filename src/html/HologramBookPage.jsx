import useDataStore from '../store/dataStore';
import styles from './styles/HologramScreen.module.css'

const HologramBookPage = () => {
    const books = useDataStore.useBooks()
    return (
        <>
            <h1 className={styles.title}>Daftar Buku</h1>
            <ul className={styles.list}>
                {books.map((book, index) => (
                    <li key={index}>{book.release_year} - {book.title}{book.professor_fullname && `, ${book.professor_fullname}`}</li>
                ))}
            </ul>
            {books.length === 0 && <p className={styles.description}>Tidak ada data</p>}
        </>
    );
}

export default HologramBookPage;