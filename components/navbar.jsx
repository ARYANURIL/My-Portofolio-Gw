
import styles from './navbar.module.css'

export default function navbar() {
    return (
        <div className={styles.container}>
            <div className={styles.box_name}>
                <div className={styles.firstname}>Arya</div>
                <div className={styles.lastname}>Nuril</div>
                <div className={styles.titik}></div>
            </div>
            <div className={styles.brand}>
                <li><a>ABOUT</a></li>
                <li><a>SKILLS</a></li>
                <li><a>JURNEY</a></li>
                <li><a>CONTACT</a></li>
            </div>  
        </div>
    )
}