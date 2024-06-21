import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";
// import { useState } from "react";
import PremiumPage from "./pages/PremiumPage";
import SearchResultPage from "./pages/SearchPage";

const AppRoute = () => {
    // const [searchTerm, setSearchTerm] = useState("")
    // const [recipes, setRecipes] = useState([])
    return(
        <Routes>
            <Route path="/" element={<Layout><HomePage/></Layout>}/>
            <Route path="/premium" element= {<Layout><PremiumPage/></Layout>}/>
            <Route path="/search-result" element= {<Layout><SearchResultPage/></Layout>}/>
            <Route path= "*" element={ <Navigate to = "/"/>}/>
        </Routes>
    );
};

export default AppRoute