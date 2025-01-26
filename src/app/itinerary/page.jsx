import Image from "next/image";
import rhinoceros from "assets/itineryBanner1.png";
import "./itinerary.css";
import Link from "next/link";

export default function Itinerary() {
  return (
    <>
      {/* Section Itinerary Hero */}
      
        <section className="Section-ItineraryHero relative flex round">
          <Image
            className="position w-full bg-cover bg-center"
            src={rhinoceros}
            alt="Chitwan Jingle Tours rhinoceros image"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-2/4 -translate-y-2/4 max-md:bottom-2 max-lg:bottom-1 max-xl:bottom-0 max-2xl:bottom-1 text-center">
            <p className="font-MuseoModerno text-white text-[2rem] font-bold tracking-[2px] md:text-[3rem] lg:text-[4rem] xl:text-[4rem] 2xl:text-[5rem]">
              Itinerary
            </p>
          </div>
        </section>
      

      {/* Section Overview */}
      <section className="container mx-auto max-md:px-4 py-5">

        <hr className="bg-[#990033] h-1" />


        <h2 className="overview text-center text-4xl max-md:text-2xl max-xl:text-4xl max-xl:mb-5 my-2">
          Overview
        </h2>
        <div className="position rounded-2xl rounded-br-full bg-gray-200 py-36">
          <p className="text-center text-xl leading-7 font-light max-md:text-base max-md:leading-7 px-4 py-2">
            Nepal's plains are just 100 m above sea level; this tour takes you
            down to the tropical, flat lowlands for a real contrast to the hills
            and mountains that are usually associated with Nepal. You'll stay
            river-side in an air-conditioned bungalow opposite the jungle, spend
            time on safari, almost definitely see a rhino, various types of
            monkeys and deer, and perhaps even a tiger. And, perhaps the most
            memorable and unique aspect of this trip is spending a night at the
            elephant camp, where elephants live chain-free.
          </p>
          <div className="container mx-auto max-md:px-4">
            <h3 className="text-center text-4xl font-bold mt-10 mb-5 max-md:text-2xl max-xl:text-4xl max-xl:mb-5 bg-green-300">
              Brief Itinerary
            </h3>

            {/* Table for Itinerary */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full text-left">
                <thead>
                  <tr>
                    <th className="px-4 py-2 border border-gray-400">Day</th>
                    <th className="px-4 py-2 border border-gray-400">
                      Details
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="px-4 py-2 border border-gray-400">Day 1</td>
                    <td className="px-4 py-2 border border-gray-400">
                      Arrival: Airport pickup & hotel transfer.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-400">Day 2</td>
                    <td className="px-4 py-2 border border-gray-400">
                      Visit UNESCO World Heritage Sites.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-400">Day 3</td>
                    <td className="px-4 py-2 border border-gray-400">
                      Drive to Pokhara; explore lakeside in the evening.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-400">Day 4</td>
                    <td className="px-4 py-2 border border-gray-400">
                      Drive to Kande; hike to Australian Camp; overnight stay.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-400">Day 5</td>
                    <td className="px-4 py-2 border border-gray-400">
                      Drive to Chitwan; evening river sightseeing & dinner.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-400">Day 6</td>
                    <td className="px-4 py-2 border border-gray-400">
                      Canoe ride (40 mins); jungle walk (15 km); overnight at Ghatgain.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-400">Day 7</td>
                    <td className="px-4 py-2 border border-gray-400">
                      Full jungle walk with picnic lunch; overnight in Madi Valley (homestay).
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-400">Day 8</td>
                    <td className="px-4 py-2 border border-gray-400">
                      Jeep safari; picnic lunch; return to Sauraha for dinner.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-400">Day 9</td>
                    <td className="px-4 py-2 border border-gray-400">
                      Elephant safari; evening tower night with packed dinner.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-400">Day 10</td>
                    <td className="px-4 py-2 border border-gray-400">
                      Drive back to Kathmandu.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-400">Day 11</td>
                    <td className="px-4 py-2 border border-gray-400">
                      Leisure day in Kathmandu; local lifestyle observation.
                    </td>
                  </tr>
                  <tr>
                    <td className="px-4 py-2 border border-gray-400">Day 12</td>
                    <td className="px-4 py-2 border border-gray-400">
                      Departure: Fly back home.
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div className="container mx-auto max-md:px-4">
              
             <h3 className="text-center text-3xl mt-10 font-bold mb-5 max-md:text-2xl max-xl:text-4xl max-xl:mb-5">
             <button
                className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-md"
              >
                <Link href="/contact?package=11-nights-12-days">Click Here to Order</Link>
              </button>
            </h3>
            {/*
            <h4 className="font-semibold">Day 1:</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Pick up from the airport and transfer to your hotel for
                overnight stay and rest.
              </li>
            </ul>

            <h4 className="font-semibold">Day 2:</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Visit UNESCO World Heritage Sites.</li>
            </ul>

            <h4 className="font-semibold">Day 3:</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Drive to Pokhara (by bus or car).</li>
              <li>
                Explore the lakeside in the afternoon and enjoy the evening.
              </li>
            </ul>

            <h4 className="font-semibold">Day 4:</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Breakfast, then drive from Pokhara to Kande (45 minutes by car
                or taxi).
              </li>
              <li>Start hiking to Australian Camp.</li>
              <li>Overnight stay at Australian Camp with mountain views.</li>
              <li>
                Next day, hike from Australian Camp to Phedi, then drive back to
                Pokhara (by car or taxi).
              </li>
            </ul>

            <h4 className="font-semibold">Day 5:</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Drive to Chitwan after breakfast (by bus or car).</li>
              <li>Evening sightseeing along the river and dinner.</li>
            </ul>

            <h4 className="font-semibold">Day 6:</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Enjoy a canoe ride for around 40 minutes (no canoeing inside the
                park due to COVID-19).
              </li>
              <li>Start a jungle walk of approximately 15 km.</li>
              <li>Overnight stay at Ghatgain, followed by dinner.</li>
            </ul>

            <h4 className="font-semibold">Day 7:</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Full jungle walk from Ghatgain with a picnic lunch.</li>
              <li>Stay overnight in Madi Valley with basic food (homestay).</li>
              <li>
                Walking to potential spots for tiger and wildlife sightings.
              </li>
            </ul>

            <h4 className="font-semibold">Day 8:</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Start the day with a jeep safari and picnic lunch.</li>
              <li>Evening return to Sauraha for dinner.</li>
            </ul>

            <h4 className="font-semibold">Day 9:</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>
                Breakfast followed by an elephant safari and evening tower night
                with packed dinner, observing wildlife and experiencing the
                jungle.
              </li>
            </ul>

            <h4 className="font-semibold">Day 10:</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Drive back to Kathmandu (by car or bus).</li>
            </ul>

            <h4 className="font-semibold">Day 11:</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Leisure day in Kathmandu for last-minute shopping.</li>
              <li>Enjoy a day observing local lifestyle.</li>
              <li>Evening group dinner.</li>
            </ul>

            <h4 className="font-semibold">Day 12:</h4>
            <ul className="list-disc pl-5 mb-4">
              <li>Fly back home.</li>
            </ul> */}

            <h4 className="font-semibold">Cost:</h4>
            <p className="mb-4">
              Total cost for this itinerary for one person: USD 1600. This
              includes 11 nights and 12 days. The previous price was USD 1350
              two years ago.
            </p>

            <h4 className="font-semibold">Accommodation:</h4>
            <p className="mb-4">
              Accommodation in Kathmandu and Pokhara is basic BB (bed and
              breakfast), while Chitwan is a full board package. The price
              includes taxes, entrance permits, tourist bus, taxi, and guides.
            </p>

            <h4 className="font-semibold">Exclusions:</h4>
            <p className="mb-4">
              The price does not include food in Kathmandu and Pokhara, beverage
              costs, personal insurance, flight fare, and tips for the guide and
              driver.
            </p>

            <h4 className="mt-10 mb-1 font-semibold text-xl">Contact Information:</h4>
            <p className="mb-4">
              <strong>Name:</strong> Fule Chaudhary
              <br />
              <strong>Contact:</strong> +977 9845043367
              <br />
              <strong>WhatsApp:</strong> <a href="https://wa.me/9845043367">+977 9845043367</a>
              <br />
              <strong>Email:</strong> <a href="mailto:chaudharyfule@gmail.com">chaudharyfule@gmail.com</a>
              <br />
              <strong>Facebook Page:</strong> <a href="https://www.facebook.com/fule.chaudhary">Fule Chaudhary</a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export function generateMetadata() {
  return {
    metadataBase: new URL('https://chitwan-jungle-tours.com'),
    title: "Itinerary",
    description: "This is a 12-day itinerary offering a mix of cultural exploration, nature, and wildlife experiences across Nepal.Day 1: Arrival - Airport pickup & hotel transfer. | Day 2: Visit UNESCO World Heritage Sites. | Day 3: Drive to Pokhara; explore lakeside in the evening. | Day 4: Drive to Kande; hike to Australian Camp; overnight stay. | Day 5: Drive to Chitwan; evening river sightseeing & dinner. | Day 6: Canoe ride (40 mins); jungle walk (15 km); overnight at Ghatgain. | Day 7: Full jungle walk with picnic lunch; overnight in Madi Valley (homestay). | Day 8: Jeep safari; picnic lunch; return to Sauraha for dinner. | Day 9: Elephant safari; evening tower night with packed dinner. | Day 10: Drive back to Kathmandu. | Day 11: Leisure day in Kathmandu; local lifestyle observation. | Day 12: Departure - Fly back home.",

    keywords: [
      "Nepal Itinerary",
      "12-day Nepal tour",
      "Cultural exploration Nepal",
      "Chitwan Jungle Safari",
      "Pokhara lakeside tour",
      "Australian Camp hike",
      "Chitwan National Park safari",
      "Madi Valley homestay",
      "Elephant safari Chitwan",
      "Jeep safari Nepal",
      "UNESCO World Heritage Nepal",
      "Kathmandu local lifestyle",
      "Nepal adventure tour",
      "Pokhara trekking tour",
      "Chitwan wildlife experience",
      "Nepal travel packages",
      "Nepal nature tour",
      "Chitwan National Park activities",
      "Madi Valley trekking",
      "Nepal cultural heritage",
      "Pokhara adventure activities",
      "Chitwan river sightseeing",
      "Kathmandu sightseeing tour",
      "Nepal wildlife photography",
      "Chitwan safari tours",
      "Kathmandu holiday itinerary",
      "Nepal hiking tours",
      "Cultural heritage sites Nepal",
      "Best Nepal tour package",
      // New keywords
      "Nepal Tour",
      "Nepal Vacation",
      "Nepal Holiday",
      "Nepal Trip",
      "Nepal Travel",
      "Nepal Tourism",
      "Visit Nepal",
      "Explore Nepal",
      "Nepal Adventure",
      "Nepal Culture",
      "Nepal Nature",
      "Nepal Wildlife",
      "Nepal Trekking",
      "Nepal Hiking",
      "Kathmandu Tour",
      "Pokhara Tour",
      "Chitwan Tour",
      "Nepal Packages",
      "Nepal Vacation Packages",
      "Nepal Tour Packages"
    ],
    openGraph: {
      title: "Itinerary",
      description: "This is a 12-day itinerary offering a mix of cultural exploration, nature, and wildlife experiences across Nepal.Day 1: Arrival - Airport pickup & hotel transfer. | Day 2: Visit UNESCO World Heritage Sites. | Day 3: Drive to Pokhara; explore lakeside in the evening. | Day 4: Drive to Kande; hike to Australian Camp; overnight stay. | Day 5: Drive to Chitwan; evening river sightseeing & dinner. | Day 6: Canoe ride (40 mins); jungle walk (15 km); overnight at Ghatgain. | Day 7: Full jungle walk with picnic lunch; overnight in Madi Valley (homestay). | Day 8: Jeep safari; picnic lunch; return to Sauraha for dinner. | Day 9: Elephant safari; evening tower night with packed dinner. | Day 10: Drive back to Kathmandu. | Day 11: Leisure day in Kathmandu; local lifestyle observation. | Day 12: Departure - Fly back home."

    },
  }
}