import Link from "next/link";
import React from "react";
import Container from "./container";
import Image from "next/image";
import siteLogo from "../public/brlogo.png";
import { useRouter } from "next/router";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  const router = useRouter();

  return (
    <header className="bg-neutral-900">
      <Container>
        <nav className="flex flex-wrap md:flex-nowrap items-center justify-between w-full py-12">
          <div className="sitelogo mr-6">
            <Link href="/" className="hover:text-red-600">
              <Image src={siteLogo} alt="Bandit Revolvers Logo" />
            </Link>
          </div>
          <div className="block md:hidden">
            <button
              id="menu-button"
              className="flex items-center px-3 py-2 border rounded cursor-pointer text-gray-200 border-gray-400 hover:text-white hover:border-white"
              onClick={() => setNavbarOpen(!navbarOpen)}
            >
              <svg
                className="fill-current h-3 w-3"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            id="menu"
            className={
              (navbarOpen ? "flex" : "hidden") +
              " text-2xl font-bold font-fjalla uppercase w-full md:flex md:items-center md:w-auto"
            }
          >
            <ul className="pt-4 md:flex md:justify-between md:pt-0">
              <li>
                <Link
                  href="/games"
                  className={
                    (router.asPath == "/games"
                      ? "bg-gray-700"
                      : "") + " md:p-4 p-4 mr-2 block lg:mt-0 hover:bg-red-500"
                  }
                >
                  Games
                </Link>
              </li>
              <li className="hidden">
                <Link
                  href="/blog"
                  className={
                    (router.asPath == "/blog"
                      ? "bg-gray-500"
                      : "") + " md:p-4 p-4 mr-2 block lg:mt-0 hover:bg-red-500"
                  }
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className={
                    (router.asPath == "/about"
                      ? "bg-gray-500"
                      : "") + " p-4 md:p-4 block lg:mt-0 hover:bg-red-500"
                  }
                >
                  About
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
