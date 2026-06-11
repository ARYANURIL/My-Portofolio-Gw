import styles from './about.module.css'

export default function about() {
    return (
        <div className={styles.teks_about}>
            <p className={styles.creative}>CREATIVE VISUAL</p>
            <div className={styles.porto}>
                <h1 className={styles.petik}>"</h1>
                <h1 className={styles.teks}>PORTO</h1>
            </div>
            <div className={styles.folio}>
                <h1 id={styles.teks}>FOLIO</h1>
                <h1 className={styles.titik}>.</h1>
            </div>
            <p className={styles.about}>Halo, nama saya <span className={styles.hightlight}>Arya Nuril. </span>Di usia 14 tahun, saya memilih untuk tidak hanya menjadi pengguna teknologi, tetapi juga pembuatnya. Saya belajar secara otodidak cara membangun website dan mengedit visual, karena saya percaya bahwa umur bukanlah penghalang untuk berkarya. Saya adalah seorang pelajar SMP yang terus bertumbuh secara mandiri</p>
        </div>
    )
}