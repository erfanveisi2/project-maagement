import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Clients from "./components/Clients";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Projects from "./components/Projects";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div className="container">
        <BrowserRouter>
          <Routes>
            <Route path="projects" element={<Projects />} />
            <Route path="/" element={<Clients />} />
          </Routes>
        </BrowserRouter>
      </div>
    </ApolloProvider>
  );
}

export default App;
