import React, { useState, useEffect } from 'react';
import { Cpu, MemoryStick, ChevronDown} from "lucide-react";

// const COST_PER_CPU = 0.6;
// const COST_PER_RAM = 0.6;
// const COST_PER_STORAGE = 0.04;
// const COST_PER_PORT = 0.1;
// const COST_PER_DB = 0.3;

const PRICING = {
    cpu: 0.6,
    ram: 0.6,
    storage: 0.04,
    port: 0.1,
    db: 0.3,
};


const SelectedPlanDetails = ({ plan }) => {
    const [cpuCount, setCpuCount] = useState(plan.cpu);
    const [ramCount, setRamCount] = useState(plan.ram);

    useEffect(() => {
        setCpuCount(plan.cpu);
        setRamCount(plan.ram);
    }, [plan]);


    // обработчики для изменения количества CPU и RAM
    const handleCpuChange = (e) => {
        const value = e.target.value;
        const numValue = parseInt(value, 10);

        if ((value === "" || /^[0-9]+$/.test(value)) && numValue <= 16 && numValue >= 1) {
            setCpuCount(numValue);
        } else if (value === "") {
            setCpuCount("");
        }
    };

    const handleRamChange = (e) => {
        const value = e.target.value;
        const numValue = parseInt(value, 10);

        if ((value === "" || /^[0-9]+$/.test(value)) && numValue <= 16 && numValue >= 1) {
            setRamCount(numValue);
        } else if (value === "") {
            setRamCount("");
        }
    };

    // расчеты цены
    const calculateCpuPrice = () => {
        const numericCpuCount = parseInt(cpuCount, 10);
        if (isNaN(numericCpuCount) || numericCpuCount < 1) return "0.00$";
        return (numericCpuCount * PRICING.cpu).toFixed(2) + "$";
    };

    const calculateRamPrice = () => {
        const numericRamCount = parseInt(ramCount, 10);
        if (isNaN(numericRamCount) || numericRamCount < 1) return "0.00$";
        return (numericRamCount * PRICING.ram).toFixed(2) + "$";
    };

    return (
        <div className="p-[25px] bg-[#1D202D] rounded-[10px] space-y-[15px]">
            <h1 className="text-left font-semibold text-[20px]">
                Настройте свой индивидуальный тариф
            </h1>

            <div className="">
                <div className="flex items-center gap-[5px] mb-[10px]">
                    <Cpu />Процессор
                </div>
                <div className="relative inline-block">
                    <input
                        type="text"
                        className="appearance-none p-[8px] pr-[100px] pl-[10px] rounded bg-[#2B3041] text-white outline-none"
                        style={{ width: '400px' }}
                        value={cpuCount}
                        onChange={handleCpuChange}
                        min="1"
                        max="16"
                        step="1"
                    />
                    <span className="absolute right-[10px] top-1/2 transform -translate-y-1/2 text-[#34D399] pointer-events-none">
                        {calculateCpuPrice()}</span>
                </div>
            </div>

            <div className="items-center gap-[10px]">
                <div className="flex items-center gap-[5px] mb-[10px]">
                    <MemoryStick /> ОЗУ
                </div>
                <div className="relative inline-block ">
                    <input
                        type="text"
                        className="p-[8px] pr-[100px] pl-[10px] rounded bg-[#2B3041] text-white outline-none"
                        style={{ width: '400px' }}
                        value={ramCount}
                        onChange={handleRamChange}
                        min="1"
                        max="16"
                        step="1"
                    />
                    <span className="absolute right-[10px] top-1/2 transform -translate-y-1/2 text-[#34D399] pointer-events-none">
            {calculateRamPrice()}</span>
                </div>
            </div>
        </div>
    );
};

export default SelectedPlanDetails;