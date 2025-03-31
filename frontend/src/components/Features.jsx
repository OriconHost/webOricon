import React, { useState } from "react";
import { Server, Shield, Zap, Globe, Cpu, Clock } from "lucide-react";

const allFeatures = [
  {
    Icon: Server,
    title: "Мощные серверы",
    description:
      "Высокопроизводительные игровые серверы с низкой задержкой и 99,9% времени безотказной работы.",
    metrics: ["DDR5 ОЗУ", "Процессоры AMD", "NVMe Диски"],
  },
  {
    Icon: Shield,
    title: "DDoS Защита",
    description:
      "Продвинутая игровая защита для ваших серверов.",
    metrics: ["2.5 Тбит", "Layer 4", "В реальном времени"],
  },
  {
    Icon: Zap,
    title: "Скорость установки",
    description:
      "Настройте и запустите свой игровой сервер за считанные минуты, никаких технических знаний не требуется.",
    metrics: ["Установка в 1 клик", "Поддержка 24/7", "Легкая миграция"],
  },
  {
    Icon: Globe,
    title: "Глобальная сеть",
    description:
      "Выбирайте оптимальную локацию для обеспечения низкой задержки.",
    metrics: ["1 Локация", "Стабильность", "1Гбит/с"],
  },
  {
    Icon: Cpu,
    title: "Масштабирование ресурсов",
    description:
      "Динамически масштабируйте ресурсы вашего сервера в зависимости от количества игроков и спроса.",
    metrics: ["Автомасштабирование", "Балансировка нагрузки", "Аналитика пользования"],
  },
  {
    Icon: Clock,
    title: "Автоматические бэкапы",
    description:
      "Регулярное автоматическое резервное копирование с возможностью быстрого восстановления для обеспечения безопасности ваших данных.",
    metrics: ["Ежедневные бэкапы", "Восстановление в один клик", "30-дневная история"],
  },
];

const FeaturesSection = () => {
  const [showAll, setShowAll] = useState(false);
  const visibleFeatures = showAll ? allFeatures : allFeatures.slice(0, 4);

  return (
    <div className="relative bg-transparent overflow-hidden ">
      <div className="relative max-w-screen-2xl mx-auto py-16 px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-sky-900/20 rounded-full mb-8">
            <span className="text-sky-400 font-medium">Премиум решения</span>
          </div>

          <h2 className="text-left text-3xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 bg-clip-text w-fit">
            Разработано для
            <br />
            ваших проектов
          </h2>

          <p className="mt-3 max-w-md text-left text-stone-900 text-xl md:text-2xl font-regular md:max-w-3xl">
            Испытайте игровой процесс нового уровня с нашей инфраструктурой премиум-хостинга, разработанной специально для вас.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {visibleFeatures.map((feature, index) => (
            <div
              key={index}
              className="group bg-gray-200 backdrop-blur-sm rounded-xl"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="p-3 rounded-lg bg-gray-800/50 ">
                    <feature.Icon className="h-6 w-6 text-gray-900" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4">
                    {feature.title}
                  </h3>
                </div>

                <p className="text-gray-900 mb-8 text-lg">
                  {feature.description}
                </p>

                <div className="grid grid-cols-3 gap-4">
                  {feature.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="bg-stone-900 rounded-lg p-3 text-center"
                    >
                      <span className="text-sm font-medium text-gray-300">
                        {metric}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <button
            onClick={() => setShowAll(!showAll)}
            className="group relative bg-purple-900 hover:bg-purple-800 text-white px-8 py-4 rounded-xl font-semibold transition-all duration-300 overflow-hidden inline-flex items-center gap-2"
          >
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600 to-purple-900 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <span className="relative">
              {showAll ? "Скрыть" : "Посмотреть больше"}
            </span>
            <Zap className="w-4 h-4 relative" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeaturesSection;
