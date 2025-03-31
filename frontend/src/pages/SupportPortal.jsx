import React from 'react';
import { Helmet } from 'react-helmet';
import {
  Mail,
  MessageSquare,
  Phone,
  HeadphonesIcon,
  BookOpen,
  Globe,
  Clock,
  Users,
  HeadsetIcon,
  Send,
} from 'lucide-react';




const SupportPortal = () => {
  const supportOptions = [
    {
      title: "Эл. Почта поддержки",
      description: "Получите помощь по электронной почте в течение 48 часов",
      icon: Mail,
      buttonText: "Написать письмо",
      href: "mailto:root@privathub.ovh",
      response: "24-48 часов",
      recommended: false
    },
    {
      title: "Телеграм",
      description: "Напишите нашим сотрудникам поддержки в телеграм для оказания помощи.",
      icon: Send,
      buttonText: "Написать",
      href: "https://t.me/PrivatHub_Support",
      response: "1-24 часов",
      recommended: true
    },
    {
      title: "Дискорд",
      description: "Присоединяйтесь к нашему Discord для мгновенной поддержки сообщества",
      icon: HeadsetIcon,
      buttonText: "Присоедениться",
      href: "https://discord.gg/ZWwKF3etYz",
      response: "В реальном времени",
      recommended: true
    },
  ];

  const quickHelp = [
    {
      title: "Статус узлов",
      description: "Проверьте статус всех наших узлов",
      icon: Globe,
      href: "/status"
    },
    {
      title: "База знаний",
      description: "В разработке",
      icon: BookOpen,
      href: ""
    },
    {
      title: "Форум",
      description: "В разработке",
      icon: Users,
      href: ""
    }
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Helmet>
        <title>Портал поддержки | PrivatHub</title>
      </Helmet>
      {/* Hero Section */}
      <div className="bg-transparent">
        <div className="max-w-scren-2xl mx-auto py-16">
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl md:text-5xl">
              Чем мы можем вам помочь?
            </h1>
            <p className="mt-3 max-w-md mx-auto font-semibold text-gray-300 sm:text-lg md:mt-5 md:text-2xl md:max-w-3xl">
              Выберите вариант поддержки, который лучше всего соответствует вашим потребностям. Наша команда готова помочь 24/7.
            </p>
          </div>
        </div>
      </div>

      {/* Support Options Grid */}
      <div className="max-w-scren-2xl mx-auto py-16 ">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {supportOptions.map((option, index) => (
            <div
              key={index}
              className={`relative bg-gray-900/50 rounded-xl p-6 hover:bg-gray-800/50 transition-all duration-300 border ${option.recommended ? 'border-purple-900' : 'border-gray-800'
                }`}
            >
              {option.recommended && (
                <div className="absolute -top-3 right-4 bg-purple-900 text-white px-3 py-1 rounded-full text-sm">
                  Рекомендуется
                </div>
              )}
              <div className="flex flex-col h-full">
                <div className="flex items-center mb-4">
                  <option.icon className="h-6 w-6 text-purple-900" />
                  <h3 className="ml-3 text-xl font-semibold">{option.title}</h3>
                </div>
                <p className="text-gray-400 mb-4 flex-grow">{option.description}</p>
                <div className="flex items-center mb-4 text-sm text-gray-500">
                  <Clock className="h-4 w-4 mr-2" />
                  Время ответа: {option.response}
                </div>
                <a
                  href={option.href}
                  className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base font-medium rounded-lg text-white bg-purple-900 hover:bg-purple-800 transition-colors duration-300"
                >
                  {option.buttonText}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Help Section */}
      <div className="max-w-scren-2xl mx-auto pb-16">
        <h2 className="text-2xl font-bold mb-8">Остальное</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {quickHelp.map((item, index) => (
            <a
              key={index}
              href={item.href}
              className="flex items-start p-6 bg-gray-900/50 rounded-xl hover:bg-gray-800/50 transition-all duration-300 border border-gray-800"
            >
              <item.icon className="h-6 w-6 text-purple-900" />
              <div className="ml-4">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <p className="mt-2 text-gray-400">{item.description}</p>
              </div>
            </a>
          ))}
        </div>
      </div>

      {/* Operating Hours */}
      <div className="max-w-scren-2xl mx-auto pb-16">
        <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
          <div className="flex items-center mb-4">
            <HeadphonesIcon className="h-6 w-6 text-purple-900" />
            <h2 className="ml-3 text-2xl font-bold">Работа поддержки</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Техническая поддержка</h3>
              <p className="text-gray-400">Понедельник - Воскресенье: 9:00 - 21:00</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-2">Финансовый отдел</h3>
              <p className="text-gray-400">Понедельник - Пятница: 10:00 - 16:00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportPortal;
