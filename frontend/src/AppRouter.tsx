import { Navigate, Route, Routes } from "react-router-dom";
import Layout from "./layouts/layout";
import HomePage from "./pages/HomePage";

const AppRoute = () => {
    return(
        <Routes>
            <Route path="/" element={<Layout><HomePage/></Layout>}/>
            <Route path= "*" element={ <Navigate to = "/"/>}/>
        </Routes>
    );
};

export default AppRoute