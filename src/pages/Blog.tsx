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

  useEffect(() => {
    // Initialize AOS
    const initAOS = () => {
      if ((window as any).AOS) {
        (window as any).AOS.init({
          duration: 800,
          once: true,
          offset: 100
        });
        (window as any).AOS.refresh();
      } else {
        // Wait for AOS to load
        setTimeout(initAOS, 100);
      }
    };
    
    initAOS();
  }, []);

  return (
    <div className={`bd-container l-main`}>
      <header className={styles.pageIntro} data-aos="fade-right">
        <p data-i18n="blog_intro">
            A chronological collection of notes and posts.
        </p>
      </header>
      <div className={styles['blog-container']}>
        <aside className={styles['blog-sidebar']} data-aos="fade-right">
          <BlogSidebar onSelectPost={handleSelectPost} onClearPost={() => setSelectedPost(null)} selectedPostSlug={selectedPost?.slug} />
        </aside>
        <main className={styles.Preview} data-aos="fade-left">
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
