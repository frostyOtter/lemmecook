// import React from 'react'

import { CircleUserRound, Menu } from "lucide-react";
import { Sheet, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from "./ui/sheet";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLink from "./MobileNavLink";

const MobileNav = () => {
    const {isAuthenticated, loginWithRedirect, user} = useAuth0()
    return (
        <Sheet>
            <SheetTrigger>
                <Menu className="text-orange-500"></Menu>
            </SheetTrigger>
            <SheetContent className="space-y-3">
                <SheetTitle>
                    {isAuthenticated ? (
                        <span className="flex items-cente text-orange-500 gap-2">
                            <CircleUserRound className="text-orange-500 hover:text-yellow-500"></CircleUserRound>
                            {user?.email}
                        </span>
                    ) : (
                        <span className="flex flex-1 text-orange-500">
                            Welcome to Lemmecook
                        </span>)}
                </SheetTitle>
                <Separator/>
                <SheetDescription className="flex flex-col gap-4">
                    {isAuthenticated ? (
                        <MobileNavLink/>
                    ) : (
                        <Button className="flex-1 bg-orange-500"
                        onClick={async () => await loginWithRedirect()}>
                            Login
                        </Button>
                    )}
                    
                </SheetDescription>
            </SheetContent>
        </Sheet>
    )
};

export default MobileNav;
