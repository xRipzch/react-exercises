import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "../assets/css/users.css";

export function User() {
  const { id } = useParams();
  const [user, setUser] = useState(null);

  useEffect(() => {
    // let interval;

    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(response => response.json())
      .then(data => {
        // (interval = setTimeout(() =>
        setUser(data), 1000;
        // ))
      });

    // return () => {
    //   clearTimeout(interval);
    // };
  }, [id]);

  return (
    <>
      {user ? (
        <div className="userCard">
          <h1>{user.name}</h1>
          <p>{user.email}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
        </div>
      ) : (
        <LoadingSpinner />
      )}
    </>
  );
}

function LoadingSpinner() {
  return (
    <div>
      <svg
        style={{ height: "18px", width: "18px", padding: "2em" }}
        className="loadingSpinner"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 512 512"
      >
        <path d="M304 48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zm0 416a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM48 304a48 48 0 1 0 0-96 48 48 0 1 0 0 96zm464-48a48 48 0 1 0 -96 0 48 48 0 1 0 96 0zM142.9 437A48 48 0 1 0 75 369.1 48 48 0 1 0 142.9 437zm0-294.2A48 48 0 1 0 75 75a48 48 0 1 0 67.9 67.9zM369.1 437A48 48 0 1 0 437 369.1 48 48 0 1 0 369.1 437z" />
      </svg>
    </div>
  );
}
