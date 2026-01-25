import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { posts } from "../content/blog";
import styles from './styles/BlogIntro.module.css';

function getCurrentLang() {
  return localStorage.getItem("lang") || "en";
}

export default function BlogIntro() {
    const [lang, setLang] = useState<string>(() => getCurrentLang());
    const recentPosts = posts.slice(0, 3);
    const topPosts = posts.slice(0, 2); // example

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
        <div className={styles.BlogIntro}>
            <h1>Blog</h1>
            <p>Welcome to my blog</p>
            <section className={styles.PostCards}>
                <h2 data-i18n="recent_posts">Recent Posts</h2>
                <div className={styles.Cards}>
                    {recentPosts.map((post) => (
                        <div key={post.slug} className={styles.Card}>
                        <h3>{post.title[lang as keyof typeof post.title] ?? post.title.en}</h3>
                        <time>{post.date}</time>
                        <p>{post.excerpt[lang as keyof typeof post.excerpt] ?? ""}</p>
                        <Link to={`/blog/${post.slug}`} className={styles.ReadMore}><span data-i18n="read_more">Read More</span><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    ))}
                </div>
                <h2 data-i18n="top_posts">Top Posts</h2>
                <div className={styles.Cards}>
                    {topPosts.map((post) => (
                        <div key={post.slug} className={styles.Card}>
                        <h3>{post.title[lang as keyof typeof post.title] ?? post.title.en}</h3>
                        <time>{post.date}</time>
                        <p>{post.excerpt[lang as keyof typeof post.excerpt] ?? ""}</p>
                        <Link to={`/blog/${post.slug}`} className={styles.ReadMore}><span data-i18n="read_more">Read More</span><i className="fa fa-arrow-right"></i></Link>
                        </div>
                    ))}
                </div>
            </section>
        </div>
    );
};