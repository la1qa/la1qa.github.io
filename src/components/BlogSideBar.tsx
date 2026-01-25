import { useEffect, useState } from "react";
import { posts } from "../content/blog";

function getCurrentLang() {
  return localStorage.getItem("lang") || "en";
}

// Define props for the sidebar
type BlogSidebarProps = {
  onSelectPost: (post: typeof posts[number]) => void;
};

export default function BlogSidebar({ onSelectPost }: BlogSidebarProps) {
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
    {posts.map((post) => (
        <li key={post.slug}>
        <a
            href="#!"
            onClick={(e) => {
            e.preventDefault();
            onSelectPost(post);
            }}
        >
            {post.date} — {post.title[lang as keyof typeof post.title] ?? post.title.en}
        </a>
        </li>
    ))}
    </ul>
  );
}
