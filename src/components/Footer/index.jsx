"use client";
import Image from "next/image";
import Phone from "@/components/SVG/phone";
import Facebook from "@/components/SVG/facebook";
import Link from "next/link";

export default function () {
  return (
    <>
      <footer>
        <div className="relative md:h-40 h-32 flex justify-center items-center text-white">
          <Image
            alt="footer image"
            src={"/global/footer.png"}
            fill
            quality={100}
          />
        </div>
        <iframe
          className="w-full h-[50vh]"
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d358.3068946006671!2d84.50978807132103!3d27.589969061694507!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1733057843914!5m2!1sen!2snp"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Sauraha Location"
        ></iframe>
        <div className="bg-[#401A33] h-[25rem] lg:text-lg lg:h-[30rem] relative [clip-path:polygon(100%0%,50%10%,0%0%,0%80%,50%100%,100%80%)] lg:[clip-path:polygon(100%0%,50%10%,0%0%,0%85%,50%100%,100%85%)]  -translate-y-[14%] -mt-[1.5px]">
          <div className="grid grid-flow-col-dense items-center gap-2 h-[60%]">
            <div className=" font-heading hidden lg:block text-white space-y-4 text-center">
              <div className="text-xl font-semibold">Useful Links</div>
              <div className="text-base space-y-3">
                <p>
                  <a href="/gallery" className="hover:underline">
                    Gallery
                  </a>
                </p>
                <p>
                  <a href="itinerary" className="hover:underline">
                    Itinerary
                  </a>
                </p>
                <p>
                  <a href="/plans" className="hover:underline">
                    Plans & Packages
                  </a>
                </p>
              </div>
            </div>
            <div className="font-heading hidden lg:block text-white space-y-4 text-center">
              <div className="text-xl font-semibold">Follow Us</div>
              <div className="text-base inline-flex gap-4 justify-center">
                <a
                  href="https://www.facebook.com/fule.chaudhary"
                  target="_blank"
                  className="hover:underline"
                >
                  Facebook
                </a>
                <a
                  href="https://www.instagram.com/chitwanjungle01/"
                  target="_blank"
                  className="hover:underline"
                >
                  Instagram
                </a>
                <a
                  href="https://wa.me/9845043367"
                  target="_blank"
                  className="hover:underline"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <div className="grid grid-flow-row space-y-4 text-white justify-center">
              <Link href="/contact">
                <button className="bg-white text-black rounded-full w-full h-12 font-semibold text-lg transition hover:bg-gray-200 font-MuseoModerno">
                  Contact Us
                </button>
              </Link>

              <div>
                <Phone fill={"#fff"} />
                <a href="tel:+9779845043367">+977 9845043367</a>
              </div>
              <div className="inline-flex gap-2 items-center">
                <Facebook />{" "}
                <a
                  href="https://www.facebook.com/fule.chaudhary"
                  target="_blank"
                >
                  facbook.com
                </a>
              </div>
            </div>
          </div>
          <div className="-mt-6 text-white flex flex-col items-center justify-center text-2xl">
            Associated with:
            <div className="inline-flex mt-4 gap-4">
              <div className="bg-gradient-to-t relative text-center from-[#990033] to-[#D9D9D9] w-20 h-20 rounded-full">
                <a
                  href="https://ntb.gov.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/global/ntb.png"}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ml-2"
                    alt="Nepal tourism Board"
                    width={60}
                    height={60}
                  />
                </a>
              </div>

              <div className="bg-gradient-to-t relative from-[#990033] to-[#D9D9D9] w-20 h-20 rounded-full">
                <a
                  href="https://www.nepal.gov.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/global/Emblem_of_Nepal.svg.png"}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    alt="Nepal Government"
                    width={70}
                    height={70}
                  />
                </a>
              </div>
              <div className="bg-gradient-to-t relative from-[#990033] to-[#D9D9D9] w-20 h-20 rounded-full">
                <a
                  href="https://chitwannationalpark.gov.np/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Image
                    src={"/global/Chitwan-National-Park-logo-min.webp"}
                    className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                    alt="Chitwan National Park"
                    width={80}
                    height={80}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center -mt-12">
          <div className="items-center text-center gap-4 mb-1">
            <p>Copyright 2024.</p>
            <p>Chitwan Jungle Tours PVT LTD</p>
            <p>
              Designed & Developed by{" "}
              <a href="https://www.facebook.com/profile.php?id=61559318382526">
                <b>NexusCodeNTech</b>
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
