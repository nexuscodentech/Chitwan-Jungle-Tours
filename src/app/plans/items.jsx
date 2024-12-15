import plans1 from "assets/j6.jpg";
import plans2 from "assets/JungleWalk.jpg";
import plans3 from "assets/TowerNight.jpg";
import plans4 from "assets/Birdwatch.jpg";
import plans5 from "assets/Cycling.jpg";
import plans6 from "assets/Canoing.jpg";

const items = [
  {
    id: 874539028348,
    src: plans1,
    title: "1 Day Jungle Safari",
    description: "A 1-day jungle safari with a jungle walk, canoe ride, and elephant breeding center visit.",
    keywords: [
      "1 Day Jungle Safari",
      "jungle adventure",
      "wildlife exploration",
      "guided jungle walk",
      "canoe ride",
      "elephant breeding center",
      "eco-tourism",
      "Chitwan day tour",
      "nature trip",
      "day safari package",
    ],
    day1: "Day 1: Jungle Safari",
    activities: [
      {
        title: "Morning Arrival and Briefing:",
        description: "Arrive at the designated meeting point and receive a short briefing about the day’s activities.",
      },
      {
        title: "Guided Jungle Walk:",
        description: "Join a guided jungle walk, where you'll explore the dense forests and have a chance to encounter exotic wildlife such as deer, rhinos, and various bird species.",
      },
      {
        title: "Canoe Ride:",
        description: "Enjoy a peaceful canoe ride along the serene river, spotting crocodiles, aquatic birds, and other wildlife along the banks.",
      },
      {
        title: "Elephant Breeding Center Visit:",
        description: "Visit the renowned elephant breeding center to learn about the conservation efforts and interact with these majestic creatures.",
      },
      {
        title: "Lunch Break:",
        description: "Pause to enjoy a delicious lunch at a local restaurant or designated picnic spot.",
      },
      {
        title: "Wildlife Spotting and Exploration:",
        description: "Continue your journey into the jungle with opportunities for wildlife spotting and photography.",
      },
      {
        title: "Evening Departure:",
        description: "Conclude your adventure and depart with cherished memories of your jungle safari.",
      },
    ],
    price: "Price (Tax included): ",
    cost: "7,000 NRS",
  },


  {
    id: 948120184936,
    src: plans2,
    title: "2 Nights, 3 Days",
    description: "A 2-night, 3-day Chitwan tour with canoe rides, jungle walks, Tharu performances, and stunning sunsets.",
    keywords: [
      "Chitwan tour",
      "2 nights 3 days jungle tour",
      "jungle adventure",
      "Tharu cultural dance",
      "Canoe ride",
      "jungle walk",
      "wildlife experience",
      "sunset point",
      "Chitwan safari package",
    ],
    day1: "Day 1: Arrival in Hotel",
    day2: "Day 2: Jungle Adventure",
    day3: "Day 3: Departure",
    activities: [
      // this content for day 1
      {
        title: "Welcome:",
        description: "Arrive at the hotel and enjoy a refreshing welcome drink upon check-in.",
      },
      {
        title: "Lunch at Hotel:",
        description: "Settle in and enjoy lunch.",
      },
      {
        title: "Village Tour by Bicycle:",
        description: " Take an afternoon cycling tour to explore the local village, experiencing the daily life of the Tharu community and their traditional lifestyle.",
      },
      {
        title: "Return to the Hotel:",
        description: "After the village tour back to sunset point and return to the hotel for some dinner, tharu dance and relaxation",
      },

      // And this for day 2
      {
        title: "Morning Canoe Ride and Jungle Walk:",
        description: "Start the day with breakfast, then embark on a serene canoe ride along the river, followed by a guided jungle walk. Spot various wildlife and immerse yourself in the tranquility of the jungle.",
      },
      {
        title: "Return to the Hotel and Lunch:",
        description: "Head back to the hotel for lunch and some rest.",
      },
      {
        title: "Evening Wildlife Observation:",
        description: "Take a night trip with packed dinner to a tower where you can safely observe wildlife in their natural habitat.",
      },


      // and this for day 3
      {
        title: "Return to the Hotel:",
        description: "In the morning walk back to hotel and enjoy your final breakfast at the hotel.",
      },
      {
        title: "Check-Out:",
        description: "Checkout and depart via car or bus.",
      },
    ],
    price: "Price (Tax included): ",
    cost: "25,000 NRS",
  },

  {
    id: 183730284334,
    src: plans3,
    title: "3 Nights, 4 Days",
    description: "Discover Chitwan with this 3-night, 4-day tour featuring jungle safaris, canoe rides, cultural shows, and serene sunsets.",
    keywords: [
      "Chitwan tour",
      "3 nights 4 days tour",
      "jungle safari",
      "canoe ride",
      "wildlife experience",
      "Tharu culture",
      "nature exploration",
      "Chitwan safari package",
    ],
    day1: "Day 1: Arrival and Relaxation",
    day2: "Day 2: Jungle Activities",
    day3: "Day 3: Cultural Exploration",
    day4: "Day 4: Departure",
    activities: [
      // this content for day 1 (need 4 content)
      {
        title: "Welcome and Check-In:",
        description: "Arrive at the hotel, receive a welcome drink, and settle in for a relaxing start to your trip.",
      },
      {
        title: "Lunch at Hotel:",
        description: "Settle in and enjoy lunch.",
      },
      {
        title: "Village Tour by Bicycle:",
        description: "Take a cycling tour through a local village, experiencing the daily life of the Tharu community and their traditional lifestyle and enjoy a serene sunset at the riverbank.",
      },
      {
        title: "Dinner and Tharu Cultural Program:",
        description: "End the day with a delicious dinner and a captivating Tharu cultural dance performance.",
      },


      // and this for day 2 (need 3 content)
      {
        title: "Safari:",
        description: "Morning breakfast and full-day jeep safari with pack lunch.",
      },
      {
        title: "Return to the Hotel:",
        description: "Evening back to hotel for some dinner and rest.",
      },
      {
        
      },

      // and this for day 3 (need 3 content)
      {
        title: "Morning Canoe Ride and Jungle Walk:",
        description: "Start the day with breakfast followed by a canoe ride and a guided jungle walk to spot wildlife.",
      },
      {
        title: "Return to the Hotel and Lunch:",
        description: "Head back to the hotel for lunch and some rest.",
      },
      {
        title: "Evening Wildlife Observation:",
        description: "Take a night trip with packed dinner to a tower where you can safely observe wildlife in their natural habitat.",
      },
    

      // and finally this for day 4
      {
        title: "Return to the Hotel:",
        description: "In the morning walk back to hotel and enjoy your final breakfast at the hotel.",
      },
      {
        title: "Check-Out and Departure:",
        description: "Have your final breakfast, check out, and depart with memories of your Chitwan adventure.",
      },
    ],
    price: "Price (Tax included): ",
    cost: "65,000 NRS",
  },

  {
    id: 847364382643,
    src: plans4,
    title: "Bird Watching",
    description: "Embark on a serene 1-day bird-watching tour to Phulchowki Hill, the highest point in the Kathmandu Valley, and discover its rich biodiversity. This trip is perfect for nature enthusiasts and bird lovers who wish to explore Nepal’s avian wonders and tranquil forests.",
    keywords: [
      "Chitwan adventure",
      "wildlife safari",
      "jungle tour",
      "Chitwan exploration",
      "nature retreat",
      "adventure travel",
      "Chitwan National Park",
      "eco-tourism",
      "Chitwan vacation",
      "safari adventure",
      "jungle activities",
      "Chitwan holiday package",
      "wildlife exploration",
      "nature tours",
      "outdoor adventures",
      "cultural experience",
      "Chitwan wildlife tour",
      "eco-tourism package",
      "adventure holidays",
      "nature immersion",
      "Chitwan wildlife safari",
      "jungle adventure",
      "local culture",
      "Tharu culture",
    ],
    activities: [
      {
        title: "1. Early Morning Departure (6:30 AM - 7:00 AM):",
        description: "Start your journey with a drive from Kathmandu to Godavari, the base of Phulchowki Hill (approx. 1 hour).  Enjoy a brief stop at the **Godavari Botanical Garden**, a haven for local and migratory birds."
      },
      {
        title: "2. Bird Watching in Phulchowki Hill (7:30 AM - 1:30 PM):",
        description: "Hike or drive up the hill, stopping at key bird-watching spots. Look for species such as **Mountain Hawk-Eagle, Rufous-bellied Niltava, Spotted Forktail**, and many more. Explore the lush subtropical and temperate forests, home to diverse flora and fauna."
      },
      {
        title: "3. Packed Lunch Amid Nature (1:30 PM - 2:30 PM):",
        description: "Relish your packed lunch while enjoying the breathtaking views of the **Himalayas** and surrounding hills."
      },
      {
        title: "4. Return to Kathmandu (3:00 PM - 5:00 PM):",
        description: "Descend to Godavari and drive back to Kathmandu, concluding your tour. "
      }
    ],
    price: "Price (Tax included): ",
    cost: "10,000 NRS", 
  },

  {
    id: 647384048329,
    src: plans5,
    title: "Cycling & Village Tour",
    description: "A cycling tour through the scenic streets of Sauraha, along the Rapti River, and a visit to the Chitwan National Park and a typical Tharu village.",
    keywords: [
      "Chitwan adventure",
      "wildlife safari",
      "jungle tour",
      "Chitwan exploration",
      "nature retreat",
      "adventure travel",
      "Chitwan National Park",
      "eco-tourism",
      "Chitwan vacation",
      "safari adventure",
      "jungle activities",
      "Chitwan holiday package",
      "wildlife exploration",
      "nature tours",
      "outdoor adventures",
      "cultural experience",
      "Chitwan wildlife tour",
      "eco-tourism package",
      "adventure holidays",
      "nature immersion",
      "Chitwan wildlife safari",
      "jungle adventure",
      "local culture",
      "Tharu culture",
    ],
    activities: [
    {
      title: "Morning Arrival and Briefing:",
      description: "Arrive at your hotel or designated meeting point in Sauraha and receive a briefing about the day's activities."
    },
    {
      title: "Cycling Along the Rapti River:",
      description: "Start your cycling journey along the tranquil Rapti River, soaking in its mesmerizing views and the peaceful natural surroundings."
    },
    {
      title: "Explore Sauraha Streets:",
      description: "Cycle through the lively streets of Sauraha, where you’ll experience the local atmosphere, colorful markets, and traditional architecture."
    },
    {
      title: "Chitwan National Park Exploration:",
      description: "Ride through the outskirts of Chitwan National Park, with the chance to spot wildlife like rhinos, deer, and various bird species."
    },
    {
      title: "Tharu Village Cultural Visit:",
      description: "Cycle to a traditional Tharu village, where you'll experience local culture, architecture, and warm hospitality."
    },
    {
      title: "Lunch Break:",
      description: "Enjoy a delicious local lunch, savoring Tharu cuisine or other traditional dishes at a local restaurant."
    },
    {
      title: "Wildlife Spotting and Cultural Exploration:",
      description: "Continue your ride through the region with more opportunities for wildlife spotting and interactions with the local community."
    },
    {
      title: "Evening Departure:",
      description: "End the day with fond memories of your cycling journey through nature, culture, and wildlife, before heading back to your hotel."
    }
  ],
    price: "Price (Tax included): ",
    cost: "5,000 NRS",
  },
  {
    id: 283928374012,
    src: plans6,
    title: "Comming Soon...",
    keywords: [
      "Chitwan adventure",
      "wildlife safari",
      "jungle tour",
      "Chitwan exploration",
      "nature retreat",
      "adventure travel",
      "Chitwan National Park",
      "eco-tourism",
      "Chitwan vacation",
      "safari adventure",
      "jungle activities",
      "Chitwan holiday package",
      "wildlife exploration",
      "nature tours",
      "outdoor adventures",
      "cultural experience",
      "Chitwan wildlife tour",
      "eco-tourism package",
      "adventure holidays",
      "nature immersion",
      "Chitwan wildlife safari",
      "jungle adventure",
      "local culture",
      "Tharu culture",
    ],
    price: "Price (Tax included): ",
    cost: "Not available",
  },
];

export default items;
