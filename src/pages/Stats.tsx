import React, { useEffect } from 'react';
import { trackEvent } from "../utils/analytics";
import styles from './styles/Stats.module.css';

const Stats: React.FC = () => {
  useEffect(() => {
    // Track page view for analytics
    trackEvent("page_view", { 
      page: "stats", 
      language: localStorage.getItem("lang") || "en" 
    });
  }, []);

  return (
    <main className="bd-container l-main">
      <section className={styles.pageIntro}>
        <p data-i18n="stats_description">
          Here are some statistics about the website.
        </p>
      </section>

      <div className={styles.statsGridContainer}>
        
      </div>
    </main>
  );
};

export default Stats;