"use client";

import { useState } from "react";
import Image from "next/image";

import "./gallery.css";

import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

import banner from "assets/galleryBanner.png";
import img1 from "assets/j8.jpg";
import img2 from "assets/j4.jpg";
import img3 from "assets/i7.jpg";
import img4 from "assets/i6.jpg";
import img5 from "assets/j3.jpg";
import img6 from "assets/i10.jpg";
import img7 from "assets/j6.jpg";
import img8 from "assets/i8.jpg";
import img9 from "assets/j9.jpg";

const items = [
  { src: img1, alt: "Image 1", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img2, alt: "Image 2", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img3, alt: "Image 3", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img4, alt: "Image 4", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img5, alt: "Image 5", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img6, alt: "Image 6", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img7, alt: "Image 7", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img8, alt: "Image 8", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img9, alt: "Image 9", text: ["Beauty of Birds:", "Capture at CNP"] },
];

export default function Gallery() {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const totalPages = Math.ceil(items.length / itemsPerPage);

  const paginatedItems = items.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <>
      <section className="round relative flex">
        <Image
          src={banner}
          alt="Gallery Banner"
          className="position w-full bg-cover bg-center"
        />
        <div className="absolute bottom-4 left-1/2 -translate-x-2/4 -translate-y-2/4 max-md:bottom-2 max-lg:bottom-1 max-xl:bottom-0 max-2xl:bottom-1 text-center">
          <p className="font-MuseoModerno text-white text-[2rem] font-bold tracking-[2px] md:text-[3rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[5rem]">
            Gallery
          </p>
        </div>
      </section>

      <div className="position">
        <hr className="bg-[#990033] h-1 " />

        <h2 className="overview text-center text-4xl max-md:text-2xl max-xl:text-4xl mt-2">
          Captured photos
        </h2>
      </div>
      <div className="container mx-auto max-md:px-4">
        <div className="bg-gray-300 rounded-2xl rounded-bl container mx-auto px-2">
          <div className="my-10 mx-8 gap-8 grid grid-cols-2 max-sm:gap-4 md:grid-cols-3">
            {paginatedItems.map((item, index) => (
              <div className="image-container rounded-[2rem]" key={index}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={200}
                  height={100}
                  className="w-full sm:size-[4rem] md:size-[15rem] lg:size-[17rem] xl:size-[19rem] 2xl:size-[21rem] object-cover  cursor-pointer transition ease-in"
                />

                <span className="text-black font-bold w-full text-md sm:text-base md:text-lg lg:text-xl my-[1rem] font-MuseoModerno text-center cursor-pointer">
                  {item.text[0]} <br className="md:inline lg:hidden" />{" "}
                  {item.text[1]}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <PaginationDemo
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={setCurrentPage}
      />

      <style jsx global>{`
        .pagination {
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 1rem;
        }
        .pagination-content {
          display: flex;
          list-style: none;
        }
        .pagination-item {
          margin: 0 0.5rem;
        }
        .pagination-link {
          font-weight: bolder;
          display: block;
          padding: 0.5rem 1rem;
          border: 1px solid #ddd;
          border-radius: 0.25rem;
          text-decoration: none;
          color: #333;
          transition: background-color 0.3s, color 0.3s;
        }
        .pagination-link:hover,
        .pagination-link.is-active {
          background-color: #55e6a5;
          color: #fff;
          border-color: #55e6a5;
        }
        .pagination-previous,
        .pagination-next {
          font-weight: bolder;
          cursor: pointer;
          padding: 0.5rem 1rem;
          border: 1px solid #ddd;
          border-radius: 0.25rem;
          text-decoration: none;
          color: #333;
          transition: background-color 0.3s, color 0.3s;
        }
        .pagination-previous:hover,
        .pagination-next:hover {
          background-color: #55e6a5;
          color: #fff;
          border-color: #55e6a5;
        }
      `}</style>
    </>
  );
}

function PaginationDemo({ currentPage, totalPages, onPageChange }) {
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <Pagination className="pagination">
      <PaginationContent className="pagination-content">
        <PaginationItem className="pagination-item">
          <PaginationPrevious
            className="pagination-previous"
            onClick={handlePrevious}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>

        {[...Array(totalPages)].map((_, index) => (
          <PaginationItem className="pagination-item" key={index}>
            <PaginationLink
              className={`pagination-link ${currentPage === index + 1 ? "is-active" : ""
                }`}
              onClick={() => onPageChange(index + 1)}
            >
              {index + 1}
            </PaginationLink>
          </PaginationItem>
        ))}

        <PaginationItem className="pagination-item">
          <PaginationNext
            className="pagination-next"
            onClick={handleNext}
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
