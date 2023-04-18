import React from "react";
import { Web3Button } from "@web3modal/react";
import Link from "next/link";

type Props = {};

export const Header: React.FC<Props> = () => {
  return (
    <>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <Link href={"/"}>
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              MCM Protocol
            </label>
          </Link>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          ></ul>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1"></ul>
        </div>
        <div className="navbar-end">
          <Web3Button />
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};
