import React from "react";

export default function ProgressBar({ progress }) {
  const r = 52;
  const calcOffset = (progress, circum) => {
    return circum - (circum * progress) / 100;
  };
  const calcDash = (r) => {
    return ((2 * 22) / 7) * r;
  };
  const dashArray = calcDash(r);
  const dashOffset = calcOffset(progress, dashArray);
  const parentBar = {
    fill: "transparent",
    strokeWidth: "10px",
    stroke: "#c1f6ed",
  };
  const childBar = {
    fill: "transparent",
    strokeDasharray: `${dashArray}`,
    strokeDashoffset: `${dashOffset}`,
    stroke: "#02353c",
    strokeWidth: "10px",
    strokeLinecap: "round",
  };
  const labelBar = {
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    position: "absolute",
  };
  const divContainer = {
    position: "relative",
    width: "114px",
    height: "114px",
  };
  const svgContainer = {
    width: "100%",
    height: "100%",
  };
  return (
    <div style={divContainer}>
      <svg style={svgContainer}>
        <circle style={parentBar} cx="57" cy="57" r="52" />
        <circle style={childBar} cx="57" cy="57" r="52" />
      </svg>
      <span style={labelBar}>{`${progress}%`}</span>
    </div>
  );
}
