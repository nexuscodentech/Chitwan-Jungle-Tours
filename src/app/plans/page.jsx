import ClientPlans from "./clientPlans"
import hotel from "assets/plansBanner.png";

export function generateMetadata() {
  return {
    metadataBase: new URL('https://chitwan-jungle-tours.com'),
    title: "Plans & Packages - Chitwan Jungle Tours",
    description: "Explore custom Plans & Packages for Chitwan Jungle Safari. Choose from tailored wildlife tours, jungle safaris, and cultural experiences in Chitwan National Park, Nepal. Book your unforgettable adventure today!",
    images: [hotel.src],
    keywords: [
      "Nepal tour packages",
      "Nepal vacation packages",
      "Nepal wildlife tour",
      "Nepal jungle tour",
      "Chitwan tour",
      "Chitwan vacation",
      "Nepal adventure vacation",
      "Nepal tour",
      "Nepal holidays",
      "Nepal vacation",
      "Chitwan Jungle Safari Packages",
      "Wildlife Safari Chitwan Nepal",
      "Chitwan National Park tour packages",
      "Nepal Jungle Safari tours",
      "Chitwan wildlife experience",
      "Chitwan cultural tour packages",
      "Chitwan adventure packages",
      "Best Chitwan safari tours",
      "Jungle safari Nepal",
      "Wildlife tours Nepal",
      "Cultural tours Nepal",
      "Nepal tour itineraries",
      "Nepal vacation itineraries",
      "Best time to visit Chitwan",
      "Things to do in Chitwan",
      "Chitwan National Park tours",
      "Nepal travel packages",
      "Nepal adventure tours",
      "Nepal family vacation",
      "Luxury Nepal tours",
      "Budget Nepal tours",
      "Chitwan nature tour packages",
      "Elephant safari in Chitwan",
      "Chitwan jungle vacation",
      "Chitwan wildlife photography tours",
      "Nepal safari adventure",
      "Chitwan holiday packages",
      "Chitwan National Park safaris",
      "Nepal custom tour packages",
      "Chitwan Jungle Tour",
      "Nepal Wildlife Safari Tour",
      "Chitwan National Park Package",
      "Nepal Tour Operators",
      "Chitwan Safari Booking",
      "Nepal Eco-Tourism",
      "Bird Watching Chitwan",
      "Elephant Back Safari Chitwan",
      "Canoeing Chitwan",
      "Nature Walks Chitwan",
      "Chitwan Accommodation",
      "Wildlife Photography Nepal",
      "Sustainable Tourism Nepal",
      "Volunteer Tourism Nepal"
    ],
    openGraph: {
      title: "Plans & Packages - Chitwan Jungle Tours",
      description: "Explore custom Plans & Packages for Chitwan Jungle Safari. Choose from tailored wildlife tours, jungle safaris, and cultural experiences in Chitwan National Park, Nepal. Book your unforgettable adventure today!",
      images: [{ url: hotel.src, height:500, width:1440}]
    },
  }
}

export default function () {
  return <ClientPlans />
}