"use client";
import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useRouter } from "next/navigation";
import { logout, loadUser } from "@/redux/auth/auth.slice";
import LinkButton from "@/components/molecules/linkButton/linkButton.molecule";
// import MobileSideBar from "../../organisms/MobileSideBar/MobileSideBar.component";
import "./header.css";
import Link from "next/link";
import LogoMd from "@/assets/LogoMd.js";
import Spinner from "@/components/molecules/spinner";

const Header = () => {
  const router = useRouter();
  const [searchState, setSearchState] = useState(false);
  const { isAuthenticated, loading, user } = useSelector((state) => state.auth);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadUser());
  }, [dispatch]);

  const authLinks = (
    <div className="btns">
      {loading || user === null ? (
        <Spinner />
      ) : (
        <Link href={`/users/${user.id}`} title={user.username}>
          <img
            alt="user-logo"
            className="logo w-10 h-10"
            src={"https://cdn-icons-png.flaticon.com/512/149/149071.png"}
          />
        </Link>
      )}
      <LinkButton
        text={"Log out"}
        link={"/login"}
        type={"s-btn__filled"}
        handleClick={() => dispatch(logout())}
      />
    </div>
  );

  const authTabs = (
    <div className="s-navigation">
      <Link
        href="/"
        className="text-white px-4 py-2 bg-slate-600 hover:bg-gray-500 rounded-md s-navigation--item is-selected"
      >
        Products
      </Link>
    </div>
  );

  const guestTabs = (
    <div className="s-navigation">
      <Link
        href="/"
        className="text-white px-4 py-2 bg-gray-600 hover:bg-gray-500  rounded-md s-navigation--item is-selected"
      >
        Products
      </Link>
    </div>
  );

  const guestLinks = (
    <div className="btns">
      <LinkButton text={"Log in"} link={"/login"} type={"s-btn__primary"} />
      <LinkButton text={"Sign up"} link={"/register"} type={"s-btn__filled"} />
    </div>
  );

  return (
    !loading && (
      <nav className="navbar flex items-center fixed-top navbar-expand-lg navbar-light bs-md">
        <div className="hamburger">{/* <MobileSideBar hasOverlay /> */}</div>
        <div className="header-brand-div">
          <Link className="navbar-brand" href="/">
            <LogoMd className="full-logo" />
            {/* <LogoGlyphMd className="glyph-logo" /> */}
          </Link>
          {!loading && <>{isAuthenticated ? authTabs : guestTabs}</>}
        </div>

        <form
          id="search"
          onSubmit={() => router.push("/questions")}
          className={`w-1/3 `}
          autoComplete="off"
        >
          <label
            for="default-search"
            className=" text-sm font-medium text-gray-900 sr-only dark:text-white"
          >
            Search
          </label>
          <div className="relative">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="search"
              id="default-search"
              className="block w-full py-2 px-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search..."
              required
            />
            <button
              type="submit"
              className="text-white absolute -right-0.5 -bottom-0.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Search
            </button>
          </div>
        </form>

        <div className="header-search-div">
          {!loading && <>{isAuthenticated ? authLinks : guestLinks}</>}
        </div>
      </nav>
    )
  );
};

export default Header;
