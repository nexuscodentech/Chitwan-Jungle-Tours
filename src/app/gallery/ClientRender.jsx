"use client";

import { useState,useRef } from "react";
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
import img5 from "assets/gallery/gallery-3.jpg"
import img6 from "assets/j10.jpg";
import img7 from "assets/i10.jpg";
import img8 from "assets/i8.jpg";
import img9 from "assets/gallery/gallery-1.jpg";
import img10 from "assets/v2.png";
import img11 from "assets/gallery/gallery-4.png";
import img12 from "assets/gallery/gallery-2.jpg";
import img13 from "assets/gallery/gallery-5.png";
import img14 from "assets/gallery/gallery-6.png";
import img15 from "assets/gallery/gallery-7.png";
import img16 from "assets/gallery/gallery-8.png";
import img17 from "assets/gallery/gallery-9.jpg";
import img18 from "assets/gallery/gallery-10.png";
import img19 from "assets/gallery/gallery-11.png";
import img20 from "assets/gallery/gallery-12.jpg";
import img21 from "assets/gallery/gallery-13.jpg";
import img22 from "assets/gallery/gallery-14.png";
// import img23 from "assets/gallery/gallery-15.jpg";
import img24 from "assets/gallery/gallery-16.png";
import img25 from "assets/gallery/gallery-17.png";
import img26 from "assets/gallery/gallery-18.png";
import img27 from "assets/gallery/gallery-19.png";
import img28 from "assets/gallery/gallery-20.png";
import img29 from "assets/gallery/gallery-21.png";
import img30 from "assets/gallery/gallery-22.png";
import img31 from "assets/gallery/gallery-23.jpg";
import img32 from "assets/gallery/gallery-24.png";
import img33 from "assets/j6.jpg";
import img34 from "assets/j3.jpg";
import img35 from "assets/gallery/gallery-25.jpg";
import img36 from "assets/gallery/gallery-26.png";
import img37 from "assets/gallery/gallery-27.png";
import img38 from "assets/j9.jpg";
import img39 from "assets/gallery/gallery-28.png";
import img40 from "assets/gallery/gallery-29.png";
import img41 from "assets/gallery/gallery-30.png";
import img42 from "assets/gallery/gallery-31.png";
import img43 from "assets/gallery/gallery-32.jpg";
import img44 from "assets/gallery/gallery-33.png";
import img45 from "assets/gallery/gallery-34.jpg";
import img46 from "assets/gallery/gallery-35.jpg";
import img47 from "assets/gallery/gallery-36.png";
import img48 from "assets/gallery/gallery-37.jpg";
import img49 from "assets/gallery/gallery-38.png";
import img50 from "assets/gallery/gallery-39.png";
import img51 from "assets/gallery/gallery-40.jpg";
import img52 from "assets/gallery/gallery-41.png";
import img53 from "assets/gallery/gallery-42.jpg";
import img54 from "assets/gallery/gallery-43.png";
import img55 from "assets/gallery/gallery-44.jpg";
import img56 from "assets/gallery/gallery-45.png";
import img57 from "assets/gallery/gallery-46.png";
import img58 from "assets/gallery/gallery-47.png";
import img59 from "assets/gallery/gallery-48.jpg";
import img60 from "assets/gallery/gallery-49.png";
import img61 from "assets/gallery/gallery-50.png";
import img62 from "assets/gallery/gallery-51.jpg";
import img63 from "assets/gallery/gallery-52.png";
import img64 from "assets/gallery/gallery-53.jpg";
import img65 from "assets/gallery/gallery-54.png";
import img66 from "assets/gallery/gallery-55.jpg";
import { Weight } from "lucide-react";

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
  { src: img10, alt: "Image 10", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img11, alt: "Image 11", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img12, alt: "Image 12", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img13, alt: "Image 13", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img14, alt: "Image 14", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img15, alt: "Image 15", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img16, alt: "Image 16", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img17, alt: "Image 17", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img18, alt: "Image 18", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img19, alt: "Image 19", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img20, alt: "Image 20", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img21, alt: "Image 21", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img22, alt: "Image 22", text: ["Beauty of Birds:", "Capture at CNP"] },
  // { src: img23, alt: "Image 23", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img24, alt: "Image 24", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img25, alt: "Image 25", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img26, alt: "Image 26", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img27, alt: "Image 27", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img28, alt: "Image 28", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img29, alt: "Image 29", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img30, alt: "Image 30", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img31, alt: "Image 31", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img32, alt: "Image 32", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img33, alt: "Image 33", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img34, alt: "Image 34", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img35, alt: "Image 35", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img36, alt: "Image 36", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img37, alt: "Image 37", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img38, alt: "Image 38", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img39, alt: "Image 39", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img40, alt: "Image 40", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img41, alt: "Image 41", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img42, alt: "Image 42", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img43, alt: "Image 43", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img44, alt: "Image 44", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img45, alt: "Image 45", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img46, alt: "Image 46", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img47, alt: "Image 47", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img48, alt: "Image 48", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img49, alt: "Image 49", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img50, alt: "Image 50", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img51, alt: "Image 51", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img52, alt: "Image 52", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img53, alt: "Image 53", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img54, alt: "Image 54", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img55, alt: "Image 55", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img56, alt: "Image 56", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img57, alt: "Image 57", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img58, alt: "Image 58", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img59, alt: "Image 59", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img60, alt: "Image 60", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img61, alt: "Image 61", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img62, alt: "Image 62", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img63, alt: "Image 63", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img64, alt: "Image 64", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img65, alt: "Image 65", text: ["Beauty of Birds:", "Capture at CNP"] },
  { src: img66, alt: "Image 66", text: ["Beauty of Birds:", "Capture at CNP"] },

];

const videos=[
  "assets/video/vid1.mp4",
  "assets/video/vid2.mp4",
  "assets/video/vid3.mp4",
  "assets/video/vid4.mp4",
  "assets/video/vid5.mp4",
  "assets/video/vid6.mp4",
  "assets/video/vid7.mp4",
  "assets/video/vid8.mp4",
  "assets/video/vid9.mp4",
  "assets/video/vid10.mp4",
  "assets/video/vid11.mp4",
  "assets/video/vid12.mp4",
  "assets/video/vid14.mp4",
  "assets/video/vid15.mp4",
  "assets/video/vid17.mp4",
  "assets/video/vid18.mp4",
  "assets/video/vid19.mp4",
  "assets/video/vid20.mp4",
  "assets/video/vid21.mp4",
  "assets/video/vid22.mp4",
  "assets/video/vid23.mp4",
  "assets/video/vid24.mp4",
  "assets/video/vid25.mp4",
  "assets/video/vid26.mp4",
  "assets/video/vid27.mp4",
  "assets/video/vid28.mp4",
  "assets/video/vid29.mp4",
  "assets/video/vid30.mp4",
  "assets/video/vid31.mp4",
  "assets/video/vid32.mp4",
  "assets/video/vid33.mp4",
  "assets/video/vid34.mp4",
  "assets/video/vid35.mp4",
  "assets/video/vid36.mp4",
  "assets/video/vid37.mp4",
];

export default function Gallery() {
  const [currentPhotoPage, setCurrentPhotoPage] = useState(1);
  const [currentVideoPage, setCurrentVideoPage]= useState(1);
  const [showPhotos, setShowPhotos] = useState(true);
  const videoRefs=useRef([]);

  const itemsPerPage = 6;

  // Photo pagination
  const totalPhotoPages = Math.ceil(items.length / itemsPerPage);
  const paginatedPhotos = items.slice(
    (currentPhotoPage - 1) * itemsPerPage,
    currentPhotoPage * itemsPerPage
  );

  // Video pagination
  const totalVideoPages=Math.ceil(videos.length / itemsPerPage);
  const paginatedVideos=videos.slice(
    (currentVideoPage - 1) * itemsPerPage,
    currentVideoPage * itemsPerPage
  );

  const handlePhotosClick = () => {
    setShowPhotos(true);
    setCurrentPhotoPage(1)
  };

  const handleVideosClick = () => {
    setShowPhotos(false);
    setCurrentVideoPage(1);
  };

  const handleVideoPlay=(index)=>{
    videoRefs.current.forEach((video,i)=>{
      if(video && i !== index){
        video.pause();
      }
    });
  };

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
          Captured Photos & Videos
        </h2>
      </div>
        
      <div className="container mx-auto max-md:px-4">
        <div className="flex justify-center gap-5 my-4">
          <button
            onClick={handlePhotosClick}
            aria-label="View Photos"
            className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-500 ${showPhotos ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}
          >
            Photos
          </button>
          <button
            onClick={handleVideosClick}
            className={`px-6 py-3 rounded-lg font-semibold transition-colors duration-500 ${!showPhotos ? "bg-blue-500 text-white" : "bg-gray-300 text-black"}`}
          >
            Videos
          </button>
        </div>


        <div className="bg-gray-300 rounded-2xl rounded-bl container mx-auto px-2">
        {showPhotos ? (
          <div className="my-10 mx-8 gap-8 grid grid-cols-2 max-sm:gap-4 md:grid-cols-3">
            {paginatedPhotos.map((item, index) => (
              <div className="image-container rounded-[2rem] overflow-hidden" key={index}>
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={300}
                  height={200}
                  layout="fixed"
                  className="w-full sm:size-[4rem] md:size-[15rem] lg:size-[17rem] xl:size-[19rem] 2xl:size-[21rem] object-cover  cursor-pointer transition ease-in"
                />

                <span className="text-black font-bold w-full text-md sm:text-base md:text-lg lg:text-xl my-[1rem] font-MuseoModerno text-center cursor-pointer">
                  {item.text[0]} <br className="md:inline lg:hidden" />{" "}
                  {item.text[1]}
                </span>
              </div>
            ))}
          </div>

        ) : (
          <div className="my-10 mx-8 gap-8 grid grid-cols-2 max-sm:gap-4 md:grid-cols-3">
          {paginatedVideos.map((video, index) => {
            const videoIndex=(currentVideoPage - 1) * itemsPerPage + index;
            return (
              <div className="image-container rounded-[2rem] overflow-hidden" key={videoIndex}>
                <video
                ref={(el)=>(videoRefs.current[videoIndex]=el)}
                onPlay={()=>handleVideoPlay(videoIndex)}
                controls
                className="w-full h-60 object-cover rounded-xl shadow-lg z-10"
                >
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            );
          })}
        </div>
        )}
        </div>
      </div>

      {showPhotos ? (
      <PaginationDemo
        currentPage={currentPhotoPage}
        totalPages={totalPhotoPages}
        onPageChange={setCurrentPhotoPage}
      />
      ) : (
        <PaginationDemo
        currentPage={currentVideoPage}
        totalPages={totalVideoPages}
        onPageChange={setCurrentVideoPage}
      />
      )}

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
  const generatePageNumbers=()=>{
    const pageNumbers=[];
    if(totalPages<=3){
      for (let i=1;i<=totalPages; i++){
      pageNumbers.push(i);
      }
    } else{
      if(currentPage<=2){
        pageNumbers.push(1,2,3);
      } else if(currentPage>=totalPages-1){
        pageNumbers.push(totalPages-2,totalPages-1,totalPages);
      } else{
        pageNumbers.push(currentPage-1,currentPage,currentPage+1);
      }
    }
    return pageNumbers;
  }
  const handlePrevious = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };
  const pageNumbers = generatePageNumbers();

  return (
    <Pagination className="pagination">
      <PaginationContent className="pagination-content">
        <PaginationItem className="pagination-item">
          <PaginationPrevious
            className="pagination-previous hidden sm:flex"
            onClick={handlePrevious}
            aria-disabled={currentPage === 1}
          />
        </PaginationItem>

        {currentPage > 2 && totalPages > 3 && (
          <>
            <PaginationItem className="pagination-item">
              <PaginationLink
                className="pagination-link"
                onClick={() => onPageChange(1)}
              >
                1
              </PaginationLink>
            </PaginationItem>
            <span className="ellipsis">...</span>
          </>
        )}

        {pageNumbers.map((number) => (
          <PaginationItem className="pagination-item" key={number}>
            <PaginationLink
              className={`pagination-link ${currentPage === number ? "is-active" : ""
                }`}
              onClick={() => onPageChange(number)}
            >
              {number}
            </PaginationLink>
          </PaginationItem>
        ))}

        {currentPage < totalPages - 1 && totalPages > 3 && (
          <>
            <span className="ellipsis">...</span>
            <PaginationItem className="pagination-item">
              <PaginationLink
                className="pagination-link"
                onClick={() => onPageChange(totalPages)}
              >
                {totalPages}
              </PaginationLink>
            </PaginationItem>
          </>
        )}

        <PaginationItem className="pagination-item">
          <PaginationNext
            className="pagination-next hidden sm:flex"
            onClick={handleNext}
            aria-disabled={currentPage === totalPages}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
