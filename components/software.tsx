import styles from './software.module.css'

export default function software() {
    return (
        <div className={styles.container}>
            <h1 className={styles.skill}>Software Skill</h1>
            <div className={styles.picture1}>
                <div className={styles.foto}>
                    <img id={styles.all} src="/software.picture/vscode.png" alt="VS Code" />
                </div>
                <div className={styles.foto}>
                    <img id={styles.all} src="/software.picture/figma.png" alt="Figma" />
                </div>
                <div className={styles.foto_special}>
                    <img id={styles.canva} src="/software.picture/canva.jpg" alt="Canva" />
                </div>
                <div className={styles.foto}>
                    <img id={styles.all} src="/software.picture/capcut.png" alt="CapCut" />
                </div>
            </div>
        </div>
    )
}