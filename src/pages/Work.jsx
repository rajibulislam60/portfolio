import React from 'react';
import Container from "../Components/Container";
import Image1 from "../assets/test.jpg";
import Image2 from "../assets/profilePic.jpg";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Work = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }
  return (
    <div className="bg-slate-400 py-11">
      <Container>
        <div className="w-3/4 mx-auto">
          <div>
            <Slider {...settings}>
              {data.map((d) => (
                <div className="">
                  <div className="bg-white h-[400px] rounded-md text-center mx-[10px]">
                    <div className="w-[300px] h-auto mx-auto">
                      <img
                        src={d.img}
                        alt="image"
                        className="w-full h-[300px] object-cover"
                      />
                    </div>
                    <div>
                      <h2>{d.name}</h2>
                      <p>{d.review}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        </div>
      </Container>
    </div>
  );
}

let data = [
  {
    name: "Rajibul Islam",
    img: Image1,
    review: "Hello guy, Its just simple work",
  },
  {
    name: "Rajibul Islam Rajib",
    img: Image2 ,
    review: "Hello guy, Its just simple work",
  },
  {
    name: "Rajibul",
    img: Image1,
    review: "Hello guy, Its just simple work",
  },
  {
    name: "RI",
    img: Image2,
    review: "Hello guy, Its just simple work",
  },
  {
    name: "RI Rajib",
    img: Image1,
    review: "Hello guy, Its just simple work",
  },
];
  


export default Work