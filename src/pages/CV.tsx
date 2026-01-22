import React from 'react';
import styles from './styles/CV.module.css';

const CV: React.FC = () => {
    const handleDownload = () => {
        if (typeof window !== 'undefined' && typeof (window as any).downloadPDF === 'function') {
            (window as any).downloadPDF();
        }
    };

    return (
        <main className="bd-container l-main">
            <section className={`${styles.spacer}`} aria-hidden="true">
                <button
                    className={styles.downloadButton}
                    onClick={handleDownload}
                >
                    Download PDF
                </button>

                <header className={styles.header}>
                    <h1>Laia Querol Alturo</h1>
                    <div className={styles.meta}>
                        <span>Barcelona</span>
                        <span aria-hidden="true" className={styles.dot}>·</span>
                        <a href="mailto:Laia.QuerolA@autonoma.cat">Laia.QuerolA@autonoma.cat</a>
                    </div>
                </header>

                <section className={styles.section}>
                    <h2>Education</h2>
                    <div className={styles.item}>
                        <h3>Bachelor's Degree in Computer Science</h3>
                        <p>Autonomous University of Barcelona (UAB)</p>
                        <p className={styles.subtle}>September 2020 - June 2024</p>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>Experience</h2>
                    <div className={styles.item}>
                        <h3>Internship at Tech Solutions</h3>
                        <p className={styles.subtle}>June 2023 - September 2023</p>
                        <ul className={styles.list}>
                            <li>Developed web applications using JavaScript and React.</li>
                            <li>Collaborated with the development team to improve user experience.</li>
                        </ul>
                    </div>
                </section>

                <section className={styles.section}>
                    <h2>Skills</h2>
                    <ul className={styles.list}>
                        <li>Programming Languages: Python, Java, C++</li>
                        <li>Web Development: HTML, CSS, JavaScript</li>
                        <li>Data Analysis: SQL, R</li>
                    </ul>
                </section>
            </section>
        </main>
    );
};

export default CV;