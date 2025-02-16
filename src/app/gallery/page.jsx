import ClientRender from "./ClientRender";
import banner from "assets/i2.png";
import img1 from "assets/j8.jpg";
import img2 from "assets/j4.jpg";
import img3 from "assets/i7.jpg";
import img4 from "assets/i6.jpg";
import img5 from "assets/j3.jpg";
import img6 from "assets/i10.jpg";
import img7 from "assets/j6.jpg";
import img8 from "assets/i8.jpg";
import img9 from "assets/j9.jpg";

export default function Itinerary() {
    return <ClientRender />;
}

export function generateMetadata() {
    return {
        metadataBase: new URL('https://chitwantour.com'),
        title: "Gallery of Captured Photos - Chitwan Tour",
        description: "Explore our Gallery of Captured Photos featuring stunning wildlife, lush landscapes, and unforgettable moments from Chitwan Jungle Tours. Discover the beauty of Chitwan National Park through vivid images of exotic animals, safari adventures, and scenic views, perfect for nature lovers and adventure seekers.",
        images: [banner, img1, img2, img3, img4, img5, img6, img7, img8, img9].map(i => ({url: i.src, height:600, width:900})),
        keywords: [
            "Chitwan Tour",
            "Chitwan Jungle Tour",
            "Chitwan Jungle Safari",
            "Wildlife Photography",
            "Wildlife Gallery",
            "Chitwan Jungle Tours",
            "Wildlife Photography Chitwan",
            "Chitwan National Park Images",
            "Safari Adventure Photos",
            "Chitwan Wildlife Gallery",
            "Exotic Animals Photos",
            "Nature Photography Chitwan",
            "Chitwan Safari Tour Photos",
            "Chitwan Jungle Safari Images",
            "Scenic Views Chitwan National Park",
            "Nepal Tours",
            "Nepal Vacation",
            "Nepal Wildlife Tours",
            "Nepal Jungle Safari",
            "Chitwan Nepal Tours",
            "Chitwan Nepal Vacation",
            "Chitwan Nepal Safari",
            "Nepal Tour Packages",
            "Nepal Vacation Packages",
            "Chitwan Tour Packages",
            "Chitwan Vacation Packages"
        ],
        openGraph: {
            title: "Gallery",
            description: "Explore our Gallery of Captured Photos featuring stunning wildlife, lush landscapes, and unforgettable moments from Chitwan Jungle Tours. Discover the beauty of Chitwan National Park through vivid images of exotic animals, safari adventures, and scenic views, perfect for nature lovers and adventure seekers.",
            images: [banner, img1, img2, img3, img4, img5, img6, img7, img8, img9].map(i => ({url: i.src, height:600, width:900})),
        },
    }
}