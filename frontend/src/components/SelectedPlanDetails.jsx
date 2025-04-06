import React, { useEffect, useState } from 'react';
import { Cpu, MemoryStick, Database, HardDrive, Network, MapPin } from "lucide-react";

const PRICING = {
    cpu: 0.6,
    ram: 0.6,
    storage: 0.04,
    port: 0.1,
    db: 0.3,
};

const LOCATIONS = [
    { label: 'Москва', value: 'moscow' },
    { label: 'Франкфурт', value: 'frankfurt' },
];

const ResourceItem = ({ icon: Icon, label, unitPrice, value, onChange, min, max }) => {
    const calculatePrice = (count) =>
        !count || isNaN(count) || count < min ? "0.00$" : (count * unitPrice).toFixed(2) + "$";

    const handleChange = (e) => {
        const val = e.target.value;
        const numValue = parseInt(val, 10);

        if ((val === "" || /^[0-9]+$/.test(val)) && numValue >= min && numValue <= max) {
            onChange(numValue);
        } else if (val === "") {
            onChange("");
        }
    };

    return (
        <div className="flex flex-col">
            <div className="flex items-center gap-[5px] mb-[10px]">
                <Icon/> {label}
            </div>
            <div className="relative inline-block">
                <input
                    type="text"
                    className="p-[8px] pr-[100px] pl-[10px] rounded bg-[#2B3041] text-white outline-none"
                    style={{ width: '100%' }}
                    value={value}
                    onChange={handleChange}
                />
                <span className="absolute right-[10px] top-1/2 transform -translate-y-1/2 text-[#34D399]">
                    {calculatePrice(parseInt(value, 10))}
                </span>
            </div>
        </div>
    );
};

const SelectedPlanDetails = ({ plan }) => {
    const [resources, setResources] = useState({
        cpu: plan.cpu,
        ram: plan.ram,
        storage: plan.storage,
        port: plan.port,
        db: plan.database,
        location: plan.location || 'moscow',
    });

    useEffect(() => {
        setResources({
            cpu: plan.cpu,
            ram: plan.ram,
            storage: plan.storage,
            port: plan.port,
            db: plan.database,
            location: plan.location || 'moscow',
        });
    }, [plan]);

    const updateResource = (key, value) => {
        setResources(prev => ({ ...prev, [key]: value }));
    };

    const calculateTotal = () => {
        return (
            (resources.cpu * PRICING.cpu) +
            (resources.ram * PRICING.ram) +
            (resources.storage * PRICING.storage) +
            (resources.port * PRICING.port) +
            (resources.db * PRICING.db)
        ).toFixed(2);
    };

    return (
        <div className="p-[25px] bg-[#1D202D] rounded-[10px] grid grid-cols-[2fr_1fr] gap-[30px]">
            <div className="space-y-[20px]">
                <h1 className="font-semibold text-[20px]">
                    Настройте свой индивидуальный тариф
                </h1>
                <ResourceItem
                    icon={Cpu}
                    label="Процессор"
                    unitPrice={PRICING.cpu}
                    value={resources.cpu}
                    min={1}
                    max={16}
                    onChange={(value) => updateResource('cpu', value)}
                />
                <ResourceItem
                    icon={MemoryStick}
                    label="ОЗУ"
                    unitPrice={PRICING.ram}
                    value={resources.ram}
                    min={1}
                    max={16}
                    onChange={(value) => updateResource('ram', value)}
                />
                <div className="grid grid-cols-2 gap-[20px]">
                    <ResourceItem
                        icon={HardDrive}
                        label="Диск (GB)"
                        unitPrice={PRICING.storage}
                        value={resources.storage}
                        min={10}
                        max={1000}
                        onChange={(value) => updateResource('storage', value)}
                    />
                    <ResourceItem
                        icon={Network}
                        label="Порты"
                        unitPrice={PRICING.port}
                        value={resources.port}
                        min={1}
                        max={100}
                        onChange={(value) => updateResource('port', value)}
                    />
                </div>
                <div className="grid grid-cols-2 gap-[20px]">
                    <ResourceItem
                        icon={Database}
                        label="Базы данных"
                        unitPrice={PRICING.db}
                        value={resources.db}
                        min={1}
                        max={50}
                        onChange={(value) => updateResource('db', value)}
                    />
                    <div className="flex flex-col">
                        <div className="flex items-center gap-[5px] mb-[10px]">
                            <MapPin/> Локация
                        </div>
                        <select
                            className="p-[8px] pr-[100px] pl-[10px] rounded bg-[#2B3041] text-white outline-none cursor-pointer"
                            style={{ width: '100%' }}
                            value={resources.location}
                            onChange={(e) => updateResource('location', e.target.value)}
                        >
                            {LOCATIONS.map(loc => (
                                <option key={loc.value} value={loc.value}>{loc.label}</option>
                            ))}
                        </select>
                    </div>
                </div>
            </div>

            {/* Новый блок справа */}
            <div className="bg-[#24283A] rounded-[10px] p-[20px] space-y-[10px] text-white">
                <h2 className="text-lg font-semibold">К оплате:</h2>
                <div className="space-y-[5px]">
                    <div className="flex justify-between"><span>Процессор ({resources.cpu})</span> <span>${(resources.cpu * PRICING.cpu).toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>ОЗУ ({resources.ram} GB)</span> <span>${(resources.ram * PRICING.ram).toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Диск ({resources.storage} GB)</span> <span>${(resources.storage * PRICING.storage).toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Порты ({resources.port})</span> <span>${(resources.port * PRICING.port).toFixed(2)}</span></div>
                    <div className="flex justify-between"><span>Базы данных ({resources.db})</span> <span>${(resources.db * PRICING.db).toFixed(2)}</span></div>
                </div>
                <div className="font-semibold border-t border-gray-500 pt-[10px] flex justify-between"><span>Итого:</span><span className="text-3xl">${calculateTotal()}</span></div>
                <button className="w-full py-[8px] rounded bg-[#2466F4] text-white cursor-pointer hover:bg-[#467FFB]">Далее</button>
            </div>
        </div>
    );
};

export default SelectedPlanDetails;