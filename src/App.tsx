import React, { useEffect } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Blog from './pages/Blog';
import CV from './pages/CV';
import Contact from './pages/Contact';
import Projects from './pages/Projects';
import BlogPostPage from './components/BlogPost';

const AnalyticsTracker = () => {
  useEffect(() => {
    const track = () => {
      const path = window.location.hash.replace('#', '') || '/';

      console.log("PAGEVIEW:", path);

      window.gtag?.('event', 'page_view', {
        page_path: path,
      });
    };

    // initial load
    track();

    // listen for route changes
    window.addEventListener('hashchange', track);

    return () => {
      window.removeEventListener('hashchange', track);
    };
  }, []);

  return null;
};


const App: React.FC = () => {
  return (
    <Router>
      <AnalyticsTracker />
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/cv" element={<CV />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/blog/:slug" element={<BlogPostPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
