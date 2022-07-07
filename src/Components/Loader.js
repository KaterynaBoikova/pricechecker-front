import React from "react";
import { ThreeDots } from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

export default function Loader() {
  return (
    <>
      <ThreeDots color={"#c1e5f6"} height={50} width={"80px"} />
    </>
  );
}
