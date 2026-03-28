import { useState, useEffect } from "react";

function SearchBar({ onSearch }) {

  const [query, setQuery] = useState("");

  useEffect(() => {
    onSearch(query);
  }, [query, onSearch]);

  return (

    <input
      type="text"
      placeholder="Search tasks..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      className="w-full p-2.5 rounded-md border 
      bg-white dark:bg-gray-800 
      border-gray-300 dark:border-gray-700
      text-gray-900 dark:text-white 
      placeholder-gray-400 dark:placeholder-gray-500
      focus:outline-none focus:ring-1 focus:ring-gray-400 dark:focus:ring-gray-600"
    />

  );
}

export default SearchBar;