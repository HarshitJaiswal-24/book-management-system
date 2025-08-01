import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const BookDetails = () => {
  const { id } = useParams();
  const book = useSelector((state) => state.books.books.find((b) => b.id === id));

  if (!book) return <p className="text-center mt-20">Book not found.</p>;

  return (
    <div className="max-w-2xl mx-auto bg-white p-6 mt-10 rounded-xl shadow">
      <h2 className="text-3xl font-bold text-indigo-700 mb-2">{book.title}</h2>
      <p className="text-gray-600 mb-4">by {book.author}</p>
      <p className="mb-2">{book.description}</p>
      <p className="text-yellow-500">Rating: ⭐ {book.rating}</p>
      <Link
        to="/browse"
        className="mt-4 inline-block text-indigo-600 hover:underline"
      >
        ← Back to Browse
      </Link>
    </div>
  );
};

export default BookDetails;