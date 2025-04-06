import { useState } from "react";
import {
  Menu,
  X,
  Server,
  Headphones,
  Gamepad2Icon,
  ContainerIcon,
} from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentLanguage, setCurrentLanguage] = useState("Русский");



  const navItems = [
    { name: "Игровые тарифы", href: "/games", icon: Gamepad2Icon },
    { name: "Выделенные сервера", href: "/dedicated", icon: Server },
    { name: "VPS", href: "/vps", icon: ContainerIcon },
    { name: "Поддержка", href: "/support", icon: Headphones },
  ];

  const languages = ["Русский", "English", "Français"];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };


  const changeLanguage = (lang) => {
    setCurrentLanguage(lang);
    // after
  };


  return (
      <nav className="bg-white sticky top-0 z-50 pt-6">
        <div className="max-w-screen-2xl mx-auto">
          <div className="flex justify-between items-center h-16">

            {/* логотип и navItems */}
            <div className="flex items-center space-x-8">
              {/* Логотип */}
              <a href="/" className="flex items-center">
          <span className="text-xl font-bold text-gray-900 bg-white rounded-lg border-l border-r-4 border-t border-b-4 border-gray-200 px-[11px] py-[7px]">
            Oricon
          </span>
              </a>

              {/* navItems */}
              <div className="hidden md:flex items-center space-x-8">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-2 text-lg font-regular text-gray-900 hover:text-sky-900 transition-colors duration-300"
                    >
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </a>
                ))}
              </div>
            </div>

            {/* кнопки и мобильное меню */}

            <div className="flex items-center space-x-4">
              {/* меню с языками */}
              <div className="hidden md:flex relative group">
                <button className="text-gray-900 hover:text-[#2466F4] transition-colors border-b border-gray-400 pb-0.5">
                  {currentLanguage}
                </button>
                <div className="absolute right-0 top-full mt-1 bg-white shadow-lg rounded-lg py-2 w-28 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                  {languages.map(lang => (
                      <button
                          key={lang}
                          onClick={() => changeLanguage(lang)}
                          className={`w-full text-left px-4 py-2 hover:bg-gray-100 ${currentLanguage === lang ? 'font-semibold' : ''}`}
                      >
                        {lang}
                      </button>
                  ))}
                </div>
              </div>

              <div className="hidden md:flex">
                <a
                    href="https://new.privathub.ovh"
                    className="px-4 py-2 text-white font-semibold rounded-lg bg-[#2466F4] hover:bg-[#467FFB] transition-opacity duration-300"
                >
                  Панель
                </a>
              </div>
              <div className="md:hidden">
                <button
                    onClick={toggleMenu}
                    className="p-2 rounded-lg hover:bg-[#2466F4] transition-colors"
                >
                  {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
              </div>
            </div>
          </div>
        </div>


        {/* Mobile Menu Dropdown */}
        {isMenuOpen && (
            <div className="md:hidden border-t border-gray-800 bg-gray-950 bg-opacity-90 backdrop-blur">
              <div className="flex flex-col space-y-4 px-4 py-6">
                {navItems.map((item) => (
                    <a
                        key={item.name}
                        href={item.href}
                        className="flex items-center gap-2 text-gray-300 hover:text-purple-900 transition-colors px-4 py-2"
                    >
                      <item.icon className="w-4 h-4" />
                      {item.name}
                    </a>
                ))}
                <div className="flex flex-col space-y-3 pt-4">
                  <a
                      href="https://new.privathub.ovh"
                      className="w-full px-4 py-2 text-sm text-center rounded-lg border border-gray-800 hover:border-purple-900 bg-gray-900/50 transition-all"
                  >
                    Панель
                  </a>
                </div>
              </div>
            </div>
        )}
      </nav>
  );
};

export default Navbar;
