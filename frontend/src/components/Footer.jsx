import React, { useState, useEffect } from "react";
import {
  Mail,
  Phone,
  Globe,
  Server,
  ArrowUp,
  MapPinHouse,
  Gamepad2,
  BoxIcon,
  HeadsetIcon,
} from "lucide-react";
import discord from '../assets/discord.svg';
import telegram from '../assets/telegram.svg';
import tiktok from '../assets/tiktok.svg';
import youtube from '../assets/youtube.svg';

// -----------------------------------------------------
// СТАРЫЕ МАССИВЫ (не удаляем, чтобы "не упрощать" код)
// -----------------------------------------------------
const quickLinks = [
  { name: "Главная", href: "/", icon: Globe },
  { name: "Игровые сервера", href: "/games", icon: Gamepad2 },
  { name: "Выделенные сервера", href: "/dedicated", icon: Server },
  { name: "ВПС", href: "/vps", icon: BoxIcon },
  { name: "Поддержка", href: "/support", icon: HeadsetIcon },
];

const gameHosting = [
  { name: "Minecraft", href: "/minecraft" },
  { name: "Rust", href: "/rust" },
  { name: "Terraria", href: "/terraria" },
  { name: "Valheim", href: "/valheim" },
  { name: "Factorio", href: "/factorio" },
];

const companyLinks = [
  // { name: "Статус", href: "/status" },
  { name: "Панель", href: "https://new.privathub.ovh" },
  // { name: "Кабинет", href: "https://my.privathub.ovh" },
  { name: "О нас", href: "/about" },
  { name: "Набор в персонал", href: "/careers" },
];

const legalLinks = [{ name: "Документы", href: "/legal" }];

const socialLinks = [
  { icon: Server, href: "https://discord.gg/GGgNZQGxUe", label: "Discord" },
  { icon: Server, href: "https://t.me/privatehub_hosting", label: "Telegram" },
];

// -----------------------------------------------------
// НОВЫЕ МАССИВЫ ДЛЯ ОТОБРАЖЕНИЯ, КАК НА СКРИНШОТЕ
// -----------------------------------------------------
const gamesForScreenshot = [
  { name: "Minecraft", href: "#" },
  { name: "Rust", href: "#" },
  { name: "CS2", href: "#" },
  { name: "ARK", href: "#" },
  { name: "Terraria", href: "#" },
];

const supportLinksForScreenshot = [
  { name: "Связаться с нами", href: "#" },
  { name: "Пользовательское соглашение", href: "#" },
  { name: "Правила использования площадки", href: "#" },
];

// Пример «соцсетей», если нужно показать разные иконки (замените Server на нужные из lucide-react).
const socialLinksForScreenshot = [
  { icon: Server, href: "#", label: "YouTube" },
  { icon: Server, href: "#", label: "Telegram" },
  { icon: Server, href: "#", label: "VK" },
];

const Footer = () => {
  // Логика "Back to Top"
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const checkScrollHeight = () => {
      if (!showButton && window.pageYOffset > 400) {
        setShowButton(true);
      } else if (showButton && window.pageYOffset <= 400) {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", checkScrollHeight);
    return () => {
      window.removeEventListener("scroll", checkScrollHeight);
    };
  }, [showButton]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
      <footer className="bg-[#24293A] text-white border-t border-gray-800 relative">
        {/* discord */}
        <div className="w-full h-14 bg-[#2466F4] flex items-center justify-center">
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

        {/* go top */}
        <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 bg-purple-900 hover:bg-purple-800 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${
                showButton ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            } focus:outline-none focus:ring-2 focus:ring-purple-700 focus:ring-offset-2 focus:ring-offset-gray-900`}
            aria-label="Back to top"
        >
          <ArrowUp className="w-6 h-6" />
        </button>

        <div className="max-w-screen-2xl mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-12">
            <div>
              <div className="flex items-center mb-6">
              <span className="text-xl font-extrabold text-white">
                Oricon
              </span>
              </div>
              <h3 className="text-lg font-semibold mb-2 text-white">
                Поддержка
              </h3>
              <p className="text-white/70 text-md font-semibold">
                support@oricon.com
              </p>
            </div>

            {/* games */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Игры
              </h3>
              <ul className="space-y-3">
                {gamesForScreenshot.map((game, index) => (
                    <li key={index}>
                      <a
                          href={game.href}
                          className="text-md text-white/70 font-medium hover:text-[#2466F4] transition-colors"
                      >
                        {game.name}
                      </a>
                    </li>
                ))}
              </ul>
            </div>

            {/* links */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Поддержка
              </h3>
              <ul className="space-y-3">
                {supportLinksForScreenshot.map((link, index) => (
                    <li key={index}>
                      <a
                          href={link.href}
                          className="text-md text-white/70 font-medium hover:text-[#2466F4] transition-colors"
                      >
                        {link.name}
                      </a>
                    </li>
                ))}
              </ul>
            </div>

            {/* social media */}
            <div>
              <h3 className="text-lg font-semibold mb-6 text-white">
                Мы в соц. сетях
              </h3>
              <div className="flex space-x-4">
                {socialLinksForScreenshot.map((social, index) => (
                    <a
                        key={index}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-gray-400 hover:text-purple-900 hover:bg-gray-900/50 rounded-lg transition-all"
                        aria-label={social.label}
                    >
                      {social.label === "YouTube" && (
                          <img src={youtube} alt="YouTube" className="w-6 h-6"/>
                      )}
                      {social.label === "Telegram" && (
                          <img src={telegram} alt="Telegram" className="w-6 h-6"/>
                      )}
                      {social.label === "VK" && (
                          <img src={discord} alt="VK" className="w-6 h-6"/>
                      )}
                    </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between text-md text-gray-500">
            <p>Oricon — Все права защищены</p>
            <p>Сайт разработан: Arki</p>
            <p>Сотрудничество: contact@oricon.com</p>
          </div>
        </div>
      </footer>
  );
};

export default Footer;
