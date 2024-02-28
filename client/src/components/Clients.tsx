import React from "react";
import { useQuery } from "@apollo/client";
import ClientRow from "./ClientRow";
import GET_CLIENTS from "../queries/clientQueries";
import Spinner from "./Spinner";
import { AddClientModal } from "./AddClientModal";
import Header from "./header";

function Clients() {
  const { loading, error, data } = useQuery(GET_CLIENTS);

  if (loading) return <Spinner />;
  if (error) return <p>something went wrong!</p>;

  return (
    <>
      {!loading && !error && (
        <div className="container">
          <Header />
          <AddClientModal />
          <table className="table table-hover mt-3">
            <thead>
              <tr>
                <th>Name</th>
                <th>Phone</th>
                <th>Email</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {data.clients.map((client: any) => (
                <ClientRow key={client.id} client={client} />
              ))}
            </tbody>
          </table>
        </div>
      )}
    </>
  );
}

export default Clients;
