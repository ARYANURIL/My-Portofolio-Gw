"use client"

import { useState, useEffect, useRef } from 'react'
import styles from './contact.module.css'
import { QRCodeSVG } from 'qrcode.react';

const Styles = {
    container: 'contact_container',
    text: 'contact_text',
    teks: 'contact_teks',
    textP: 'contact_textP',
    box_element: 'contact_box_element',
    box: 'contact_box',
    box_code_qr: 'contact_box_code_qr',
    code_qr: 'contact_code_qr',
    qr_box: 'contact_qr_box',
    firstTeks: 'contact_firstTeks',
    text_first: 'contact_text_first',
    box_last_text: 'contact_box_last_text',
    last_text: 'contact_last_text',
    box_all_card: 'contact_box_all_card',
    box_card: 'contact_box_card',
    box_description: 'contact_box_description',
    box_text: 'contact_box_text',
    box_text_p: 'contact_box_text_p',
    all_button_software: 'contact_all_button_software',
    button_to_web: 'contact_button_to_web',
    panah: 'contact_panah',
    box_form_container: 'contact_box_form_container',
    popup_sukses: 'contact_popup_sukses',
    icon_sukses: 'contact_icon_sukses',
    judul_sukses: 'contact_judul_sukses',
    deskripsi_sukses: 'contact_deskripsi_sukses',
    tombol_kembali: 'contact_tombol_kembali',
    judul_form: 'contact_judul_form',
    formulir: 'contact_formulir',
    grup_input: 'contact_grup_input',
    label_input: 'contact_label_input',
    input_text: 'contact_input_text',
    input_textarea: 'contact_input_textarea',
    tombol_submit: 'contact_tombol_submit'
} as any

const formspreeId = "mkoaajlq"

export default function App() {
    const [nama, setNama] = useState('')
    const [kontak, setKontak] = useState('')
    const [pesan, setPesan] = useState('')
    const [sudahTerkirim, setSudahTerkirim] = useState(false)
    const [sedangMengirim, setSedangMengirim] = useState(false)
    const [pesanError, setPesanError] = useState(false)

    // TAMBAHAN: State dan Ref untuk IntersectionObserver
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

    const kirimPesan = async (event: React.FormEvent) => {
        event.preventDefault()
        setSedangMengirim(true)
        setPesanError(false)

        try {
            const response = await fetch(`https://formspree.io/f/${formspreeId}`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    nama: nama,
                    kontak: kontak,
                    pesan: pesan
                })
            })

            if (response.ok) {
                setSudahTerkirim(true)
                setNama('')
                setKontak('')
                setPesan('')
            } else {
                setPesanError(true)
            }
        } catch (error) {
            setPesanError(true)
        } finally {
            setSedangMengirim(false)
        }
    }

    return (
        <div 
            id='contact' 
            ref={containerRef}
            className={`${styles.container} ${isSeen ? 'contact_seen' : ''}`}
        >
            <style dangerouslySetInnerHTML={{__html: `
                .contact_container {
                    background-color: transparent;
                    width: 100%;
                    padding: 40px 12px;
                    box-sizing: border-box;
                    
                    /* TAMBAHAN: Efek transisi awal sebelum muncul */
                    opacity: 0;
                    transform: translateY(50px);
                    transition: opacity 0.8s ease-out, transform 0.8s ease-out;
                }
                
                /* TAMBAHAN: Class aktif ketika terlihat di layar */
                .contact_seen {
                    opacity: 1;
                    transform: translateY(0);
                }
                
                .contact_text {
                    margin-bottom: 24px;
                }
                .contact_teks {
                    color: #FFEA00;
                    font-size: 28px;
                    font-weight: 800;
                    border-bottom: 2px solid #FFEA00;
                    width: fit-content;
                    padding-bottom: 4px;
                    letter-spacing: 1px;
                }
                .contact_textP {
                    margin-top: 16px;
                    color: #d1d5db;
                }
                .contact_textP p {
                    font-size: 14px;
                    line-height: 1.6;
                }
                .contact_box_element {
                    width: 100%;
                }
                .contact_box {
                    display: flex;
                    flex-direction: row;
                    gap: 20px;
                    flex-wrap: wrap;
                    align-items: flex-start;
                }
                .contact_box_code_qr {
                    flex: 1;
                    min-width: 200px;
                    max-width: 240px;
                }
                .contact_code_qr {
                    background-color: #FFEA00;
                    color: black;
                    padding: 20px;
                    border-radius: 20px;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    gap: 12px;
                }
                .contact_qr_box {
                    background-color: white;
                    padding: 10px;
                    border-radius: 12px;
                    width: 120px;
                    height: 120px;
                }
                .contact_firstTeks {
                    text-align: center;
                }
                .contact_text_first {
                    font-family: monospace;
                    font-weight: 800;
                    font-size: 11px;
                }
                .contact_last_text {
                    font-size: 9px;
                    opacity: 0.8;
                }
                .contact_box_all_card {
                    flex: 1;
                    min-width: 220px;
                    display: flex;
                    flex-direction: column;
                    gap: 15px;
                }
                .contact_box_card {
                    background-color: #16161d;
                    padding: 20px;
                    border-radius: 12px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
                .contact_box_text h1 {
                    color: white;
                    font-size: 15px;
                    font-weight: bold;
                    margin-bottom: 6px;
                }
                .contact_box_text_p p {
                    color: #9ca3af;
                    font-size: 12px;
                    line-height: 1.5;
                }
                .contact_all_button_software {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .contact_button_to_web {
                    display: flex;
                    justify-content: space-between;
                    background-color: #16161d;
                    padding: 12px 16px;
                    border-radius: 8px;
                    color: white;
                    text-decoration: none;
                    font-size: 12px;
                    font-weight: bold;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                }
                .contact_box_form_container {
                    flex: 1;
                    min-width: 260px;
                    max-width: 360px;
                    background-color: #16161d;
                    padding: 20px;
                    border-radius: 14px;
                    border: 1px solid rgba(255, 255, 255, 0.05);
                    position: relative;
                    overflow: hidden;
                    box-sizing: border-box;
                    margin: 0;
                }
                .contact_judul_form {
                    color: white;
                    font-size: 16px;
                    font-weight: bold;
                    margin-bottom: 14px;
                }
                .contact_formulir {
                    display: flex;
                    flex-direction: column;
                    gap: 10px;
                }
                .contact_grup_input {
                    display: flex;
                    flex-direction: column;
                    gap: 4px;
                }
                .contact_label_input {
                    font-size: 10px;
                    color: #9ca3af;
                    text-transform: uppercase;
                    font-family: monospace;
                }
                .contact_input_text, .contact_input_textarea {
                    background-color: #0f0f12;
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    color: white;
                    padding: 10px;
                    border-radius: 8px;
                    font-size: 12px;
                    outline: none;
                }
                .contact_input_text:focus, .contact_input_textarea:focus {
                    border-color: #FFEA00;
                }
                .contact_tombol_submit {
                    background-color: #FFEA00;
                    color: black;
                    padding: 11px;
                    border-radius: 8px;
                    font-weight: bold;
                    font-size: 12px;
                    border: none;
                    cursor: pointer;
                    text-transform: uppercase;
                }
                .contact_popup_sukses {
                    position: absolute;
                    inset: 0;
                    background-color: #16161d;
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    justify-content: center;
                    padding: 20px;
                    text-align: center;
                    border-radius: 14px;
                    z-index: 10;
                }
                .contact_judul_sukses {
                    color: #FFEA00;
                    font-weight: bold;
                    font-size: 18px;
                    margin: 4px 0;
                }
                .contact_deskripsi_sukses {
                    color: #9ca3af;
                    font-size: 12px;
                    margin-bottom: 12px;
                }
                .contact_tombol_kembali {
                    background-color: #FFEA00;
                    color: black;
                    padding: 6px 14px;
                    border-radius: 6px;
                    border: none;
                    cursor: pointer;
                    font-weight: bold;
                }
            `}} />

            <div className={styles.text}>
                <h1 className={styles.teks}>CONTACT</h1>
                <div className={styles.textP}>
                    <p id={styles.text}>Punya proyek seru, pertanyaan seputar coding, atau cuma mau kenalan? Yuk, ngobrol! Kamu bisa isi formulir, scan QR Code, atau langsung hubungi salah satu media sosial saya di bawah ini. Saya akan sangat senang membaca pesanmu!</p>
                </div>
            </div>
            
            <div className={styles.box_element}>
                <div className={styles.box}>
                    <div className={styles.box_code_qr}>
                        <div className={styles.code_qr}>
                            <div id={styles.qr_code} className="contact_qr_box">
                                <QRCodeSVG 
                                    value="https://discord.gg/WceNhAQnP" 
                                    size={110} // Ukuran QR Code-nya
                                    bgColor={"#ffffff"}
                                    fgColor={"#000000"}
                                    level={"M"}
                                />
                            </div>
                            <div className={styles.firstTeks}>
                                <p id={styles.text_first} className="contact_text_first">TABLE OF CONTACT</p>
                                <div className={styles.box_last_text}>
                                    <p id={styles.last_text} className="contact_last_text">Scan untuk simpan nomor & portofolio</p>
                                </div>
                            </div>
                        </div>
                    </div>  
                    <div className={styles.box_all_card}>
                        <div className={styles.box_card}>
                            <div className={styles.box_description}>
                                <div className={styles.box_text}>
                                    <h1 id={styles.description}>💬 Yuk Mengobrol!</h1>
                                </div>
                                <div className={styles.box_text_p}>
                                    <p className='text-gray-400' id={styles.description_p}>
                                        Kamu bisa menghubungi saya secara langsung atau melihat riwayat proyek saya melalui tombol media sosial di bawah ini
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className={styles.all_button_software}>
                            <a 
                                href="https://www.instagram.com/vvip.rill/"
                                target='_blank'
                                rel='noreferrer'
                                className={styles.button_to_web}
                            >
                                <span>📸 Instagram</span>
                                <span className={styles.panah}>➡</span>
                            </a>
                            <a 
                                href="https://github.com/ARYANURIL"
                                target='_blank'
                                rel='noreferrer'
                                className={styles.button_to_web}
                            >
                                <span>💻 Github</span>
                                <span className={styles.panah}>➡</span>
                            </a>
                            <a 
                                href="https://wa.me/+6281232017763"
                                target='_blank'
                                rel='noreferrer' 
                                className={styles.button_to_web}                             
                            >
                                <span>💬 Whatsapp Chat</span>
                                <span className={styles.panah}>➡</span>
                            </a>
                        </div>
                    </div>
                    
                    <div className={styles.box_form_container}>
                        {sudahTerkirim && (
                            <div className={styles.popup_sukses}>
                                <span className={styles.icon_sukses}>✨</span>
                                <h3 className={styles.judul_sukses}>Pesan Terkirim!</h3>
                                <p className={styles.deskripsi_sukses}>Terima kasih sudah menghubungi saya. Saya akan segera membaca pesanmu!</p>
                                <button onClick={() => setSudahTerkirim(false)} className={styles.tombol_kembali}>Kirim Lagi</button>
                            </div>
                        )}
                        <h3 className={styles.judul_form}>⚡ Kirim Pesan Langsung</h3>
                        <form onSubmit={kirimPesan} className={styles.formulir}>
                            <div className={styles.grup_input}>
                                <label className={styles.label_input}>Nama Kamu</label>
                                <input 
                                    type="text" 
                                    required 
                                    value={nama}
                                    onChange={(e) => setNama(e.target.value)}
                                    placeholder="Nama lengkap kamu" 
                                    className={styles.input_text}
                                    disabled={sedangMengirim}
                                />
                            </div>
                            <div className={styles.grup_input}>
                                <label className={styles.label_input}>Kontak / Email</label>
                                <input 
                                    type="email" 
                                    required 
                                    value={kontak}
                                    onChange={(e) => setKontak(e.target.value)}
                                    placeholder="namaemailmu@gmail.com" 
                                    className={styles.input_text}
                                    disabled={sedangMengirim}
                                />
                            </div>
                            <div className={styles.grup_input}>
                                <label className={styles.label_input}>Isi Pesan</label>
                                <textarea 
                                    rows={3} 
                                    required 
                                    value={pesan}
                                    onChange={(e) => setPesan(e.target.value)}
                                    placeholder="Tulis pesan atau pertanyaanmu di sini..." 
                                    className={styles.input_textarea}
                                    disabled={sedangMengirim}
                                />
                            </div>
                            {pesanError && (
                                <p style={{ color: '#ff3333', fontSize: '12px' }}>Pesan gagal terkirim. Coba lagi nanti.</p>
                            )}
                            <button type="submit" className={styles.tombol_submit} disabled={sedangMengirim}>
                                {sedangMengirim ? 'Mengirim...' : 'Kirim Pesan 🚀'}
                            </button>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    )
}