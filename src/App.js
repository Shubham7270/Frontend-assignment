import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import UserList from "./pages/UserList";
import UserDetail from "./pages/UserDetail";
import AddUser from "./pages/AddUser";

const App = () => {
  return (
    <Router>
      <div className="bg-gradient-to-b from-blue-50 to-gray-100 min-h-screen">
        {/* Header */}
        <header className="bg-blue-500 text-white py-6 shadow-md">
          <div className="container mx-auto text-center">
            <h1 className="text-3xl font-extrabold tracking-wide">
              User Management App
            </h1>
            <p className="text-blue-200 text-sm mt-2">
              View and manage user details effortlessly
            </p>
          </div>
        </header>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-8">
          <Routes>
            <Route path="/" element={<UserList />} />
            <Route path="/users/:id" element={<UserDetail />} />
            <Route path="/add-user" element={<AddUser />} />
          </Routes>
        </main>

        {/* Footer */}
        <footer className="bg-blue-600 text-white text-center py-4 mt-10">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} User Management App. All Rights
            Reserved.
          </p>
        </footer>
      </div>
    </Router>
  );
};

export default App;
