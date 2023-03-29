import React from "react";
import "./Banner.css";

import Container from "../../Bits/Container/Container";
import IconButton from "../../Pieces/IconButton/IconButton";

import Settings from "../../../assets/icons/Settings";

const Banner = () => {
  return (
    <Container lay={{ x: "between", y: "center" }} className={"banner"}>
      <span id="acacia">Mitchell Avent</span>
      <IconButton link={"/settings"} size="md">
        <Settings />
      </IconButton>
    </Container>
  );
};

export default Banner;
