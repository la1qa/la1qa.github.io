import React, { useEffect, useState } from "react";
import { posts } from "../content/blog";
import { Link } from "react-router-dom";
import styles from './styles/BlogSideBar.module.css';

function getCurrentLang() {
  return localStorage.getItem("lang") || "en";
}

export default function BlogSidebar() {
  const [lang, setLang] = useState<string>(() => getCurrentLang());

  useEffect(() => {
    const onStorageChange = () => setLang(getCurrentLang());

    window.addEventListener("storage", onStorageChange);
    window.addEventListener("languagechange", onStorageChange);

    onStorageChange();

    return () => {
      window.removeEventListener("storage", onStorageChange);
      window.removeEventListener("languagechange", onStorageChange);
    };
  }, []);

  return (
    <aside className={styles['blog-sidebar']}>
      <h2 data-i18n="all_posts">All posts</h2>
      <ul>
        {posts.map((post) => (
          <li key={post.slug}>
            <Link to={`/blog/${post.slug}`}>
              {post.date} — {post.title[lang as keyof typeof post.title] ?? post.title.en}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
}