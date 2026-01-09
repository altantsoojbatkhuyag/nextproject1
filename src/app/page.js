"use client";

import { useState, useEffect } from "react";
const tours = [
  {
    id: 1,
    price: "$1,995",
    Image: "https://www.course-api.com/images/tours/tour-1.jpeg",
    title: "Best of Paris in 7 Days Tour",
    description:
      "Paris is synonymous with the finest things that culture can offer — in art, fashion, food, literature, and ideas. On this tour, your Paris-savvy Rick Steves guide will immerse you in the very best of the City of Light: the masterpiece-packed Louvre and Orsay museums, resilient Notre-Dame Cathedral, exquisite Sainte-Chapelle, and extravagant Palace of Versailles. You'll also enjoy guided neighborhood walks through the city's historic heart as well as quieter moments to slow down and savor the city's intimate cafés, colorful markets, and joie de vivre. Join us for the Best of Paris in 7 Days!",
  },
  {
    id: 2,
    price: "$3,895",
    Image: "https://www.course-api.com/images/tours/tour-2.jpeg",
    title: "Best of Ireland in 14 Days Tour",
    description:
      "Rick Steves' Best of Ireland tour kicks off with the best of Dublin, followed by Ireland's must-see historical sites, charming towns, music-filled pubs, and seaside getaways — including Kinsale, the Dingle Peninsula, the Cliffs of Moher, the Aran Islands, Galway, Connemara, Giant's Causeway, and the compelling city of Belfast. All along the way, Rick's guides will share their stories to draw you in to the Emerald Isle, and the friendliness of the people will surely steal your heart. Join us for the Best of Ireland in 14 Days!",
  },
  {
    id: 3,
    price: "$2,695",
    Image: "https://www.course-api.com/images/tours/tour-3.jpeg",
    title: "Best of Salzburg & Vienna in 8 Days Tour",
    description:
      "Let's go where classical music, towering castles, and the-hills-are-alive scenery welcome you to the gemütlichkeit of Bavaria and opulence of Austria's Golden Age. Your Rick Steves guide will bring this region's rich history and culture to life in festive Munich, Baroque Salzburg, sparkling Lake Hallstatt, monastic Melk, the blue Danube, and royal Vienna — with cozy villages and alpine vistas all along the way. Join us for the Best of Munich, Salzburg & Vienna in 8 Days!",
  },
  {
    id: 4,
    price: "$2,095",
    Image: "https://www.course-api.com/images/tours/tour-4.jpeg",
    title: "Best of Rome in 7 Days Tour",
    description:
      "Our Rome tour serves up Europe's most intoxicating brew of dazzling art, earth-shaking history, and city life with style. On this Rome vacation, your tour guide will resurrect the grandeur of ancient Rome's Colosseum, Forum, Pantheon, and nearby Ostia Antica. From the Renaissance and Baroque eras, you'll marvel at St. Peter's Basilica, the Vatican Museums, Sistine Chapel, and Borghese Gallery. You'll also enjoy today's Rome, with neighborhood walking tours, memorable restaurants, and time to explore on your own. Join us for the Best of Rome in 7 Days!",
  },
  {
    id: 5,
    price: "$2,595",
    Image: "https://www.course-api.com/images/tours/tour-5.jpeg",
    title: "Best of Poland in 10 Days Tour",
    description:
      "Starting in the colorful port city of Gdańsk, you'll escape the crowds and embrace the understated elegance of ready-for-prime-time Poland for 10 days. With an expert Rick Steves guide at your side, you'll experience mighty Malbork castle, the cobbly-cute village of Toruń, Poland's contemporary capital of Warsaw, the spiritual Jasna Góra Monastery, and charming Kraków — Poland's finest city. In this land of surprises — so trendy and hip, yet steeped in history — there's so much to discover. Join us for the Best of Poland in 10 Days!",
  },
];

export default function Home() {
  const [tourList, setTourList] = useState(tours);
  const [headerText, setHeaderText] = useState("Our tours");

  const notInterested = (id) => {
    setTourList(tourList.filter((tour) => tour.id !== id));
  };

  const showAll = () => {
    setTourList(tours);
  };

  useEffect(() => {
    if (tourList.length === 0) {
      setHeaderText("No tours left");
    } else {
      setHeaderText("Our tours");
    }
  }, [tourList]);

  return (
    <div className="w-280 h-343.25 justify-self-center">
      <Header text={headerText} />
      {tourList.length > 0 && (
        <div className="bg-[#10b981] w-28 h-1 justify-self-center mt-4"></div>
      )}
      <Services tourList={tourList} notInterested={notInterested} />

      {tourList.length === 0 && (
        <button
          onClick={showAll}
          className="text-white justify-center flex justify-self-center w-[77.68px] h-[27.5px] rounded-md bg-[#10b981] hover:bg-green-700"
        >
          refresh
        </button>
      )}
    </div>
  );
}

const Services = ({ tourList, notInterested }) => {
  return (
    <div className="pt-8">
      <div className="grid grid-cols-3 gap-4">
        {tourList.map((tour) => (
          <TourCard key={tour.id} tour={tour} notInterested={notInterested} />
        ))}
      </div>
    </div>
  );
};

const TourCard = ({ tour, notInterested }) => {
  const [isReadMore, setIsReadMore] = useState(false);
  const newText = isReadMore
    ? tour.description
    : tour.description.slice(0, 199) + "...";

  return (
    <div className="relative rounded-md shadow-md">
      <p className="absolute bg-[#10b981] w-20 h-8 left-70 text-center pt-1.5 text-white font-semibold rounded-tr-lg">
        {tour.price}
      </p>
      <img
        src={tour.Image}
        alt={tour.title}
        className="h-80 w-90 rounded-t-lg"
      />
      <h5 className="font-bold text-xl text-center py-4">{tour.title}</h5>
      <div className="px-6 w-83.25">
        <p className="leading-6 text-[#64748b] text-base">{newText}</p>
        <button
          onClick={() => setIsReadMore(!isReadMore)}
          className="text-[#10b981]"
        >
          {isReadMore ? "read less" : "read more"}
        </button>
        <div className="py-2 text-center">
          <button
            onClick={() => notInterested(tour.id)}
            className="border border-[#10b981] text-[#10b981] w-67 h-6.5 rounded-sm shadow-sm hover:bg-[#10b981] hover:text-white text-sm"
          >
            Not Interested
          </button>
        </div>
      </div>
    </div>
  );
};

const Header = ({ text }) => {
  return (
    <div>
      <h2 className="text-4xl text-center mt-8 font-medium">{text}</h2>
    </div>
  );
};
