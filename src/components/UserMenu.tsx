"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";

type Props = {};

const UserMenu = (props: Props) => {
  return (
    <div className="relative">
      <div className="flex flex-row items-center gap-3">
        <Button className="hidden md:block bg-theme-900 hover:bg-theme-800">
          Rent out your residence
        </Button>
        {/* <div
          onClick={() => {}}
          className="flex gap-2 items-center justify-center p-4 md:py-1 md:px-2">
          <MenuIcon size={28} />

          <div className="hidden md:block">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png"  />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
        </div> */}
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>user profile</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent className="bg-theme-50">
            <DropdownMenuLabel>My Account</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem
              onClick={() => {}}
              className="cursor-pointer hover:bg-theme-100">
              Login
            </DropdownMenuItem>
            <DropdownMenuItem
              onClick={() => {}}
              className="cursor-pointer hover:bg-theme-100">
              Sign out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
};

export default UserMenu;
