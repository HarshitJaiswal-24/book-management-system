import React from 'react';
import { Link } from 'react-router-dom';

const categories = ['Fiction', 'Non-Fiction', 'Sci-Fi'];

const Home = () => {
  return (
    <section className="text-center py-12 px-6">
      <h2 className="text-4xl font-bold text-indigo-700 mb-6">Welcome to the Online Library</h2>
      <p className="mb-8 text-gray-700">Explore a vast collection of books across genres</p>
      <div className="mb-8">
        <h3 className="text-2xl font-semibold mb-4">Categories</h3>
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <Link
              key={cat}
              to={`/books/${cat}`}
              className="bg-indigo-100 text-indigo-700 px-4 py-2 rounded-full hover:bg-indigo-200"
            >
              {cat}
            </Link>
          ))}
        </div>
      </div>
      <div>
        <h3 className="text-2xl font-semibold mb-4">Popular Books</h3>
        <Link to="/browse" className="text-indigo-600 hover:underline">Browse All Books →</Link>
      </div>
    </section>
  );
};

export default Home;