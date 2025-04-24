import React from "react";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
const Navbar = () => {
  return (
    <header className="flex justify-end items-center p-4 gap-4 h-16 bg-gray-600">
      
      <div>
      <SignedOut>
        <SignInButton className="navbar-button"/>
        <SignUpButton className="navbar-button"/>
      </SignedOut>
      <SignedIn>
        <UserButton className="navbar-button"/>
      </SignedIn>
      </div>
    </header>
  );
};

export default Navbar;
