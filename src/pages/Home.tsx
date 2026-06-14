import React, { useEffect } from 'react';
import styles from './styles/Home.module.css';
import { trackEvent } from '../utils/analytics';

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
        <div className={styles.cover__background} aria-hidden="true">
          {/* Site Under Construction Banner */}
          <div className={styles.constructionBanner}>
            <span> *site under development </span>
          </div>
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
                  <span className={styles.currently} data-i18n="currently" data-aos="fade-up"></span>
                </div>
                
                <div className={styles.cover__img} data-aos="fade-up">
                  <img src="/assets/img/getxo.jpg" alt="" className="cover-image" />
                </div>
              </div>

              <div className={styles.cover__line} data-aos="fade-up" aria-hidden="true"></div>
              <div className={styles.cover__social} data-aos="fade-up">
                <a href="https://github.com/la1qa" className={styles.cover__icon} target="_blank" rel="noopener noreferrer" onClick={() => {trackEvent("click", { element: "github", social_platform: "GitHub", page: "home", language: localStorage.getItem("lang") || "en" })}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
                    <path d="M9 18c-4.51 2-5-2-7-2" />
                  </svg>
                </a>
                <a href="https://linkedin.com/in/laia-querol-alturo" target="_blank" className={styles.cover__icon} rel="noopener noreferrer" onClick={() => {trackEvent("click", { element: "linkedin", social_platform: "LinkedIn" , page: "home", language: localStorage.getItem("lang") || "en" })}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                    <rect width="4" height="12" x="2" y="9" />
                    <circle cx="4" cy="4" r="2" />
                  </svg>
                </a>
                <a href="https://open.spotify.com/user/x8ra08bclftmmw7pboh8gaptd?si=df8370fe84e64cc2" target="_blank" className={styles.cover__icon} rel="noopener noreferrer" onClick={() => {trackEvent("click", { element: "spotify", social_platform: "Spotify" , page: "home", language: localStorage.getItem("lang") || "en" })}}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <path d="M7 9.5c3.5-1.2 6.5-.9 9.5.5" />
                    <path d="M8 12.5c2.8-.9 5.2-.7 7.5.4" />
                    <path d="M9 15.5c1.9-.6 3.6-.5 5 .2" />
                  </svg>
                </a>
              </div>
          </div>
          {/* <div className={styles.coverCard}>
            <div className={styles.coverCardContent}>
              <h2 data-i18n="projects">Projects</h2>
              <p data-i18n="cover_card_description">Check out my project!</p>
            </div>
          </div>
          <div className={styles.coverCard}>
            <div className={styles.coverCardContent}>
              <h2 data-i18n="blog">Blog</h2>
              <p data-i18n="cover_card_description">Check out my blog!</p>
            </div>
          </div>
          <div className={styles.coverCard}>
            <div className={styles.coverCardContent}>
              <h2 data-i18n="about">About Me</h2>
              <p data-i18n="cover_card_description">Check out my about page!</p>
            </div>
          </div> */}
        </div>
      </section>
      <section>
        
      </section>
    </main>
  );
};

export default Home;
