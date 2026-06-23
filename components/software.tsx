"use client"

import { useEffect, useState, useRef } from 'react'
import styles from './software.module.css';

export default function software() {
    const [isSeen, setIsSeen] = useState(false)
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSeen(true)
                }
            },
            { 
                threshold: 0.15, // Mengaktifkan animasi ketika 15% bagian menu sudah terlihat
                rootMargin: "0px 0px -50px 0px" // Jeda pemicu agar pergerakan terlihat alami saat di-scroll
            }
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

    // Gaya animasi inline agar tidak perlu mengubah isi file CSS kamu
    const gayaAnimasiSoftware = {
        opacity: isSeen ? 1 : 0,
        transform: isSeen ? 'translateX(0)' : 'translateX(80px)',
        transition: 'transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 1.2s ease',
        width: '100%'
    }

    return (
        <div 
            ref={containerRef}
            className={`${styles.container} ${isSeen ? styles.seen : ''}`}
            style={gayaAnimasiSoftware}
        >
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