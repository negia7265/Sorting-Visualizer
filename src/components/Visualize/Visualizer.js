import React, { useEffect, useState } from "react";
import "./Visualizer.css";
import {
  getMergeSortAnimation,
  bubbleSortAnimation,
} from "../sortingAlgo/sortingAlgos";
const Animation_speed = 1;
const No_of_array_bars = 300;
const Primary_color = "blue";
const Secondary_color = "red";

export const Visualizer = () => {
  useEffect(() => {
    resetArray();
  }, []);
  const [array, setArray] = useState([]);
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function resetArray() {
    const tempArray = [];
    for (let i = 0; i < No_of_array_bars; i++) {
      tempArray.push(randomIntFromInterval(5, 730));
    }
    setArray(tempArray);
  }
  function mergeSort() {
    const animation = getMergeSortAnimation(array);
    console.log("merge called");
    let arrayBars = document.getElementsByClassName("array-bar");
    let count = 0;
    for (let i = 0; i < animation.length; i++) {
      count++;
      const isColor = i % 3 !== 2;
      if (isColor) {
        const [barone, bartwo] = animation[i];
        const baronestyle = arrayBars[barone].style;
        const bartwostyle = arrayBars[bartwo].style;
        const color = i % 3 == 0 ? Secondary_color : Primary_color;
        setTimeout(() => {
          baronestyle.backgroundColor = color;
          bartwostyle.backgroundColor = color;
        }, i * Animation_speed);
      } else {
        setTimeout(() => {
          const [barone, newHeight] = animation[i];
          const baronestyle = arrayBars[barone].style;
          baronestyle.height = `${newHeight}px`;
        }, i * Animation_speed);
      }
    }
    setTimeout(() => {
      if (count === animation.length) {
        for (let j = 0; j < arrayBars.length; j++) {
          arrayBars[j].style.backgroundColor = "#90EE90";
        }
      }
    }, animation.length * Animation_speed);
    setTimeout(() => {
      for (let j = 0; j < arrayBars.length; j++) {
        arrayBars[j].style.backgroundColor = Primary_color; // Change to the normal color
      }
    }, animation.length * Animation_speed + 2000);
  }
  function quickSort() {}
  function heapSort() {}
  function bubbleSort() {
    const animation = bubbleSortAnimation(array);

    const arrayBars = document.getElementsByClassName("array-bar");
    let count = 0;

    for (let i = 0; i < animation.length; i++) {
      count++;
      const [barone, bartwo, indicate] = animation[i];
      const baronestyle = arrayBars[barone].style;
      const bartwostyle = arrayBars[bartwo].style;
      if (indicate === 0) {
        setTimeout(() => {
          baronestyle.backgroundColor = Secondary_color;
          bartwostyle.backgroundColor = Secondary_color;
        }, i * Animation_speed);
      } else if (indicate === 1) {
        setTimeout(() => {
          const temp = baronestyle.height;
          baronestyle.height = bartwostyle.height;
          bartwostyle.height = temp;
        }, i * Animation_speed);
      } else if (indicate === 2) {
        setTimeout(() => {
          baronestyle.backgroundColor = Primary_color;
          bartwostyle.backgroundColor = Primary_color;
        }, i * Animation_speed);
      }
    }
    setTimeout(() => {
      if (count === animation.length) {
        for (let j = 0; j < arrayBars.length; j++) {
          arrayBars[j].style.backgroundColor = "#90EE90";
        }
      }
    }, animation.length * Animation_speed);
    setTimeout(() => {
      for (let j = 0; j < arrayBars.length; j++) {
        arrayBars[j].style.backgroundColor = Primary_color;
      }
    }, animation.length * Animation_speed + 2000);
  }

  function testSortingAlgorithms() {}
  const handleChange = (evt) => {
    let length = Math.floor((parseInt(evt.target.value) + 3) * 1.65);
    let arr = [];
    while (arr.length < length) {
      arr.push(Math.floor(Math.random() * 200) + 10);
    }
    setArray(arr);
    const speed =
      570 - Math.pow(array.length, 2) > 0 ? 570 - Math.pow(array.length, 2) : 0;
    console.log(speed);
  };
  return (
    <div className="array-container">
      <div>
        <button onClick={resetArray}>Generate New Array</button>
        <button onClick={mergeSort}>Merge Sort</button>
        <button onClick={quickSort}>Quick Sort</button>
        <button onClick={heapSort}>Heap Sort</button>
        <button onClick={bubbleSort}>Bubble Sort</button>
        <input
          id="changeSize"
          type="range"
          min="0"
          max="100"
          style={{ background: "grey" }}
          defaultValue={50}
          //disabled={isRunning ? "disabled" : null}
          onChange={handleChange}
        />
        {/* <button onClick={testSortingAlgorithms}></button> */}
      </div>
      {array.map((data, index) => (
        <div
          className="array-bar"
          key={index}
          style={{ backgroundColor: Primary_color, height: `${data}px` }}
        ></div>
      ))}
    </div>
  );
};
