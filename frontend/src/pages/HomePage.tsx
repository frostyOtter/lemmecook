import SearchBar, { SearchForm } from "@/components/SearchBar";
import landingImage from "../assets/case_banner.png";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "@/components/ui/button";

function HomePage() {
  // Hooks for authentication
    const { loginWithRedirect, isAuthenticated } = useAuth0();
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState<string>("");

    const handleSearchSubmit = async (searchFormValues: SearchForm) => {
        navigate("/search-result", { state: { searchQuery: searchFormValues.searchQuery } });
    };

    return (
        <div className="flex flex-col gap-12">
            {isAuthenticated ? (
            <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 px-10">
                <h1 className="text-5xl font-bold tracking-tight text-orange-500">
                    Search with any ingredients in your fridge
                </h1>
                <span>Recipes in just a click</span>
                <SearchBar
                    searchQuery={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    placeholder="Search by ingredient or recipe name"
                    onSubmit={handleSearchSubmit}
                />
            </div>
            ) : (
                // Show login button if not authenticated
                <Button 
                variant="ghost" 
                className="font-bold text-orange-500 hover:text-yellow-500 hover:bg-black"
                onClick={async () => await loginWithRedirect()}
                >
                Login to unlock Search
                </Button>
                )}
            <div className="grid md:grid-cols-2 gap-5">
                <img src={landingImage} alt="Landing" />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-orange-500 text-3xl tracking-tighter">
                        Unlock even more features!
                    </span>
                    <span className="text-black-500 font-bold">
                        Subscribe now for only $1/month
                    </span>
                </div>
            </div>
            <div className="">
                <img src={landingImage} alt="Landing" />
                <div className="flex flex-col items-center justify-center gap-4 text-center">
                    <span className="font-bold text-orange-500 text-3xl tracking-tighter">
                        Unlock even more features!
                    </span>
                    <span className="text-black-500 font-bold">
                        Subscribe now for only $1/month
                    </span>
                </div>
            </div>
        </div>
    );
}

export default HomePage;

// import SearchBar, { SearchForm } from "@/components/SearchBar";
// import landingImage from "../assets/case_banner.png";
// import { useNavigate } from "react-router-dom";
// import { useState } from "react";

// function HomePage() {
//     const navigate = useNavigate();
//     const [searchTerm, setSearchTerm] = useState<string>("");

//     const handleSearchSubmit = (searchFormValues: SearchForm) => {
//         navigate("/search-result", { state: { searchQuery: searchFormValues.searchQuery } });
//     };
//     const handleResetClick = () => {
//         setSearchTerm(""); // Reset the search term state
//         // Since we're not using the SearchForm values anymore, we can safely ignore the reset
//     };

//     return (
//         <div className="flex flex-col gap-12">
//             <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16 px-10">
//                 <h1 className="text-5xl font-bold tracking-tight text-orange-500">
//                     Search with any ingredients in your fridge
//                 </h1>
//                 <span>Recipes in just a click</span>
//                 <SearchBar
//                     searchQuery={searchTerm}  // Make the SearchBar controlled
//                     onChange={(e) => setSearchTerm(e.target.value)}  // Update state on change
//                     placeholder="Search by ingredient or recipe name"
//                     onSubmit={handleSearchSubmit}
//                     onReset={handleResetClick}
//                 />
//             </div>
//             <div className="grid md:grid-cols-2 gap-5">
//                 <img src={landingImage} alt="Landing" />
//                 <div className="flex flex-col items-center justify-center gap-4 text-center">
//                     <span className="font-bold text-orange-500 text-3xl tracking-tighter">
//                         Unlock even more features!
//                     </span>
//                     <span className="text-black-500 font-bold">
//                         Subscribe now for only $1/month
//                     </span>
//                 </div>
//             </div>
//             <div className="">
//                 <img src={landingImage} alt="Landing" />
//                 <div className="flex flex-col items-center justify-center gap-4 text-center">
//                     <span className="font-bold text-orange-500 text-3xl tracking-tighter">
//                         Unlock even more features!
//                     </span>
//                     <span className="text-black-500 font-bold">
//                         Subscribe now for only $1/month
//                     </span>
//                 </div>
//             </div>
//         </div>
//     );
// }

// export default HomePage;
