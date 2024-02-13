// Author:    BRS Studio
// Created:   11.05.2022
// Library / Component: Home Page
// Description: Main page  for the app
// (c) Copyright by BRS Studio | Build Rise Shine.

import { useEffect } from "react";
import './Home.css';

export const Home = () => {

  useEffect(() => {
    setInterval(updateClock, 1000);
  })

  function updateClock() {
    const secondHand = document.querySelector(".secondHand");
    const hourHand = document.querySelector(".hourHand");
    const minuteHand = document.querySelector(".minuteHand");
    const currentTime = new Date();
    const secondHandDegrees = calcDegrees(currentTime.getSeconds(), 60);
    const minuteHandDegrees = calcDegrees(currentTime.getMinutes(), 60);
    const hourHandDegrees = calcDegrees(currentTime.getHours() * 60 + currentTime.getMinutes(), 720);
    secondHand.style.transform = `rotate(${secondHandDegrees}deg)`;
    minuteHand.style.transform = `rotate(${minuteHandDegrees}deg)`;
    hourHand.style.transform = `rotate(${hourHandDegrees}deg)`;
  }
  const calcDegrees = (time, max) => (time / max) * 360;

  return (
    <>
      <div className="clock">
        <div className="hourHand"></div>
        <div className="minuteHand"></div>
        <div className="secondHand"></div>
        <div className="center"></div>
        <ul>
          <li><span>1</span></li>
          <li><span>2</span></li>
          <li><span>3</span></li>
          <li><span>4</span></li>
          <li><span>5</span></li>
          <li><span>6</span></li>
          <li><span>7</span></li>
          <li><span>8</span></li>
          <li><span>9</span></li>
          <li><span>10</span></li>
          <li><span>11</span></li>
          <li><span>12</span></li>
        </ul>
      </div>
    </>
  )
}
