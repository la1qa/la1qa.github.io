import React, { useState, useEffect } from 'react';
import { trackEvent } from "../utils/analytics";
import styles from './styles/Contact.module.css';

export default function Contact() {
    const [copied, setCopied] = useState(false);

    useEffect(() => {
        // Initialize i18n translations
        const savedLang = localStorage.getItem("lang") || "en";
        if (typeof (window as any).setLanguage === 'function') {
            (window as any).setLanguage(savedLang);
        }

        if (typeof window.AOS !== 'undefined') {
            (window as any).AOS.init({
                duration: 1000,
                once: true,
            });
            (window as any).AOS.refresh();
        }
    }, []);
    const email = 'laiaquerolalturo@gmail.com';

    const handleEmailClick = (e: React.MouseEvent) => {
        e.preventDefault();
        navigator.clipboard.writeText(email);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className={styles.contact}>
            <span className={styles.subtitle} data-i18n="reach_out" data-aos="fade-up">If you want to reach out, email works best.</span>
            <button
                onClick={(e) => {
                    handleEmailClick(e);
                    trackEvent("click", { element: "email", page: "contact" });
                }}
                className={styles.email}
                style={{ cursor: 'pointer', border: 'none', background: 'none', padding: 0 }}
                data-aos="fade-up"
            >
                {copied ? 'Copied!' : email}
            </button>
            <span data-i18n="find_me_on" data-aos="fade-up">...if not, you'll find me on:</span>
            <div className={styles.socialIcons} data-aos="fade-up">
                <a href="https://github.com/la1qa" target="_blank" rel="noopener noreferrer" className={styles.iconLink} onClick={() => trackEvent("click", { element: "github", social_platform: "GitHub", page: "contact" })}>
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
                    >
                        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"/>
                        <path d="M9 18c-4.51 2-5-2-7-2"/>
                    </svg>
                    <span>GitHub</span>
                </a>
                <a href="https://linkedin.com/in/laia-querol-alturo" target="_blank" rel="noopener noreferrer" className={styles.iconLink} onClick={() => trackEvent("click", { element: "linkedin", social_platform: "LinkedIn", page: "contact" })}>
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
                    >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
                        <rect width="4" height="12" x="2" y="9"/>
                        <circle cx="4" cy="4" r="2"/>
                    </svg>
                    <span>LinkedIn</span>
                </a>
                <a href="https://open.spotify.com/user/x8ra08bclftmmw7pboh8gaptd?si=df8370fe84e64cc2" target="_blank" rel="noopener noreferrer" className={styles.iconLink} onClick={() => trackEvent("click", { element: "spotify", social_platform: "Spotify", page: "contact" })}>
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
                    >
                        <circle cx="12" cy="12" r="10" />
                        <path d="M7 9.5c3.5-1.2 6.5-.9 9.5.5" />
                        <path d="M8 12.5c2.8-.9 5.2-.7 7.5.4" />
                        <path d="M9 15.5c1.9-.6 3.6-.5 5 .2" />
                    </svg>
                    <span>Spotify</span>
                </a>
            </div>
            <span data-i18n="based_in" data-aos="fade-up">Based in Barcelona. </span>
        </div>
    );
}