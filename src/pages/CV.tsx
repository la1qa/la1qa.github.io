import React, { useEffect, useRef } from 'react';
import styles from './styles/CV.module.css';

const CV: React.FC = () => {
    useEffect(() => {
        // Initialize i18n translations
        const savedLang = localStorage.getItem("lang") || "en";
        if (typeof (window as any).setLanguage === 'function') {
            (window as any).setLanguage(savedLang);
        }
    }, []);

    const sectionRef = useRef<HTMLElement | null>(null);

    return (
        <main className="bd-container l-main white-bg">
            <section className={`${styles.spacer}`} aria-hidden="true" ref={sectionRef}>
                <a href="#" onClick={(e) => { e.preventDefault(); window.print(); }} className={styles.printButton}><i className="fas fa-print" aria-hidden="true"></i> <span data-i18n="print">Print</span></a>
                <header className={styles.header}>
                    <h1>Laia Querol Alturo</h1>
                    <div className={styles.meta}>
                        <span>Cerdanyola del Vallès, Barcelona</span>
                        <span aria-hidden="true" className={styles.dot}>·</span>
                        <a href="mailto:Laia.QuerolA@autonoma.cat">Laia.QuerolA@autonoma.cat</a>
                        <span aria-hidden="true" className={styles.dot}>·</span>
                        <a href="https://linkedin.com/in/laia-querol-alturo" target="_blank" rel="noopener noreferrer">linkedin.com/in/laia-querol-alturo</a>
                    </div>
                    <div className={styles.profileIntro}>
                        <div className={styles.profilePhotoFrame}>
                            <img
                                src="/assets/img/getxo.jpg"
                                alt="Profile photo of Laia Querol Alturo"
                                className={styles.profilePhoto}
                            />
                        </div>
                        <p className={styles.profileSummary} data-i18n="profile_summary">
                            Student in data science with experience in computer vision and applied research. Currently working on a thesis on predictive modeling from medical images. Skilled in data preprocessing, exploratory analysis, and data visualization. Committed to ethical data handling, privacy preservation, with an interest in applying data to support informed decision-making.
                        </p>
                    </div>
                </header>

                <section className={styles.section}>
                    <h2 data-i18n="education"></h2>
                    <div className={styles.item}>
                        <h3 className={styles.itemTitle}>
                            <span data-i18n="matcad"></span><span className={styles.date}>Sep 2022 - </span>
                        </h3>
                        <p className={styles.positionTitle}>
                            <span>Universitat Autònoma de Barcelona (UAB)</span>
                            <span className={styles.date}> Cerdanyola del Vallès, Barcelona, Spain</span>
                        </p>
                        <span className={styles.description}>
                            <span data-i18n="matcad_desc">4th year.</span>
                        </span>
                    </div>
                    <div className={styles.item}>
                        <h3 className={styles.itemTitle}>
                            <span data-i18n="erasmus"></span><span className={styles.date}>Feb 2025 - Jun 2025</span>
                        </h3>
                        <p className={styles.positionTitle}>
                            <span>Linköpings Universitet (LiU)</span>
                            <span className={styles.date}> Linköping, Östergötland, Sweden</span>
                        </p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 data-i18n="experience"></h2>
                    <div className={styles.item}>
                        <h4>
                            <span data-i18n="cvc"></span>
                            <span className={styles.date}> Cerdanyola del Vallès, Catalonia, Spain</span>
                        </h4>
                        <div className={styles.position}>
                            <h3 className={styles.itemTitle}>
                                <span data-i18n="cvc_tfg"></span>
                                <span className={styles.date} data-i18n="cvc_time3"></span>
                            </h3>
                            <ul className={styles.list}>
                                <li><i data-i18n="cvc_time3_text"></i></li>
                            </ul>
                        </div>
                        <div className={styles.position}>
                            <h3 className={styles.itemTitle}>
                                <span data-i18n="cvc_internship"></span>
                                <span className={styles.date} data-i18n="cvc_time2"></span>
                            </h3>
                            <ul className={styles.list}>
                                <li data-i18n="cvc_time2_text"></li>
                            </ul>
                        </div>
                        <div className={styles.position}>
                            <h3 className={styles.itemTitle}>
                                <span data-i18n="rosa_sensat"></span>
                                <span className={styles.date} data-i18n="cvc_time1"></span>
                            </h3>
                            <ul className={styles.list}>
                                <li data-i18n="cvc_time1_text"></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={styles.section} id="skills">
                    <h2 data-i18n="skills"></h2>
                    <ul className={styles.skillsList}>
                        <li>
                            <span className={styles.skillsTitle} data-i18n="programming_languages"> Programming Languages:</span>
                            <span>Python, C++, C, Bash, R, Java, JavaScript, TypeScript</span>
                        </li>
                        <li>
                            <span className={styles.skillsTitle} data-i18n="data_analysis_ml"> Data Analysis/ML:</span>
                            <span>Pandas, NumPy, PyTorch, Scikit-learn, OpenCV, gudhi</span>
                        </li>
                        <li>
                            <span className={styles.skillsTitle} data-i18n="data_visualization"> Data Visualization:</span>
                            <span>Matplotlib, Seaborn</span>
                        </li>
                        <li>
                            <span className={styles.skillsTitle} data-i18n="database_management"> Database Management:</span>
                            <span>SQL, MongoDB, Neo4j</span>
                        </li>
                        <li>
                            <span className={styles.skillsTitle} data-i18n="web_development"> Web Development:</span>
                            <span>React, Node.js, npm, HTML5, CSS</span>
                        </li>
                        <li>
                            <span className={styles.skillsTitle} data-i18n="other"> Other:</span>
                            <span>Git, GitHub, Jupyter Notebooks, VS Code</span>
                        </li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 data-i18n="languages"></h2>
                    <p className={styles.positionTitle}>
                        <span data-i18n="cat"> Catalan (Native)</span>
                        <span className={styles.dot}>·</span>
                        <span data-i18n="esp"> Spanish (Native)</span>
                        <span className={styles.dot}>·</span>
                        <span data-i18n="eng"> English (C2 Proficiency)</span>
                        <span className={styles.dot}>·</span>
                        <span data-i18n="swe"> Swedish (A1 Elementary)</span>
                    </p>
                </section>

                <section className={styles.section}>
                    <h2 data-i18n="awards"> Awards</h2>
                    <div className={styles.item}>
                        <p className={styles.itemTitle}>
                            <span data-i18n="tdr"> Project Title: "Origami: L'art es troba amb les matemàtiques" ("Origami: Art meets mathematics")</span>
                        </p>
                        <ul className={styles.awardsList}>
                            <li>
                                <h3 className={styles.awardsTitle}>
                                    <span data-i18n="tdr_uab"> 1r Premi Argó</span>
                                    <span className={styles.date} data-i18n="june_2022"> June 2022</span>
                                </h3>
                                <p className={styles.awardsText} data-i18n="tdr_uab_text"></p>
                            </li>
                            <li>
                                <h3 className={styles.awardsTitle}>
                                    <span data-i18n="tdr_upc"> 2n Premi Poincaré</span>
                                    <span className={styles.date} data-i18n="may_2022"> May 2022</span>
                                </h3>
                                <p className={styles.awardsText} data-i18n="tdr_upc_text"></p>
                            </li>
                        </ul>
                    </div>
                    
                </section>

                <p className={styles.lastUpdate}>
                    <span data-i18n="last_update"></span> 10/02/2026
                </p>
            </section>
        </main>
    );
};

export default CV;
