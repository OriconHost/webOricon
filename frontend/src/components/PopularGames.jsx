// import React from 'react';
// import {Server} from 'lucide-react';
import { Link } from 'react-router-dom';
import minecraftImage from '../assets/minecraft.png';
import rustImage from '../assets/rust.png';
import terrariaImage from '../assets/terraria.png';
import csImage from '../assets/cs2.png';
import arkImage from '../assets/ark.png';
import valheimImage from '../assets/valheim.png';
import gamesonebg from '../assets/games-one-bg.png';

// import React from "react";


const topGames = [
    {
        link: 'minecraft',
        name: 'Minecraft',
        price: 'От 3.7$ в месяц',
        href: minecraftImage
    },
    {
        link: 'rust',
        name: 'Rust',
        price: 'От 3.7$ в месяц',
        href: rustImage
    },
    {
        link: 'cs2',
        name: 'CS2',
        price: 'От 3.7$ в месяц',
        href: csImage
    },
    {
        link: 'ark',
        name: 'ARK',
        price: 'От 3.7$ в месяц',
        href: arkImage
    },
    {
        link: 'terraria',
        name: 'TERRARIA',
        price: 'От 3.7$ в месяц',
        href: terrariaImage
    },
    {
        link: 'valheim',
        name: 'VALHEIM',
        price: 'От 3.7$ в месяц',
        href: valheimImage
    }
];


const GamesGrid = () => {
  return (
    <div id="all-games-section" className="relative bg-[#24293A] overflow-hidden ">
        <div className="w-full h-14 bg-[#2466F4] flex items-center justify-center ">
            <p className="text-white text-md font-semibold">
                Присоединяйтесь к нашему{" "}
                <a
                    href="https://discord.gg/GGgNZQGxUe"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-gray-300"
                >
                    Discord серверу
                </a>{" "}
                и узнавайте последние новости!
            </p>
        </div>
        <div
            className="absolute inset-0"
            style={{
                backgroundImage: `url(${gamesonebg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                maskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, transparent 100%)',
                WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, transparent 100%)'
            }}>
        </div>
      <div className="relative max-w-screen-2xl mx-auto py-16 ">
        <h2 className="text-4xl md:text-[30px] lg:text-[40px] font-semibold text-white mb-[54px]">
          Все игры
        </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[20px] ">
              {topGames.map((game, index) => (
                  <div
                      key={index}
                      className="group rounded-xl overflow-hidden hover:border hover:border-[#2466F4] border-[#24293A] border-[1px] transition-all duration-300"
                  >
                      <div className="relative  w-full h-full">
                          <div
                              className="absolute inset-0 bg-gradient-to-t from-[#2466F4] to-transparent opacity-0 group-hover:opacity-50 transition-opacity duration-300"/>

                          <img
                              src={game.href}
                              alt={game.name}
                              className="w-full h-full object-cover"
                          />

                          <div
                              className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black to-transparent">
                              <div className="flex justify-between items-end">
                                  <div>
                                      <h3 className="text-[32px] font-bold text-white mb-2">
                                          {game.name}
                                      </h3>
                                      <p className="text-[16px] text-white">{game.price}</p>
                                  </div>
                                  <Link to={`/game/${game.link}`}
                                        className="bg-[#2466F4]/50 py-[10px] px-[19px] font-bold rounded-[13px] border border-[#2466F4] hover:bg-[#2466F4]/100 transition-colors duration-300">
                                      Начать сейчас
                                  </Link>
                              </div>
                          </div>
                      </div>

                  </div>
              ))}
          </div>
      </div>
    </div>
  );
};

export default GamesGrid;
