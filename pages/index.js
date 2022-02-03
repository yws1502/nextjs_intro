import { useEffect, useState } from "react";
import Seo from "../components/Seo"

const ENDPOINT = "https://api.themoviedb.org/3/";

export default function Home () {
  const [ movies, setMovies ] = useState();

  useEffect(() => {
    (async () => {
      const { results } = await (
        await fetch(`${ENDPOINT}movie/popular?api_key=${API_KEY}`)
      ).json();
      setMovies(results)
    })();
  }, []);

  return (
    <div>
      <Seo title="Home" />
      <h1 className="active">Hello</h1>
      {!movies && <h4>Loading...</h4>}
      { movies?.map((movie) => {
        return (
          <div key={ movie.id }>
            <h4>{ movie.original_title }</h4>
          </div>
        )
      })}
    </div>
  )
}
