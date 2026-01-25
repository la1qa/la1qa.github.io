import React, { useEffect, useState } from 'react';
import { posts } from "../content/blog";
import styles from './styles/Blog.module.css';
import BlogSidebar from '../components/BlogSideBar';
import BlogPostPreview from '../components/BlogPostPreview';
import BlogIntro from '../components/BlogIntro';

function getCurrentLang() {
  return localStorage.getItem("lang") || "en";
}

const Blog: React.FC = () => {
  const [lang, setLang] = useState<string>(() => getCurrentLang());
  const validLang = (lang === 'ca' ? lang : 'en') as 'en' | 'ca';
  const [selectedPost, setSelectedPost] = useState<(typeof posts[number] & { path: string }) | null>(null);

  const handleSelectPost = (post: { title: { en: string; ca: string; }; date: string; slug: string; }) => {
    const selectedPostWithPath = { ...post, path: `/${post.slug}` };
    setSelectedPost(selectedPostWithPath);
  };

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
    <div className={`bd-container l-main`}>
      <header className={styles.pageIntro}>
        <p data-i18n="blog_intro">
            A chronological collection of notes and posts.
        </p>
      </header>
      <div className={styles['blog-container']}>
        <aside className={styles['blog-sidebar']}>
          <BlogSidebar onSelectPost={handleSelectPost} />
        </aside>
        <main className={styles.Preview}>
          {selectedPost ? (
              <BlogPostPreview post={selectedPost} lang={validLang} />
            ) : (
              <BlogIntro />
            )}
        </main>
      </div>
    </div>
  );
};

export default Blog;
