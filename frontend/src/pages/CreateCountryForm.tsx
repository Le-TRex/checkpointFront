import { useMutation, useQuery } from "@apollo/client";
import { CREATE_A_COUNTRY, GET_ALL_CONTINENTS } from "../api/operations.ts";
import { useNavigate } from "react-router-dom";

// Typage de Continent
type Continent = {
  id: number;
  name: string;
}

export default function CreateCountryForm() {

  const {loading, error, data} = useQuery(GET_ALL_CONTINENTS);
  const [addCountry, {loading: createLoading, error: createError}] = useMutation(CREATE_A_COUNTRY);

  const path = useNavigate();

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    const name = formData.get("name") as string;
    const code = formData.get("code") as string;
    const emoji = formData.get("emoji") as string;
    const continent = parseInt(formData.get("continent") as string);

    // TODO Vérifier que le pays n'existe pas déjà en DB avant d'enregistrer le nouveau pays
    try {
      await addCountry({
        variables: {data: {
          name,
          code,
          emoji,
          continent: {
            id: continent
          }
        }},
      })
      if (createLoading) return "Loading...";
      form.reset();
      path("/countries");
    } catch {
      console.error(`${createError?.message}`)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input type="text" name="name" required/>

      <label htmlFor="code">Code</label>
      <input type="text" name="code" required/>

      <label htmlFor="emoji">Emoji</label>
      <input type="text" name="emoji" required/>

      <label htmlFor="continent">Continent</label>
      <select name="continent" id="continent">
        {data?.continents.map((currContinent: Continent) => (
          <option key={currContinent.id} value={currContinent.id}>{currContinent.name}</option>
        ))}
      </select>

      <button type="submit">Add</button>
  </form>
  )
}

