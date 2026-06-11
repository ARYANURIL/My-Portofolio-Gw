import styles from './skill.module.css'

export default function skill() {
    return (
        <div className={styles.container}>
            <div className={styles.head_text}>
                <h1 className={styles.head}>SKILLS</h1>
            </div>
            <div className={styles.description}>
                <p className={styles.text}>Halo! Saya <span className={styles.highlight}>Arya Nuril, </span>seorang kreator muda yang saat ini duduk di bangku kelas 8 SMP. Meski masih sekolah, saya memiliki ketertarikan besar dalam dunia digital, mulai dari editing video, fotografi, hingga coding.</p>
                <p className={styles.text2}>Bagi saya, teknologi adalah taman bermain untuk berkarya. Saya senang merangkai potongan video menjadi cerita yang menarik, memoles foto agar lebih hidup, hingga menyusun baris kode untuk membangun sesuatu dari nol. Saya selalu haus akan hal baru dan terus mengasah skill saya setiap harinya.</p>
            </div>
            <div className={styles.skill_software}>
                <h1 className={styles.text_skills_learn}>Education</h1>
                <div className={styles.education}>
                    <div className={styles.year_and_education}>
                        <div className={styles.year}>
                            <p className={styles.year1}>2024-</p>
                            <p className={styles.year2}>2026</p>
                        </div>
                        <div className={styles.education}>
                            <h1 className={styles.informatics}>Informatics Engineering</h1>
                            <p className={styles.informasi}>Junior Tech-Creative in Informatics Engineering</p>
                        </div>
                    </div>
                </div>
            </div>        
        </div>
    )
}