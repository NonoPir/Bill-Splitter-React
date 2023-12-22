import React, { useState } from "react";
const TipSelectComponent = ({
  peopleAmount,
  setTipButtonIndex,
  isValueZero,
  setIsValueZero,
  buttonActive,
  setButtonActive,
  setCustomInputValue,
  customInputValue,
  resetInputValue,
}) => {
  const [isInputActive, setIsInputActive] = useState(false);

  const buttonsList = {
    firstList: [5, 10, 15],
    secondList: [25, 50],
  };
  const handleInput = (e) => {
    setCustomInputValue(e);
  };
  const handleClickTipButton = (percentage) => {
    setButtonActive(percentage);
    if (peopleAmount == 0 || (peopleAmount && peopleAmount.startsWith("0"))) {
      setIsValueZero(true);
    } else {
      setIsValueZero(false);
    }
    setTipButtonIndex(percentage);
  };

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
                buttonActive === percentage &&
                customInputValue == 0 &&
                peopleAmount != 0 &&
                !isValueZero
                  ? "bg-teal-500 text-teal-900"
                  : "bg-teal-900 text-white"
              } ${
                buttonActive === percentage && peopleAmount != 0 && !isValueZero
                  ? ""
                  : "hover:bg-teal-300"
              }`}
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
              className={` ${
                buttonActive === percentage &&
                customInputValue == 0 &&
                peopleAmount != 0 &&
                !isValueZero
                  ? "bg-teal-500 text-teal-900"
                  : "bg-teal-900 text-white"
              } ${
                buttonActive === percentage && peopleAmount != 0 && !isValueZero
                  ? ""
                  : "hover:bg-teal-300 "
              }`}
              id="tip-button"
            >
              {percentage}%
            </button>
          ))}
          <input
            value={customInputValue === 0 ? resetInputValue : customInputValue}
            onChange={(e) => handleInput(e.target.value)}
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
