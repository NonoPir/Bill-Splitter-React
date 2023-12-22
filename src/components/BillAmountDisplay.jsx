import React from "react";

const BillAmountDisplay = ({
  billAmount,
  buttonActive,
  tipButtonIndex,
  peopleAmount,
  customInputValue,
  setCustomInputValue,
  setButtonActive,
  setTipButtonIndex,
  setBillAmount,
  setPeopleAmount,
}) => {
  const statesArray = [
    setCustomInputValue,
    setButtonActive,
    setTipButtonIndex,
    setBillAmount,
    setPeopleAmount,
  ];
  const customTipAmount =
    billAmount != 0 && peopleAmount != 0
      ? (billAmount * customInputValue) / 100 / peopleAmount
      : 0;
  const tipAmount =
    billAmount != 0 && peopleAmount != 0
      ? (billAmount * tipButtonIndex) / 100 / peopleAmount
      : 0;
  const billPerPerson = peopleAmount > 0 ? billAmount / peopleAmount : 0;
  const finalAmount =
    customInputValue > 0 && billAmount != 0 && peopleAmount != 0
      ? (billPerPerson + customTipAmount).toFixed(2)
      : billAmount != 0 && peopleAmount != 0
      ? (billPerPerson + tipAmount).toFixed(2)
      : 0;
  const handleClick = () => {
    statesArray.forEach((item) => {
      item(0);
    });
  };
  return (
    <div id="displayBackground" className="rounded-2xl bg-teal-900">
      <div className="w-80 md:h-1/2 flex flex-col mt-5 ml-10 justify-around">
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <h2 className="text-white">Tip Amount</h2>
            <p>/ person</p>
          </div>
          <div>
            <h1 className="text-5xl text-teal-500">
              {customInputValue == 0
                ? "$" + tipAmount.toFixed(2)
                : "$" + customTipAmount.toFixed(2)}
            </h1>
          </div>
        </div>
        <div className="flex w-full justify-between">
          <div className="flex flex-col">
            <h2 className="text-white">Total</h2>
            <p>/ person</p>
          </div>
          <div>
            <h1 className="text-5xl text-teal-500">
              {buttonActive != 0
                ? `$${finalAmount != 0 ? finalAmount : "0"}`
                : "$" + billPerPerson.toFixed(2)}
            </h1>
          </div>
        </div>
      </div>
      <div className="flex w-full justify-center">
        <button
          onClick={handleClick}
          className="w-3/4 mt-20 rounded-md h-11 bg-teal-500 text-teal-900"
        >
          RESET
        </button>
      </div>
    </div>
  );
};

export default BillAmountDisplay;
