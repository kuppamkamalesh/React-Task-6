import React from "react";
import me from "./Pictures/picture.jpg";

const Home = () => {
  return (
    <div id="home" className="my">
      <div>
        <h1 style={{ color: "white" }}>
          Hi There!{" "}
          <span className="wave" role="img" aria-labelledby="wave">
            👋🏻
          </span>
        </h1>
        <p className="name" style={{ color: "white" }}>
          I'M
          <span style={{ color: "violet" }}>
            {" "}
            <strong>KUPPAM KAMALESH</strong>
          </span>
        </p>
      </div>
      <div>
        <img className="myPic" src={me} alt="picture" height={"300px"} />
      </div>
    </div>
  );
};

export default Home;
