// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import { X } from "lucide-react";

const PromoBanner = () => {
  const [isBannerVisible, setIsBannerVisible] = useState(false);

  useEffect(() => {
    const checkBannerState = () => {
      const bannerData = localStorage.getItem("promoBannerData");

      if (!bannerData) {
        setIsBannerVisible(true);
        return;
      }

      const { closedAt } = JSON.parse(bannerData);
      const oneDayInMs = 24 * 60 * 60 * 1000;
      const hasOneDayPassed = Date.now() - closedAt >= oneDayInMs;

      if (hasOneDayPassed) {
        // Reset if a day has passed
        localStorage.removeItem("promoBannerData");
        setIsBannerVisible(true);
      } else {
        setIsBannerVisible(false);
      }
    };

    checkBannerState();
  }, []);

  const closeBanner = () => {
    const bannerData = {
      closedAt: Date.now(),
    };
    localStorage.setItem("promoBannerData", JSON.stringify(bannerData));
    setIsBannerVisible(false);
  };

  if (!isBannerVisible) return null;

  return (
      <div className="bg-[#E5E7EB] text-[#1C1917] text-center p-3 flex justify-between items-center ">
        <p className="flex-1 text-lg font-regular">
          🎁 Получите бесплатную <strong>7-дневную пробную версию</strong> по промокоду <strong
            style={{color: "#2466F4"}}>FREE25</strong> — запустите игровой сервер за считанные минуты
        </p>
        <button onClick={closeBanner} className="p-2 ml-4">
          <X className="w-4 h-4 text-white"/>
        </button>
      </div>
  );
};

export default PromoBanner;
