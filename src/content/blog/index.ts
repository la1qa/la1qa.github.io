export const posts = [
  {
    title: {
        'en': "Hello World",
        'ca': "Hola Món",
    },
    date: "2026-01-23",
    slug: "2026-01-hello",
  },
  {
    title: {
        'en': "Portfolio",
        'ca': "Portfoli",
    },
    date: "2026-01-24",
    slug: "2026-01-portfolio",
  },
].sort((a, b) => b.date.localeCompare(a.date));
