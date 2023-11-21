import React from "react";
import {
  nextSlide,
  prevSlide,
  dotSlide,
} from "../../features/slices/SliderSlice";
import { useSelector, useDispatch } from "react-redux";
import { SliderData } from "../../assets/data/DummyData";

function Slider() {
  const slideIndex = useSelector((state) => state.slider.value);
  console.log("slideIndex", slideIndex);
  const dispatch = useDispatch();
  return (
    <div className="relative pb-4">
      <div>
        {SliderData.map((obj, index) => {
          return (
            <div
              key={obj.id}
              className={
                obj.id === slideIndex
                  ? "opacity-100 duration-700 ease-in-out scale-100"
                  : "opacity-0 duration-700 ease-in-out scale-95"
              }
            >
              <div>
                {obj.id === slideIndex && (
                  <img className="h-auto w-full" src={obj.img} alt="shoes" />
                )}
              </div>
              <div className="absolute top-40 mx-auto inset-x-1/4">
                <p className="text-white text-2xl font-inter font-bold">
                  {obj.id === slideIndex && obj.text}
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="flex absolute bottom-12 left-[45%]">
        {SliderData.map((dot, index) => {
          return (
            <div className="mr-4 " key={index}>
              <div
                className={
                  index === slideIndex
                    ? "bg-green-300 rounded-full p-4 cursor-pointer"
                    : "bg-white rounded-full p-4 cursor-pointer"
                }
              ></div>
            </div>
          );
        })}
      </div>
      <button
        className="absolute top-[50%] right-4 bg-white rounded-full p-2 hover:bg-green-300"
        onClick={() => dispatch(nextSlide(slideIndex + 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M8.25 4.5l7.5 7.5-7.5 7.5"
          />
        </svg>
      </button>
      <button
        className="absolute top-[50%] left-4 bg-white rounded-full p-2 hover:bg-green-300"
        onClick={() => dispatch(prevSlide(slideIndex - 1))}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 19.5L8.25 12l7.5-7.5"
          />
        </svg>
      </button>
    </div>
  );
}

export default Slider;
