"use client"

import { useEffect, useState, useRef } from 'react'
import styles from './jurney.text.module.css'
import Jurney from './jurney'

export default function text() {
    const [isSeen, setIsSeen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSeen(true)
                }
            },
            { threshold: 0.1 } 
        )

        if (containerRef.current) {
            observer.observe(containerRef.current)
        }

        return () => {
            if (containerRef.current) {
                observer.unobserve(containerRef.current)
            }
        }
    }, [])

    return (
       
        <div 
            id='jurney' 
            ref={containerRef}
            className={`${styles.container} ${isSeen ? styles.seen : ''}`}
        >
            <div className={styles.box}>
                <div className={styles.text1}>
                    <h1 className={styles.text}>JURNEY</h1>
                </div>
                <div className={styles.text2}>
                    <p>Perjalanan saya di dunia digital dimulai dari rasa penasaran yang besar terhadap bagaimana sebuah teknologi bekerja. saat ini, di sela-sela aktivitas sekolah, saya mendedikasikan waktu luang untuk mengeksplorasi dan mengasah keahlian di bidang teknologi serta industri kreatif. Dari menulis baris kode pemrograman yang logis hingga merancang visual yang estetis, setiap proses belajar adalah langkah bagi saya untuk terus berkembang dan menciptakan karya-karya baru yang bermanfaat.</p>
                </div>
                <div className={styles.jurney}>
                    <Jurney />
                </div>
            </div>
        </div>
    )
}