import React, { useEffect, useState } from 'react';
import { posts } from "../content/blog";
import { Link } from "react-router-dom"; // or Next Link
import styles from './styles/Blog.module.css';
import BlogSidebar from '../components/BlogSideBar';

function getCurrentLang() {
  return localStorage.getItem("lang") || "en";
}

const Blog: React.FC = () => {
  const [lang, setLang] = useState<string>(() => getCurrentLang());
  const validLang = (lang === 'ca' ? lang : 'en') as 'en' | 'ca';

  useEffect(() => {
    const onStorageChange = () => {
      const nextLang = getCurrentLang();
      setLang(nextLang);

      if (typeof (window as any).setLanguage === 'function') {
        (window as any).setLanguage(nextLang);
      }
    };

    window.addEventListener("storage", onStorageChange);
    window.addEventListener("languagechange", onStorageChange);

    onStorageChange();

    return () => {
      window.removeEventListener("storage", onStorageChange);
      window.removeEventListener("languagechange", onStorageChange);
    };
  }, []);

  return (
    <main className={`bd-container l-main`}>
      <h1>Blog Page</h1>
      <p>This is where blog posts will be displayed.</p>
      <div className={styles['blog-container']}>
        <BlogSidebar />
        {posts.map((post) => (
          <article key={post.slug}>
            <time>{post.date}</time>
            <h2>
              <Link to={`/blog/${post.slug}`}>
                {post.title[validLang] ?? post.title.en}
              </Link>
            </h2>
          </article>
        ))}
      </div>
    </main>
  );
};

export default Blog;
