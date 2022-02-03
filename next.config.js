const API_KEY = process.env.API_KEY;
const ENPOINT = "https://api.themoviedb.org/3/";

module.exports = {
  reactStrictMode: true,
  async redirects () {
    return [
      {
        source: "/contact",
        destination: "/form",
        permanent: false,
      },
    ];
  },
  async rewrites() {
    return [
      {
        source: "/api/movies",
        destination: `${ENPOINT}movie/popular?api_key=${API_KEY}`,
      },
      {
        source: "/api/movies/:id",
        destination: `${ENPOINT}movie/:id?api_key=${API_KEY}`,
      },
    ];
  },
};
