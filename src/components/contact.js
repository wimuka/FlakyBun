import React from "react"
// import Map from "../components/map"

const Contact = () => {
  return (
    <section id="contact-us-section" className="2xl:mb-20 mb-16">
      <h2
        className="text-center mt-24 2xl:mt-48 md:text-4xl text-3xl text-gray-800"
        style={{ fontFamily: "open-sans" }}
      >
        CONTACT US
      </h2>
      <div className="2xl:w-full 2xl:grid-cols-2 2xl:mt-20 mt-10">
        <div className="text-center 2xl:mx-auto xl:text-lg">
          <h3 className="text-gray-900 font-bold">STORE HOURS </h3>

          <p className="text-gray-900 mt-2"> Tue-Thu: 10:00AM-6:00PM </p>
          <p className="text-gray-900"> Friday: 10:00AM-7:00PM </p>
          <p className="text-gray-900"> Saturday: 10:00AM-6:00PM </p>
          <p className="text-gray-900 xl:mt-5 mt-4">
            {`Email: testemail@gmails.com`}
          </p>
          <p className="text-gray-900"> Phone: +1(416)-303-XX-XX </p>
        </div>

        {/* <div className="text-center mt-10 2xl:w-3/4 xl:mt-10 sm:px-10 sm:pb-10">
          <div className="2xl:w-3/4 xl:w-1/2 lg:w-3/4 mx-auto p-2">
            <Map />
          </div>
        </div> */}
      </div>
    </section>
  )
}

export default Contact
