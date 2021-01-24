import PropTypes from "prop-types"
import React, { useState, useEffect } from "react"
import "@fontsource/open-sans"

import logotransparent from "../images/logotransparent.png"
import cakebg from "../images/cakebg.png"

const Header = ({ siteTitle }) => {
  const [menuClick, setMenuClick] = useState(false)

  const onBtnClick = () => {
    setMenuClick(!menuClick)
  }

  let isMobile = null

  useEffect(() => {
    if (typeof window !== `undefined`) {
      isMobile = window.innerWidth < 897
    }
  }, [])

  return (
    <header>
      {isMobile ? (
        <div
          style={{ backgroundImage: `url(${cakebg})` }}
          className="bg-cover pb-96 bg-center"
        >
          <button onClick={() => onBtnClick()}>
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
          {menuClick ? (
            <nav className="bg-transparent">
              <ul className=" md:flex">
                <li className="p-2 text-gray-200">
                  <a href="#cake-types-section">STORE</a>
                </li>
                <li className="p-2 text-gray-200">
                  <a href="#gallery-section">MENU</a>
                </li>
                <li className="p-2 text-gray-200">
                  <a href="#contact-us-section">CONTACT</a>
                </li>
              </ul>
            </nav>
          ) : (
            <nav className="pr-5"></nav>
          )}
          <div className="pt-10 mt-32">
            <h1
              className="text-gray-200 text-4xl text-center mx-5"
              style={{ fontFamily: "open-sans" }}
            >
              WELCOME TO THE FLAKY BUN
            </h1>
          </div>
          <div className="w-11/12 mx-auto mt-7 text-center">
            <p className="text-gray-200 text-xl">
              The Flaky Bun is an old school bakery that combines nostalgia with
              contemporary. Using only the freshest ingredients, we create and
              build tasty pieces of art that satisfy creativity.
            </p>
          </div>
        </div>
      ) : (
        <div
          style={{ backgroundImage: `url(${cakebg})`, height: "70rem" }}
          className="bg-cover bg-center"
        >
          <div className="flex justify-between">
            <div className="pl-2">
              <img
                src={logotransparent}
                style={{ width: "9rem" }}
                alt="flakybun logo"
              />
            </div>
            <div className="w-72">
              <nav className="pt-5 pr-5">
                <ul className="flex justify-between">
                  <li className="p-2 px-5 text-gray-100">
                    <a href="#cake-types-section">STORE</a>
                  </li>
                  <li className="p-2 px-5 text-gray-100 ">
                    <a href="#gallery-section">MENU</a>
                  </li>
                  <li className="p-2 text-gray-100">
                    <a href="#contact-us-section">CONTACT</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="text-center">
            <div className="pt-10 2xl:mx-0 mx-24">
              <h1
                className="text-gray-100 text-6xl mt-44"
                style={{ fontFamily: "open-sans" }}
              >
                WELCOME TO THE FLAKY BUN
              </h1>
            </div>
            <div className="mx-auto px-40 mt-7 md:px-0 2xl:w-4/12 md:w-8/12 ">
              <p className="text-gray-200 text-xl">
                The Flaky Bun is an old school bakery that combines nostalgia
                with contemporary. Using only the freshest ingredients, we
                create and build tasty pieces of art that satisfy creativity.
              </p>
            </div>
          </div>
        </div>
      )}
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
