import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "../redux/userSlice";
import { useNavigate } from "react-router-dom";
import UserCard from "../components/UserCard";

const UserList = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { users, loading, error } = useSelector((state) => state.users);
  const [search, setSearch] = useState("");

  useEffect(() => {
    dispatch(fetchUsers());
  }, [dispatch]);

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(search.toLowerCase()) ||
      user.email.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="p-6">
      <div className="flex justify-between items-center mb-6">
        <input
          type="text"
          placeholder="Search by name or email..."
          className="border p-3 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-blue-400 transition"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <button
          onClick={() => navigate("/add-user")}
          className="ml-4 bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
        >
          Add New User
        </button>
      </div>
      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}
      <div className="grid gap-6 grid-cols-1 md:grid-cols-3">
        {filteredUsers.map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
      </div>
    </div>
  );
};

export default UserList;
