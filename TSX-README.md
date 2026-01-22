# React + TypeScript Portfolio Structure

## 🎯 Overview
This branch uses React with TypeScript (TSX) to create reusable components. Now you can use components like Header, Footer, and pages as building blocks without copy-pasting code!

## 📁 Project Structure
```
src/
├── components/          # Reusable components
│   ├── Header.tsx      # Navigation header (appears on all pages)
│   └── Footer.tsx      # Footer (appears on all pages)
├── pages/              # Page components
│   ├── Home.tsx        # Home page content
│   └── Blog.tsx        # Blog page content
├── App.tsx             # Main app with routing
├── main.tsx            # Entry point
└── index.css           # Global styles
```

## 🚀 Getting Started

### Install dependencies (if not already done):
```bash
npm install
```

### Run the development server:
```bash
npm run dev
```

This will start Vite and your site will be available at `http://localhost:5173`

### Build for production:
```bash
npm run build
```

The build output will be in the `dist/` folder.

## 🧩 How It Works

### Components (Building Blocks)
Components are reusable pieces of UI that you can use across multiple pages:

- **Header.tsx**: Navigation bar with theme toggle, language selector, and menu
- **Footer.tsx**: Site footer with links and copyright

### Pages
Pages are full content sections:

- **Home.tsx**: Your main portfolio page
- **Blog.tsx**: Example blog page

### Main App (App.tsx)
The App component brings everything together:

```tsx
<Router>
  <Header />        {/* Shows on every page */}
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/blog" element={<Blog />} />
  </Routes>
  <Footer />        {/* Shows on every page */}
</Router>
```

## ✨ Adding a New Page

1. **Create a new page component** in `src/pages/`:
```tsx
// src/pages/Projects.tsx
import React from 'react';

const Projects: React.FC = () => {
  return (
    <main className="l-main">
      <section className="projects section">
        <h2>My Projects</h2>
        {/* Your content here */}
      </section>
    </main>
  );
};

export default Projects;
```

2. **Add the route** in `src/App.tsx`:
```tsx
import Projects from './pages/Projects';

// In the Routes section:
<Route path="/projects" element={<Projects />} />
```

3. **Add navigation link** in `src/components/Header.tsx`:
```tsx
<Link to="/projects" className="nav__link">Projects</Link>
```

That's it! The Header and Footer will automatically appear on your new page.

## 🎨 Styling
Your existing CSS files in `assets/css/` are imported and will work with the TSX components. You can continue using the same class names.

## 🔄 Navigation
The site uses React Router for client-side navigation:
- Use `<Link to="/path">` instead of `<a href="/path">` for internal links
- Use regular `<a>` tags for external links or hash links (#home, #about, etc.)

## 📦 What's Different from Static HTML?

### Before (Static HTML):
- Header and footer HTML copied in every page
- Changing header means editing all pages
- Full page reload on navigation

### Now (React + TSX):
- Header and footer defined once
- Change header in one place, updates everywhere
- Smooth navigation without page reload
- Type safety with TypeScript

## 🛠️ Development Tips

- **Hot reload**: Save any file and see changes instantly
- **Component reuse**: Create components for anything you use more than once
- **TypeScript**: Get autocomplete and catch errors before runtime
- **Props**: Pass data to components:
  ```tsx
  <Header username="Laia" />
  ```

## 🌐 Deployment
When you build (`npm run build`), all TSX is compiled to optimized JavaScript in the `dist/` folder. Deploy that folder to your hosting service.

---

Happy coding! 🚀
