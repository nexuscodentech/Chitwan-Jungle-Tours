import Link from "next/link";
import Menu from "./Icons/Menu";
import Phone from "../SVG/phone";
import Location from "./Icons/Loaction";
import Facebook from "../SVG/facebook";
import Instagram from "../SVG/Instagram";
import Twitter from "../SVG/Twitter";

import Whatsapp from "../SVG/whatsapp";

import Image from "next/image";
export default function () {
  return (
    <>
      <div className="bg-[#990033]">
        <div className="grid grid-flow-col-dense lg:w-11/12 text-white items-center h-8 text-xs lg:text-sm">
          <div className="flex justify-evenly max-sm:gap-4 max-sm:text-[0.52rem] max-sm:p-2 lg:justify-center lg:-translate-x-10 lg:gap-12 lg:col-span-4">
            <a
              href="mailto:chitwanjungletours@gmail.com"
              className="hover:underline"
            >
              chitwanjungletours@gmail.com
            </a>

            <div className="space-x-2">
              <Phone fill={"#fff"} />
              <span>
                <a href="tel:+9779845043367">+977 9845043367</a>
              </span>
            </div>

            <div className="space-x-2">
              <Location />
              <span>Sauraha, Chitwan</span>
            </div>
          </div>

          <div className="hidden sm:inline-flex sm:col-span-2 lg:col-span-1 lg:justify-center lg:gap-8 justify-evenly items-center">
            <a
              href="https://www.facebook.com/fule.chaudhary"
              target="_blank"
              className="flex items-center"
            >
              <Facebook />
              <span className="sr-only">Visit our Facebook page</span>
            </a>

            <a
              href="https://twitter.com/yourprofile"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Twitter />
              <span className="sr-only">Visit our Twitter profile</span>
            </a>
            <a
              href="https://www.instagram.com/chitwanjungle01/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Instagram />
              <span className="sr-only">Visit our Instagram profile</span>
            </a>

            <a
              href="https://wa.me/9845043367"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center"
            >
              <Whatsapp />
              <span className="sr-only">Send a message on WhatsApp</span>
            </a>
          </div>
        </div>
      </div>

      <div className="max-sm:-ml-5 max-sm:font-bold flex w-full max-sm:gap-2 p-2 font-MuseoModerno h-16 max-md:text-sm  items-center justify-evenly lg:-space-x-14 xl:-space-x-20">
        <Menu />
        <Link href="/plans" className="sm:hidden">
          Packages
        </Link>
        <Link href="/plans" className="max-sm:hidden">
          Packages & Plans
        </Link>
        <Link href="/gallery">Gallery</Link>
        <div className="">
          <Link href="/">
            <Image
              src={"/global/tours.png"}
              height={65}
              width={65}
              priority={true}
              alt="Website Icon"
            />
          </Link>
        </div>
        <Link href="/itinerary">Itinerary</Link>
        <div className="md:block hidden">
          <Phone fill={"#fff"} />
          <Phone fill={"#7C992E"} />{" "}
          <span>
            <a href="tel:+9779845043367">+977 9845043367</a>
          </span>
        </div>
        <Link
          href="/contact"
          className="border-2 border-[#00B300] h-9 w-20 lg:h-10 lg:w-24 rounded-full items-center justify-center flex"
        >
          Contact
        </Link>
      </div>
    </>
  );
}
