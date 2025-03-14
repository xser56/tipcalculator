import React from "react";
// import dollarSymbol from "../assets/images/icon-dollar.svg";
// import personIcon from "../assets/images/icon-person.svg";
import TipSelection from "./SelectTip"; // Import TipSelection component

const UserInputs = ({ bill, setBill, numPeople, setNumPeople, warningText, tipPercentage, handleTipSelection, customTip, handleCustomTip }) => {
  
    return (
        <div className="p-5 space-y-6">
            {/* Bill Input */}
            <div>
                <label className="block text-neutral-dark-grayish-cyan mb-2">Bill</label>
                <div className="bg-neutral-light-grayish-cyan mt-2 w-full h-[40px] rounded-[5px] flex items-center justify-between px-2">
                    {/* <img src={dollarSymbol} className="pl-[8px]" alt="dollar icon" /> */}
                    <input
                        placeholder="0"
                        min={0}
                        type="number"
                        className="text-[20px] mr-2 bg-transparent border-none outline-none w-full text-right"
                        value={bill || ""}
                        onChange={(e) => setBill(e.target.value === "" ? "" : parseFloat(e.target.value))}
                    />
                </div>
            </div>

            {/* Tip Selection (from component)*/}
            <TipSelection 
                tipPercentage={tipPercentage} 
                handleTipSelection={handleTipSelection} 
                customTip={customTip} 
                handleCustomTip={handleCustomTip} 
            />

            {/* Number of People */}
            <div>
                <label className="text-neutral-dark-grayish-cyan mb-2 flex flex-col md:flex-row md:justify-between text-sm">
                    Number of People <div className="text-red-500 text-sm pt-1 md:pt-0">{warningText}</div>
                </label>
                <div className="bg-neutral-light-grayish-cyan mt-2 w-full h-[40px] rounded-[5px] flex items-center justify-between px-2">
                    {/* <img src={personIcon} className="pl-[8px]" alt="person icon" /> */}
                    <input
                        placeholder="0"
                        min={0}
                        type="number"
                        className="text-[20px] mr-2 bg-transparent border-none outline-none w-full text-right"
                        value={numPeople || ""}
                        onChange={(e) => setNumPeople(e.target.value === "" ? "" : parseInt(e.target.value))}
                    />
                </div>
            </div>
        </div>
    );
};

export default UserInputs;
