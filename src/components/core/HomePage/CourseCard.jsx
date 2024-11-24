import React from "react";

// Importing React Icons
import { HiUsers } from "react-icons/hi";
import { ImTree } from "react-icons/im";

const CourseCard = ({ cardData, currentCard, setCurrentCard }) => {
  return (
    <div
      className={`max-w-[300px] w-[360px] lg:w-[30%] bg-mwhite ${
        currentCard === cardData?.heading
          ? "border-[2px] border-yellow-500 shadow-xl"
          : "border-[2px] border-transparent hover:border-yellow-500"
      }  h-[300px] box-border cursor-pointer hover:scale-[1.07] transition-all ease-in-out`}
      onClick={() => setCurrentCard(cardData?.heading)}
    >
      <div className="border-b-[2px] border-dashed border-yellow-300 h-[80%] p-6 flex flex-col gap-3">
        <div
          className={`${
            currentCard === cardData?.heading
              ? "text-yellow-500"
              : "text-white"
          } font-semibold text-[20px] hover:font-extrabold`}
        >
          {cardData?.heading}
        </div>

        <div
          className={`${
            currentCard === cardData?.heading
              ? "text-orange-500 hover:text-black"
              : "text-black hover:text-orange-500"
          } transition-all ease-linear`}
        >
          {cardData?.description}
        </div>
      </div>

      <div
        className={`flex justify-between transition-all ease-linear ${
          currentCard === cardData?.heading
            ? "text-orange-500"
            : "text-black"
        } px-6 py-3 font-medium`}
      >
        {/* Level */}
        <div className="flex items-center gap-2 text-[16px]">
          <HiUsers />
          <p>{cardData?.level}</p>
        </div>

        {/* Flow Chart */}
        <div className="flex items-center gap-2 text-[16px]">
          <ImTree />
          <p>{cardData?.lessonNumber} Lesson</p>
        </div>
      </div>
    </div>
  );
};

export default CourseCard;
