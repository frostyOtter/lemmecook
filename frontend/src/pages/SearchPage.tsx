import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

type SearchResult = {
  _index: string;
  _id: string;
  _score: number;
  _ignored?: string[];
  _source: {
    title: string;
    ingredients: string;
    time: number;
    cook: string;
    images: string;
  };
};

const SearchPage = () => {
  const location = useLocation();
  const { searchQuery } = location.state as { searchQuery: string };
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error] = useState<string | null>(null);

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await fetch(`http://localhost:8800/search_multi_features?user_input=${encodeURIComponent(searchQuery)}`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        setLoading(false);
      }
    };

    if (searchQuery) {
      fetchSearchResults();
    }
  }, [searchQuery]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-col gap-12">
      <h1 className="text-3xl font-bold text-center">Search Results</h1>
      {searchResults.length > 0 ? (
        <ul>
          {searchResults.map((result) => (
            <li key={result._id} className="border p-4 rounded shadow mb-4">
              <h2 className="text-xl font-bold">{result._source.title}</h2>
                <img srcSet={result._source.images}/>
              <p><strong>Ingredients:</strong> {result._source.ingredients}</p>
              <p><strong>Time:</strong> {result._source.time} minutes</p>
              <p>{result._source.cook}</p>
            </li>
          ))}
        </ul>
      ) : (
        <div>Sorry, not found</div>
      )}
    </div>
  );
};

export default SearchPage;
