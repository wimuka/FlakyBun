import React from "react"
// import Map from "../components/map"

const Contact = () => {
  return (
    <section id="contact-us-section" className="2xl:mb-20 mb-16">
      <h2
        className="text-center mt-24 2xl:mt-48 md:text-4xl lg:text-3xl text-2xl text-gray-800"
        style={{ fontFamily: "open-sans" }}
      >
        CONTACT US
      </h2>
      <div className="2xl:flex 2xl:w-1/2 2xl:grid-cols-2 2xl:mt-20 mt-10 2xl:mx-auto">
        <div className="text-center 2xl:mx-auto xl:text-lg 2xl:my-auto">
          <h3 className="text-gray-900 font-bold">STORE HOURS </h3>

          <p className="text-gray-900 mt-2"> Tue-Thu: 10:00AM-6:00PM </p>
          <p className="text-gray-900"> Friday: 10:00AM-7:00PM </p>
          <p className="text-gray-900"> Saturday: 10:00AM-6:00PM </p>
          <p className="text-gray-900 xl:mt-5 mt-4">
            {`Email: testemail@gmails.com`}
          </p>
          <p className="text-gray-900"> Phone: +1(416)-303-XX-XX </p>
        </div>
        <div className="2xl:w-1/2 w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d9707.554251342386!2d-79.36138485688203!3d43.66744854016962!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4cb434ece8101%3A0xed2e48789ff4f85d!2sRiverdale%20Park%20West!5e0!3m2!1sen!2sca!4v1611958186160!5m2!1sen!2sca"
            className="2xl:w-full xl:w-1/2 w-3/4 h-80 mx-auto 2xl:mt-0 mt-10"
            ariaHidden="false"
            tabindex="0"
          />
        </div>
      </div>
    </section>
  )
}

export default Contact
