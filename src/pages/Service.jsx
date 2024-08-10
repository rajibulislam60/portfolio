import React from 'react';
import Container from '../Components/Container';
import Title from '../Components/Title';
import { VscVmConnect } from "react-icons/vsc";

const Service = () => {
  return (
    <div className="">
      <Container>
        <div className="py-[70px]">
          <div>
            <Title titleName="My Service" titleItem="Services I offer" />
          </div>
          <div className="mt-[70px] flex justify-center gap-8">
            <div className="border border-orange-100 max-w-[350px] text-center px-[30px] py-10 hover:bg-orange-100 rounded-md">
              <VscVmConnect className="text-[60px] mx-auto text-orange-300" />
              <h3 className="text-[24px] leading-1.7 font-semibold mt-4 mb-3">
                Front-End Developer
              </h3>
              <p className="text-[16px] leading-1.7 font-light text-slate-500">
                Hen our power of choice is untrammelled and when nothing
                prevents our being able
              </p>
            </div>
            <div className="border border-orange-100 max-w-[350px] text-center px-[30px] py-10 hover:bg-orange-100 rounded-md">
              <VscVmConnect className="text-[60px] mx-auto text-orange-300" />
              <h3 className="text-[24px] leading-1.7 font-semibold mt-4 mb-3">
                Web Developer
              </h3>
              <p className="text-[16px] leading-1.7 font-light text-slate-500">
                Hen our power of choice is untrammelled and when nothing
                prevents our being able
              </p>
            </div>
            <div className="border border-orange-100 max-w-[350px] text-center px-[30px] py-10 hover:bg-orange-100 rounded-md">
              <VscVmConnect className="text-[60px] mx-auto text-orange-300" />
              <h3 className="text-[24px] leading-1.7 font-semibold mt-4 mb-3">
                MERN Stack Developer
              </h3>
              <p className="text-[16px] leading-1.7 font-light text-slate-500">
                Hen our power of choice is untrammelled and when nothing
                prevents our being able
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}

export default Service