import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import backround from "../../src/backround.png";
import Ticketlogo from "../../src/Ticketlogo.png";
import { useContext } from "react";

import "../CSS/HomePage.css";
import { SelectedContext } from "../App";

const HomePage = () => {
  const [movieList, setMovieList] = useState([]);
  const [select, setSelect] = useState([]);
  const navigate = useNavigate();

  const handleInput = (id) => {
    let data = movieList.filter((data) => data.id == id);
    setSelect(data);
    // const { select } = useContext(SelectedContext);
    // const { select } = useContext(SelectContext);
    console.log(data);
    navigate("/viewpage", { state: { data } });
  };

  useEffect(() => {
    fetch(
      "https://api.themoviedb.org/3/list/8246775?api_key=4f9c88cba0f853da15747d779ac6e2fc&language=en-US"
    )
      .then((response) => response.json())
      .then((data) => {
        setMovieList(data.items);
        console.log(movieList);
      });
  }, []);

  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <>
      <div className="HomeContainer">
        <header>
          <span className="ticketlogo">
            <img src={Ticketlogo} alt="TicketLogo"></img>
          </span>
          <input type="text" placeholder="Search Movies" name="search" />
          <button type="submit">
            <i class="fa fa-search"></i>
          </button>
          <h2 onClick={() => handleLogOut()}>Log Out</h2>
        </header>
        <div
          className="HomeMainContent"
          style={{
            backgroundImage: `url(${backround})`,
            height: "100vh",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
          }}
        >
          <h2>Welcome To Our Movie Site</h2>
          <br />
          <h1>
            OUR SPECIAL <font>MOVIES</font>
          </h1>
          <br />
          <p>
            Lorem Ipsum is simply dummy text of the printing and Movies
            typesetting industrioy. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s, when an unknown
          </p>
          <span className="readButton">
            <button>Read More</button>
          </span>
        </div>
        <div className="HomeBodyContent">
          {movieList.map((data) => (
            <div className="movieImage" key={data.id}>
              <img src={backround}></img>
              <span className="movieName">
                {data.original_title}
                <br></br>
                <span className="cardstart">
                  <i
                    class="fa fa-star"
                    aria-hidden="true"
                    style={{ textalign: "left" }}
                  ></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                  <i class="fa fa-star" aria-hidden="true"></i>
                </span>
              </span>
              <span
                className="playbtn"
                onClick={() => handleInput(data.id)}
                style={{ cursor: "pointer" }}
              >
                View <i class="fa fa-play"></i>
              </span>
              <br />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default HomePage;
