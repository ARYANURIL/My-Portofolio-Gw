"use client"

import { useEffect, useState, useRef } from 'react'
import styles from './image.module.css'

export default function image() {
    const [isSeen, setIsSeen] = useState(false)
    const elementRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsSeen(true)
                }
            },
            { threshold: 0.1 }
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
            id={styles.img}
            className={isSeen ? styles.seen : ''}
        >
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