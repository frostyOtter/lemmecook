import { CircleUserRound } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "./ui/dropdown-menu"
import { useAuth0 } from "@auth0/auth0-react"
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
// import { readFileSync } from 'fs'

const UsernameMenu = () => {
    // const search_count_list = readFileSync('../asseets/search_count_list.txt', 'utf-8');
    const {user, logout} = useAuth0();
    return (
        <DropdownMenu>
            <DropdownMenuTrigger className="flex item-centers px-3 text-orange-500 hover:text-yellow-500 gap-2">
                <CircleUserRound className="text-orange-500">
                </CircleUserRound>
                {user?.email}
            </DropdownMenuTrigger>
            <DropdownMenuContent>
                <DropdownMenuItem>
                    <Link to="user-profile" className="font-bold text-orange-500 hover:text-yellow-500">
                        User Profile
                    </Link>
                </DropdownMenuItem>
                <Separator></Separator>
                <DropdownMenuItem>
                    <Button onClick= {() => logout()}className="flex flex-1 font-bold text-orange-500 bg-black-500">
                        Log out
                    </Button>
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    );
};

export default UsernameMenu