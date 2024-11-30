import React from "react";
import { Link } from "react-router-dom";

const UserCard = ({ user }) => {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-50 shadow-md p-4 rounded-md transition transform hover:-translate-y-1 hover:shadow-lg border border-gray-300">
      <h2 className="text-xl font-bold text-gray-800">{user.name}</h2>
      <p className="text-gray-600">Email: {user.email}</p>
      <p className="text-gray-600">Phone: {user.phone}</p>
      <p className="text-gray-600">Company: {user.company.name}</p>
      <Link
        to={`/users/${user.id}`}
        className="text-blue-500 hover:text-blue-700 hover:underline mt-2 block transition"
      >
        View Details
      </Link>
    </div>
  );
};

export default UserCard;
