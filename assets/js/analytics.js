// ==================== LOCAL ANALYTICS ====================
// All data stored in browser localStorage - no external server needed

const Analytics = {
  // Initialize all trackers
  init() {
    this.trackPageViews();
    this.trackSectionVisits();
    this.trackScrollDepth();
    this.trackButtonClicks();
    this.trackThemeToggle();
    this.trackLinkClicks();
    this.displayStats();
  },

  // Helper: send GA4 event if gtag is available
  gaEvent(name, params = {}) {
    if (typeof window.gtag === "function") {
      window.gtag("event", name, params);
    }
  },

  // 1. Track total page views
  trackPageViews() {
    let views = localStorage.getItem("portfolio_views") || 0;
    views = Number(views) + 1;
    localStorage.setItem("portfolio_views", views);
    const lastVisit = new Date().toLocaleString();
    localStorage.setItem("portfolio_lastVisit", lastVisit);
  },

  // 2. Track which sections users visit
  trackSectionVisits() {
    const sections = ["#home", "#education", "#experience", "#projects"];
    
    sections.forEach(section => {
      const element = document.querySelector(section);
      if (!element) return;

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const sectionName = section.substring(1); // remove #
            let sectionVisits = JSON.parse(localStorage.getItem("portfolio_sections") || "{}");
            sectionVisits[sectionName] = (sectionVisits[sectionName] || 0) + 1;
            localStorage.setItem("portfolio_sections", JSON.stringify(sectionVisits));
            console.log(`📍 Visited section: ${sectionName}`);
            // GA: section viewed
            Analytics.gaEvent("view_section", { section_name: sectionName });
          }
        });
      });
      observer.observe(element);
    });
  },

  // 3. Track scroll depth (how far down the page users scroll)
  trackScrollDepth() {
    let maxScroll = 0;
    const thresholds = new Set(); // ensure each threshold only fires once
    window.addEventListener("scroll", () => {
      const scrollPercent = Math.round(
        (window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)) * 100
      );
      if (scrollPercent > maxScroll) {
        maxScroll = scrollPercent;
        localStorage.setItem("portfolio_maxScroll", maxScroll);
        // GA: fire at 25/50/75/90%
        [25, 50, 75, 90].forEach(t => {
          if (maxScroll >= t && !thresholds.has(t)) {
            thresholds.add(t);
            Analytics.gaEvent("scroll_depth", { percent: t });
          }
        });
      }
    });
  },

  // 4. Track specific button clicks (CV, social, projects)
  trackButtonClicks() {
    // CV Download
    const cvButton = document.querySelector('a[download="Laia_Querol_Alturo_CV.pdf"]');
    if (cvButton) {
      cvButton.addEventListener("click", () => {
        let cvDownloads = localStorage.getItem("portfolio_cvDownloads") || 0;
        cvDownloads = Number(cvDownloads) + 1;
        localStorage.setItem("portfolio_cvDownloads", cvDownloads);
        console.log(`📥 CV downloaded (${cvDownloads} total)`);
        // GA: CV download
        Analytics.gaEvent("file_download", {
          file_name: "Laia_Querol_Alturo_CV.pdf",
          link_id: "cv_button"
        });
      });
    }

    // Social media clicks
    const socialLinks = {
      github: 'a[href*="github.com"]',
      linkedin: 'a[href*="linkedin.com"]',
      spotify: 'a[href*="spotify.com"]'
    };

    Object.entries(socialLinks).forEach(([platform, selector]) => {
      const links = document.querySelectorAll(selector);
      links.forEach(link => {
        link.addEventListener("click", () => {
          let socialClicks = JSON.parse(localStorage.getItem("portfolio_socialClicks") || "{}");
          socialClicks[platform] = (socialClicks[platform] || 0) + 1;
          localStorage.setItem("portfolio_socialClicks", JSON.stringify(socialClicks));
          console.log(`🔗 ${platform} clicked (${socialClicks[platform]} total)`);
          // GA: social click
          Analytics.gaEvent("click_social", { social_platform: platform, link_url: link.href });
        });
      });
    });

    // Project/external links
    document.addEventListener("click", (event) => {
      const link = event.target.closest("a");
      if (link && (link.href.includes("github.com") || link.href.includes("theuselessweb.com") || link.href.includes("linkedin.com"))) {
        let externalClicks = localStorage.getItem("portfolio_externalClicks") || 0;
        externalClicks = Number(externalClicks) + 1;
        localStorage.setItem("portfolio_externalClicks", externalClicks);
        // GA: outbound click
        Analytics.gaEvent("click_outbound", { link_url: link.href });
      }
    });
  },

  // 5. Track theme toggle usage
  trackThemeToggle() {
    const themeToggle = document.getElementById("themeToggle") || document.getElementById("checkbox");
    const themeSwitch = document.querySelector("input[type='checkbox']");

    if (themeToggle) {
      themeToggle.addEventListener("change", (e) => {
        const isDark = e.target.checked;
        let themeToggles = JSON.parse(localStorage.getItem("portfolio_themeToggles") || "{}");
        themeToggles[isDark ? "dark" : "light"] = (themeToggles[isDark ? "dark" : "light"] || 0) + 1;
        localStorage.setItem("portfolio_themeToggles", JSON.stringify(themeToggles));
        console.log(`🎨 Theme toggled to ${isDark ? "dark" : "light"}`);
        // GA: theme toggle
        Analytics.gaEvent("theme_toggle", { theme: isDark ? "dark" : "light" });
      });
    }
  },

  // 6. Track all external link clicks
  trackLinkClicks() {
    document.addEventListener("click", (event) => {
      const link = event.target.closest("a");
      if (link && link.target === "_blank") {
        const url = link.href;
        let linkClicks = JSON.parse(localStorage.getItem("portfolio_linkClicks") || "{}");
        linkClicks[url] = (linkClicks[url] || 0) + 1;
        localStorage.setItem("portfolio_linkClicks", JSON.stringify(linkClicks));
      }
    });
  },

  // Display all analytics in console
  displayStats() {
    setTimeout(() => {
      console.log(
        "%c📊 PORTFOLIO ANALYTICS",
        "font-size: 16px; font-weight: bold; color: #f76c6c;"
      );
      console.log(
        `Page Views: ${localStorage.getItem("portfolio_views") || 0}`
      );
      console.log(
        `Max Scroll Depth: ${localStorage.getItem("portfolio_maxScroll") || 0}%`
      );
      console.log(
        `CV Downloads: ${localStorage.getItem("portfolio_cvDownloads") || 0}`
      );
      console.log(
        "Sections Visited:",
        JSON.parse(localStorage.getItem("portfolio_sections") || "{}")
      );
      console.log(
        "Social Clicks:",
        JSON.parse(localStorage.getItem("portfolio_socialClicks") || "{}")
      );
      console.log(
        "Theme Preference:",
        JSON.parse(localStorage.getItem("portfolio_themeToggles") || "{}")
      );
      console.log(
        "Last Visit:",
        localStorage.getItem("portfolio_lastVisit") || "Never"
      );
      console.log(
        "%cClear all data: localStorage.clear()",
        "color: #a8d0e6; font-style: italic;"
      );
    }, 1000);
  }
};

// Start tracking when page loads
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", () => Analytics.init());
} else {
  Analytics.init();
}
