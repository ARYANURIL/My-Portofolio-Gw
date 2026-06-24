"use client"

import { useEffect, useState, useRef } from 'react'
import styles from './about.module.css'

export default function about() {
    const [isSeen, setIsSeen] = useState(false)
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSeen(true)
                }
            },
            { threshold: 0.1 } // Terpicu saat 10% elemen masuk layar
        )

        if (elementRef.current) {
            observer.observe(elementRef.current)
        }

        return () => {
            if (elementRef.current) {
                observer.unobserve(elementRef.current)
            }
        }
    }, [])

    return (
        <div 
            ref={elementRef} 
            id="about" 
            className={`${styles.teks_about} ${isSeen ? styles.seen : ''}`}
        >
            <p className={styles.creative}>CREATIVE VISUAL</p>
            <div className={styles.porto}>
                <h1 className={styles.petik}>"</h1>
                <h1 className={styles.teks}>PORTO</h1>
            </div>
            <div className={styles.folio}>
                <h1 id={styles.teks}>FOLIO</h1>
                <h1 className={styles.titik}>.</h1>
            </div>
            <p className={styles.about}>Halo, nama saya <span className={styles.hightlight}>Mochammad Arya Nuril. </span> Saya memilih untuk tidak hanya menjadi pengguna teknologi, tetapi juga pembuatnya. Saya belajar secara otodidak cara membangun website dan mengedit visual, karena saya percaya bahwa umur bukanlah penghalang untuk berkarya</p>
        </div>
    )
}