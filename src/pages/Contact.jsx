import React from "react";
import Container from "../Components/Container";
import { IoMdClock } from "react-icons/io";
import {
  FaSquareFacebook,
  FaLinkedin,
  FaGithub,
  FaLocationDot,
  FaPhone,
} from "react-icons/fa6";
import { IoIosMail } from "react-icons/io";

const Contact = () => {
  const handleFB = () => {
    window.open(
      "https://www.facebook.com/profile.php?id=100025401429633"
    );
  };
  const handleLinked = () => {
    window.open(
      "https://www.linkedin.com/in/md-rajibul-islam-rajib-513229257/"
    );
  };
  const handleGithub = () => {
    window.open("https://github.com/rajibulislam60");
  };

  return (
    <div className="pt-[70px] pb-[70px] text-white bg-black">
      <Container>
        <div className="flex justify-between">
          <div>
            <div className="flex mb-5">
              <FaLocationDot className="text-[70px] text-orange-400" />
              <div>
                <h3 className="text-[22px] leading-1.7 font-semibold">
                  Address
                </h3>
                <h4 className="text-[18px] leading-1.7 font-normal">
                  Kazipara, H-399, Mirpur, Dhaka.
                </h4>
              </div>
            </div>
            <div className="flex mb-5">
              <FaPhone className="text-[70px] text-orange-400" />
              <div>
                <h3 className="text-[22px] leading-1.7 font-semibold">Phone</h3>
                <h4 className="text-[18px] leading-1.7 font-normal">
                  +8801981-869112
                </h4>
              </div>
            </div>
            <div className="flex mb-5">
              <IoIosMail className="text-[70px] text-orange-400" />
              <div>
                <h3 className="text-[22px] leading-1.7 font-semibold">Email</h3>
                <h4 className="text-[18px] leading-1.7 font-normal">
                  rajibulislam60707877@gmail.com
                </h4>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-[22px] font-semibold mb-4">Follow Me</h3>
            <div>
              <div>
                <FaSquareFacebook
                  className="text-[50px] text-orange-400 cursor-pointer mb-3"
                  onClick={handleFB}
                />
              </div>
              <div>
                <FaLinkedin
                  className="text-[50px] text-orange-400 cursor-pointer mb-3"
                  onClick={handleLinked}
                />
              </div>
              <div>
                <FaGithub
                  className="text-[50px] text-orange-400 cursor-pointer mb-3"
                  onClick={handleGithub}
                />
              </div>
            </div>
          </div>
          <div>
            <h2 className="text-[24px] font-bold">RI Rajib</h2>
            <p className="w-[500px] mt-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae qui impedit ipsum maxime itaque eum quae sequi quaerat magni veniam mollitia hic nulla voluptates sint libero, ratione magnam. Expedita praesentium fugit officiis repudiandae velit soluta placeat recusandae officia ducimus culpa!</p>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Contact;
