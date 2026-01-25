import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import { posts } from "../content/blog";
import styles from "./styles/BlogPost.module.css";

function getCurrentLang() {
  return localStorage.getItem("lang") || "en";
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = posts.find((p) => p.slug === slug);
  if (!post) return <p>Post not found.</p>;

  const [content, setContent] = useState<string | null>(null);
  const [lang, setLang] = useState<string>(() => getCurrentLang());

  // 🔁 Listen for language changes
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

  // 📄 Fetch markdown when lang OR post changes
  useEffect(() => {
    const controller = new AbortController();

    fetch(`/blog/${lang}/${post.slug}.md`, { signal: controller.signal })
      .then((res) => {
        if (!res.ok) throw new Error("Post not found");
        return res.text();
      })
      .then(setContent)
      .catch((error) => {
        if (error.name !== "AbortError") console.error(error);
      });

    return () => controller.abort();
  }, [post.slug, lang]);

  if (content === null) return <p>Loading post…</p>;

  const title = post.title[lang as keyof typeof post.title] ?? post.title.en;

  return (
    <main className={`bd-container l-main`}>
      <article className={styles['blog-post']}>
        <header className={styles.postHeader}>
          <a href="#" onClick={(e) => { e.preventDefault(); window.print(); }}><i className="fas fa-print" aria-hidden="true"></i> <span data-i18n="print">Print</span></a>
          <a href="/#/blog"><i className="fas fa-arrow-left" aria-hidden="true"></i> <span data-i18n="back_to_blog">Back to Blog</span></a>
        </header>
        <h1>{title}</h1>
        <time>{post.date}</time>
        <ReactMarkdown>{content}</ReactMarkdown>
        <a href="/#/blog" className={styles.backLink}><i className="fas fa-arrow-left" aria-hidden="true"></i> <span data-i18n="back_to_blog">Back to Blog</span></a>
      </article>
    </main>
  );
}
