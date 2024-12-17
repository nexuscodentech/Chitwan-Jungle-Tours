'use client'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Image from 'next/image'
import React from 'react'
import { Star } from "lucide-react";

import guide from "assets/j8.jpg";
import tourist from "assets/tourist11.png";
import fule from "assets/guide.png"



const reviews = [
    {
      id: 1,
      name: "John Doe",
      avatar: "/assets/fule.jpg", // Ensure this image exists in your public/assets folder
      rating: 5,
      text: "Amazing experience! Highly recommend!",
    },
    {
      id: 2,
      name: "Jane Smith",
      avatar: "/assets/img1.png",
      rating: 4,
      text: "The service was great, and the environment was beautiful!",
    },
    {
      id: 3,
      name: "Michael Brown",
      avatar: "/assets/img2.png",
      rating: 4,
      text: "I enjoyed my stay. Staff were friendly and helpful!",
    },
    {
      id: 4,
      name: "Emily Johnson",
      avatar: "/assets/img3.png",
      rating: 5,
      text: "An unforgettable experience. Loved every moment!",
    },
  ];

  const ReviewCard = ({ review }) => (
    <div key={review.id} className="p-4 bg-white rounded-lg shadow-md text-center">
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
  
  export default function Page() {
    return (
      <div className="min-h-screen bg-[#F9FAFB] py-12">
        <h2 className="font-MuseoModerno text-3xl font-bold text-center mb-8 text-[#333] underline">
          Reviews from our clients
        </h2>
        <div className="flex justify-center">
          {/* Carousel */}
          <Carousel className="w-11/12 md:w-3/4">
            <CarouselContent>
              {reviews.map((review) => (
                <CarouselItem key={review.id} className="p-4 md:basis-1/2 lg:basis-1/3">
                  <ReviewCard review={review} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </div>
    );
  }