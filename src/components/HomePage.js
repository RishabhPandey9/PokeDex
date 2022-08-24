import React, { useState } from "react";
import LoadingBar from "react-top-loading-bar";

import "./main.css";
import { AiOutlineMenu } from "react-icons/ai";
import PokemonLogo from "./img/PokemonLogo.png";
import "./SideBarRow.css";
import "./Sidebar.css";
import Pokemon from "./Pokemon";
import All from "./img/All.png";
import Bug from "./img/Bug.png";
import Electric from "./img/Electric.png";
import Fire from "./img/Fire.png";

import Grass from "./img/Grass.png";
import Rock from "./img/Rock.png";
import Water from "./img/Water1.png";
import "./Header.css";
import "./Sidebar.css";
function HomePage(props) {
  const [progress, setProgress] = useState(0);
  const [filter, setFilter] = useState("");
  const [filterType, setFilterType] = useState("");
  const [homeWidth, setHomeWidth] = useState(true);

  const handleSearchChange = (e) => {
    setFilter(e.target.value.toLowerCase());
  };
  const handlefilterType = (element) => {
    setFilterType(element);
  };

  const toggleSidebar = () => {
    setHomeWidth(!homeWidth);
    const Sidebar = document.querySelector(".sidebar");
    const MiniSidebar = document.querySelector(".mini_sidebar");
    if (Sidebar) {
      Sidebar.classList.toggle("active");
    }
    if (MiniSidebar) {
      MiniSidebar.classList.toggle("active");
    }
  };

  return (
    <div>
      <div className="header">
        <div className="header_left">
          <div className="head_menu_div" onClick={toggleSidebar}>
            <AiOutlineMenu className="head_menu" />
          </div>
          <img  className="header_logo hidden md:flex" src={PokemonLogo} alt="PokemonLogo" />
        </div>
        <div className="w-full">
          <div className=" flex justify-center xl:justify-start w-full ">
            <div>
            <form>
              <div className="buttonSubmit">Search</div>
              <input
                type="search"
                onChange={handleSearchChange}
                placeholder="Search Pokemons..."
              />
            </form>
            </div>
          
          </div>

          <div className="sidebar">
            <div className="sidebar_row" onClick={() => handlefilterType("")}>
              <img src={All} alt="All Type" className="icon_img" />
              <h2 className="sidebarRow_title">All Type</h2>
            </div>
            <div
              className="sidebar_row"
              onClick={() => handlefilterType("water")}
            >
              <img src={Water} alt="Water Type" className="icon_img" />
              <h2 className="sidebarRow_title">Water Type</h2>
            </div>

            <div
              className="sidebar_row"
              onClick={() => handlefilterType("grass")}
            >
              <img src={Grass} alt="Rock Type" className="icon_img" />
              <h2 className="sidebarRow_title">Grass Type</h2>
            </div>

            <div
              className="sidebar_row"
              onClick={() => handlefilterType("fire")}
            >
              <img src={Fire} alt="Fire Type" className="icon_img" />
              <h2 className="sidebarRow_title">Fire Type</h2>
            </div>
            <div
              className="sidebar_row"
              onClick={() => handlefilterType("electric")}
            >
              <img src={Electric} alt="Electric Type" className="icon_img" />
              <h2 className="sidebarRow_title">Electric Type</h2>
            </div>
            <div
              className="sidebar_row"
              onClick={() => handlefilterType("bug")}
            >
              <img src={Bug} alt="Electric Type" className="icon_img" />
              <h2 className="sidebarRow_title">Bug Type</h2>
            </div>
            <div
              className="sidebar_row"
              onClick={() => handlefilterType("rock")}
            >
              <img src={Rock} alt="Rock Type" className="icon_img" />
              <h2 className="sidebarRow_title">Rock Type</h2>
            </div>
          </div>
          <div className="mini_sidebar">
            <div className="miniDiv">
              <img
                src={All}
                alt="Water"
                onClick={() => handlefilterType("")}
                className="icon_img"
              />
            </div>
            <div className="miniDiv">
              <img
                src={Water}
                alt="Water"
                onClick={() => handlefilterType("water")}
                className="icon_img"
              />
            </div>

            <div className="miniDiv">
              <img
                src={Grass}
                alt="Grass"
                onClick={() => handlefilterType("grass")}
                className="icon_img"
              />
            </div>

            <div className="miniDiv">
              <img
                src={Fire}
                alt="Fire"
                onClick={() => handlefilterType("fire")}
                className="icon_img"
              />
            </div>
            <div className="miniDiv">
              <img
                src={Electric}
                alt="Electric"
                onClick={() => handlefilterType("electric")}
                className="icon_img"
              />
            </div>
            <div className="miniDiv">
              <img
                src={Bug}
                alt="Bug"
                onClick={() => handlefilterType("bug")}
                className="icon_img"
              />
            </div>
            <div className="miniDiv">
              <img
                src={Rock}
                alt="Rock"
                onClick={() => handlefilterType("rock")}
                className="icon_img"
              />
            </div>
          </div>
        </div>
      </div>
      <div className={!homeWidth ? "homepage" : "homepage1"}>
        <LoadingBar height={3} color="#f11946" progress={progress} />
        <div>
          <div>
            <Pokemon
              setProgress={setProgress}
              filterName={filter}
              type="grass"
              key="water"
              filterType={filterType}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
