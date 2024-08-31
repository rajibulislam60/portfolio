import React, { useState } from 'react';
import BannarImage from '../assets/bannar.png';
import Container from '../Components/Container';
import Button from '../Components/Button';
import { TypeAnimation } from "react-type-animation";

const Bannar = () => {

  return (
    <div className="mt-[98px]">
      <Container>
        <div className=" flex justify-between items-center ">
          <div>
            <h3 className="uppercase font-normal text-[20px]">
              I am mern stack developer
            </h3>
            <h1 className="w-[700px] text-[60px] leading-1.7 font-bold mt-[40px]">
              Creative Design and {" "}
              <div className='text-orange-400'>
                <TypeAnimation
                  sequence={["Web Develop", 1000, "Front-End Develop", 1000, "Back-End Develop", 1000, "Full Stack Develop", 1000]}
                  style={{ fontSize: "60px" }}
                  repeat={Infinity}
                />
              </div>
            </h1>
            <p className="text-[18px] leading-1.7 font-light mt-[20px] max-w-[663px]">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et.
            </p>
            <div className="mt-[50px]">
              <Button
                className="bg-orange-600 text-white px-5 py-3 text-[21px] font-medium rounded-md hover:bg-black duration-[0.4s] max-w-[228px] mt-[50px]"
                name="Download My CV"
                to="/CV"
              />
            </div>
          </div>
          <div className=''>
            <img src={BannarImage} alt="Profile Picture" className='h-[800px] w-[600px] object-cover'/>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Bannar