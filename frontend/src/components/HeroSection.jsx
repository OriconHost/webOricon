// eslint-disable-next-line no-unused-vars
import React from "react";
import {
    ShieldCheck,
    Settings2,
  Headphones,
  Server,
  Globe,
    Wifi,
  Users,
    Zap
} from "lucide-react";

import worldmap from "../assets/worldmap.svg";


const HeroSection = () => {
  const stats = [
    {
        icon: Settings2,
        value: "Мгновенная настройка",
        label: "Настройте сервер в 1 клик",
        description: "Настроить",
    },
    {
        icon: ShieldCheck,
        value: "Защита от DDoS",
        label: "Лучшая защита с современными технологиями",
        description: "Надежность на высшем уровне",
    },
    {
        icon: Wifi,
        value: "Низкий Ping",
        label: "Стабильность по всему миру",
        description: "Стабильность на высшем уровне",
    },
    {
        icon: Headphones,
        value: "Поддержка 24/7",
        label: "Решите любой вопрос за считанные минуты",
        description: "Перейти",
    },
];

// const plans = [
//     {
//         icon: Gamepad2,
//         value: "Игровые тарифы",
//         label: "Minecraft, Rust, Unturned и многое другое.",
//         description: "Максимальная производительность в каждой игре.",
//         href: "/games",
//     },
//     {
//         icon: HardDrive,
//         value: "Выделенные сервера",
//         label: "Оборудование профессионального уровня",
//         description: "Надежность на высшем уровне.",
//         href: "/dedicated",
//     },
//     {
//         icon: Cloud,
//         value: "VPS",
//         label: "Виртуальные сервера",
//         description: "В разработке",
//         href: "/vps",
//     },
// ];

const features = [
    {
        icon: Server,
        label: "Высокая производительность",
        value: "Хранилище NVMe SSD",
    },
    {
        icon: Globe,
        label: "Глобальная сеть",
        value: "4 локации",
    },
    {
        icon: Users,
        label: "Активные игроки",
        value: "2к+ ежемесячно",
    },
];


  return (
    <div className="relative bg-white overflow-hidden pt-[73px] pb-[94px]">
      <div className="relative max-w-screen-2xl mx-auto">

          {/*<div className="mx-auto w-fit">*/}
          {/*    <div className="inline-flex items-center px-4 py-2 bg-sky-900/20 rounded-full mb-8">*/}
          {/*        <span className="animate-pulse mr-2 h-2 w-2 bg-sky-600 rounded-full"></span>*/}
          {/*        <span className="text-sky-400 font-medium">Новое: Доступна расширенная защита от DDoS-атак</span>*/}
          {/*    </div>*/}
          {/*</div>*/}

          <div className="flex justify-between">
              {/* Main Content */}
              <div className="text-center">

                  <h1 className="text-left text-3xl md:text-5xl lg:text-6xl font-bold text-stone-900 mb-6 bg-clip-text w-fit">
                      Ваши серверы
                      <br />
                      Наша ответственность
                  </h1>
                  <h2 className="text-left text-[18px] mt-[58px] font-light text-stone-900 mt-[48px] bg-clip-text w-fit">
                      Надёжный хостинг игровых серверов для Minecraft, Rust, CS2, ARK и<br/>других игр. Оптимальная производительность, мгновенная настройка,<br/>глобальные локации. Запускай свой сервер быстро и без проблем!
                  </h2>

                  {/* CTA Buttons */}
                  <div className="mt-[20px] flex flex-col sm:flex-row gap-4">
                      <a
                          href="/game/minecraft"
                          className="group relative bg-stone-900 rounded-xl font-semibold transition-all duration-300 overflow-hidden"
                      >
                          <div className="absolute inset-0 bg-[#2466F4] group-hover:bg-[#467FFB] transition-opacity duration-300" />
                          <span className="relative flex items-center justify-center gap-2 text-white px-8 py-4">
    Бесплатный 7-дневный тариф <Zap className="w-4 h-4" />
  </span>
                      </a>
                      <a
                          href="#all-games-section"
                          className="relative bg-gray-100 hover:bg-gray-300 text-gray-900 px-8 py-4 rounded-xl font-semibold border border-gray-800 transition-all duration-300 hover:border-gay-900/50"
                      >
                          Все услуги
                      </a>
                  </div>
              </div>


              {/* Карта */}

              <div className="relative select-none">
                  <img src={worldmap} alt="Карта мира с локациями серверов" className="pointer-events-none"
                       draggable="false"/>

                  <div className="absolute pointer-events-none" style={{left: '297px', top: '119px'}}>
                      <div className="relative">
                          <div className="w-3 h-3 bg-[#2466F4] rounded-full animate-pulse"/>
                          <div className="absolute w-5 h-5 bg-[#2466F4] rounded-full opacity-30 -top-1 -left-1"/>
                      </div>
                      <div
                          className="absolute -left-[90px] top-1/2 -translate-y-1/2 text-xs font-medium bg-[#2466F4]/50 hover:bg-[#2466F4] px-2 py-1 rounded shadow-sm transition-all duration-110 pointer-events-auto">
                          <div className="text-center">Франкфурт</div>
                      </div>
                  </div>

                  <div className="absolute pointer-events-none" style={{left: '343px', top: '105px'}}>
                      <div className="relative">
                          <div className="w-3 h-3 bg-[#2466F4] rounded-full animate-pulse"/>
                          <div className="absolute w-5 h-5 bg-[#2466F4] rounded-full opacity-30 -top-1 -left-1"/>
                      </div>
                      <div
                          className="absolute -right-[70px] top-1/2 -translate-y-1/2 text-xs font-medium bg-[#2466F4]/50 hover:bg-[#2466F4] px-2 py-1 rounded shadow-sm transition-all duration-110 pointer-events-auto">
                          <div className="text-center">Москва</div>
                      </div>
                  </div>

              </div>

          </div>


          {/* Features Bar */}
        <div className="flex flex-wrap justify-center gap-8 mt-[150px]">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <feature.icon className="w-5 h-5 text-stone-900" />
              <div>
                <div className="text-sm text-gray-700">{feature.label}</div>
                <div className="font-semibold text-gray-900">{feature.value}</div>
              </div>
            </div>
          ))}
        </div>

      {/* Plans Grid */}
      {/* <div className="flex mt-[55px] gap-[90px]">
          {plans.map((plan, index) => (
              <a
                  key={index}
                  className="w-[447px] h-[407px] group bg-gray-200 backdrop-blur-sm rounded-xl p-6"
                  href={plan.href}
              >
                  <div className="flex flex-col items-center text-center">
                      <div className="mb-[24px] p-3 rounded-full border border-gray-900">
                          <plan.icon className="h-[75px] w-[75px] text-gray-900" />
                      </div>
                      <div className="text-3xl font-bold text-gray-900 mb-[70px]">
                          {plan.value}
                      </div>
                      <div className="text-gray-900 font-medium mb-[14px]">
                          {plan.label}
                      </div>
                      <div className="text-sm text-gray-700 w-[155px]">{plan.description}</div>
                  </div>
              </a>
          ))}
      </div> */}

          {/* Trust Badge */}
          {/*<div className="mt-16 text-center">*/}
          {/*    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-transparent border border-gray-800">*/}
          {/*        <Shield className="w-4 h-4 text-gray-900" />*/}
          {/*        <span className="text-gray-900 text-sm">*/}
          {/*    Нам доверяют более 170 серверов*/}
          {/*  </span>*/}
          {/*    </div>*/}
          {/*</div>*/}

        {/* Stats Grid */}
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4 mt-[55px]">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="group bg-gray-200 backdrop-blur-sm rounded-xl p-6"
            >
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 rounded-full border border-gray-900 ">
                  <stat.icon className="h-6 w-6 text-gray-900" />
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {stat.value}
                </div>
                <div className="text-gray-900 font-medium mb-2">
                  {stat.label}
                </div>
                <div className="text-sm text-gray-700">{stat.description}</div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default HeroSection;
