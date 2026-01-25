import { useEffect, useState } from "react";
import { posts } from "../content/blog";
import styles from './styles/BlogSideBar.module.css';

function getCurrentLang() {
  return localStorage.getItem("lang") || "en";
}

// Define props for the sidebar
type BlogSidebarProps = {
  onSelectPost: (post: typeof posts[number]) => void;
  onClearPost: () => void;
  selectedPostSlug?: string | null;
};

export default function BlogSidebar({ onSelectPost, onClearPost, selectedPostSlug }: BlogSidebarProps) {
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
    <ul>
      <li>
        <a
            href="#!"
            onClick={(e) => {
            e.preventDefault();
            onClearPost();
            }}
            className={!selectedPostSlug ? styles.active : ''}
        >
            <span data-i18n="overview">Overview</span>
        </a>
      </li>
    {posts.map((post) => (
        <li key={post.slug}>
        <a
            href="#!"
            onClick={(e) => {
            e.preventDefault();
            onSelectPost(post);
            }}
            className={selectedPostSlug === post.slug ? styles.active : ''}
        >
            {post.date} — {post.title[lang as keyof typeof post.title] ?? post.title.en}
        </a>
        </li>
    ))}
    </ul>
  );
}
