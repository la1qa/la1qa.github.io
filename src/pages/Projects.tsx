import React, { useEffect } from 'react';
import styles from './styles/Projects.module.css';

const Projects: React.FC = () => {
  useEffect(() => {
    // Initialize i18n translations
    const savedLang = localStorage.getItem("lang") || "en";
    if (typeof (window as any).setLanguage === 'function') {
      (window as any).setLanguage(savedLang);
    }

    // Initialize AOS
    const initAOS = () => {
      if ((window as any).AOS) {
        (window as any).AOS.init({
          duration: 800,
          once: true,
          offset: 100
        });
        (window as any).AOS.refresh();
      } else {
        // Wait for AOS to load
        setTimeout(initAOS, 100);
      }
    };
    
    initAOS();
  }, []);

  return (
    <main className="bd-container l-main">
      <div>
        <header className={styles.pageIntro}>
            <p data-i18n="projects_intro">
                A selection of things I’ve worked on. From coursework and research
                to small side projects and experiments.
            </p>
        </header>
        <div className={styles.projectsList}>
            {/* Example project card */}
            <div className={`${styles.projectCard} ${styles.Small}`} data-aos="fade-up">
                <div className={styles.Description} >     
                    <h2 data-i18n="portfolio_title">Portfolio</h2>
                    <p data-i18n="portfolio_description">You are surfing it. :)</p>
                    <div className={styles.Links}>
                        <a className={styles.readMore} href="/#/blog/2026-01-portfolio"><span data-i18n="read_more">Read More</span><i className="fas fa-arrow-right" aria-hidden="true"></i></a>
                        <a className={styles.github} href="https://github.com/la1qa/la1qa.github.io" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
                    </div>
                </div>
            </div>
            <div className={`${styles.projectCard} ${styles.MediumHorizontal}`} data-aos="fade-up">
                <div className={styles.Description}> 
                    <h2 data-i18n="saf_wrapped_title">SAF-Wrapped</h2>
                    <p data-i18n="saf_wrapped_description">Permet visualitzar l'us del Servei d'Activitat Física de la UAB.</p>
                    <div className={styles.Links}>
                        <a className={styles.readMore} href="/#/blog/2026-01-saf"><span data-i18n="read_more">Read More</span><i className="fas fa-arrow-right" aria-hidden="true"></i></a>
                        <a className={styles.github} href="https://github.com/la1qa/SAF-Wrapped" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
                    </div>
                </div>
                <div className={styles.Image}>
                    <img src="/assets/img/saf_wrapped.png" alt="SAF-Wrapped project preview" />
                </div>
            </div>
            <div className={`${styles.projectCard} ${styles.Large}`} data-aos="fade-up">
                <div className={styles.Description} >     
                    <h2>Project Title</h2>
                    <p>Brief description of the project.</p>
                    <div className={styles.Links}>
                        <a className={styles.readMore} href="/#/blog"><span data-i18n="read_more">Read More</span><i className="fas fa-arrow-right" aria-hidden="true"></i></a>
                        <a className={styles.github} href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
                    </div>
                </div>
                <div className={styles.Image}>
                  <img src="/assets/img/project_placeholder.svg" alt="Project preview placeholder" />
                </div>
            </div>
            <div className={`${styles.projectCard} ${styles.MediumVertical}`} data-aos="fade-up">
                <div className={styles.Description} >     
                    <h2>Project Title</h2>
                    <p>Brief description of the project.</p>
                    <div className={styles.Links}>
                        <a className={styles.readMore} href="/#/blog"><span data-i18n="read_more">Read More</span><i className="fas fa-arrow-right" aria-hidden="true"></i></a>
                        <a className={styles.github} href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
                    </div>
                </div>
                <div className={styles.Image}>
                  <img src="/assets/img/project_placeholder.svg" alt="Project preview placeholder" />
                </div>
            </div>
            <div className={`${styles.projectCard} ${styles.Hero}`} data-aos="fade-up">
                <div className={styles.Description} >     
                    <h2>Project Title</h2>
                    <p>Brief description of the project.</p>
                    <div className={styles.Links}>
                        <a className={styles.readMore} href="/#/blog"><span data-i18n="read_more">Read More</span><i className="fas fa-arrow-right" aria-hidden="true"></i></a>
                        <a className={styles.github} href="#" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i> GitHub</a>
                    </div>
                </div>
                <div className={styles.Image}>
                  <img src="/assets/img/project_placeholder.svg" alt="Project preview placeholder" />
                </div>
            </div>
            {/* Add more project cards as needed */}
        </div>
      </div>
    </main>
  );
};

export default Projects;
