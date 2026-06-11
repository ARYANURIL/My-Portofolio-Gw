import styles from './image.module.css'

export default function image() {
    return (
        <div id={styles.img}>
            <div className={styles.foto}>
              <img
                src="/PXL_20240929_104057984.jpg"
                alt="foto ku"
                className={styles.image}
              />
            </div>
        </div>
    )
}