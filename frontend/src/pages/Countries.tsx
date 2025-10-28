import { useQuery } from "@apollo/client";
import { GET_ALL_COUNTRIES } from "../api/operations.ts";
import { Link } from "react-router-dom";

// Typage de Country
type Country = {
  id: number;
  code: string;
  name: string;
  emoji: string;
}

export default function Countries() {

  const {loading, error, data} = useQuery(GET_ALL_COUNTRIES);

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <>
      <h1>Countries</h1>

      <section>
        {data?.countries.map((currCountry: Country) => (
          <div key={currCountry.id}>
            <Link key={currCountry.id} to={`/countries/${currCountry.code}`}>
              <p>Name: {currCountry.name}</p>
            </Link>
            <p>Code: {currCountry.code}</p>
            <p>Emoji: {currCountry.emoji}</p>
          </div>
        ))}
      </section>

      <Link to={"/createCountry"}>
        <button>Add a country</button>
      </Link>
    </>
  )
}