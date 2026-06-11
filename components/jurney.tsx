import styles from './jurney.module.css'
import React from 'react'

export default function jurney() {
    const myJurneyData = [      
        {
            id: 1,
            title: "Web Devlopment",
            description: "Belajar menyusun baris kode untuk membangun website dari nol menggunakan HTML, CSS, dan React.",
            tools: ["React", "JavaScript", "HTML"]
        },
        {
            id: 2,
            title: "UI/UX & Design",
            description: "Belajar merancang antarmuka pengguna yang ramah, intuitif, dan membuat mockup tampilan web.",
            tools: ["Figma", "Canva"]
        },
        {
            id: 3,
            title: "Video & Photo Editing",
            description: "Eksperimen merangkai potongan video menjadi cerita menarik dan memoles foto agar lebih hidup.",
            tools: ["Capcut", "Alight Motion", "Lighroom"]
        }
    ]
    
    return (
        <div className={styles.BarisKartu}>
            {myJurneyData.map((jurney) => {
                return ( 
                    <div key={jurney.id} className={styles.kartu}>
                        <h3 className={styles.judulKartu}>{jurney.title}</h3>
                        <p className={styles.deskripsiKartu}>{jurney.description}</p>

                        <div className={styles.wadahKapsul}>
                            {jurney.tools.map((tool, index) => {
                                return (
                                    <span key={index} className={styles.kapsul}>
                                        {tool}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                )
            })}
        </div>
    )
}