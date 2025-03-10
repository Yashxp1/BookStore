import React from 'react';
import { useState, useEffect } from 'react';

const Recommended = () => {
  const [books, setBooks] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState('Choose a genre');

  useEffect(() => {
    fetch('books.json')
      .then((res) => res.json())
      .then((data) => setBooks(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl font-semibold mb-6 ">Recommended for you</h1>
    </div>
  );
};

export default Recommended;
