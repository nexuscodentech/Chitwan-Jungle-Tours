"use client";
import Whatsapp from "@/components/SVG/whatsapp";
import Instagram from "@/components/SVG/Instagram";
import Facebook from "@/components/SVG/facebook";
import Twitter from "@/components/SVG/Twitter";
export default function() {
  return (
    <div className="fixed grid grid-rows-4 justify-center bottom-5 left-5 bg-[#401A33] items-center w-10 h-36 rounded-2xl z-40">
      <>
        <a href="https://whatsapp.com" target="_blank">
          <Whatsapp />
        </a>
        <a href="https://instagram.com" target="_blank">
          <Instagram />
        </a>
        <a href="https://facebook.com" target="_blank">
          <Facebook />
        </a>
        <a href="https://twittr.com" target="_black">
          <Twitter />
        </a>
      </>
    </div>
  );
}
