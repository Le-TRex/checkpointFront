import { useParams } from "react-router-dom";
import { GET_ONE_COUNTRY } from "../api/operations.ts";
import { useQuery } from "@apollo/client";


const CountryDetails = () => {
  const { code } = useParams();

  const {loading, error, data} = useQuery(GET_ONE_COUNTRY, {
    variables: {code},
  });

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  console.log(data);
  return (
    <div>
      <p>Name: {data?.country.name}</p>
      <p>Code: {data?.country.code}</p>
      <p>Emoji: {data?.country.emoji}</p>
      <p>Continent: {data?.country.continent.name}</p>
    </div>
  )
}

export default CountryDetails;