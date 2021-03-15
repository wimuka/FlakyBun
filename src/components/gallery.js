import React from "react"

import blackForest from "../images/product/black-forest.jpg"
import roseWedCake from "../images/product/blue-rose-wed-cake.jpg"
import blueWedCake from "../images/product/blue-wed-cake.jpg"
import bun2 from "../images/product/bun-2.jpg"
import cakeCherry from "../images/product/cake-cherry.jpg"
import macarons from "../images/product/macarons-v2.jpg"
import singleCroissant from "../images/product/single-croissant.jpg"
import strawCake from "../images/product/strawberry-cake.jpg"

const Gallery = () => {
  return (
    <section id="gallery-section">
      <h2
        className="text-center mt-24 2xl:mt-48 md:text-4xl lg:text-3xl text-2xl text-gray-800"
        style={{ fontFamily: "open-sans" }}
      >
        MENU ITEMS
      </h2>
      <div
        className="flex self-start overflow-x-auto mt-10 xl:mt-24 xl:w-2/3 w-1/2 mx-auto "
        style={{ scrollbarWidth: "thin" }}
      >
        <img
          className="2xl:h-56 lg:h-40 h-32 2xl:px-8 px-2"
          src={macarons}
          alt="macarons"
        />

        <img
          className="2xl:h-52 lg:h-40 h-32 2xl:px-24 px-8"
          src={roseWedCake}
          alt="roseWedCake"
        />

        <img
          className="2xl:h-60 lg:h-40 h-32"
          src={singleCroissant}
          alt="singleCroissant"
        />
        <img
          className="2xl:h-60 lg:h-40 h-32 px-6 2xl:px-16"
          src={strawCake}
          alt="strawCake"
        />
        <img
          className="2xl:h-60 lg:h-40 h-32"
          src={blackForest}
          alt="blackForest"
        />

        <img
          className="2xl:h-52 lg:h-40 h-32 px-8 2xl:px-24"
          src={blueWedCake}
          alt="blueWedCake"
        />
        <img
          className="2xl:h-60 lg:h-40 h-32 px-6 2xl:px-16"
          src={bun2}
          alt="bun2"
        />
        <img
          className="2xl:h-52 lg:h-40 h-32 2xl:px-8"
          src={cakeCherry}
          alt="cakeCherry"
        />
      </div>
    </section>
  )
}

export default Gallery
