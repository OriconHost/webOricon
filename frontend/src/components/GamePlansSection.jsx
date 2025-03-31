import React from 'react';

const GamePlansSection = ({ plans, onSelectPlan, freePlans }) => {

    const renderPlanCard = (plan) => (
        <article
            key={plan.id}
            className={`relative bg-[#2C3041] p-[16px] rounded-[10px] mb-[16px] cursor-pointer hover:bg-[#45495E] ${
                plan.status === 'free' ? 'border-[#41BD62] border-[3px]' : ''
            } ${
                plan.status === 'boost' ? 'border-[#4641BD] border-[3px]' : ''
            } ${
                plan.status === 'popular' ? 'border-[#2466F4] border-[3px]' : ''
            }`}
            onClick={() => onSelectPlan(plan)}
        >
            {plan.status === 'free' && (
                <div className="absolute top-2 right-2 bg-[#41BD62] text-white uppercase text-xs font-semibold px-2 py-1 rounded">
                    Lite FREE
                </div>
            )}
            {plan.status === 'boost' && (
                <div className="absolute top-2 right-2 bg-[#4641BD] text-white uppercase text-xs font-semibold px-2 py-1 rounded">
                    Boost FREE
                </div>
            )}
            {plan.status === 'popular' && (
                <div className="absolute top-2 right-2 bg-[#3E65F9] text-white uppercase text-xs font-semibold px-2 py-1 rounded">
                    ПОПУЛЯРНОЕ
                </div>
            )}

            <div className="flex gap-[26px]">
                <div className="flex items-center">
                    <plan.cpuLogo className="w-6 h-6 mr-2"/>
                    {plan.cpu} vCPU
                </div>
                <div className="flex items-center">
                    <plan.ramLogo className="w-6 h-6 mr-2"/>
                    {plan.ram}GB RAM
                </div>
            </div>

            <div className="flex gap-[26px] mt-[12px]">
                <div className="flex items-center">
                    <plan.storageLogo className="w-6 h-6 mr-2"/>
                    {plan.storage}GB SSD
                </div>
                <div className="flex items-center">
                    <plan.portLogo className="w-6 h-6 mr-2"/>
                    {plan.port} Ports
                </div>
                <div className="flex items-center">
                    <plan.databaseLogo className="w-6 h-6 mr-2"/>
                    {plan.database} Databases
                </div>
            </div>
        </article>
    );


    return (
        <section>
            <div className="bg-[#1D202D] p-[25px] rounded-[10px] w-fit mb-[16px]">
                <h2 className="text-center font-semibold text-[#BBBCC0] pb-[16px]">Попробуй бесплатно — идеально для теста!</h2>
                {freePlans.map(renderPlanCard)}
            </div>

            <div className="bg-[#1D202D] p-[25px] rounded-[10px] w-fit">
                {plans.map(renderPlanCard)}
            </div>
        </section>
    );
};

export default GamePlansSection;