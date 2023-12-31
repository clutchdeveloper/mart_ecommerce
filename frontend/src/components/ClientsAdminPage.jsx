import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import { Table } from "react-bootstrap";
import axios from "../axios";

export default function ClientsAdminPage() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/users")
      .then(({ data }) => {
        setLoading(false);
        setUsers(data);
        console.log(data);
      })
      .catch((error) => {
        setLoading(false);
        console.log(error);
      });
  }, []);

  if (loading) return <Loading />;

  if (users.length == 0) return <h2 className="py-2 text-center">No users yet</h2>;

    return (
    <Table responsive striped bordered hover>
      <thead>
        <tr>
          <th>Client Id</th>
          <th>Client Name</th>
          <th>Email</th>
        </tr>
      </thead>
      <tbody>
        {users.map((users) => (
          <tr>
            <td>{users._id}</td>
            <td>{users.name}</td>
            <td>{users.email}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}
