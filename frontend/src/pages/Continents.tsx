import { useQuery } from "@apollo/client";
import { GET_ALL_CONTINENTS } from "../api/operations.ts";

// Typage de Continent
type Continent = {
  id: number;
  name: string;
}

export default function Continents() {

  const {loading, error, data} = useQuery(GET_ALL_CONTINENTS);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <h1>Continents</h1>

      <section>
        {data?.continents.map((currContinent: Continent) => (
          <p key={currContinent.id}>Nom: {currContinent.name}</p>
        ))}
      </section>
    </>
  )
}

/*
{data?.nomDeLaQueryDansLeResolver.faireDesTrucs}
Ne pas oublier la key={truc unique propre à l'élément courant} dans les map()
 */