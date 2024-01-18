import React from "react";
import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import DELETE_CLIENT from "../mutations/removeClient";
import GET_CLIENTS from "../queries/clientQueries";

function ClientRow({ client }: { client: any }) {
  const [deleteClient] = useMutation(DELETE_CLIENT, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }],
  });
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.phone}</td>
      <td>{client.email}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient as any}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
export default ClientRow;
