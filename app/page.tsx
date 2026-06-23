import Folder from '@/components/Folder';
import styles from './page.module.css';
import Navbar from '@/components/navbar'
import About from '@/components/about'
import Image from '@/components/image'
import Skills from '@/components/skill'
import Software from '@/components/software'
import Jurney from '@/components/jurney.text'
import Contact from '@/components/contact'

export default function Home() {  
  return (
    <div className={styles.navbar}>
      <Navbar />
      <div className={styles.about_me}>
        <About />
        <Image />
      </div>
      <div className={styles.skill}>
        <Skills />
        <Software />
      </div>
      <div className={styles.service}>
        <Jurney />
      </div>
      <div className={styles.contact}>
        <Contact />
      </div>
    </div>
  );
}