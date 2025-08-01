import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => (
  <div className="h-screen flex flex-col items-center justify-center text-center px-6">
    <h1 className="text-6xl font-bold text-gray-700">404</h1>
    <p className="text-lg text-gray-500 mt-4">Oops! Page not found.</p>
    <Link to="/" className="mt-6 text-indigo-600 hover:underline">← Go Home</Link>
  </div>
);

export default NotFound;