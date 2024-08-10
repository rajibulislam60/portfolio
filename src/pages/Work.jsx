import React, { useState } from "react";
import Container from "../Components/Container";
import Title from "../Components/Title";
import image1 from "../assets/test.jpg";

const Data = [
  {
    id: 1,
    title: "Card 1",
    description: "This is the first card",
    image: image1,
  },
  {
    id: 2,
    title: "Card 2",
    description: "This is the second card",
    image: image1,
  },
  {
    id: 3,
    title: "Card 3",
    description: "This is the third card",
    image: image1,
  },
  {
    id: 4,
    title: "Card 4",
    description: "This is the fourth card",
    image: image1,
  },
  {
    id: 5,
    title: "Card 5",
    description: "This is the fifth card",
    image: image1,
  },
];

const Work = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === Data.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Data.length - 1 : prevIndex - 1
    );
  };

  return (
    <div>
      <Container>
        <Title titleName="My Work" titleItem="VISIT MY Work" />
        <div className="relative flex justify-center items-center">
          {/* Previous Button */}
          <button
            onClick={prevSlide}
            className="absolute left-0 bg-gray-300 text-black px-4 py-2 rounded-lg"
          >
            Prev
          </button>

          {/* Card Display */}
          <div className="flex overflow-hidden w-[400px]">
            {Data.map((item, index) => (
              <div
                key={item.id}
                className={`flex-none w-full transition-transform duration-300 ease-in-out transform ${
                  index === currentIndex ? "translate-x-0" : "translate-x-full"
                }`}
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                <div className="flex-none w-[400px] h-[400px] m-2 p-4 bg-white shadow-md rounded-lg">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-[300px] object-cover rounded-md mb-4"
                  />
                  <h3 className="text-xl font-semibold">{item.title}</h3>
                  <p className="text-gray-600">{item.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Next Button */}
          <button
            onClick={nextSlide}
            className="absolute right-0 bg-gray-300 text-black px-4 py-2 rounded-lg"
          >
            Next
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Work;
