import React, { useState } from "react";
import {
  Quote,
  Star,
  ArrowLeft,
  ArrowRight,
  MessageCircleQuestion,
} from "lucide-react";
import gamestwobg from '../assets/games-two-bg.png';

const testimonials = [
  {
    name: "dev_ilish",
    avatar: "https://i.imgur.com/Xmrt65X.png",
    game: "Владелец сервера Unturned",
    quote:
      "Все минусы которые есть, можно сократить ценой - ведь цена самая низкая которую я видел из всех хостингов. Дружелюбная администрация которая круглосуточно готова помочь с проблемой, ждём новую ноду всем сервером",
    rating: 5,
    verified: true,
    hosting_duration: "2+ месяца",
    server_size: "30+ игроков",
    location: "Москва",
    date: "20.11.2024",
  },
  {
    name: "itskiborg",
    avatar: "https://i.imgur.com/FjSnNQP.png",
    game: "Владелец сервера Minecraft",
    quote:
      "Самый лучший хостинг за свою цену, отзывчивая администрация и поддержка - сразу помогают в трудной ситуации / проблеме",
    rating: 5,
    verified: true,
    hosting_duration: "3+ месяца",
    server_size: "15+ игроков",
    location: "Москва",
    date: "08.10.2024",
  },
  {
    name: "Твикс",
    avatar: "https://i.imgur.com/GJhKzWT.png",
    game: "Python разработчик",
    quote:
      "Хостинг очень дешёвый и очень качевственный. Проблем не встречал. Только есть один надоедливый сис админ Тумана который задрал уже. А так все отлично!",
    rating: 4,
    verified: true,
    hosting_duration: "3+ месяца",
    server_size: "10+ пользователей",
    location: "Москва",
    date: "08.10.2024",
  },
  {
    name: "itzFaradey",
    avatar: "https://i.imgur.com/B5JGirI.png",
    game: "Владелец сервера Minecraft",
    quote:
      "Private Hub - это просто находка для тех, кто ищет надежный и доступный хостинг для своего Minecraft-сервера. Оцениваю на 10/10! Несмотря на очень привлекательную цену, качество услуг на высоте. Администрация всегда готова помочь, причем круглосуточно.",
    rating: 5,
    verified: true,
    hosting_duration: "4+ месяца",
    server_size: "25+ пользователей",
    location: "Москва",
    date: "09.12.2024",
},  {
    name: "itzFaradey",
    avatar: "https://i.imgur.com/B5JGirI.png",
    game: "Владелец сервера Minecraft",
    quote:
      "Private Hub - это просто находка для тех, кто ищет надежный и доступный хостинг для своего Minecraft-сервера. Оцениваю на 10/10! Несмотря на очень привлекательную цену, качество услуг на высоте. Администрация всегда готова помочь, причем круглосуточно.",
    rating: 5,
    verified: true,
    hosting_duration: "4+ месяца",
    server_size: "25+ пользователей",
    location: "Москва",
    date: "09.12.2024",
},  {
    name: "itzFaradey",
    avatar: "https://i.imgur.com/B5JGirI.png",
    game: "Владелец сервера Minecraft",
    quote:
      "Private Hub - это просто находка для тех, кто ищет надежный и доступный хостинг для своего Minecraft-сервера. Оцениваю на 10/10! Несмотря на очень привлекательную цену, качество услуг на высоте. Администрация всегда готова помочь, причем круглосуточно.",
    rating: 5,
    verified: true,
    hosting_duration: "4+ месяца",
    server_size: "25+ пользователей",
    location: "Москва",
    date: "09.12.2024",
},
{
    name: "itzFaradey",
    avatar: "https://i.imgur.com/B5JGirI.png",
    game: "Владелец сервера Minecraft",
    quote:
      "Private Hub - это просто находка для тех, кто ищет надежный и доступный хостинг для своего Minecraft-сервера. Оцениваю на 10/10! Несмотря на очень привлекательную цену, качество услуг на высоте. Администрация всегда готова помочь, причем круглосуточно.",
    rating: 5,
    verified: true,
    hosting_duration: "4+ месяца",
    server_size: "25+ пользователей",
    location: "Москва",
    date: "09.12.2024",
},
{
    name: "itzFaradey",
    avatar: "https://i.imgur.com/B5JGirI.png",
    game: "Владелец сервера Minecraft",
    quote:
      "Private Hub - это просто находка для тех, кто ищет надежный и доступный хостинг для своего Minecraft-сервера. Оцениваю на 10/10! Несмотря на очень привлекательную цену, качество услуг на высоте. Администрация всегда готова помочь, причем круглосуточно.",
    rating: 5,
    verified: true,
    hosting_duration: "4+ месяца",
    server_size: "25+ пользователей",
    location: "Москва",
    date: "09.12.2024",
},{
    name: "itzFaradey",
    avatar: "https://i.imgur.com/B5JGirI.png",
    game: "Владелец сервера Minecraft",
    quote:
      "Private Hub - это просто находка для тех, кто ищет надежный и доступный хостинг для своего Minecraft-сервера. Оцениваю на 10/10! Несмотря на очень привлекательную цену, качество услуг на высоте. Администрация всегда готова помочь, причем круглосуточно.",
    rating: 5,
    verified: true,
    hosting_duration: "4+ месяца",
    server_size: "25+ пользователей",
    location: "Москва",
    date: "09.12.2024",
},

];

const Testimonials = () => {
    const [activeIndex, setActiveIndex] = useState(4); // Default to the 5th card (index 4)

    const handlePrevious = () => {
        setActiveIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setActiveIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
    };

    return (
        <div className="relative bg-[#24293A] overflow-hidden flex justify-center items-center ">
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `url(${gamestwobg})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    maskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, transparent 100%)',
                    WebkitMaskImage: 'linear-gradient(to bottom, transparent 0%, black 50%, transparent 100%)'
                }}>
            </div>
            <div className="relative mx-auto py-16 max-w-screen-2xl">
                <div className="flex">

                </div>
                {/* Header */}
                <div className="text-center mb-16 ">
                    <div className="flex justify-between items-center">
                        <div>
                            <h2 className="text-[64px] font-semibold text-white mb-6 text-left">
                                Почему мы?
                            </h2>

                            <p className="mt-3 text-white text-[16px] font-light text-left">
                                Мы предоставляем услуги хостинга серверов для различных игр,<br/> среди которых
                                Minecraft,
                                Rust, CS2, ARK Survival Evolved, Terraria,<br/> Valheim и другие.
                            </p>
                        </div>
                        {/* Navigation */}
                        <div className="flex gap-[51px]">
                            <button
                                onClick={handlePrevious}
                                className="p-4 bg-[#2466F4]/50 hover:bg-[#2466F4]/100 rounded-lg transition-colors text-white"
                            >
                                <ArrowLeft className="w-5 h-5"/>
                            </button>
                            <button
                                onClick={handleNext}
                                className="p-4 bg-[#2466F4]/50 hover:bg-[#2466F4]/100 rounded-lg transition-colors text-white"
                            >
                                <ArrowRight className="w-5 h-5"/>
                            </button>
                        </div>
                    </div>
                </div>

                {/* Testimonials Row */}
                <div className="relative flex justify-center items-center gap-10">
                    <div className="flex gap-[20px] transform transition-transform"
                         style={{
                             transform: `translateX(calc(50% - ${activeIndex * 403}px))`
                         }}>
                        {testimonials.map((testimonial, index) => (
                            <div
                                key={index}
                                className="inline-block w-[383px] group bg-gray-900/50 backdrop-blur-sm rounded-xl overflow-visible border border-gray-800 hover:border-[#2466F4]/50 transition-all duration-300  cursor-pointer p-6 "
                            >
                                <div className="flex items-center gap-3 mb-4">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full border border-[#2466F4]"
                                    />
                                    <div>
                                        <p className="font-bold text-white group-hover:text-[#2466F4] transition-colors">
                                            {testimonial.name}
                                        </p>
                                        <p className="text-sm text-gray-400">{testimonial.game}</p>
                                    </div>
                                </div>
                                <div className="flex text-[#2466F4] mb-3">
                                    {[...Array(testimonial.rating)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current"/>
                                    ))}
                                </div>
                                <p className="text-gray-300 text-sm line-clamp-3">
                                    "{testimonial.quote}"
                                </p>
                                <p className="text-gray-500 text-sm mt-4">{testimonial.date}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Testimonials;
