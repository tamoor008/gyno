import styles from './Hero.module.css';
import { Play, ArrowRight, Heart, User, Shield, Lock } from 'lucide-react';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={`${styles.badge} fade-in`}>
            <span>WOMEN'S HEALTH. OUR PRIORITY.</span>
            <div className={styles.dot}></div>
          </div>
          
          <h2 className={`${styles.title} fade-in`}>
            Care for every stage of your <span>journey.</span>
          </h2>
          
          <div className={`${styles.line} fade-in`}></div>
          
          <p className={`${styles.description} fade-in`}>
            Compassionate gynaecological care tailored to your unique needs at every stage of life.
          </p>
          
          <div className={`${styles.actions} fade-in`}>
            <button className={styles.primaryBtn}>
              Book Appointment <ArrowRight size={18} />
            </button>
            <button className={styles.videoBtn}>
              <div className={styles.playIcon}>
                <Play size={16} fill="currentColor" />
              </div>
              Watch Our Approach
            </button>
          </div>
        </div>

        {/* Feature Bar */}
        <div className={`${styles.featureBar} fade-in`}>
          <div className={styles.featureItem}>
            <div className={styles.iconCircle}><Heart size={20} /></div>
            <div className={styles.featureText}>
              <h3>Compassionate Care</h3>
              <p>You're in safe hands</p>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.featureItem}>
            <div className={styles.iconCircle}><User size={20} /></div>
            <div className={styles.featureText}>
              <h3>Expert Specialists</h3>
              <p>Experienced. Trusted</p>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.featureItem}>
            <div className={styles.iconCircle}><Shield size={20} /></div>
            <div className={styles.featureText}>
              <h3>Advanced Treatments</h3>
              <p>Modern. Effective</p>
            </div>
          </div>
          <div className={styles.divider}></div>
          <div className={styles.featureItem}>
            <div className={styles.iconCircle}><Lock size={20} /></div>
            <div className={styles.featureText}>
              <h3>Privacy & Comfort</h3>
              <p>Your trust matters</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
