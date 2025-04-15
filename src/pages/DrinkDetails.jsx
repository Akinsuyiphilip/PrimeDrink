import React from "react";
import { FaFacebook, FaInstagram, FaXTwitter } from "react-icons/fa6";
import { useLocation, useNavigate } from "react-router-dom";

const DrinkDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const drink = location.state;

  if (!drink) {
    return (
      <div className="h-screen flex justify-center items-center">
        <h1>No Drink Selected!</h1>
        <button
          className="mt-4 px-4 py-2 bg-blue-500 text-white rounded"
          onClick={() => navigate("/")}
        >
          Go Back
        </button>
      </div>
    );
  }

  return (
    <div
      className="h-screen flex flex-col text-center px-16 py-10"
      style={{ backgroundColor: drink.code }}
    >
      <div className="cursor-pointer flex flex-row justify-between items-center ƒ">
        <h2 className="text-5xl font-extrabold" onClick={() => navigate("/")}>
          PRIME
        </h2>

        <ul className="flex flex-row justify-between w-1/3 text-xl">
          <li>Home</li>
          <li>Store</li>
          <li>About us</li>
          <li>Contact us</li>
        </ul>
      </div>

      <div className="relative h-[80%] flex justify-center items-center">
        <h1 className="text-[350px] font-bold mb-4">PRIME</h1>
        <div className={drink.HomeClass}>
          <img src={drink.Image} alt="" />
        </div>
      </div>

      <div className="flex flex-row justify-between">
        <div className="w-1/2 text-start">
          <h1 className="text-3xl font-extrabold mb-4">{drink.name}</h1>
          <p className="text-white text-lg">{drink.description}</p>
        </div>
        <div>
          <button
            className="rounded-full px-10 py-3 text-xl font-bold bg-white text-black"
            onClick={() => navigate("/")}
          >
            Buy Now
          </button>
          <div className="flex space-x-11 justify-center mt-10">
            <FaFacebook className=" scale-200" onClick={() => navigate("/")} />
            <FaInstagram className=" scale-200" onClick={() => navigate("/")} />
            <FaXTwitter className=" scale-200" onClick={() => navigate("/")} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DrinkDetails;
