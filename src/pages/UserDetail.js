import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const UserDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { users } = useSelector((state) => state.users);

  const user = users.find((user) => user.id.toString() === id);

  if (!user) {
    return (
      <div className="flex justify-center items-center bg-gray-100 min-h-screen">
        <p className="text-center text-red-500 text-xl font-semibold">
          User not found.
        </p>
      </div>
    );
  }

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="bg-gradient-to-r from-blue-100 to-blue-50 shadow-lg rounded-lg p-8 mx-auto max-w-2xl border border-gray-300">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold text-gray-800">{user.name}</h1>
          <button
            onClick={() => navigate(-1)}
            className="bg-blue-500 text-white px-4 py-2 rounded-md shadow hover:bg-blue-600 transition"
          >
            Back
          </button>
        </div>
        <div className="space-y-4">
          <p className="text-gray-700">
            <strong>Email:</strong>{" "}
            <span className="text-gray-600">{user.email}</span>
          </p>
          <p className="text-gray-700">
            <strong>Phone:</strong>{" "}
            <span className="text-gray-600">{user.phone}</span>
          </p>
          <p className="text-gray-700">
            <strong>Website:</strong>{" "}
            <a
              href={`https://${user.website}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              {user.website}
            </a>
          </p>
          <p className="text-gray-700">
            <strong>Company:</strong>{" "}
            <span className="text-gray-600">{user.company.name}</span>
          </p>
          <p className="text-gray-700">
            <strong>Address:</strong>{" "}
            <span className="text-gray-600">{`${user.address.suite}, ${user.address.street}, ${user.address.city}`}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default UserDetail;
