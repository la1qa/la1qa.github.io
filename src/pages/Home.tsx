import React, { useEffect } from 'react';
import styles from './styles/Home.module.css';

const Home: React.FC = () => {
  useEffect(() => {
    // Initialize AOS animations if available
    if (typeof window.AOS !== 'undefined') {
      window.AOS.init({
        duration: 1000,
        once: true,
      });
    }

    // Initialize i18n translations
    const savedLang = localStorage.getItem("lang") || "en";
    if (typeof (window as any).setLanguage === 'function') {
      (window as any).setLanguage(savedLang);
    }
  }, []);

  return (
    <main className="bd-container l-main">
      {/* Cover Section */}
      <section className={styles.cover__container} id="home">
        <div className={styles.cover__data}>
            <div className={styles['cover__img-mobile']} data-aos="fade-up">
              <img src="/assets/img/getxo.jpg" alt="" className="cover-image" />
            </div>
            <div className={styles.cover__box} data-aos="fade-up">
              <div className={styles.cover__text}>
                <div className={styles.cover__greeting} data-aos="fade-up">
                  <span data-i18n="greeting"></span>
                </div>
                <div className={styles.cover__title} data-aos="fade-up">
                  <h1><span data-i18n="name"></span><span className={styles.cover__name}>Laia</span><span>.</span></h1>
                </div>
                <div className={styles.cover__description} data-aos="fade-up">
                  <p data-i18n="presentation"></p>
                </div>
              </div>
              <div className={styles.cover__img} data-aos="fade-up">
                <img src="/public/assets/img/getxo.jpg" alt="" className="cover-image" />
              </div>
            </div>
            <div className={styles.cover__line} data-aos="fade-up" aria-hidden="true"></div>
            <div className={styles.cover__social} data-aos="fade-up">
              <a href="https://github.com/la1qa" className={styles.cover__icon} target="_blank" rel="noopener noreferrer">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://linkedin.com/in/laia-querol-alturo" target="_blank" className={styles.cover__icon} rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://open.spotify.com/user/x8ra08bclftmmw7pboh8gaptd?si=df8370fe84e64cc2" target="_blank" className={styles.cover__icon} rel="noopener noreferrer">
                <i className="fab fa-spotify"></i>
              </a>
            </div>
        </div>
      </section>
      <section>
        
      </section>
    </main>
  );
};

export default Home;
