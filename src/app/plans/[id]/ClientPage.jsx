"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import items from "../items";

const shuffleArray = (array) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};

const ItemDetails = ({ item }) => (
  <div className="lg:col-span-2 md:col-span-2 col-span-1 bg-gray-300 w-full h-full p-5 md:p-10 rounded-tr-full">
    <h1 className="font-bold text-2xl md:text-3xl lg:w-[70%] leading-0 tracking-wider">
      {item.title}
    </h1>
    <div className="bg-green-400 w-1/6 h-2 mb-8 mt-1 rounded-full"></div>
    <Image
      src={item.src}
      alt={item.title}
      width={700}
      height={400}
      className="rounded-3xl"
    />

    <div className="description mt-5 text-[#666666]">
      <p
        className={`short-description mb-6 text-2xl text-black ${
          !item.description ? "text-red-600 text-center" : ""
        }`}
      >
        {item.description || "No Activies Available for this plan yet..."}
      </p>

      <p>
        <strong>{item.day1}</strong>
      </p>
      <ul className="list-disc ps-7 pt-4">
        {item.activities?.slice(0, 4).map((activity, i) => (
          <li key={i}>
            <strong>{activity.title}</strong> {activity.description}
          </li>
        ))}
      </ul>

      <p className="mt-10">
        <strong>{item.day2}</strong>
      </p>
      <ul className="list-disc ps-7 pt-4">
        {item.activities?.slice(4, 7).map((activity, i) => (
          <li key={i}>
            <strong>{activity.title}</strong> {activity.description}
          </li>
        ))}
      </ul>

      <p className="mt-10">
        <strong>{item.day3}</strong>
      </p>
      <ul className="list-disc ps-7 pt-4">
        {item.activities?.slice(7, 10).map((activity, i) => (
          <li key={i}>
            <strong>{activity.title}</strong> {activity.description}
          </li>
        ))}
      </ul>

      <p className="mt-10">
        <strong>{item.day4}</strong>
      </p>
      <ul className="list-disc ps-7 pt-4">
        {item.activities?.slice(10).map((activity, i) => (
          <li key={i}>
            <strong>{activity.title}</strong> {activity.description}
          </li>
        ))}
      </ul>
      <hr className="border-t-2 border-black mb-2" />
      <div className="text-center">
      <span className="text-xl font-bold">{item.price}</span>
      <span className="text-lg font-semibold text-gray-600 ml-2">
        {item.cost}
      </span>
      </div>
      <hr className="border-t-2 border-black mb-2" />
    </div>

    <div className="bg-[#401a33] h-auto w-auto mt-12 rounded-tr-[45px] rounded-bl-[45px] texture">
      <div className="px-6 py-12 texture-content">
        <h3 className="font-Cursive text-white text-center text-2xl md:text-4xl font-bold">
          Ready to
        </h3>
        <div className="text-3xl md:text-5xl text-center text-white font-black w-full pt-4 font-serif">
          Plan Your Group Trip?
        </div>
        <div className="text-center mt-8">
          <a
            href="/contact"
            className="py-3 px-6 bg-white text-green-600 font-bold text-sm rounded-3xl hover:text-white hover:bg-green-600"
          >
            Request a Plan
          </a>
        </div>
      </div>
    </div>
  </div>
);

const WhyBookWithUs = () => (
  <div className="bg-gray-400 w-full h-full p-10 md:px-5 lg:px-10 rounded-br-full">
    <div className="mb-10">
      <h5 className="text-2xl lg:text-2xl font-bold mb-4 md:text-xl">
        Why Book With Us?
      </h5>
      <ul className="list-none text-lg lg:text-lg md:text-[16px]">
        <li className="border-b-2 border-dashed pb-2 border-[#cecece] mb-4">
          Daily Departures
        </li>
        <li className="border-b-2 border-dashed pb-2 border-[#cecece] mb-4">
          All-inclusive price
        </li>
        <li className="border-b-2 border-dashed pb-2 border-[#cecece] mb-4">
          Free Cancellation
        </li>
        <li className="border-b-2 border-dashed pb-2 border-[#cecece] mb-4">
          Best Price Guarantee
        </li>
        <li>24/7 Support</li>
      </ul>
    </div>
    <div>
      <h5 className="text-2xl font-bold mb-4 md:text-xl lg:text-2xl">
        Any Queries?
      </h5>
      <p className="text-lg font-bold md:text-sm lg:text-lg">Dial us now:</p>
      <button className="border-[#990033] border-2 rounded-xl p-2 shadow-md hover:shadow-black hover:text-[17px] transition">
        <a href="tel:+9779876543210">+977 9845043367</a>
      </button>
      <br />
      <p className="mt-2">chitwanjungletours@gmail.com</p>
    </div>
  </div>
);

const RelativeTrips = ({ items }) => (
  <div className="items-center text-center bg-gray-100 mt-10 rounded-2xl">
    <h3 className="text-4xl font-bold mb-4 pb-3 pt-10 text-[#111]">
      Relative Trips
    </h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-5 p-5">
      {items.map((item) => (
        <div key={item.id} className="bg-[#f4f5f8] shadow-xl rounded-3xl card">
          <div className="relative card1">
            <Image src={item.src} layout="responsive" />
          </div>
          <div className="p-5">
            <h4 className="mb-1 mt-1 text-xl">{item.title}</h4>
            <hr />
            <div className="flex items-center gap-2 mt-4 justify-center">
              <Link href={`/plans/${item.id}`}>
                <button className="border-2 border-[#55e6a5] px-[2rem] bg-gray-200 transition-all duration-200 py-[0.5rem] text-[15px] font-bold uppercase hover:bg-[#55e6a5] text-black flex items-center justify-center space-x-2 rounded-full button">
                  <p className="tracking-widest">View Details</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default function ({ item }) {
  const [shuffledItems, setShuffledItems] = useState([]);
  useEffect(() => {
    setShuffledItems(
      shuffleArray(items.filter((p) => p.id != item.id)).slice(0, 3)
    );
  }, []);
  return (
    <div className="container mx-auto lg:p-16 p-8">
      <div className="grid lg:grid-cols-3 gap-3 grid-cols-1 md:grid-cols-3">
        <ItemDetails item={item} />
        <WhyBookWithUs />
      </div>
      <RelativeTrips items={shuffledItems} />
    </div>
  );
}
