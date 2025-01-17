"use client";
import { useState } from "react";
import { useEffect } from "react"
import { useRef } from "react";
import Autoplay from "embla-carousel-autoplay";
import Link from "next/link";

import { Menu, X } from 'lucide-react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faWhatsapp } from '@fortawesome/free-brands-svg-icons';

import Confetti from 'react-confetti';

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import home from "assets/home.jpg";
import img1 from "assets/img1.png";
import img2 from "assets/img2.png";
import img3 from "assets/img3.png";
import boat2 from "assets/boat2.png";
import review1 from "assets/review1.jpg";
import guide from "assets/guide.png";
import tourist from "assets/tourist.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { StarIcon } from "lucide-react";

export default function Homepage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [confetti, setConfetti] = useState(false); // Set initial state to false
  const stickyButtonRef = useRef(null);
  const footerRef = useRef(null);

  // Handle expansion of the sticky button
  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  // Check if the sticky button hits the footer
  useEffect(() => {
    const handleScroll = () => {
      if (stickyButtonRef.current && footerRef.current) {
        const stickyButtonRect = stickyButtonRef.current.getBoundingClientRect();
        const footerRect = footerRef.current.getBoundingClientRect();
        setIsAtBottom(stickyButtonRect.bottom >= footerRect.top);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Start confetti when component mounts and stop after a duration
  useEffect(() => {
    setConfetti(true); // Start confetti
    const timer = setTimeout(() => {
      setConfetti(false); // Stop confetti after 5 seconds
    }, 5000);

    return () => clearTimeout(timer); // Cleanup on unmount
  }, []);

  return (
    <>
      <div className="Section-ItineraryHero relative h-screen">
        <Image className="w-full h-full object-cover" src={home} alt="Home" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center">
          <p className="font-MuseoModerno text-white text-6xl font-bold mb-4">
            YOUR JOURNEY, OUR EXPERTISE!
          </p>
          <p className="font-MuseoModerno text-white text-3xl font-bold">
            Adventure Deeper
          </p>
        </div>
      </div>

      <div className="Section-Overview pt-16 py-9">
        <div className="container xl mx-auto flex flex-col md:flex-row items-center md:items-start">
          <div className="md:w-1/2 md:pl-8 md:pr-8">
            <h2 className="font-MuseoModerno text-black text-3xl font-bold">
              Explore <br />
              beyond <br />
              boundaries
            </h2>
          </div>
          <div className="md:w-1/2">
            <p className="font-Poppins text-left text-lg">
              With 20+ years in tour guiding, adventure, cross-cultural
              exploration, we design the perfect journey for you.
              <br />
              <Link href="/destination-page">
                <button className="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 dark:text-white dark:hover:text-gray-900 focus:ring-4 focus:outline-none focus:ring-lime-200 dark:focus:ring-lime-800">
                  <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                    Schedule a call
                  </span>
                </button>
              </Link>
            </p>
          </div>
        </div>
      </div>

      {/* Explore organizational services images and text */}
      <div className="container mx-auto py-9">
        <div className="flex justify-center space-x-20">
          <div className="w-1/6 relative">
            <h2
              className="font-MuseoModerno text-white text-2xl font-bold text-center absolute inset-0 flex justify-center items-center p-2"
              style={{ top: "60%", borderRadius: "35% 0 0 35%" }}
            >
              Explore organizational services
            </h2>
            <Link href="/destination-page">
              <Image
                src={img2}
                alt="Image 2"
                height={96}
                className="w-full object-cover rounded-tr-[35%] rounded-bl-[35%]"
              />
            </Link>
          </div>

          <div className="w-1/6 relative">
            <h2
              className="font-MuseoModerno text-white text-2xl font-bold text-center absolute inset-0 flex justify-center items-center p-2"
              style={{ top: "60%", borderRadius: "35% 0 0 35%" }}
            >
              Explore organizational services
            </h2>
            <Link href="/destination-page">
              <Image
                src={img2}
                alt="Image 2"
                height={96}
                className="w-full object-cover rounded-tr-[35%] rounded-bl-[35%]"
              />
            </Link>
          </div>

          <div className="w-1/6 relative">
            <h2
              className="font-MuseoModerno text-white text-2xl font-bold text-center absolute inset-0 flex justify-center items-center p-2"
              style={{ top: "60%", borderRadius: "35% 0 0 35%" }}
            >
              Explore organizational services
            </h2>
            <Link href="/destination-page">
              <Image
                src={img2}
                alt="Image 2"
                height={96}
                className="w-full object-cover rounded-tr-[35%] rounded-bl-[35%]"
              />
            </Link>
          </div>
        </div>
      </div>

      {/* background, guide photo and texts */}
      <div className="relative text-center container mx-auto py-5">
        <Image src={boat2} className="w-full h-auto bg-cover" alt="Boat" />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative flex items-center mx-4 lg:mx-20">
            {/* Guide image */}
            <Image
              src={guide}
              className="relative left-4 inline-block"
              alt="Guide"
              style={{ width: "450px", height: "500px" }} // Smaller size for small screens
              sizes="(max-width: 1024px) 200px, 400px" // Responsive sizes
            />

            {/* Text content */}
            <div
              className="relative left-4 bg-[#5C2C59] rounded-3xl text-white p-2 text-xs flex justify-center items-center"
              style={{
                width: "750px",
                maxWidth: "700px",
                height: "400",
                minHeight: "350px",
              }} // Auto height for flexibility
            >
              <p className="font-Poppins text-white text-lg md:text-xl text-center absolute inset-2 md:inset-8 flex justify-center items-center p-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. Lorem
                Ipsum.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Best experiences in chitwan */}

      <div className="relative text-center container mx-auto bg-cover">
        <Image src={boat2} className="w-full h-auto" alt="Boat" />
        <div className="absolute inset-0 flex justify-center items-center">
          <div className="relative flex items-center mx-20">
            <div
              className="relative left-4 bg-[#5C2C59] rounded-3xl text-white p-2 text-xs flex justify-center items-center"
              style={{ width: "700px", height: "400px" }}
            >
              <p className="font-Poppins text-white text-xl text-center absolute inset-0 flex justify-center items-center p-0">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in the 1960s with the release of Letraset sheets
                containing Lorem Ipsum passages, and more recently with desktop
                publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
              </p>
            </div>
            <Image
              src={tourist}
              className="relative left-4 inline-block rounded-3xl"
              alt="Tourist"
              style={{ width: "450px", height: "500px" }} // Smaller size for small screens
              sizes="(max-width: 1024px) 200px, 400px" // Responsive sizes
            />
          </div>
        </div>
      </div>

      {/* Explore organizational services images and text */}
      <div className="container mx-auto py-9">
        <div className="flex justify-center space-x-20">
          <div className="w-1/6 relative">
            <h2
              className="font-MuseoModerno text-white text-2xl font-bold text-center absolute inset-0 flex justify-center items-center p-2"
              style={{ top: "60%", borderRadius: "35% 0 0 35%" }}
            >
              Explore organizational services
            </h2>
            <Link href="/destination-page">
              <Image
                src={img2}
                alt="Image 2"
                height={96}
                className="w-full object-cover rounded-tr-[35%] rounded-bl-[35%]"
              />
            </Link>
          </div>

          <div className="w-1/6 relative">
            <h2
              className="font-MuseoModerno text-white text-2xl font-bold text-center absolute inset-0 flex justify-center items-center p-2"
              style={{ top: "60%", borderRadius: "35% 0 0 35%" }}
            >
              Explore organizational services
            </h2>
            <Link href="/destination-page">
              <Image
                src={img2}
                alt="Image 2"
                height={96}
                className="w-full object-cover rounded-tr-[35%] rounded-bl-[35%]"
              />
            </Link>
          </div>

          <div className="w-1/6 relative">
            <h2
              className="font-MuseoModerno text-white text-2xl font-bold text-center absolute inset-0 flex justify-center items-center p-2"
              style={{ top: "60%", borderRadius: "35% 0 0 35%" }}
            >
              Explore organizational services
            </h2>
            <Link href="/destination-page">
              <Image
                src={img2}
                alt="Image 2"
                height={96}
                className="w-full object-cover rounded-tr-[35%] rounded-bl-[35%]"
              />
            </Link>
          </div>
        </div>
      </div>











      <h2 className="font-MuseoModerno text-black text-2xl font-bold text-center mb-4 pt-10">
        Reviews from our clients
      </h2>
      <div className="flex justify-center py-10">
        <CarouselPlugin />
      </div>

      {/* Confetti */}
      <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle= {false}
          numberOfPieces={1000}
          gravity= {0.1}
          colors= {String['#f44336','#e91e63','#9c27b0','#673ab7','#3f51b5','#2196f3','#03a9f4','#00bcd4','#009688','#4CAF50','#8BC34A','#CDDC39','#FFEB3B','#FFC107','#FF9800','#FF5722','#795548']}
          wind= {0}
        />


      {/* Quick buttons */}
      <div
        ref={stickyButtonRef}
        className={`fixed right-4 flex flex-col items-center space-y-2 transition-all duration-300 ease-in-out z-50 ${
          isAtBottom ? 'bottom-[calc(100vh-5rem)]' : 'bottom-4'
        }`}
      >
        {isExpanded && (
          <div className="flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out transform">

            {/* WhatsApp Button */}
            <div className="p-1 bg-gradient-to-r from-green-400 to-white-500 rounded-full">
              <button
                className="p-2 bg-green-500 text-white rounded-full w-12"
                onClick={() => window.open("https://wa.me/9866028826", "_blank")}
              >
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </button>
            </div>

            {/* Facebook Button */}
            <div className="p-1 bg-gradient-to-r from-blue-500 to-white-600 rounded-full">
              <button
                className="p-2 bg-blue-500 text-white rounded-full w-12"
                onClick={() => window.open("https://www.facebook.com/uniqueadhikari.007", "_blank")}
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </button>
            </div>

            {/* Instagram Button */}
            <div className="p-1 bg-gradient-to-r from-pink-500 to-white-500 rounded-full">
              <button
                className="p-2 bg-pink-500 text-white rounded-full w-12"
                onClick={() => window.open("https://www.instagram.com/unik.adhikarii/", "_blank")}
              >
                <FontAwesomeIcon icon={faInstagram} size="lg" />
              </button>
            </div>
          </div>
        )}

        {/* Main Toggle Button with Icons */}
        <button
          onClick={toggleExpand}
          className={`p-4 bg-blue-600 text-white rounded-full transition-all duration-1000 ease-in-out transform hover:bg-blue-700 ${
            isExpanded ? 'scale-105' : 'scale-100'
          }`}
        >
          {isExpanded ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </>
  );
}

export function CarouselPlugin() {
  const plugin = useRef(Autoplay({ delay: 2000, stopOnInteraction: true }));
  return (
    <Carousel
      plugins={[plugin.current]}
      className="w-1/2"
      onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <Card>
                <CardContent className="aspect-square p-6">
                  <div className="flex justify-center">
                    <div>
                      <Image
                        src={review1}
                        className="rounded-full justify-center flex w-[95px]"
                      ></Image>
                    </div>
                  </div>
                  <div className="p-8 text-center">
                    <h3 className="text-2xl font-bold ">
                      Chitwan Jungle Tours Visit
                    </h3>
                    <div className="flex justify-center gap-3 pt-5">
                      <StarIcon className="fill-black" />
                      <StarIcon className="fill-black" />
                      <StarIcon className="fill-black" />
                      <StarIcon className="fill-black" />
                      <StarIcon className="fill-black" />
                    </div>
                    <div className="pt-8">
                      <p>
                        Experiencing Chitwan National Visit, with Chitwan Jungle
                        Safari team gave me a great platform to enjoy my dream
                        holidays in Nepalese exotic Bio-Diversity. It was an
                        awe-inspiring experience to Chitwan National Park as I
                        admitted Jeep Safari Tours, Tharu Presentation, Elephant
                        Safari, Canoe ride, and more. The facilities of the
                        Chitwan Jungle Safari team were just fantastic; their
                        greetings and harmony have pleased me to choose the
                        Chitwan Jungle Safari team on my next trip to Nepal.
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
