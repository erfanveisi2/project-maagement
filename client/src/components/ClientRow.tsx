import React from "react";
import { FaTrash } from "react-icons/fa";

function ClientRow({ client }: { client: any }) {
  return (
    <tr>
      <td>{client.name}</td>
      <td>{client.phone}</td>
      <td>{client.email}</td>
      <td>
        <button className="btn btn-danger btn-sm">
          <FaTrash />
        </button>
      </td>
    </tr>
  );
}
export default ClientRow;
