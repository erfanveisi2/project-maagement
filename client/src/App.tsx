import Header from "./components/header";
import { ApolloProvider, ApolloClient, InMemoryCache } from "@apollo/client";
import Clients from "./components/Clients";
import { AddClientModal } from "./components/AddClientModal";

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <Header />
      <div className="container">
        <AddClientModal />
        <Clients />
      </div>
    </ApolloProvider>
  );
}

export default App;
