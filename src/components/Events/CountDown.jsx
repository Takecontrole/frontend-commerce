import axios from "axios";
import React, { useEffect, useState } from "react";
import { server } from "../../server";

const CountDown = ({ data }) => {
  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    if (
      typeof timeLeft.дней === 'undefined' &&
      typeof timeLeft.часов === 'undefined' &&
      typeof timeLeft.минут === 'undefined' &&
      typeof timeLeft.секунд === 'undefined'
    ) {
      axios.delete(`${server}/event/delete-shop-event/${data._id}`);
    }
    return () => clearTimeout(timer);
  });

  function calculateTimeLeft() {
    const difference = +new Date(data.Finish_Date) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        дней: Math.floor(difference / (1000 * 60 * 60 * 24)),
        часов: Math.floor((difference / (1000 * 60 * 60)) % 24),
        минут: Math.floor((difference / 1000 / 60) % 60),
        секунд: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  }

  const timerComponents = Object.keys(timeLeft).map((interval) => { 
    if (!timeLeft[interval]) {
      return null;
    }

    return (
      <span className="text-[25px] text-[#475ad2]">
        {timeLeft[interval]} {interval}{" "}
      </span>
    );
  });

  return (
    <div>
      {timerComponents.length ? (
        timerComponents
      ) : (
        <span className="text-[red] text-[25px]">Время вышло!</span>
      )}
    </div>
  );
};

export default CountDown;
