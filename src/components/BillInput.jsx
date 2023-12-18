import React from "react";

const BillInput = () => {
  return (
    <>
      <div>
        <h2>Bill</h2>
        <form>
          <div className="relative">
            <input
              autoComplete="off"
              id="billInput"
              type="text"
              className="bg-gray-100 absolute rounded-md w-full h-12 pl-6 pr-6 outline-none text-right"
            />
            <img
              className="absolute mt-3.5 pl-5"
              src="./images/icon-dollar.svg"
              alt="dollar icon"
            />
          </div>
        </form>
      </div>
    </>
  );
};

export default BillInput;
