"use client";
import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import Link from "next/link";
import Autoplay from "embla-carousel-autoplay";

import { Menu, X } from "lucide-react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faInstagram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

import Confetti from "react-confetti";
import guide from "assets/danphe.jpg";
import fule from "assets/fule.png";
import guide1 from "assets/faqbanner.jpg";
import tourist from "assets/aboutcnp.png";

import "./page.css";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import home from "assets/newhome.jpg";
import img1 from "assets/img1.png";
import img2 from "assets/img2.png";
import img3 from "assets/img3.png";
import img4 from "assets/img4.png";
import img5 from "assets/birdwatch.png";
import img6 from "assets/img6.png";
// import boat2 from "assets/boat2.png";
import travel from "assets/home.jpg";
import travel1 from "assets/i8.jpg";
import travel2 from "assets/gallery/gallery-20.png";
// import review1 from "assets/review1.jpg";

// hotel and food
import hotel1 from "assets/new/hotel1.png";
import hotel2 from "assets/new/hotel2.png";
import hotel3 from "assets/new/hotel3.png";
import hotel4 from "assets/new/hotel4.png";
import hotel5 from "assets/new/hotel5.png";
import hotel6 from "assets/new/hotel6.png";
import hotel7 from "assets/new/hotel7.png";
import hotel8 from "assets/new/hotel8.png";
import hotel9 from "assets/new/hotel9.png";
import hotel10 from "assets/new/hotel10.png";
import hotel11 from "assets/new/hotel11.png";
import hotel12 from "assets/new/hotel12.png";
import hotel13 from "assets/new/hotel13.png";
import hotel14 from "assets/new/hotel14.png";
import hotel15 from "assets/new/hotel15.png";
import hotel16 from "assets/new/hotel16.png";
import hotel17 from "assets/new/hotel17.png";
import hotel18 from "assets/new/hotel18.png";
import hotel19 from "assets/new/hotel19.png";
import hotel20 from "assets/new/hotel20.png";
import hotel21 from "assets/new/hotel21.png";
import hotel22 from "assets/new/hotel22.png";
import hotel23 from "assets/new/hotel23.png";
import hotel24 from "assets/new/hotel24.png";
import hotel25 from "assets/new/hotel25.png";
import hotel26 from "assets/new/hotel26.png";
import hotel27 from "assets/new/hotel27.png";
import hotel28 from "assets/new/hotel28.png";
import hotel29 from "assets/new/hotel29.png";

import roundedGuide from "../../public/home/guide.png";
// import roundedTourist from "../../public/home/tourist1.png";
import roundedTourist from "assets/circle4.png";

import { Star } from "lucide-react";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const reviews = [
  {
    id: 1,
    name: "Lenie Schilt",
    avatar: "/assets/lenie.jpeg",
    rating: 5,
    text: "Chitwan Jungle Tours isn't limited to Chitwan. In August, I traveled to western Nepal with their guidance. I flew from Kathmandu to Nepalgunj, then traveled by 4WD to Bardiya NP (walking safari, jeep safari, and freshwater dolphin spotting), Jumla, Lumbini, and Chitwan (canoe and walking safari). Fule Chaudhary arranged a great driver, comfortable hotels, and varied meals, making for a relaxing and memorable trip.",
  },
  {
    id: 2,
    name: "Robby Puzo",
    avatar: "/assets/robby.jpeg",
    rating: 5,
    text: "I had an absolutely fabulous day with Fule and I highly recommend his tours. Fule was incredibly organized, knowledgeable, and fun to be around. He made sure we had a fantastic experience, spotting a wide variety of animals along the way. The lunch provided was delicious and added to the overall enjoyment of the day. It was a truly memorable experience, and I highly suggest you check out this tour!",
  },
  {
    id: 3,
    name: "Ramjit Mahato",
    avatar: "/assets/ramjit.jpeg",
    rating: 4,
    text: "Fule is a local guide with years of experience in the tourism industry, and his deep knowledge of the area is truly impressive. He is not only honest but also incredibly hospitable, always making sure you feel comfortable and well taken care of. I highly recommend him and his agency for anyone looking for a reliable and enriching experience. His passion for sharing the culture and nature shines through in everything he does.",
  },
  {
    id: 4,
    name: "Larrisa Kato",
    avatar: "/assets/larrisa.jpeg",
    rating: 4,
    text: "Fule is an exceptionally knowledgeable guide who is both kind and accommodating. His extensive expertise made both my private birding tour and jeep safari in Chitwan truly enjoyable. He took the time to share insights about the local wildlife and surroundings, enhancing the experience. I appreciated his attention to detail and his ability to cater to my interests. Thank you, Fule, for making the trip so memorable!",
  },
  {
    id: 5,
    name: "Jazmin Fabish",
    avatar: "/assets/jazmin.jpeg",
    rating: 5,
    text: "I had an amazing time in the Chitwan jungle. The guides were extremely knowledgeable and skilled. I highly recommend booking with them for an unforgettable experience. Special thanks to our guide, Fule, for his expertise and for making the adventure so memorable and fun. His insights and attention to detail truly enhanced the experience, and I’m grateful for his excellent guidance throughout the trip.",
  },
];

export default function Homepage() {
  const [isExpanded, setIsExpanded] = useState(false);
  const [isAtBottom, setIsAtBottom] = useState(false);
  const [confetti, setConfetti] = useState(false);
  const stickyButtonRef = useRef(null);
  const footerRef = useRef(null);
  const [dim, setDim] = useState({});

  // for New reviews from client
  const [userReview, setUserReview] = useState("");
  const [userName, setUserName] = useState("");
  const [userRating, setUserRating] = useState(5);
  // const [photoFile, setPhotoFile] = useState(null);


  const handleReviewSubmit = async (e) => {
    e.preventDefault();
    if (!userName || !userReview) return;

    // let imageUrl = "No Image";
    // if(photoFile){
    //   try{
    //     const formData = new FormData();
    //     formData.append("image",photoFile);
    //     formData.append("key","2b2c172d63555cad8ca5437e3bffa4a6");


    //     const imgbbRes = await fetch("https://api.imgbb.com/1/upload",{
    //       method: "POST",
    //       body: formData,
    //     });

    //     const imgbbData = await imgbbRes.json();
    //     imageUrl = imgbbData?.data?.url || "Upload Failed";
    //   } catch (error) {
    //     console.error("Error uploading image:", error);
    //     imageUrl = "Upload Failed";
    //   }
    // }
    const response = await fetch("https://api.web3forms.com/submit",{
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
    },
    body: JSON.stringify({
      access_key: "4a7f6b18-f55c-42aa-8d4c-3b08f209ec88",
      subject: "New Review",
      name: userName,
      email: `${userName}@noemail.com`, 
      message: userReview,
      rating: userRating,
      // image_url: imageUrl,
    }),
    });
    const result = await response.json();
    if (result.success) {
      alert("Review submitted successfully!");
      setUserReview("");
      setUserName("");
      setUserRating(5);
      // setPhotoFile(null);
    }
    else{
      alert("Failed to submit review. Please try again.");
    }
  };

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (stickyButtonRef.current && footerRef.current) {
        const stickyButtonRect =
          stickyButtonRef.current.getBoundingClientRect();
        const footerRect = footerRef.current.getBoundingClientRect();
        setIsAtBottom(stickyButtonRect.bottom >= footerRect.top);
      }
    };
    setDim({
      h: window.innerHeight,
      w: window.innerWidth,
    });
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!dim.h || document.cookie.includes("confetti")) return;
    console.log(dim);
    setConfetti(true);
    const d = new Date();
    d.setTime(d.getTime() + 365 * 24 * 60 * 60 * 1000);
    document.cookie = "confetti=true;" + "expires=" + d.toUTCString();
    +";path=/";
    const timer = setTimeout(() => {
      setConfetti(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, [dim]);

  // const STFU = ({ review}) => (
  //   <div key={review.id} className="p-4 bg-white rounded-lg shadow-md">
  //     <div className="flex flex-col items-center">
  //       <Avatar className="w-16 h-16 mb-4">
  //         {review.avatar ? (
  //           <AvatarImage
  //           src={review.avatar}
  //           alt={review.name}
  //           className="rounded-full w-full h-full object-cover"
  //         />
  //         ) : (
  //           <AvatarFallback className="rounded-full flex items-center justify-center bg-gray-300">
  //             {review.name
  //               .split(" ")
  //               .map((n) => n[0])
  //               .join("")}
  //           </AvatarFallback>
  //         )}
  //       </Avatar>

  //       <h3 className="text-lg font-semibold mb-2">{review.name}</h3>

  //       <div className="flex mb-2">
  //         {[...Array(review.rating)].map((_, i) => (
  //           <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
  //         ))}
  //         {[...Array(5 - review.rating)].map((_, i) => (
  //           <Star key={i} className="w-5 h-5 text-gray-400" />
  //         ))}
  //       </div>

  //       <p className="text-center text-muted-foreground">{review.text}</p>

  //       {review.image && (
  //         <div className="mt-4">
  //           <img
  //             src={review.image}
  //             alt={review.name}
  //             className="w-full h-64 object-cover rounded-lg"
  //           />
  //         </div>
  //       )}
  //     </div>
  //   </div>
  // );

  // Review Card
  const ReviewCard = ({ review }) => (
    <div
      key={review.id}
      className="p-4 bg-white rounded-lg shadow-md text-center"
    >
      {/* Avatar */}
      <div className="w-16 h-16 rounded-full overflow-hidden mx-auto mb-4">
        <img
          src={review.avatar}
          alt={review.name}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Name */}
      <h3 className="text-lg font-semibold mb-2">{review.name}</h3>
      {/* Rating */}
      <div className="flex justify-center mb-2">
        {[...Array(review.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
        ))}
        {[...Array(5 - review.rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 text-gray-300" />
        ))}
      </div>
      {/* Review Text */}
      <p className="text-gray-600">{review.text}</p>
    </div>
  );

  const sliders = [
    {
      id: 1,
      title: "Exploring Homestay",
      image: img1,
      text: "Discover cozy homestays with local charm and hospitality",
    },
    {
      id: 2,
      title: "Tharu Cultural Dance",
      image: img2,
      text: "Experience the vibrant Tharu culture through their traditional dance.",
    },
    {
      id: 3,
      title: "Canoeing at Rapti",
      image: img3,
      text: "Paddle through serene waters and enjoy the beauty of Rapti River.",
    },
    {
      id: 4,
      title: "Cycling in the Village",
      image: img4,
      text: "Enjoy a scenic cycling ride through the peaceful village, exploring local life and rural landscapes.",
    },
    {
      id: 5,
      title: "Bird Watching",
      image: img5,
      text: "Experience the vibrant birdlife of CNP, a paradise for bird watchers amidst the serene landscapes of Chitwan.",
    },
    {
      id: 6,
      title: "Jungle Safari",
      image: img6,
      text: "Experience the thrill of venturing into the heart of nature, surrounded by untouched wilderness and diverse wildlife.",
    },
  ];
  // <div className="mx-auto px-4 lg:px-10 lg:justify-evenly lg:flex grid grid-cols-2 "></div>
  const Slider = ({ slider }) => (
    <div
      key={slider.id}
      className="relative h-auto md:h-auto group flex items-center justify-center"
    >
      <h2 className="font-MuseoModerno text-white text-xl md:text-2xl w-full font-bold text-center absolute bottom-7">
        {slider.title}
      </h2>
      <Image
        src={slider.image}
        alt={slider.title}
        className="h-auto md:h-96 object-cover rounded-tr-[4rem] rounded-bl-[4rem] rounded-md bg-[#990033] py-2"
      />

      <div className="absolute inset-0 bg-black/30 bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-tr-[4rem] rounded-bl-[4rem] rounded-md w-11/12 mx-auto">
        <p className="font-Poppins text-white text-lg md:text-xl text-center">
          {slider.text}
        </p>
      </div>
    </div>
  );

  // hotel and food carousel
  const hotels = [
    {
      id: 1,
      image: hotel1,
    },
    {
      id: 2,
      image: hotel2,
    },
    {
      id: 3,
      image: hotel3,
    },
    {
      id: 4,
      image: hotel4,
    },
    {
      id: 5,
      image: hotel5,
    },
    {
      id: 6,
      image: hotel6,
    },
    {
      id: 7,
      image: hotel7,
    },
    {
      id: 8,
      image: hotel8,
    },
    {
      id: 9,
      image: hotel9,
    },
    {
      id: 10,
      image: hotel10,
    },
    {
      id: 11,
      image: hotel11,
    },
    {
      id: 12,
      image: hotel12,
    },
    {
      id: 13,
      image: hotel13,
    },
    {
      id: 14,
      image: hotel14,
    },
    {
      id: 15,
      image: hotel15,
    },
    {
      id: 16,
      image: hotel16,
    },
    {
      id: 17,
      image: hotel17,
    },
    {
      id: 18,
      image: hotel18,
    },
    {
      id: 19,
      image: hotel19,
    },
    {
      id: 20,
      image: hotel20,
    },
    {
      id: 21,
      image: hotel21,
    },
    {
      id: 22,
      image: hotel22,
    },
    {
      id: 23,
      image: hotel23,
    },
    {
      id: 24,
      image: hotel24,
    },
    {
      id: 25,
      image: hotel25,
    },
    {
      id: 26,
      image: hotel26,
    },
    {
      id: 27,
      image: hotel27,
    },
    {
      id: 28,
      image: hotel28,
    },
    {
      id: 29,
      image: hotel29,
    },
  ];

  // <div className="mx-auto px-4 lg:px-10 lg:justify-evenly lg:flex grid grid-cols-2 "></div>
  const Hotel = ({ hotel }) => (
    <div
      key={hotel.id}
      className="relative h-auto md:h-auto group flex items-center justify-center"
    >
      {/* <h2 className="font-MuseoModerno text-white text-xl md:text-2xl w-full font-bold text-center absolute bottom-7">
          {hotel.title}
        </h2> */}
      <Image
        src={hotel.image}
        alt="hotel & food"
        // alt={hotel.title}
        className="h-auto md:h-96 object-cover rounded-tr-[4rem] rounded-bl-[4rem] rounded-md bg-[#990033] py-2"
      />

      {/* <div className="absolute inset-0 bg-black/30 bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-tr-[4rem] rounded-bl-[4rem] rounded-md w-11/12 mx-auto">
          <p className="font-Poppins text-white text-lg md:text-xl text-center">
            {hotel.text}
          </p>
        </div> */}
    </div>
  );

  return (
    <>
      <div className="space-y-14 ">
        <div className="relative lg:h-full w-full">
          <div className="absolute inset-0 bg-black/45 rounded-tl-[100px]"></div>
          <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center font-bold text-white space-y-2">
            <span className="font-Poppins text-xl lg:text-6xl text-nowrap">
              DISCOVER NATURE'S MAJESTY IN,
            </span>
            <br />
    
            <span className="font-Poppins text-nowrap text-xl lg:text-6xl">
              CHITWAN NATIONAL PARK
            </span>
            <span className="font-Popp text-[15px] lg:text-3xl block">
              Discover CNP Like Never Before
            </span>
          </div>
          <Image
            className="lg:h-[90vh] w-full rounded-tl-[100px] bg-yellow-200 py-2"
            src={home}
            alt="Home"
            rel="preload"
            priority
          />
        </div>

        <div className="container flex flex-col sm:flex-row sm:gap-2">
          <div className="md:w-1/2 md:pl-8 md:pr-8">
            <h2 className="font-MuseoModerno text-black text-3xl font-bold">
              Explore <br />
              beyond <br />
              boundaries
            </h2>
          </div>
          <div className="md:w-1/2 space-y-3">
            <p className="font-Poppins text-left text-lg">
              With 20+ years in tour guiding, adventure, cross-cultural
              exploration, we design the perfect journey for you.
            </p>
            <br />
            <Link href="/contact">
              <button className="inline-flex items-center justify-center p-0.5 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-teal-300 to-lime-300 group-hover:from-teal-300 group-hover:to-lime-300 focus:ring-4 focus:outline-none focus:ring-lime-200">
                <span className="px-5 py-2.5 transition-all ease-in duration-75 bg-white rounded-md group-hover:bg-opacity-0">
                  Schedule a call
                </span>
              </button>
            </Link>
          </div>
        </div>

        <div className="py-10 mx-auto px-4 lg:px-10 lg:flex container">
          <Carousel
            plugins={[
              Autoplay({
                delay: 1000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              }),
            ]}
            loop={true}
          >
            <CarouselContent>
              {sliders.map((slider) => (
                <CarouselItem
                  key={slider.id}
                  className="basis-1/2 md:basis-1/3 lg:basis-1/3"
                >
                  <Slider slider={slider} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Old section */}
        {/* <div className="mx-auto px-4 lg:px-10 lg:justify-evenly lg:flex grid grid-cols-2 gap-2">
          <div className="relative h-auto md:h-auto group">
            <h2 className="font-MuseoModerno text-white text-xl md:text-2xl w-full font-bold text-center absolute bottom-7">
              Exploring Homestay
            </h2>
            <Image
              src={img1}
              alt="Image 1"
              className="h-auto md:h-96 object-cover rounded-tr-[4rem] rounded-bl-[4rem] rounded-md bg-[#990033] py-2"
            />

            <div className="absolute inset-0 bg-black/30 bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-tr-[4rem] rounded-bl-[4rem] rounded-md">
              <p className="font-Poppins text-white text-lg md:text-xl text-center">
                Discover cozy homestays with local charm and hospitality.
              </p>
            </div>
          </div>

          <div className="relative h-auto md:h-auto hidden lg:block group">
            <h2 className="font-MuseoModerno text-white text-xl md:text-2xl w-full font-bold text-center absolute bottom-7">
              Tharu Cultural Dance
            </h2>
            <Image
              src={img2}
              alt="Image 1"
              className="h-auto md:h-96 object-cover rounded-tr-[4rem] rounded-bl-[4rem] rounded-md bg-[#990033] py-2"
            />

            <div className="absolute inset-0 bg-black/30 bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-tr-[4rem] rounded-bl-[4rem] rounded-md">
              <p className="font-Poppins text-white text-lg md:text-xl text-center">
              Experience the vibrant Tharu culture through their traditional dance.
              </p>
            </div>
          </div>

          <div className="relative h-auto md:h-auto group">
            <h2 className="font-MuseoModerno text-white text-xl md:text-2xl w-full font-bold text-center absolute bottom-7">
              Canoeing at Rapti
            </h2>
            <Image
              src={img3}
              alt="Image 1"
              className="h-auto md:h-96 object-cover rounded-tr-[4rem] rounded-bl-[4rem] rounded-md bg-[#990033] py-2"
            />

            <div className="absolute inset-0 bg-black/30 bg-opacity-60 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity duration-300 rounded-tr-[4rem] rounded-bl-[4rem] rounded-md">
              <p className="font-Poppins text-white text-lg md:text-xl text-center">
              Paddle through serene waters and enjoy the beauty of Rapti River.
              </p>
            </div>
          </div>
        </div> */}

        {/*<div className="mx-auto px-4 lg:px-10 lg:justify-evenly lg:flex grid grid-cols-2 gap-2">
          <div className="relative h-auto">
            <h2 className="font-MuseoModerno text-white text-xl md:text-2xl w-full font-bold text-center absolute bottom-7">
              Exploring Homestay
            </h2>
            <Image
              src={img1}
              alt="Image 1"
              className="w-full md:h-full object-cover rounded-tr-[4rem] rounded-bl-[4rem] rounded-md bg-[#990033] py-2"
            />
          </div>

          <div className="relative h-auto hidden lg:block">
            <h2 className="font-MuseoModerno text-white text-xl md:text-2xl w-full font-bold text-center absolute bottom-7">
              Tharu Cultural Dance
            </h2>
            <Image
              src={img2}
              alt="Image 1"
              className="w-full md:h-full object-cover rounded-tr-[4rem] rounded-bl-[4rem] rounded-md bg-[#990033] py-2"
            />
          </div>


          <div className="relative h-auto">
            <h2 className="font-MuseoModerno text-white text-xl md:text-2xl w-full font-bold text-center absolute bottom-7">
              Canoeing at Rapti
            </h2>
            <Image
              src={img3}
              alt="Image 1"
              className="w-full md:h-full object-cover rounded-tr-[4rem] rounded-bl-[4rem] rounded-md bg-[#990033] py-2"
            />
          </div>
        </div> */}

        {/* Curve design FOR SM and MD only*/}
        <div
          className="lg:hidden px-5 py-4 -space-y-1 bg-no-repeat"
          style={{ backgroundImage: `url("assets/boat2.png")` }}
        >
          <div className="relative rounded-t-xl break-words text-white rounded-tr-[70%] bg-gradient-to-br from-[#802D65] to-60% to-[#5C2C59]">
            <h1 className="font-semibold text-lg px-5 py-3">
              My Specialization
            </h1>
            <p className="text-sm px-5 pr-20 mt-2">
              My name is{" "}
              <span className="font-bold text-white"> Fule Chaudhary</span> and
              I have been a tourist guide for more then 20 years. I specialize
              in nature and adventure tours. Get in touch with me to book your
              dream trip!
            </p>
            <Image
              className="float-right p-2 m-6 -mt-4 px-4"
              src={roundedGuide}
              width={120}
              height={120}
              alt="Guide image"
            />
            <p className="text-sm px-5 pr-16 pb-3">
              With more than a decade of expertise in the tourism industry, I've
              explored a multitude of exotic destinations. Leveraging this
              diverse background, I can craft the ideal tour itinerary tailored
              just for you.
            </p>
          </div>

          <div className="relative break-words py-14 text-white rounded-bl-[70%] bg-gradient-to-bl to-[#802D65] from-30% from-[#5C2C59]">
            <h1 className="font-semibold text-lg px-5 py-4 ">
              Best Experience in Chitwan
            </h1>
            <p className="text-sm px-5 pl-20">
              Chitwan is renowned for its exceptional experiences centered
              around its famous national park, home to rare and endangered
              animals like the one-horned rhino, Asian elephant, Bengal tiger,
              and gharial crocodile.
            </p>
            <Image
              className="float-left p-2 ml-24 mt-2 px-4 rounded-full"
              src={roundedTourist}
              width={120}
              height={120}
              alt="Tourist"
            />
            <p
              className="text-sm px-5
           text-right"
            >
              Visitors can go on thrilling jungle safaris, where spotting these
              majestic creatures in their natural.
            </p>
          </div>
        </div>

        {/* this is for desktop */}

        <div className="lg:block hidden">
          {/* Specialization Section */}
          <div className="relative text-center container mx-auto py-10 px-6 bg-[#f0f8f0] rounded-t-xl shadow-md">
            <div className="flex justify-center items-center flex-col lg:flex-row">
              {/* Guide Image */}
              <Image
                src={fule}
                className="rounded-3xl shadow-lg mb-6 lg:mb-0 lg:mr-8"
                alt="Guide"
                style={{ width: "350px", height: "350px" }}
                sizes="(max-width: 1024px) 200px, 400px"
              />

              {/* Text Content */}
              <div className="bg-white rounded-3xl shadow-md p-8 text-gray-700 max-w-3xl">
                <div className="text-[#2E8B57] text-2xl md:text-4xl font-semibold mb-4">
                  My Specialization
                </div>
                <p className="text-base md:text-lg leading-relaxed font-Poppins">
                  My name is{" "}
                  <span className="font-bold text-[#2E8B57]">
                    Fule Chaudhary
                  </span>
                  , and I have been a tourist guide for more than 20 years. I
                  specialize in nature and adventure tours. Get in touch with me
                  to book your dream trip! With more than a decade of expertise
                  in the tourism industry, I've explored a multitude of exotic
                  destinations. Leveraging this diverse background, I can craft
                  the ideal tour itinerary tailored just for you.
                </p>
              </div>
            </div>

            <div className="flex justify-center items-center flex-col lg:flex-row">
              {/* Text Content */}
              <div className="bg-white rounded-3xl shadow-md p-8 text-gray-700 max-w-3xl mb-6 lg:mb-0 lg:mr-8">
                <div className="text-[#2E8B57] text-2xl md:text-4xl font-semibold mb-4">
                  Best Experience in Chitwan
                </div>
                <p className="text-base md:text-lg leading-relaxed font-Poppins">
                  Chitwan is renowned for its exceptional experiences centered
                  around its famous national park, home to rare and endangered
                  animals like the one-horned rhino, Asian elephant, Bengal
                  tiger, and gharial crocodile. Visitors can go on thrilling
                  jungle safaris, where spotting these majestic creatures in
                  their natural habitat is a highlight. The park also offers
                  serene canoe rides along the Rapti River, allowing guests to
                  appreciate the rich birdlife and lush scenery that make
                  Chitwan a true wildlife haven.
                </p>
              </div>

              {/* Tourist Image */}
              <Image
                src={roundedTourist}
                className="rounded-3xl shadow-lg"
                alt="Tourist"
                style={{ width: "350px", height: "350px" }}
                sizes="(max-width: 1024px) 200px, 400px"
              />
            </div>
          </div>
        </div>

        <section className=" bg-gray-200 py-10 md:py-16 md:px-10">
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Image Section */}
            <div className="flex justify-center">
              <Image
                className="w-full h-auto bg-cover rounded-xl shadow-lg"
                style={{ width: "100%", height: "auto" }}
                src={guide}
                alt="Our Services"
              />
            </div>

            {/* Content Section */}
            <div className="bg-white rounded-3xl shadow-md p-6 md:p-8 text-gray-700">
              <h2 className="text-[#2E8B57] text-2xl md:text-4xl font-semibold mt-8 mb-4 text-center lg:text-left">
                Our Services
              </h2>
              <ul className="list-disc space-y-4 text-base md:text-lg leading-relaxed font-Poppins text-black pl-6">
                <li>Comfortable and cozy homestay experience.</li>
                <li>Thrilling guided jungle safari tours.</li>
                <li>Reliable 24/7 support and assistance services.</li>
                <li>Exciting and serene river canoeing adventures.</li>
              </ul>
            </div>
          </div>
        </section>

        <section className="bg-[#f0f8f0] py-10 md:py-16 md:px-10">
          {/* Eco-Friendly Tourism and Insurance Section */}
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Eco-Tourism Image */}
            <div className="flex justify-center">
              <Image
                className="w-full h-auto bg-cover rounded-xl shadow-lg"
                style={{ width: "100%", height: "auto" }}
                src={travel}
                alt="Why Travel with us"
              />
            </div>

            {/* Text Content */}
            <div className="bg-white rounded-3xl shadow-md p-6 md:p-8 text-gray-700">
              <div className="text-[#2E8B57] text-2xl md:text-4xl font-semibold mt-8 mb-4 text-center lg:text-left">
                Frequently Asked Questions
              </div>
              <div className="faq-section space-y-4">
                <div className="faq-item">
                  <h3 className="font-semibold">
                    1. What should I pack for a jungle safari?
                  </h3>
                  <p>Neutral clothes, sunscreen, hat, and shoes.</p>
                </div>
                <div className="faq-item">
                  <h3 className="font-semibold">
                    2. Is it safe to travel with kids?
                  </h3>
                  <p>Yes, we offer family-friendly activities safely.</p>
                </div>
                <div className="faq-item">
                  <h3 className="font-semibold">
                    3. How can I get to Chitwan National Park?
                  </h3>
                  <p>Drive or fly, transfers available for convenience.</p>
                </div>
                <div className="faq-item">
                  <h3 className="font-semibold">
                    4. What is the best time to visit?
                  </h3>
                  <p>October to March for wildlife and weather.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Hotel and food carousel */}
        <div className="py-10 mx-auto px-4 lg:px-10 lg:flex container">
          <Carousel
            plugins={[
              Autoplay({
                delay: 1000,
                stopOnInteraction: false,
                stopOnMouseEnter: false,
              }),
            ]}
            loop={true}
          >
            <CarouselContent>
              {hotels.map((hotel) => (
                <CarouselItem
                  key={hotel.id}
                  className="basis-1/2 md:basis-1/3 lg:basis-1/3"
                >
                  <Hotel hotel={hotel} />
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        <section className="bg-[#f0f8f0] py-10  md:py-16 md:px-10">
          {/* Eco-Friendly Tourism and Insurance Section */}
          <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            {/* Eco-Tourism Image */}
            <div className="flex justify-center">
              <Image
                className="w-full h-auto bg-cover rounded-xl shadow-lg"
                style={{ width: "100%", height: "auto" }}
                src={travel1}
                alt="Why Travel with us"
              />
            </div>

            {/* Text Content */}
            <div className="bg-white rounded-3xl shadow-md p-6 md:p-8 text-gray-700">
              <div className="text-[#2E8B57] text-2xl md:text-4xl font-semibold mt-8 mb-4 text-center lg:text-left">
                Your Safety Is Our Priority
              </div>
              <p className="text-base md:text-lg leading-relaxed font-Poppins text-center lg:text-left">
                We understand that safety is a top concern during adventure
                tours. To provide peace of mind:
              </p>
              <ul className="list-disc pl-6 text-base md:text-lg mt-4 space-y-2">
                <li>
                  All tours are conducted by licensed guides trained in first
                  aid.
                </li>
                <li>
                  Kindly note that if any guidelines are not followed, guests
                  will be responsible for any unforeseen incidents.
                </li>
                <li>
                  Our vehicles and equipment are regularly inspected for safety.
                </li>
                <li>
                  We provide 24/7 support for any assistance during your trip.
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* <div className="lg:hidden block">
        <div
          className="flex items-center justify-center h-80 sm:h-[35rem] lg:h-screen px-4"
          style={{ backgroundImage: `url('assets/boat2.png')` }}
        >
          <div className="grid grid-cols-[1fr_2fr]">
            <div className="rounded-3xl py-3">
              <Image src={guide} alt="Guide" />
            </div>
            <div className="rounded-md text-white px-5 lg:text-xl h-full text-sm text-center font-Poppins bg-[#5c2c59] flex flex-col justify-center items-center">
              <p className="">About Guide</p>
              <p className="">
                Our guide offers a clear, step-by-step approach that makes even
                the most complex topics easy to understand. Whether you're a
                beginner or an experienced professional, the guide is designed
                to provide practical solutions and actionable insights.
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex items-center justify-center h-80 sm:h-[35rem] lg:h-screen px-4"
          style={{ backgroundImage: `url('assets/boat2.png')` }}
        >
          <div className="grid grid-cols-[1fr_2fr]">
            <div className="rounded-3xl py-3">
              <Image src={guide} alt="Guide" />
            </div>
            <div className="rounded-md text-white px-5 lg:text-xl h-full text-sm text-center font-Poppins bg-[#5c2c59] flex flex-col justify-center items-center">
              <p className="">About Guide</p>
              <p className="">
                Our guide offers a clear, step-by-step approach that makes even
                the most complex topics easy to understand. Whether you're a
                beginner or an experienced professional, the guide is designed
                to provide practical solutions and actionable insights.
              </p>
            </div>
          </div>
        </div>
      </div> */}

        <section className="elative text-center container mx-auto py-10 px-6 bg-[#f0f8f0] rounded-t-xl shadow-md">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 items-center gap-5">
            {/* Image Section */}
            <div className="relative">
              <Image
                className="w-full h-auto bg-cover rounded-xl shadow-lg"
                style={{ width: "100%", height: "auto" }}
                src={travel2}
                alt="Why Travel with us"
              />
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <h2 className="text-4xl font-bold text-white">
                  Why Travel With Us
                </h2>
                <div className="bg-green-300 w-1/6 h-2 mt-2 rounded-full"></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="space-y-8">
              {/* Features */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Feature 1 */}
                <div className="bg-white p-3 shadow-md rounded-lg transform group">
                  <div className="flex items-start gap-4">
                    <div className="circle">
                      <div className="tick">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="green"
                          width="28"
                          height="28"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        THE AMAZING TEAM
                      </h3>
                      <p className="text-gray-600">
                        We are your friend in need! We make your adventures
                        unique and unforgettable, alongside our fun-loving
                        guides,sharing insights into the authentic local
                        culture.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 2 */}
                <div className="bg-white p-3 rounded-lg shadow-md transform group">
                  <div className="flex items-start gap-4">
                    <div className="circle">
                      <div className="tick">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="green"
                          width="28"
                          height="28"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        HEALTH & SAFETY
                      </h3>
                      <p className="text-gray-600">
                        We ensure high level of safety and security during each
                        trip we operate as it is our prime concern. We have
                        experience jungle safari guide.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 3 */}
                <div className="bg-white p-3 rounded-lg shadow-md transform group">
                  <div className="flex items-start gap-4">
                    <div className="circle">
                      <div className="tick">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="green"
                          width="28"
                          height="28"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        EAT LIKE A LOCAL
                      </h3>
                      <p className="text-gray-600">
                        Particular about food? So are we! We handpick
                        restaurants, including quaint eateries around the corner
                        of the alleys to give you that immensely local dining
                        experiences.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Feature 4 */}
                <div className="bg-white p-3 rounded-lg shadow-md  transform group">
                  <div className="flex items-start gap-4">
                    <div className="circle">
                      <div className="tick">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 448 512"
                          fill="green"
                          width="28"
                          height="28"
                        >
                          <path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7 393.4 105.4c12.5-12.5 32.8-12.5 45.3 0z" />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-gray-800 mb-2">
                        NO HIDDEN CHARGES
                      </h3>
                      <p className="text-gray-600">
                        We don't add hidden extras cost. All trips include
                        travel permit, lodging and fooding. There are no
                        surprises with hidden costs.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Homepage Gallery */}
        <div className="py-10 -mb-10 bg-[#f0f8f0] container shadow-lg">
          <div className="container mx-auto px-4 text-center">
            <h2 className="font-MuseoModerno text-3xl lg:text-4xl font-bold text-[#2E8B57] mb-12">
              Explore Our Gallery
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="relative">
                <video
                  controls
                  className="w-full h-60 object-cover rounded-xl shadow-lg z-10"
                >
                  <source src="/assets/video/vid1.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 rounded-xl z-0 pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 text-white text-xl font-semibold z-0 pointer-events-none font-Poppins">
                  <p>Tharu Dance</p>
                </div>
              </div>

              <div className="relative">
                <video
                  controls
                  className="w-full h-60 object-cover rounded-xl shadow-lg z-10"
                >
                  <source src="/assets/video/vid3.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 rounded-xl z-0 pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 text-white font-Poppins text-xl font-semibold z-0 pointer-events-none">
                  <p>Jungle Safari</p>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/assets/Cycling.jpg"
                  alt="Cycline In Sauraha"
                  className="w-full h-60 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 rounded-xl"></div>
                <div className="absolute bottom-4 left-4 text-white font-Poppins text-xl font-semibold">
                  <p>Cycline In Sauraha</p>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/assets/Birdwatch.jpg"
                  alt="Birdwatch In Sauraha"
                  className="w-full h-60 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 rounded-xl"></div>
                <div className="absolute bottom-4 left-4 text-white font-Poppins text-xl font-semibold">
                  <p>Bird Watching</p>
                </div>
              </div>

              <div className="relative">
                <img
                  src="/assets/JungleWalk.jpg"
                  alt="Junglewalk In Sauraha"
                  className="w-full h-60 object-cover rounded-xl shadow-lg"
                />
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 rounded-xl"></div>
                <div className="absolute bottom-4 left-4 text-white font-Poppins text-xl font-semibold">
                  <p>Nature Friendly</p>
                </div>
              </div>

              <div className="relative">
                <video
                  controls
                  className="w-full h-60 object-cover rounded-xl shadow-lg z-10"
                >
                  <source src="/assets/video/vid2.mp4" type="video/mp4" />
                </video>
                <div className="absolute top-0 left-0 w-full h-full bg-black/30 rounded-xl z-0 pointer-events-none"></div>
                <div className="absolute bottom-4 left-4 text-white font-Poppins text-xl font-semibold z-0 pointer-events-none">
                  <p>Tiger hunting Deer</p>
                </div>
              </div>
            </div>

            {/* see more button */}
            <div className="flex items-center gap-2 mt-4 justify-end">
              <Link href={`/gallery/`}>
                <span className="border-2 border-[#55e6a5] px-[2rem] bg-gray-200 transition-all duration-200 py-[0.5rem] text-[15px] font-bold uppercase hover:bg-[#55e6a5] text-black flex items-center justify-center space-x-2 rounded-full button">
                  <p className="tracking-widest">See More</p>
                </span>
              </Link>
            </div>
          </div>

          {/* Review Form Section */}
          <section className="py-10 bg-gray-100">
            <div className="container mx-auto px-4 max-w-2xl">
              <h2 className="text-3xl font-bold text-center text-green-700 mb-6">
                Write a Review
              </h2>
              <form onSubmit={handleReviewSubmit}  className="bg-white p-6 rounded-lg shadow-lg space-y-4">
                <input
                  type="text"
                  value={userName}
                  onChange={(e) => setUserName(e.target.value)}
                  placeholder="Your Name"
                  className="w-full px-4 py-2 border rounded" required
                />
                {/* <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => setPhotoFile(e.target.files[0])}
                  className="w-full px-4 py-2 border rounded"
                /> */}

                <textarea
                  value={userReview}
                  onChange={(e) => setUserReview(e.target.value)}
                  placeholder="Write your review..."
                  rows={4}
                  className="w-full px-4 py-2 border rounded" required
                ></textarea>
                <label className="block font-medium">Rating:</label>
                <select
                  value={userRating}
                  onChange={(e) => setUserRating(Number(e.target.value))}
                  className="w-full px-4 py-2 border rounded"
                >
                  {[5, 4, 3, 2, 1].map((r) => (
                    <option key={r} value={r}>
                      {r} Star{r > 1 && "s"}
                    </option>
                  ))}
                </select>
                <button type="submit"
                  className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
                >
                  Submit Review
                </button>
              </form>
            </div>
          </section>

          <h2 className="font-MuseoModerno text-3xl font-bold text-center mb-8 text-[#333] underline mt-20">
            Reviews from our clients
          </h2>
          <div className="flex justify-center">
            {/* Carousel */}
            <Carousel className="w-10/12 md:w-3/4">
              <CarouselContent className="w-auto">
                {reviews.map((review) => (
                  <CarouselItem
                    key={review.id}
                    className="p-4 md:basis-1/2 lg:basis-1/3"
                  >
                    <ReviewCard review={review} />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </div>
        </div>
      </div>

      {/* Confetti */}
      {confetti && (
        <Confetti
          width={dim.w}
          height={dim.h}
          recycle={false}
          numberOfPieces={1000}
          gravity={0.1}
          colors={
            String[
              ("#f44336",
              "#e91e63",
              "#9c27b0",
              "#673ab7",
              "#3f51b5",
              "#2196f3",
              "#03a9f4",
              "#00bcd4",
              "#009688",
              "#4CAF50",
              "#8BC34A",
              "#CDDC39",
              "#FFEB3B",
              "#FFC107",
              "#FF9800",
              "#FF5722",
              "#795548")
            ]
          }
          wind={0}
        />
      )}

      {/* Quick buttons */}
      <div
        ref={stickyButtonRef}
        className={`fixed right-4 flex flex-col items-center space-y-2 transition-all duration-300 ease-in-out z-50 ${
          isAtBottom ? "bottom-[calc(100vh-5rem)]" : "bottom-4"
        }`}
      >
        {isExpanded && (
          <div className="flex flex-col items-center space-y-4 transition-all duration-300 ease-in-out transform">
            {/* WhatsApp Button */}
            <div className="p-1 bg-gradient-to-r from-green-400 to-white-500 rounded-full">
              <button
                className="p-2 bg-green-500 text-white rounded-full w-12"
                onClick={() =>
                  window.open("https://wa.me/9845043367", "_blank")
                }
              >
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </button>
            </div>

            {/* Facebook Button */}
            <div className="p-1 bg-gradient-to-r from-blue-500 to-white-600 rounded-full">
              <button
                className="p-2 bg-blue-500 text-white rounded-full w-12"
                onClick={() =>
                  window.open(
                    "https://www.facebook.com/fule.chaudhary",
                    "_blank"
                  )
                }
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </button>
            </div>

            {/* Instagram Button */}
            <div className="p-1 bg-gradient-to-r from-pink-500 to-white-500 rounded-full">
              <button
                className="p-2 bg-pink-500 text-white rounded-full w-12"
                onClick={() =>
                  window.open(
                    "https://www.instagram.com/chitwanjungle01/",
                    "_blank"
                  )
                }
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
            isExpanded ? "scale-105" : "scale-100"
          }`}
        >
          {isExpanded ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </>
  );
}