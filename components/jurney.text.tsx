import styles from './jurney.text.module.css'
import Jurney from './jurney'

export default function text() {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <div className={styles.text1}>
                    <h1 className={styles.text}>JURNEY</h1>
                </div>
                <div className={styles.text2}>
                    <p>Berikut adalah beberapa bidang teknologi dan industri kreatif yang aktif saya pelajari serta tekuni saat ini. Dari menulis baris kode hingga merancang visual.</p>
                </div>
                <div className={styles.jurney}>
                    <Jurney />
                </div>
            </div>
        </div>
    )
}   