import React, { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./NavBar";

function App() {
  const [date, setDate] = useState(new Date());
  const [splitTime, setSplitTime] = useState(date.toLocaleTimeString().split(':'))

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    setSplitTime(date.toLocaleTimeString().split(':'))
    setTimeout(refreshClock, 1000)
  }, [date]);
  

  return (
    <div  >
      <Navbar />
      <section id="one">
        <h3>Clock One</h3>
        <div className="clock-one">{date.toLocaleTimeString()}</div>
      <br/>
      </section>
      <section id="two">
        <h3>Clock Two</h3>
        <div className="clock-two">
          <p>{splitTime[0]}:</p>
          <p>{splitTime[1]}:</p>
          <p>{splitTime[2]}</p>
        </div>
        <br/>
      </section>
    </div>
  );
}


export default App;
