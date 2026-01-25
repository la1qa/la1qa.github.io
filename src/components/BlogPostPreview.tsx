import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import styles from "./styles/BlogPostPreview.module.css";

type BlogPost = {
  title: Record<string, string>;
  date: string;
  slug: string;
  path: string;
};

interface BlogPostPreviewProps {
  post: BlogPost;
  lang: "en" | "ca";
}

export default function BlogPostPreview({
  post,
  lang,
}: BlogPostPreviewProps) {
  const [content, setContent] = useState("");

  useEffect(() => {
    import(/* @vite-ignore */ post.path)
      .then((module) => setContent(module.default))
      .catch((err) => console.error("Failed to load preview:", err));
  }, [post]);

  return (
    <article className={styles["blog-post"]}>
      <header>
        <h2>{post.title[lang]}</h2>
        <time>{post.date}</time>
      </header>
      <div>
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>

      <footer>
        <Link to={`/blog/${post.slug}`} className={styles["blog-read-more"]}>
          <span data-i18n="read_more">Read More</span><i className="fas fa-arrow-right" aria-hidden="true"></i>
        </Link>
      </footer>
    </article>
  );
}
