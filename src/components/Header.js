import styles from './Header.module.css';
import { ArrowRight } from 'lucide-react';

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            {/* Simple leaf/flower icon SVG to match logo */}
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
              <path d="M12 2L15 8C15 8 22 9 22 13C22 17 18 21 12 22C6 21 2 17 2 13C2 9 9 8 9 8L12 2Z" />
              <path d="M12 22V12" />
              <path d="M12 12C12 12 15 10 17 12" />
              <path d="M12 12C12 12 9 10 7 12" />
            </svg>
          </div>
          <div className={styles.logoText}>
            <h1>Femin<span>Care</span></h1>
            <p>GYNAECOLOGY</p>
          </div>
        </div>
        
        <nav className={styles.nav}>
          <a href="#" className={styles.active}>Home</a>
          <a href="#">About Us</a>
          <a href="#">Services</a>
          <a href="#">Our Doctors</a>
          <a href="#">Patient Guide</a>
          <a href="#">Blogs</a>
          <a href="#">Contact</a>
        </nav>
        
        <button className={styles.appointmentBtn}>
          Book Appointment <ArrowRight size={16} />
        </button>
      </div>
    </header>
  );
}
