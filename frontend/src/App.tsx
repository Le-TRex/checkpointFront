import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/Home";
import Continents from "./pages/Continents";
import Countries from "./pages/Countries";
import CountryDetails from "./pages/CountryDetails";
import { PageLayout } from "./components/Layout";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const client = new ApolloClient({
  uri: "/api",
  cache: new InMemoryCache(),
  credentials: "same-origin",
});

function App() {
  return (
    <ApolloProvider client={client}>
      <BrowserRouter>
        <Routes>
          <Route Component={PageLayout}>
            <Route path="/" Component={HomePage} />
            <Route path="/continents" Component={Continents} />
            <Route path="/countries" Component={Countries} />
            <Route path="/countries/:code" Component={CountryDetails} />
            {/* <Route path="*" Component={() => <Navigate to="/" />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </ApolloProvider>
  );
}

export default App;
