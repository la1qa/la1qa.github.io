import React, { useEffect } from 'react';

const Blog: React.FC = () => {
  useEffect(() => {
    // Initialize i18n translations
    const savedLang = localStorage.getItem("lang") || "en";
    if (typeof (window as any).setLanguage === 'function') {
      (window as any).setLanguage(savedLang);
    }
  }, []);

  return (
    <main className="bd-container l-main">
      <div>
        <h1>Blog Page</h1>
        <p>This is where blog posts will be displayed.</p>
      </div>
    </main>
  );
};

export default Blog;
