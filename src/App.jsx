import React, { useState, useEffect } from "react";
import UserInputs from "./Components/Form";

function TipCalculator() {
    const [bill, setBill] = useState(0);
    const [tipPercentage, setTipPercentage] = useState(0);
    const [numPeople, setNumPeople] = useState();
    const [customTip, setCustomTip] = useState("");
    const [warningText, setWarningText] = useState("");

    const handleTipSelection = (percentage) => {
        setTipPercentage(percentage);
        setCustomTip(""); // Clear custom tip when another tip is selected
    };

    const handleCustomTip = (e) => {
        const value = e.target.value;
        setCustomTip(value);
        setTipPercentage(value === "" ? 0 : parseFloat(value) / 100);
    };

    useEffect(() => {
        if (!numPeople || numPeople <= 0) {
            setWarningText("Can't be zero");
        } else {
            setWarningText("");
        }
    }, [numPeople]);

    const calculateTipAmount = () => {
        return bill * tipPercentage;
    };

    const calculateTotalPerPerson = () => {
        const peopleCount = parseInt(numPeople, 10) || 0;
        if (peopleCount <= 0) return 0;

        return (bill + calculateTipAmount()) / peopleCount;
    };

    const resetCalculator = () => {
        setBill(0);
        setTipPercentage(0);
        setNumPeople(0);
        setCustomTip("");
        setWarningText("");
    };

    return (
        <div className=" font-mono flex flex-col justify-center items-center w-full h-screen bg-[hsl(185,41%,84%)] font-bold text-sm">
            <header className="flex justify-center pt-[1rem] font-bold text-neutral-dark-grayish-cyan text-[24px] ">S P L I</header>
            <header className="flex justify-center pb-20 font-bold text-neutral-dark-grayish-cyan text-[24px] ">T T E R</header>

            {/* Card Container */}
            <div className="rounded-2xl w-[800px] p-1 bg-white">
                <div className="grid grid-cols-2">
                    
                    {/* Left side */}
                    <div className="py-1">
                        <UserInputs 
                            bill={bill} 
                            setBill={setBill} 
                            numPeople={numPeople} 
                            setNumPeople={setNumPeople} 
                            warningText={warningText} 
                            tipPercentage={tipPercentage} 
                            handleTipSelection={handleTipSelection} 
                            customTip={customTip} 
                            handleCustomTip={handleCustomTip} 
                        />
                    </div>

                    {/* Right side */}
                    <div className="bg-neutral-very-dark-cyan px-10 pt-12 rounded-xl m-5">
                        <div className="grid grid-cols-2 bg-neutral-very-dark-cyan rounded-x">  
                            {/* Tip Amount */}
                            <div>
                                <p className="text-white font-bold text-[14px]">Tip Amount</p>
                                <p className="text-neutral-grayish-cyan">/ person</p>
                            </div>
                            <p className="text-primary-cyan font-bold flex justify-end text-5xl">${(calculateTipAmount() / numPeople || 0).toFixed(2)}</p>
                        </div>
                    
                        {/* Total */}
                        <div className="flex justify-between items-center pt-12">
                            <div>
                                <p className="text-white font-bold text-[14x]">Total</p>
                                <p className="text-neutral-grayish-cyan">/ person</p>
                            </div>
                            <p className="text-primary-cyan font-bold flex justify-end text-5xl ">${calculateTotalPerPerson().toFixed(2)}</p>
                        </div>

                        {/* Reset Button */}
                        <button onClick={resetCalculator} className="bg-primary-cyan text-neutral-very-dark-cyan rounded-md h-[40px] text-lg font-bold mt-16 flex items-center justify-center w-[17rem]">RESET</button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TipCalculator;
