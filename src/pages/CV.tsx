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
                    </div>
                </header>

                <section className={styles.section}>
                    <h2 data-i18n="education"></h2>
                    <div className={styles.item}>
                        <h3 className={styles.itemTitle}>
                            <span data-i18n="matcad"></span><span className={styles.date}>Sep 2022 - </span>
                        </h3>
                        <p>Autonomous University of Barcelona (UAB)</p>
                    </div>
                    <div className={styles.item}>
                        <h3 className={styles.itemTitle}>
                            <span data-i18n="erasmus"></span><span className={styles.date}>Feb 2025 - Jun 2025</span>
                        </h3>
                        <p>Linköping Universitet (LiU)</p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 data-i18n="experience"></h2>
                    <div className={styles.item}>
                        <h2 className={styles.itemTitle}>
                            <span data-i18n="cvc"></span>
                        </h2>
                        <div className={styles.position}>
                            <h3 className={styles.positionTitle}>
                                <span data-i18n="cvc_internship"></span>
                                <span className={styles.date} data-i18n="cvc_time2"></span>
                            </h3>
                            <ul className={styles.list}>
                                <li data-i18n="cvc_time2_text"></li>
                            </ul>
                        </div>
                        <div className={styles.position}>
                            <h3 className={styles.positionTitle}>
                                <span data-i18n="rosa_sensat"></span>
                                <span className={styles.date} data-i18n="cvc_time1"></span>
                            </h3>
                            <ul className={styles.list}>
                                <li data-i18n="cvc_time1_text"></li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2 data-i18n="skills"></h2>
                    <ul className={styles.skillsList}>
                        <li>
                            <span className={styles.skillsTitle}>Programming Languages:</span>
                            <span>Python, Java, C++, C, JavaScript, TypeScript, SQL, Bash, R</span>
                        </li>
                        <li>
                            <span className={styles.skillsTitle}>Version Control:</span>
                            <span>Git, GitHub, GitLab</span>
                        </li>
                        <li>
                            <span className={styles.skillsTitle}>Data Analysis:</span>
                            <span>Pandas, NumPy, PyTorch, Jupyter Notebooks, Excel, Matplotlib, Scikit-learn</span>
                        </li>
                        <li>
                            <span className={styles.skillsTitle}>Front-end Development:</span>
                            <span>React, Node.js, npm, HTML, CSS</span>
                        </li>
                    </ul>
                </section>

                <section className={styles.section}>
                    <h2 data-i18n="languages"></h2>
                    <p data-i18n="languages_text"></p>
                </section>

                <p className={styles.lastUpdate}>
                    <span data-i18n="last_update"></span> 22/01/2026
                </p>
            </section>
        </main>
    );
};

export default CV;
