import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "../assets/css/fetch.css";

export default function FetchPage() {
  const [users, setUsers] = useState([]);

  useEffect(
    () => {
      // TODO: FETCH USERS FROM: https://jsonplaceholder.typicode.com/users
    },
    [
      // TODO: THINK ABOUT IF THERE SHOULD BE ANY DEPENDENCIES HERE?
    ]
  );

  return (
    <div className="usersList">
      <h1>Fetch exercise</h1>
      {users.map(user => (
        <Link key={user.id} to={`/fetch/${user.id}`}>
          {user.name}
        </Link>
      ))}
    </div>
  );
}
