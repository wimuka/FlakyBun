import React, { section } from "react"
import wedcake from "../images/wedcake.png"
import specake from "../images/specake.png"
import pastry from "../images/pastry.png"

const Body = () => {
  return (
    <section id="cake-types-section">
      <h2
        className="text-center mt-24 2xl:mt-48 md:text-4xl text-3xl text-gray-800"
        style={{ fontFamily: "open-sans" }}
      >
        WHAT'S IN THE STORE
      </h2>

      <div className="grid grid-cols-1 text-center xl:mt-20 mt-10 mx-10 2xl:grid-cols-3 :mx-80 2xl:text-xl xl:text-lg text-md">
        <div>
          <div className="text-center">
            <img src={wedcake} className="lg:w-24 w-20 mx-auto" />
            <h3 className="text-gray-900 font-semibold mt-2">WEDDING CAKES</h3>
            <h4 className="text-gray-800 md:w-1/2 w-2/3 mx-auto mt-2">
              It’s your special day, let us create the perfect accompaniment to
              your celebration. Choose from various different flavours!
            </h4>
          </div>
        </div>

        <div className="grid-rows-2 mt-5 2xl:mt-0">
          <div className="text-center">
            <img src={pastry} className="lg:w-24 w-20 mx-auto" />
            <h3 className="text-gray-900 font-semibold mt-2">PASTRIES</h3>
            <h4 className="text-gray-800 md:w-1/2 w-2/3 mx-auto mt-2">
              Pastries for all occasions: baby showers, weddings, birthdays and
              for those of you who just want to sink your teeth into something
              yummy.
            </h4>
          </div>
        </div>

        <div className="grid-rows-2 mt-5 2xl:mt-0">
          <div className="text-center">
            <img src={specake} className="md:w-24 w-20 mx-auto" />
            <h3 className="text-gray-900 font-semibold mt-2">
              SPECIALTY DESSERTS
            </h3>
            <h4 className="text-gray-800 md:w-1/2 w-2/3 mx-auto mt-2">
              1st birthdays, 90 Birthdays and everything else in between we
              would be honoured to make your special day a bit sweeter.
            </h4>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Body
