import { FaTrash } from "react-icons/fa";
import { useMutation } from "@apollo/client";
import { GET_CLIENTS } from "../graphql/queries/clientQueries";
import { EditClientModal } from "./EditClientModal";
import { RemoveClientDocument } from "../gql-codegen/graphql";

function ClientRow({ client }: { client: any }) {
  const [deleteClient] = useMutation(RemoveClientDocument, {
    variables: { id: client.id },
    refetchQueries: [{ query: GET_CLIENTS }],
  });
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.phone}</td>
      <td>{client.email}</td>
      <td>
        <EditClientModal client={client} />
      </td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={deleteClient as any}>
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
export default ClientRow;
