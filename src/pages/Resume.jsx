import React from "react";
import Container from "../Components/Container";
import Title from "../Components/Title";

const Resume = () => {
  return (
    <div className="bg-orange-50 py-5">
      <Container>
        <div>
          <div>
            <Title titleName="My Resume" titleItem="YEARS OF EXPERIENCE" />
          </div>
          <div className="mt-[50px] flex">
            <div className="h-[800px] w-2 bg-slate-500"></div>
            <div>
              <div className="items-center flex gap-[40px]">
                <h3 className="text-[28px] font-semibold leading-1.7">
                  Education
                </h3>
                <div className=" bg-white flex items-center rounded-md">
                  <div className="max-w-[330px] px-8 py-11">
                    <h2 className="text-[22px] font-semibold leading-1.7">
                      B.Sc (Hon's) In Chemistry
                    </h2>
                    <h3 className="text-[22px] font-medium leading-1.7 text-slate-700 mt-[20px] ">
                      Mohammadpur Kendriya College (2022-present)
                    </h3>
                    <p className="text-[16px] font-light leading-1.7 text-slate-500 mt-[25px]">
                      Pomnis voluptas assumenda est, omnis dolor repellendus.
                    </p>
                  </div>
                  <div className="h-[200px] w-1 bg-slate-500 mx-11"></div>
                  <div className="max-w-[350px] px-8 py-11">
                    <h2 className="text-[22px] font-semibold leading-1.7">
                      HSC - Science
                    </h2>
                    <h3 className="text-[22px] font-medium leading-1.7 text-slate-700 mt-[20px] ">
                      Sarishabari College (2018-2020)
                    </h3>
                    <p className="text-[16px] font-light leading-1.7 text-slate-500 mt-[25px]">
                      Pomnis voluptas assumenda est, omnis dolor repellendus.
                    </p>
                  </div>
                  <div className="h-[200px] w-1 bg-slate-500 mx-11"></div>
                  <div className="max-w-[350px] px-8 py-11">
                    <h2 className="text-[22px] font-semibold leading-1.7">
                      SSC - Science
                    </h2>
                    <h3 className="text-[22px] font-medium leading-1.7 text-slate-700 mt-[20px] ">
                      Batikamari High School (2015-2017)
                    </h3>
                    <p className="text-[16px] font-light leading-1.7 text-slate-500 mt-[25px]">
                      Pomnis voluptas assumenda est, omnis dolor repellendus.
                    </p>
                  </div>
                </div>
              </div>
              <div className="items-center flex gap-[40px] mt-[50px]">
                <h3 className="text-[28px] font-semibold leading-1.7">
                  Course Skill
                </h3>
                <div className=" bg-white flex items-center rounded-md">
                  <div className="max-w-[330px] px-8 py-11">
                    <h2 className="text-[22px] font-semibold leading-1.7">
                      Diploma Of MERN Stack Develop
                    </h2>
                    <h3 className="text-[22px] font-medium leading-1.7 text-slate-700 mt-[20px] ">
                      Creative IT Institute (2023-present)
                    </h3>
                    <p className="text-[16px] font-light leading-1.7 text-slate-500 mt-[25px]">
                      Pomnis voluptas assumenda est, omnis dolor repellendus.
                    </p>
                  </div>
                  <div className="h-[200px] w-1 bg-slate-500 mx-11"></div>
                  <div className="max-w-[350px] px-8 py-11">
                    <h2 className="text-[22px] font-semibold leading-1.7">
                      Diploma Of Database Programming
                    </h2>
                    <h3 className="text-[22px] font-medium leading-1.7 text-slate-700 mt-[20px] ">
                      Dibyajnan Computer Training Institute (2020)
                    </h3>
                    <p className="text-[16px] font-light leading-1.7 text-slate-500 mt-[25px]">
                      Pomnis voluptas assumenda est, omnis dolor repellendus.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Resume;
