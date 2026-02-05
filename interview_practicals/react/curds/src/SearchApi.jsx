import React, { useEffect, useState } from "react";
import axios from "axios";

function SearchApi() {
  const [users, setUsers] = useState([]);
  const [search, setSearch] = useState("");

  // Fetch data
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then(res => setUsers(res.data))
      .catch(err => console.log(err));
  }, []);

  // Filter users
  const filteredUsers = users.filter(user =>
    user.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div style={{ padding: "20px", maxWidth: "500px" }}>
      <h2>User Search (API)</h2>

      <input
        type="text"
        placeholder="Search user..."
        value={search}
        onChange={e => setSearch(e.target.value)}
        style={{ width: "100%", padding: "8px", marginBottom: "15px" }}
      />

      {filteredUsers.map(user => (
        <div
          key={user.id}
          style={{
            border: "1px solid #d63838",
            padding: "10px",
            marginBottom: "5px"
          }}
        >
          <strong>{user.name}</strong>
          <p>{user.email}</p>
        </div>
      ))}
    </div>
  );
}

export default SearchApi;
