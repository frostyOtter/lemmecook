import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

interface SearchResult {
  name: string;
  imagePath: string;
}

const SearchResultPage = () => {
  const location = useLocation();
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);

  useEffect(() => {
    // Extract the search query from the location state
    const searchQuery = location.state as string;

    // Make a GET request to the search API
    fetch(`http://localhost:8800/search_multi_features`)
      .then((response) => response.json())
      .then((data) => {
        // Set the search results to state
        setSearchResults(data.results);
      })
      .catch((error) => {
        console.error("Error fetching search results:", error);
      });
  }, [location]);

  return (
    <div>
      <h1>Search Results</h1>
      {searchResults.map((result, index) => (
        <div key={index}>
          <h2>{result.name}</h2>
          <img src={result.imagePath} alt={result.name} />
        </div>
      ))}
    </div>
  );
};

export default SearchResultPage;

// import { useSearchRestaurants } from "@/api/RestaurantApi";
// // import CuisineFilter from "@/components/CuisineFilter";
// // import PaginationSelector from "@/components/PaginationSelector";
// import SearchBar, { SearchForm } from "@/components/SearchBar";
// import SearchResultCard from "@/components/SearchResultCard";
// import SearchResultInfo from "@/components/SearchResultInfo";
// import SortOptionDropdown from "@/components/SortOptionDropdown";
// import { useState } from "react";
// import { useParams } from "react-router-dom";

// export type SearchState = {
//   searchQuery: string;
//   page: number;
//   selectedCuisines: string[];
//   sortOption: string;
// };

// const SearchPage = () => {
//   const { city } = useParams();
//   const [searchState, setSearchState] = useState<SearchState>({
//     searchQuery: "",
//     page: 1,
//     selectedCuisines: [],
//     sortOption: "bestMatch",
//   });

// //   const [isExpanded, setIsExpanded] = useState<boolean>(false);

//   const { results, isLoading } = useSearchRestaurants(searchState, city);

//   const setSortOption = (sortOption: string) => {
//     setSearchState((prevState) => ({
//       ...prevState,
//       sortOption,
//       page: 1,
//     }));
//   };

// //   const setSelectedCuisines = (selectedCuisines: string[]) => {
// //     setSearchState((prevState) => ({
// //       ...prevState,
// //       selectedCuisines,
// //       page: 1,
// //     }));
// //   };

// //   const setPage = (page: number) => {
// //     setSearchState((prevState) => ({
// //       ...prevState,
// //       page,
// //     }));
// //   };

//   const setSearchQuery = (searchFormData: SearchForm) => {
//     setSearchState((prevState) => ({
//       ...prevState,
//       searchQuery: searchFormData.searchQuery,
//       page: 1,
//     }));
//   };

//   const resetSearch = () => {
//     setSearchState((prevState) => ({
//       ...prevState,
//       searchQuery: "",
//       page: 1,
//     }));
//   };

//   if (isLoading) {
//     <span>Loading ...</span>;
//   }

//   if (!results?.data || !city) {
//     return <span>No results found</span>;
//   }

//   return (
//     <div className="grid grid-cols-1 lg:grid-cols-[250px_1fr] gap-5">
//       <div id="cuisines-list">
//       </div>
//       <div id="main-content" className="flex flex-col gap-5">
//         <SearchBar
//           searchQuery={searchState.searchQuery}
//           onSubmit={setSearchQuery}
//           placeHolder="Search by Cuisine or Restaurant Name"
//           onReset={resetSearch}
//         />
//         <div className="flex justify-between flex-col gap-3 lg:flex-row">
//           <SearchResultInfo total={results.pagination.total} city={city} />
//           <SortOptionDropdown
//             sortOption={searchState.sortOption}
//             onChange={(value) => setSortOption(value)}
//           />
//         </div>

//         {results.data.map((restaurant) => (
//           <SearchResultCard restaurant={restaurant} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SearchPage;