import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ReactMarkdown from "react-markdown";

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
    <article className="blog-post-preview">
      <header>
        <h2>{post.title[lang]}</h2>
        <time>{post.date}</time>
      </header>

      <div className="blog-post-preview-content">
        <ReactMarkdown>{content}</ReactMarkdown>
      </div>

      <footer>
        <Link to={`/blog/${post.slug}`} className="blog-read-more">
          Read post →
        </Link>
      </footer>
    </article>
  );
}
