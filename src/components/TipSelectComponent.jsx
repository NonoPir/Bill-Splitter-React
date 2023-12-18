import React, { useState } from "react";
const TipSelectComponent = ({ peopleAmount, setIsValueZero }) => {
  const [isInputActive, setIsInputActive] = useState(false);
  const [buttonActive, setButtonActive] = useState(0);
  const buttonsList = {
    firstList: [5, 10, 15],
    secondList: [25, 50],
  };

  function handleClickTipButton(percentage) {
    setButtonActive(percentage);
    if (peopleAmount == 0) setIsValueZero(true);
    else setIsValueZero(false);
  }

  return (
    <div>
      <div>
        <p>Select Tip %</p>
      </div>
      <div className="flex flex-col w-full mt-2">
        <div className="flex justify-between">
          {buttonsList.firstList.map((percentage) => (
            <button
              key={percentage}
              onClick={() => handleClickTipButton(percentage)}
              className={`${
                buttonActive === percentage && peopleAmount != 0
                  ? "bg-teal-500"
                  : "bg-teal-900"
              } ${buttonActive === percentage ? "" : "hover:bg-teal-300"}`}
              id="tip-button"
            >
              {percentage}%
            </button>
          ))}
        </div>
        <div className="flex justify-between mt-5">
          {buttonsList.secondList.map((percentage) => (
            <button
              key={percentage}
              onClick={() => handleClickTipButton(percentage)}
              className={`${
                buttonActive === percentage && peopleAmount != 0
                  ? "bg-teal-500"
                  : "bg-teal-900"
              } ${buttonActive === percentage ? "" : "hover:bg-teal-300"}`}
              id="tip-button"
            >
              {percentage}%
            </button>
          ))}
          <input
            onClick={(e) => {
              setIsInputActive(!isInputActive);
            }}
            id="tip-input"
            className="bg-gray-100 text-center pr-3 outline-none focus:text-right"
            placeholder={!isInputActive ? "Custom" : ""}
          />
        </div>
      </div>
    </div>
  );
};

export default TipSelectComponent;
