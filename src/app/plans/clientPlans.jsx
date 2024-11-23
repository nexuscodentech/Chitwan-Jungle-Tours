"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
    Pagination,
    PaginationContent,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
} from "@/components/ui/pagination";

import items from "./items";
import hotel from "assets/main.jpg";
import "./plans.css";

const itemsPerPage = 6;

export default function Plans() {
    const [currentPage, setCurrentPage] = useState(1);
    const totalPages = Math.ceil(items.length / itemsPerPage);

    const paginatedItems = items.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    return (
        <div className="">
            <section className="relative flex round">
                <Image className="position w-full bg-cover bg-center" src={hotel} alt="Hotel" />
                <div className="absolute bottom-4 left-1/2 -translate-x-2/4 -translate-y-2/4 max-md:bottom-2 max-lg:bottom-1 max-xl:bottom-0 max-2xl:bottom-1 text-center">
                    <p className="font-MuseoModerno text-white text-[2rem] font-bold tracking-[2px] md:text-[3rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[5rem]">
                        Plans & Package
                    </p>
                </div>
            </section>


            <div className="container position rounded-2xl bg-gray-200 py-36 mx-auto p-12">
                <hr className="bg-[#990033] h-1 " />
                <h2 className="font-MuseoModerno uppercase font-bold text-3xl tracking-widest">
                    Archives: Trips
                </h2>



                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-10 mt-5">
                    {paginatedItems.map((item) => (
                        <div
                            key={item.id}
                            className="bg-[#f4f5f8] shadow-xl rounded-3xl card"
                        >
                            <div className="relative card1">
                                <Image src={item.src} alt={item.title} />
                            </div>

                            <div className="p-5">
                                <h4 className="mb-1 mt-1 text-xl">{item.title}</h4>

                                <hr />

                                <div className="flex items-center gap-2 mt-4 justify-center">
                                    <Link href={`/plans/${item.id}`} key={item.id}>
                                        <span className="border-2 border-[#55e6a5] px-[2rem] bg-gray-200 transition-all duration-200 py-[0.5rem] text-[15px] font-bold uppercase hover:bg-[#55e6a5] text-black flex items-center justify-center space-x-2 rounded-full button">
                                            <p className="tracking-widest">View Details</p>
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <PaginationDemo
                currentPage={currentPage}
                totalPages={totalPages}
                onPageChange={setCurrentPage}
            />
            <br />
        </div>
    );
}

export function PaginationDemo({ currentPage, totalPages, onPageChange }) {
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
                    <PaginationNext className="pagination-next" onClick={handleNext} />
                </PaginationItem>
            </PaginationContent>
        </Pagination>
    );
}