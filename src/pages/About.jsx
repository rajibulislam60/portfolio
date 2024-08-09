import React from 'react';
import BannarImage from "../assets/profilePic.jpg";
import Container from "../Components/Container";
import Button from "../Components/Button";
import { IoCheckmarkDoneCircle } from "react-icons/io5";
import { IoMdClock } from "react-icons/io";
import { FaRegCheckSquare } from "react-icons/fa";

const About = () => {
  return (
    <div className="mt-[50px] mb-[50px]">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <img src={BannarImage} alt="Profile Picture" />
          </div>
          <div>
            <h3 className="uppercase font-normal text-[20px]">About me</h3>
            <h1 className="text-[60px] leading-1.7 font-bold mt-[40px]">
              I Can Design Anything
              <br />
              You Want
            </h1>
            <p className="text-[18px] leading-1.7 font-light mt-[20px] max-w-[663px] text-slate-400">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et aut officiis. Nam libero tempore, cum soluta
              nobis est eligendi optio cumque nihil impedit.
            </p>
            <div className="mt-[50px]">
              <div className="flex gap-[80px]">
                <div className="flex gap-3">
                  <IoCheckmarkDoneCircle className="text-[70px] text-orange-400" />
                  <div>
                    <h3 className="text-[22px] text-orange-400 leading-1.7 font-semibold">
                      12+
                    </h3>
                    <h4 className="text-[22px] leading-1.7 font-semibold">
                      Complete Project
                    </h4>
                  </div>
                </div>
                <div className="flex gap-3">
                  <IoMdClock className="text-[70px] text-orange-400" />
                  <div>
                    <h3 className="text-[22px] text-orange-400 leading-1.7 font-semibold">
                      0+
                    </h3>
                    <h4 className="text-[22px] leading-1.7 font-semibold">
                      Year of experience
                    </h4>
                  </div>
                </div>
              </div>
              <div className="mt-[40px] flex gap-[85px]">
                <div>
                  <div className="flex gap-2 items-center">
                    <FaRegCheckSquare className="text-orange-400 text-[18px]" />
                    <h5 className="text-slate-500 text-[18px] font-normal leading-1.7">
                      New idea and user friendly design
                    </h5>
                  </div>
                  <div className="flex gap-2 items-center mt-[30px]">
                    <FaRegCheckSquare className="text-orange-400 text-[18px]" />
                    <h5 className="text-slate-500 text-[18px] font-normal leading-1.7">
                      Work simple and cline design
                    </h5>
                  </div>
                </div>
                <div>
                  <div className="flex gap-2 items-center">
                    <FaRegCheckSquare className="text-orange-400 text-[18px]" />
                    <h5 className="text-slate-500 text-[18px] font-normal leading-1.7">
                      Front-End Web Development
                    </h5>
                  </div>
                  <div className="flex gap-2 items-center mt-[30px]">
                    <FaRegCheckSquare className="text-orange-400 text-[18px]" />
                    <h5 className="text-slate-500 text-[18px] font-normal leading-1.7">
                      Unlimited Revisions
                    </h5>
                  </div>
                </div>
              </div>
              <Button
                className="bg-orange-600 text-white px-5 py-3 text-[21px] font-medium rounded-md hover:bg-black duration-[0.4s] max-w-[228px] mt-[70px]"
                name="Download My CV"
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default About