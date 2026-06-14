import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import styles from './styles/Header.module.css';

const Header: React.FC = () => {
  const [theme, setTheme] = useState<string>('light');
  const [language, setLanguage] = useState<string>('en');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') || 'light';
    setTheme(savedTheme);
    document.documentElement.setAttribute('data-theme', savedTheme);
  }, []);

  useEffect(() => {
    const browserLang = navigator.language.split('-')[0];
    const savedLang = localStorage.getItem('lang') || browserLang || 'en';
    setLanguage(savedLang);
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  };

  const handleLanguageChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const lang = e.target.value;
    setLanguage(lang);
    localStorage.setItem("lang", lang);
    if (typeof (window as any).setLanguage === 'function') {
      (window as any).setLanguage(lang);
    }
  };

  return (
    <header className={styles.header} id="header">
      <nav className={`${styles.nav} bd-container`}>
        <a href="https://la1qa.github.io" className={styles.nav__logo}>
          LAIA QUEROL ALTURO
        </a>
        
        <label className={styles.themeSwitch}>
          <input 
            type="checkbox" 
            id="themeToggle" 
            checked={theme === 'dark'}
            onChange={toggleTheme}
            aria-label="Toggle theme"
          />
          <i className={`fas fa-sun ${styles.sun}`}></i>
          <i className={`fas fa-moon ${styles.moon}`}></i>
        </label>
        
        <li className={styles.dropdown}>
          <button className={styles.dropbtn} aria-label="Open menu">
            <i className="fas fa-bars"></i>
          </button>
          <div className={styles.dropdownContent}>
            <a href="/" className="navbar-link">
              <i className="fas fa-user"></i>
              <span data-i18n="home">Home</span>
            </a>
            <Link to="/projects" className="navbar-link">
              <i className="fas fa-briefcase"></i>
              <span data-i18n="projects">Projects</span>
            </Link>
            <Link to="/blog" className="navbar-link">
              <i className="fas fa-newspaper"></i>
              <span data-i18n="blog">Blog</span>
            </Link>
            <Link to="/cv" className="navbar-link">
                <i className="fas fa-file"></i>
                <span data-i18n="cv">CV</span>
            </Link>
            <Link to="/contact" className="navbar-link">
                <i className="fas fa-phone"></i>
                <span data-i18n="contact">Contact</span>
            </Link>
            <div className={styles.langSelectorMobile}>
              <i className="fas fa-language"></i>
              <select id="language-dropdown-mobile" className={styles.languageDropdownMobile} value={language} onChange={handleLanguageChange} aria-label="Select language">
                <option value="en">English</option>
                <option value="ca">Català</option>
              </select>
            </div>
          </div>
        </li>

        <div className={styles.nav__menu} id="nav-menu">
          <ul className={styles.nav__list}>
            <li className={styles.nav__item}>
              <a href="/" className={styles.nav__link} data-i18n="home">
                <i className={`fas fa-user ${styles.hoverIcon}`}></i>
                <span className={styles.linkText}>Home</span>
              </a>
            </li>
            <li className={styles.nav__item}>
              <Link to="/projects" className={styles.nav__link} data-i18n="projects">
                <i className={`fas fa-briefcase ${styles.hoverIcon}`}></i>
                <span className={styles.linkText}>Projects</span>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/blog" className={styles.nav__link} data-i18n="blog">
                <i className={`fas fa-newspaper ${styles.hoverIcon}`}></i>
                <span className={styles.linkText}>Blog</span>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/cv" className={styles.nav__link} data-i18n="cv">
                <i className={`fas fa-file ${styles.hoverIcon}`}></i>
                <span className={styles.linkText}>CV</span>
              </Link>
            </li>
            <li className={styles.nav__item}>
              <Link to="/contact" className={styles.nav__link} data-i18n="contact">
                <i className={`fas fa-phone ${styles.hoverIcon}`}></i>
                <span className={styles.linkText}>Contact</span>
              </Link>
            </li>
          </ul>
          <div>
            <input 
              type="checkbox" 
              className="checkbox" 
              id="checkbox"
              checked={theme === 'dark'}
              onChange={toggleTheme}
              aria-label="Toggle theme"
            />
            <label htmlFor="checkbox" className="checkbox-label">
              <i className="fas fa-moon"></i>
              <i className="fas fa-sun"></i>
              <span className="ball"></span>
            </label>
          </div>
          <div className="lang-selector">
            <select id="language-dropdown" value={language} onChange={handleLanguageChange} aria-label="Select language">
              <option value="en">English</option>
              <option value="ca">Català</option>
            </select>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;