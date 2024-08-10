import React, { useState } from "react";
import Container from "../Components/Container";
import List from "../Components/List";
import ListItem from "../Components/ListItem";
import Button from "../Components/Button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="">
        <Container>
          <div className="flex justify-between items-center pt-3 pb-3 ">
            <h2 className="text-[24px] font-bold">RI Rajib</h2>
            <List className={`md:flex gap-3 ${isOpen ? "block" : "hidden"}`}>
              <ListItem
                className="nav-item hover:text-orange-400"
                item="Home"
                to="/"
              />
              <ListItem
                className="nav-item hover:text-orange-400"
                item="About"
                to="/about"
              />
              <ListItem
                className="nav-item hover:text-orange-400"
                item="Service"
                to="/service"
              />
              <ListItem
                className="nav-item hover:text-orange-400"
                item="Resume"
                to="/resume"
              />
              <ListItem
                className="nav-item hover:text-orange-400"
                item="Work"
                to="/work"
              />
              {/* Add more ListItems as needed */}
            </List>
            <Button
              className="border bg-orange-600 text-white px-5 py-3 text-[21px] font-medium rounded-md hover:bg-black duration-[0.4s]"
              name="Contact Us"
            />
          </div>
        </Container>
      </div>
    </>
  );
};

export default Navbar;
