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
  {
    title: {
        'en': "SAF-Wrapped",
        'ca': "SAF-Wrapped",
    },
    date: "2026-01-25",
    slug: "saf-wrapped",
  },
].sort((a, b) => b.date.localeCompare(a.date));

const archive = posts.reduce((acc, post) => {
  const [year, month] = post.date.split("-");

  acc[year] ??= {};
  acc[year][month] ??= [];

  acc[year][month].push(post);

  return acc;
}, {} as Record<string, Record<string, typeof posts>>);

export default archive;
