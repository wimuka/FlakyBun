import PropTypes from "prop-types"
import React, { useState } from "react"
import "@fontsource/open-sans"

import logotransparent from "../images/logotransparent.png"
import cakebg from "../images/cakebg.jpg"

const Header = ({ siteTitle }) => {
  const [menuClick, setMenuClick] = useState(false)

  return (
    <header>
      <div
        style={{ backgroundImage: `url(${cakebg})` }}
        className="bg-cover pb-96 bg-center text-right"
      >
        <div className="w-full">
          <button
            onClick={() => setMenuClick(!menuClick)}
            className="lg:hidden visible pt-4 pl-1  mr-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="w-10 text-gray-300"
            >
              <path
                fillRule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        <nav
          className={
            "bg-transparent lg:flex lg:justify-between flex-grow" +
            (menuClick ? " flex" : " hidden")
          }
        >
          <div className="lg:visible lg:ml-1 lg:mt-1 invisible">
            <img
              src={logotransparent}
              style={{ width: "9rem" }}
              alt="flakybun logo"
            />
          </div>
          <div className="mr-4 w-full lg:mt-2">
            <ul className="lg:flex lg:justify-end">
              <li className="p-2 lg:px-5 text-gray-200 ">
                <a href="#cake-types-section">STORE</a>
              </li>
              <li className="p-2 lg:px-5 text-gray-200">
                <a href="#gallery-section">MENU</a>
              </li>
              <li className="p-2 text-gray-200">
                <a href="#contact-us-section">CONTACT</a>
              </li>
            </ul>
          </div>
        </nav>

        <div className="pt-10 mt-32">
          <h1
            className="text-gray-200 text-4xl text-center mx-5"
            style={{ fontFamily: "open-sans" }}
          >
            WELCOME TO THE FLAKY BUN
          </h1>
        </div>
        <div className="mx-auto px-10 xl:px-40 mt-7 md:px-0 2xl:w-5/12 md:w-1/2 w-9/12 text-center">
          <p className="text-gray-200 text-xl">
            The Flaky Bun is an old school bakery that combines nostalgia with
            contemporary. Using only the freshest ingredients, we create and
            build tasty pieces of art that satisfy creativity.
          </p>
        </div>
      </div>
    </header>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
