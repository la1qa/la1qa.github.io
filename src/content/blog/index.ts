export const posts = [
  {
    title: {
        'en': "Hello World",
        'ca': "Hola Món",
    },
    date: "2026-01-23",
    slug: "2026-01-hello",
    excerpt: {
      "en": "My first blog post introducing the new blog section of my portfolio.",
      "ca": "El meu primer article de bloc que introdueix la nova secció de bloc del meu portafoli."
    },
  },
  {
    title: {
        'en': "Portfolio",
        'ca': "Portfoli",
    },
    date: "2026-01-24",
    slug: "2026-01-portfolio",
    excerpt: {
      "en": "An overview of my portfolio showcasing various projects and skills.",
      "ca": "Una visió general del meu portafoli que mostra diversos projectes i habilitats."
    },
  },
  {
    title: {
        'en': "SAF-Wrapped",
        'ca': "SAF-Wrapped",
    },
    date: "2026-01-25",
    slug: "2026-01-saf",
    excerpt: {
      "en": "Visualizes usage patterns of the UAB Physical Activity Service.",
      "ca": "Visualitza els patrons d'ús del Servei d'Activitat Física de la UAB."
    },
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
