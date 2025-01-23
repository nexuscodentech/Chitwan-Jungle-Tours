"use client";

import { useState } from "react";

export default function page() {
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [agree, setAgree] = useState(false);

  async function handleSubmit(e) {
    e.preventDefault();
    if (!agree) {
      setError("Please agree to send your information for contact purposes");
      return;
    }
    setError("");
    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      //API KEY IS BEING EXPOSED HERE....
      body: JSON.stringify({
        access_key: "4a7f6b18-f55c-42aa-8d4c-3b08f209ec88",
        package: e.target.package.value,
        fname: e.target.fname.value,
        lname: e.target.lname.value,
        email: e.target.email.value,
        country: e.target.country.value,
        city: e.target.city.value,
        zip: e.target.zip.value,
        message: e.target.message.value,
        
      }),
    });
    const result = await response.json();
    if (result.success) {
      setSubmitted(true);
      setAgree(false);
      e.target.reset();
    }
  }

  return (
    <>
      <link rel="icon" href="contact-favicon.svg" />

      <div className="main-contact-image relative w-full h-64 md:h-96 lg:h-128">
        <img
          src="assets/backgroundImage11.jpg"
          alt="Mountain Shrine"
          className="w-full h-full object-cover"
        />
        <div className="contact-division inset-0 absolute flex items-end justify-center p-6 text-white">
          <h1 className={`font-MuseoModerno font-bold text-5xl`}>CONTACT US</h1>
        </div>
      </div>

      <div className="main-container w-full h-full flex flex-col md:flex-row justify-between p-2">
        <div className="form-container w-full md:w-1/2 p-6 bg-gray-100 rounded-lg">
          <h1 className="font-extrabold text-4xl pt-4">
            Get in <span className="text-[#6de1c2]">Touch</span>
          </h1>
          <p className={`font-Poppins mt-2 mb-6`}>
            If you have any queries or would like to know more about our
            services, please feel free to send us a message. We look forward to
            hearing from you!
          </p>

          <form onSubmit={handleSubmit}>
            <div className="w-full border-2 rounded-md p-2 mb-4 bg-slate-300">
            <label>
              Package:{" "}
              <select
                name="package"
                className="w-full border-2 rounded-md p-2 mb-4"
              >
                <option value="">Select your package</option>
                <option value="1-day">1 Day Jungle Safari (7000 NRS)</option>
                <option value="2-days-1-night">2 Nights, 3 Days (25000 NRS)</option>
                <option value="3-days-2-nights">3 Nights, 4 Days (65000 NRS)</option>
              </select>
            </label>
            </div>
          

            <label>
              Firstname:<span className="text-red-500 text-xl">*</span>
              <input
                type="text"
                placeholder="First Name"
                className="w-full border-2 rounded-md p-2"
                name="fname"
                required
              />
            </label>
          

            <label>
              Lastname:<span className="text-red-500 text-xl">*</span>
              <input
                type="text"
                placeholder="Last Name"
                className="w-full border-2 rounded-md p-2"
                name="lname"
                required
              />
            </label>

            <label>
              Email:<span className="text-red-500 text-xl">*</span>
              <input
                type="email"
                placeholder="example@gmail.com"
                className="w-full border-2 rounded-md p-2"
                name="email"
                required
              />
            </label>

            <label>
              Country:<span className="text-red-500 text-xl">*</span>
              <input
                type="text"
                placeholder="eg: Nepal"
                className="w-full border-2 rounded-md p-2"
                name="country"
                required
              />
            </label>

            <label>
              City:<span className="text-red-500 text-xl">*</span>
              <input
                type="text"
                placeholder="eg: Kathmandu"
                className="w-full border-2 rounded-md p-2"
                name="city"
                required
              />
            </label>

            <label>
              Zipcode:<span></span>
              <input
                type="number"
                placeholder="eg: 44006"
                className="w-full border-2 rounded-md p-2"
                name="zip"
              />
            </label>

            <label>
              Message:<span className="text-red-500 text-xl">*</span>
              <textarea
                name="message"
                placeholder="Send Message"
                required
                className="w-full border-2 rounded-md p-2 mb-4"
                style={{ resize: "none" }}
              />
            </label>

            <label className="flex items-center mb-4">
              <input
                type="checkbox"
                className="mr-2"
                checked={agree}
                onChange={() => setAgree(!agree)}
              />{" "}
              I agree to send my Information for contact purposes.
            </label>

            <div className="flex space-x-2">
              <button
                type="submit"
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
              >
                Submit
              </button>
              <button
                type="reset"
                className="bg-red-700 hover:bg-red-800 text-white px-4 py-2 rounded-md"
              >
                Reset
              </button>
            </div>
          </form>

          {submitted && (
            <div className="bg-green-300 text-green-800 mt-2 p-4 mb-4 rounded-md">
              Your Message Has Been Submitted !!
            </div>
          )}
          {error && (
            <div className="bg-red-300 text-red-800 mt-2 p-4 mb-4 rounded-md">
              {error}
            </div>
          )}
        </div>

        <div className="w-full md:w-1/2 relative overflow-hidden hidden md:block">
          <img
            src="assets/j4.jpg"
            className="w-full h-full object-cover rounded-lg"
            alt="Contact Scenery"
          />
        </div>
      </div>
    </>
  );
}
