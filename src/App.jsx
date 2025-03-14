import React, { useState, useEffect } from "react";
import UserInputs from "./Components/UserInput";
import Logo from "./assets/logo.svg";

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
      <div>
        <div className=" font-spaceMono flex flex-col justify-center items-center w-full h-screen bg-[hsl(185,41%,84%)] font-bold ">
          <img src={Logo} alt="Logo" className="mb-20"/>
            

            {/* Card Container */}
          
            <div className="rounded-2xl sm:w-[750px] p-1 bg-white">
                <div className="grid sm:grid-cols-2">
                    
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
                    <div className="bg-neutral-very-dark-cyan px-8 pt-10 rounded-xl m-4 sm:h-[22rem] h-[17rem]">
                      
                        {/* Tip Amount */}
                        <div className="grid grid-cols-2 bg-neutral-very-dark-cyan rounded-x">  
                            <div>
                                <p className="text-white text-[14px]">Tip Amount</p>
                                <p className="text-neutral-grayish-cyan text-[12px]">/ person</p>
                            </div>
                            <p className="text-primary-cyan font-bold flex justify-end text-4xl">${(calculateTipAmount() / numPeople || 0).toFixed(2)}</p>
                        </div>
                    
                        {/* Total */}
                        <div className="flex justify-between items-center pt-10 pb-5">
                            <div>
                                <p className="text-white text-[14px]">Total</p>
                                <p className="text-neutral-grayish-cyan text-[12px]">/ person</p>
                            </div>
                            <p className="text-primary-cyan font-bold flex justify-end text-4xl ">${calculateTotalPerPerson().toFixed(2)}</p>
                        </div>

                        {/* Reset Button */}
                        <button onClick={resetCalculator} className="bg-primary-cyan text-neutral-very-dark-cyan rounded-md h-[2.8rem] text-xl font-bold sm:mt-20 mt-5 flex items-center justify-center w-full">RESET</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    );
}

export default TipCalculator;
