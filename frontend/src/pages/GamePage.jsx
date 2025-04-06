import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { games } from '../data/games.js';
import GamePlansSection from '../components/GamePlansSection.jsx';
import SelectedPlanDetails from '../components/SelectedPlanDetails.jsx';

const GamePage = () => {
    const { id } = useParams();
    const game = games.find((game) => game.id === id);

    const [selectedPlan, setSelectedPlan] = useState(game.plans[0]);

    const handleSelectPlan = (plan) => setSelectedPlan(plan);

    if (!game) {
        return <h1>Игра не найдена!</h1>;
    }

    return (
        <div className="bg-[#24293A] text-white py-[80px]">
            <div className="relative">
                <div
                    className="absolute inset-0"
                    style={{
                        backgroundImage: `url(${game.heroImage})`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        maskImage:
                            'linear-gradient(to bottom, transparent 0%, black 50%, transparent 100%)',
                        WebkitMaskImage:
                            'linear-gradient(to bottom, transparent 0%, black 50%, transparent 100%)',
                    }}
                />
                <header className="relative max-w-screen-2xl mx-auto flex justify-between items-center">
                    <div>
                        <h1 className="text-[60px] font-semibold">
                            Арендуй<br />
                            {game.name} сервер
                        </h1>
                        <h2 className="text-[16px] text-[#BDBEC4] font-medium w-[600px] mt-[38px]">
                            {game.description}
                        </h2>
                        <ul className="grid grid-cols-2 gap-y-[1px] w-[460px] my-[45px]">
                            {game.features.map((feature, index) => {
                                const Icon = feature.iconFeature;
                                return (
                                    <li key={index} className="flex items-center">
                                        <div className="py-2">
                                            <Icon className={`w-6 h-6 ${feature.iconColor}`} />
                                        </div>
                                        <span className="ml-2">{feature.nameFeature}</span>
                                    </li>
                                );
                            })}
                        </ul>
                        <div className="flex gap-x-[16px]">
                            {game.ctaButtons.map((button, index) => (
                                <button
                                    key={index}
                                    className={`px-[30px] py-[16px] ${button.ctaColor} rounded-[13px] ${button.ctaTextColor} font-bold`}
                                >
                                    {button.ctaText}
                                </button>
                            ))}
                        </div>
                    </div>
                    <div>
                        <img src={game.sideImage} alt={`${game.name} side`} className="pr-[150px]" />
                    </div>
                </header>
            </div>

            <section className="flex gap-[50px]  max-w-screen-2xl mx-auto mt-[150px]">
                <GamePlansSection
                    plans={game.plans}
                    freePlans={game.freePlans}

                    onSelectPlan={handleSelectPlan} />
                <SelectedPlanDetails plan={selectedPlan} />
            </section>
        </div>
    );
};

export default GamePage;