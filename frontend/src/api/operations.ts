import { gql } from "@apollo/client";

export const GET_ALL_CONTINENTS = gql `
query Continents {
  continents {
    id
    name
  }
}
`;

export const GET_ALL_COUNTRIES = gql `
  query Countries {
    countries {
      id
      code
      name
      emoji
    }
  }
`;

export const GET_ONE_COUNTRY = gql `
query Country($code: String!) {
  country(code: $code) {
    id
    name
    code
    emoji
    continent {
      id
      name
    }
  }
}
`;



/* 
export const <NOM_DU_COLIS_QUI_CONTIENT_LA_REQUÊTE_AU_BACK> = gql `
<type (query ou mutation)><nom qu'on veut donner à la query ou à la mutation> {
  <Le nom que porte la query ou la mutation dans le resolver> {
    <Liste des propriétés qu'on veut récupérer>
  }
}
`; 
*/