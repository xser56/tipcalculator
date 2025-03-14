import React from "react";

const TipSelection = ({ tipPercentage, handleTipSelection, customTip, handleCustomTip }) => {

    return (
        <div>
            <span className="block text-[hsl(186,14%,43%)] mb-1">Select Tip %</span>
            <div className="grid sm:grid-cols-3 sm:grid-rows-2 grid-cols-2 grid-row-3 gap-4 mt-4">
                {[5, 10, 15, 25, 50].map((tip) => ( // Tip arr for component
                    <button
                        key={tip}
                        className={`text-white text-lg py-2 px-0 h-[44px] rounded-lg transition-all 
                        ${
                            tipPercentage === tip / 100
                                ? "bg-[hsl(172,67%,45%)] text-[hsl(183,100%,15%)]"
                                : "bg-[hsl(183,100%,15%)] hover:text-[hsl(183,100%,15%)] hover:bg-[hsl(172,67%,60%)]"
                        }`}
                        onClick={() => handleTipSelection(tip / 100)}
                    >
                        {tip}%
                    </button>
                ))}

                {/* Custom Tip */}
                <div className="bg-gray-200 w-full h-[44px] rounded-[5px] flex items-center justify-between focus-within:border-[hsl(172,67%,45%)] border-2 border-transparent">
                    <input
                        type="number"
                        min={0}
                        placeholder="Custom"
                        className="w-full bg-transparent border-none outline-none p-2 rounded-lg appearance-none h-[44px] text-center md:text-right focus:outline-none focus:ring-0 active:outline-none active:ring-0 placeholder:text-center"
                        value={customTip || ""}
                        onChange={handleCustomTip}
                    />
                </div>
            </div>
        </div>
    );
};

export default TipSelection;