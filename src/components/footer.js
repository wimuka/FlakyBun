import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faFacebookSquare } from "@fortawesome/free-brands-svg-icons"
import { faInstagramSquare } from "@fortawesome/free-brands-svg-icons"
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
    <div className="w-full">
      <div
        className="text-center 2xl:py-2 py-2"
        style={{ backgroundColor: "#fff4fa" }}
      >
        <p className="text-gray-600 2xl:text-lg text-md"> Flaky Bun Inc. </p>
        <p className="text-gray-600 2xl:text-lg text-md">362 Catstreet Road </p>
        <p className="text-gray-600 2xl:text-lg text-md"> Toronto, ON</p>
        <div className="grid grid-cols-1 mt-1">
          <div className="text-3xl text-gray-500 px-2">
            <span className="px-2">
              <FontAwesomeIcon icon={faFacebookSquare} />
            </span>
            <span className="px-2">
              <FontAwesomeIcon icon={faInstagramSquare} />
            </span>
            <span className="px-2">
              <FontAwesomeIcon icon={faTwitterSquare} />
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Footer
