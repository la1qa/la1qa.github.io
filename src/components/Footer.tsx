import React from 'react';
import styles from './styles/Footer.module.css';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footer__container}>
        <h3 className={styles.footer__copy} data-i18n="footer"></h3>
      </div>
    </footer>
  );
};

export default Footer;
