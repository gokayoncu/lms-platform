"use client";
import {
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from "@clerk/nextjs";
import React from "react";

const NavbarRoutes = () => {
  return (
    <div className="flex gap-x-2 ml-auto">
      <div className="flex gap-4 p-6">
        <SignedOut>
          <SignInButton className="navbar-button"/>
          <SignUpButton className="navbar-button" />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </div>
  );
};

export default NavbarRoutes;
