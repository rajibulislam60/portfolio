import React from 'react';
import BannarImage from '../assets/BannarPic.png';
import Container from '../Components/Container';
import Button from '../Components/Button';

const Bannar = () => {
  return (
    <div className="bg-slate-400">
      <Container>
        <div className="flex justify-between items-center">
          <div>
            <h3 className="uppercase font-normal text-[20px]">
              I am mern stack developer
            </h3>
            <h1 className="text-[60px] leading-1.7 font-bold mt-[40px]">
              Creative Design <br />
              and Web Develop
            </h1>
            <p className="text-[18px] leading-1.7 font-light mt-[20px] max-w-[663px]">
              Nam libero tempore, cum soluta nobis est eligendi optio cumque
              nihil impedit quo minus id quod maxime placeat facere possimus,
              omnis voluptas assumenda est, omnis dolor repellendus. Temporibus
              autem quibusdam et.
            </p>
            <Button
              className="bg-orange-600 text-white px-5 py-3 text-[21px] font-medium rounded-md hover:bg-black duration-[0.4s] max-w-[228px] mt-[50px]"
              name="Download My CV"
            />
          </div>
          <div>
            <img src={BannarImage} alt="Profile Picture" />
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Bannar