import React, { useState } from "react";
import { FaArrowRightLong } from "react-icons/fa6";
import OrangeImg from "../assets/ORANGE1.png";
import PurpleImg from "../assets/PURPLE2.png";
import BlueImg from "../assets/BLUE4.png";
import LemonImg from "../assets/LEMON3.png";
import { useNavigate } from "react-router-dom";

const Drinks = [
  {
    name: "Orange",
    Number: "01",
    Image: OrangeImg,
    description:
      " Embrace the sunshine in every sip with this zesty orange hydration drink! Bursting with the natural sweetness and vibrant tang of freshly squeezed oranges, this revitalizing beverage is your perfect hydration companion.",
    code: "#E56A3D",
    class:
      "absolute -top-[100%] scale-50 transition transform  duration-300 ease-in-out group-hover:top-[20%] group-hover:scale-100 group-hover:left-15",
    HomeClass: "absolute scale-40 left-[10%] -top-[70%]",
  },
  {
    name: "Grape",
    Number: "02",
    description:
      " Indulge in the juicy burst of grape goodness with this thirst-quenching hydration drink! Packed with the bold and fruity essence of luscious grapes, every sip offers a smooth and satisfying taste experience.",
    Image: PurpleImg,
    code: "#572493",
    class:
      "absolute -top-[100%] scale-50 transition transform  duration-300 ease-in-out group-hover:top-[20%] group-hover:scale-125 group-hover:left-0",
    HomeClass: "absolute scale-50 left-0 -top-[60%]",
  },
  {
    name: "Lemonade",
    Number: "03",
    description:
      "Awaken your senses with the crisp and invigorating combination of lemon and lime! This zesty hydration drink offers a perfect balance of tart lemon and tangy lime, delivering a refreshingly citrusy explosion with every sip.",
    Image: LemonImg,
    code: "#D7DA4A",
    class:
      "absolute -top-[100%] scale-50 transition transform  duration-300 ease-in-out group-hover:top-[20%] group-hover:scale-150 group-hover:left-0",
    HomeClass: "absolute scale-55 left-0 -top-[60%]",
  },
  {
    name: "Blue Raspberry",
    Number: "04",
    description:
      "Dive into the refreshing world of blue raspberry bliss! This vibrant hydration drink captures the essence of sweet and tangy blue raspberries, delivering a burst of flavor with every sip.",
    Image: BlueImg,
    code: "#43B4D7",
    class:
      "absolute -top-[100%] scale-50 transition transform  duration-300 ease-in-out group-hover:top-[18%] group-hover:scale-100 group-hover:-left-10",
    HomeClass: "absolute scale-40 -left-4 -top-[80%]",
  },
];
const AppCenter = () => {
  const navigate = useNavigate();

  const handleCardClick = (drink) => {
    navigate(`/drink/${drink.name}`, { state: drink });
  };
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="h-screen w-screen flex text-black flex-row m-0 p-0 cursor-pointer">
      {Drinks.map((drink, i) => (
        <div
          className={`relative flex justify-center items-center text-start bg-white h-full w-1/4 flex-col group`}
          key={i}
          style={{
            backgroundColor: hoveredIndex === i ? drink.code : "white",
          }}
          onMouseEnter={() => setHoveredIndex(i)}
          onMouseLeave={() => setHoveredIndex(null)}
          onClick={() => handleCardClick(drink)}
        >
          <div className="space-y-16 h-full flex-col flex justify-center w-full text-start items-center">
            <h1
              className="text-[#FF4907] text-8xl group-hover:opacity-0 group-hover:translate-y-52 translate-y-4 transition transform duration-300 ease-in-out"
              style={{
                color: drink.code,
              }}
            >
              {drink.Number}
            </h1>
            <div className="leading-tight group-hover:translate-y-64 group-hover:text-white translate-y-4 transition transform duration-300">
              <h2 className="font-extrabold text-[40px]">{drink.name}</h2>
              <p className="text-[20px] font-light"> Delicious Flavour</p>
            </div>
            <button className="border border-black px-3 rounded-full flex items-center space-x-2 w-[150px] justify-center group-hover:translate-y-52 group-hover:border-white group-hover:text-white translate-y-4 transition transform duration-300">
              <p>view more</p>
              <FaArrowRightLong />
            </button>
          </div>
          <div>
            <img src={drink.Image} alt="" className={drink.class} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AppCenter;
