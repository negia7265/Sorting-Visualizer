import React, { useEffect, useState } from "react";
import "./Visualizer.css";
import {
  getMergeSortAnimation,
  bubbleSortAnimation,
  selectionSortAnimation,
  insertionSortAnimation,
} from "../sortingAlgo/sortingAlgos";

const No_of_array_bars = Math.floor((parseInt(50) + 3) * 1.65);
const Primary_color = "#27aeef";
const Secondary_color = "red";

export const Visualizer2 = () => {
  useEffect(() => {
    resetArray();
  }, []);
  const [array, setArray] = useState([]);
  const [Animation_speed, setAnimationSpeed] = useState(2);
  console.log(Animation_speed);
  function randomIntFromInterval(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
  }
  function resetArray() {
    let arr = [];
    while (arr.length < No_of_array_bars) {
      arr.push(Math.floor(Math.random() * 200) + 10);
    }
    setArray(arr);

    document.querySelector("#changeSize").value = 50;
  }
  //Handling Slider Starts

  const handleChange = (evt) => {
    let length = Math.floor((parseInt(evt.target.value) + 3) * 1.65);

    let arr = [];
    while (arr.length < length) {
      arr.push(Math.floor(Math.random() * 200) + 10);
    }
    setArray(arr);
    // const speed =
    //   570 - Math.pow(arr.length, 2) > 0 ? 570 - Math.pow(arr.length, 2) : 2;
    const speed = Math.floor(570 / (arr.length * 2)) + 110;
    setAnimationSpeed(speed);
  };

  //Handling Slider Ends

  //Merge Sort Code Start

  function mergeSort() {
    const animation = getMergeSortAnimation(array);

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
          baronestyle.height = `${newHeight * 3}px`;
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
  //Merge Sort Code Ends

  //Selection Sort Begins

  function selectionSort() {
    const animation = selectionSortAnimation(array);
    const arrayBars = document.getElementsByClassName("array-bar");
    let count = 0;
    for (let i = 0; i < animation.length; i++) {
      count++;
      const [barone, bartwo, indicate, temp] = animation[i];
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
          baronestyle.height *= 3;
          bartwostyle.height *= 3;
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

  //Selection Sort Ends
  function heapSort() {}

  //Bubble Sort Code Starts

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
          baronestyle.height *= 3;
          bartwostyle.height *= 3;
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

  //Bubble Sort Code Ends

  //Insertion Sort Begins

  function insertionSort() {
    const animation = insertionSortAnimation(array);
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
          baronestyle.height = bartwostyle.height;
          baronestyle.height *= 3;
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

  //Insertion Sort Ends

  const numWidth = Math.floor(
    document.documentElement.clientWidth / (array.length * 3)
  );
  const width = `${numWidth}px`;
  const numMargin =
    array.length < 5
      ? 10
      : array.length < 8
      ? 8
      : array.length < 11
      ? 6
      : array.length < 20
      ? 4
      : array.length < 50
      ? 3.5
      : array.length < 100
      ? 3
      : array.length < 130
      ? 2.5
      : 2;
  const margin = `${numMargin}px`;
  return (
    <div className="array-container">
      <div className="navbar-container">
        <div className="navbar">
          <button className="button" onClick={resetArray}>
            Generate New Array
          </button>
          <button className="button" onClick={mergeSort}>
            Merge Sort
          </button>
          <button className="button" onClick={selectionSort}>
            Selection Sort
          </button>
          <button className="button" onClick={insertionSort}>
            Insertion Sort
          </button>
          <button className="button" onClick={bubbleSort}>
            Bubble Sort
          </button>
          <div
            className="rangeclass"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <label>Change Array Size & Sorting Speed</label>
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
          </div>
          {/* <div className="negia72">
            <h3>
              &#169 Created by{" "}
              <a href="https://github.com/aviral10" target="_blank">
                @aviral10
              </a>
            </h3>
          </div> */}
        </div>
      </div>
      <div className="chart">
        {array.map((data, index) => (
          <div
            className="array-bar"
            key={index}
            style={{
              display: "inline-block",
              backgroundColor: Primary_color,
              height: `${data * 3}px`,
              width: width,
              marginLeft: margin,
              marginRight: margin,
            }}
          ></div>
        ))}
      </div>
    </div>
  );
};
