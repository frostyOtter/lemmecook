import { Link } from "react-router-dom"
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";


const MobileNavLink = () => {
    const { logout } = useAuth0()
    return (
        <>
            <Link to = "/user-profile" className="flex bg-white items-center font-bold text-orange-500 hover:text-yellow-500 hover:bg-black-500">
                User Profile
            </Link>

            <Button className="flex font-bold text-orange-500 bg-grey"
            onClick= {() => logout()}>
                Logout
            </Button>
        </>
    );
};

export default MobileNavLink;