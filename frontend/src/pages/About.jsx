import React from "react";
import { Helmet } from "react-helmet";
import {
  ChevronLeft,
  Server,
  Globe,
  Shield,
  Users,
  Award,
  Clock,
  MapPin,
  Mail,
  Phone,
} from "lucide-react";

const AboutUs = () => {
  const companyStats = [
    { icon: Server, label: "Серверов размещено", value: "170+" },
    { icon: Users, label: "Счастливых клиентов", value: "90+" },
    { icon: Globe, label: "Локации", value: "4" },
    { icon: Clock, label: "Аптайм", value: "99%" },
  ];

  const milestones = [
    {
      year: "2015",
      title: "Company Founded",
      description:
        "Started with a vision to provide enterprise-grade hosting solutions for businesses of all sizes.",
    },
    {
      year: "2017",
      title: "Global Expansion",
      description:
        "Launched data centers in Europe and Asia to better serve our growing international customer base.",
    },
    {
      year: "2020",
      title: "Cloud Innovation",
      description:
        "Introduced next-generation cloud infrastructure with advanced security features and improved performance.",
    },
    {
      year: "2024",
      title: "Sustainability Initiative",
      description:
        "Committed to 100% renewable energy usage across all our data centers by 2026.",
    },
  ];

  const values = [
    {
      icon: Shield,
      title: "Безопасность",
      description:
        "Мы отдаем приоритет безопасности и конфиденциальности наших клиентов, обеспечивая защиту данных.",
    },
    {
      icon: Users,
      title: "Поддержка клиентов",
      description:
        "Наша команда технической поддержки готова оказать вам помощь в любое время.",
    },
    {
      icon: Award,
      title: "Развитие",
      description:
        "Мы постоянно развиваемся и внедряем новые технологии, чтобы предлагать надежные и качественные хостинг услуги.",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-950 text-white">
      <Helmet>
        <title>О нас | PrivatHub</title>
      </Helmet>
      <div className="bg-transparent">
        <div className="max-w-screen-2xl mx-auto py-16">
          <a
            href="/"
            className="inline-flex items-center gap-2 text-gray-400 hover:text-white mb-8 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            На главную
          </a>
          <div className="text-center">
            <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
              О нас
            </h1>
            <p className="mt-3 max-w-md mx-auto text-gray-300 sm:text-lg md:mt-5 md:text-2xl font-semibold md:max-w-3xl">
              Мы предоставляем наши хостинг услуги на протяжении 7-ми месяцев
            </p>
          </div>
        </div>
      </div>

      {/* Stats Section  */}
      <div className="max-w-scren-2xl mx-auto py-16">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {companyStats.map((stat, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:bg-gray-800/50 transition-all duration-300"
            >
              <div className="flex flex-col items-center text-center">
                <stat.icon className="h-6 w-6 text-purple-900 mb-4" />
                <div className="text-2xl font-bold mb-2">{stat.value}</div>
                <div className="text-gray-400">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Values Section*/}
      <div className="max-w-scren-2xl mx-auto py-16">
        <h2 className="text-2xl font-bold mb-8">Наши особенности</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:bg-gray-800/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <value.icon className="h-6 w-6 text-purple-900" />
                <h3 className="ml-3 text-xl font-semibold">{value.title}</h3>
              </div>
              <p className="text-gray-400">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline Section */}
      {/* <div className="max-w-scren-2xl mx-auto py-16">
        <h2 className="text-2xl font-bold mb-8">Our Journey</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {milestones.map((milestone, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:bg-gray-800/50 transition-all duration-300"
            >
              <div className="inline-block bg-purple-900 text-white px-3 py-1 rounded text-sm font-bold mb-4">
                {milestone.year}
              </div>
              <h3 className="text-xl font-semibold mb-2">{milestone.title}</h3>
              <p className="text-gray-400">{milestone.description}</p>
            </div>
          ))}
        </div>
      </div> */}

      {/* Contact Section */}
      {/* <div className="max-w-scren-2xl mx-auto pb-16">
        <h2 className="text-2xl font-bold mb-8">Get in Touch</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
          {[
            {
              icon: MapPin,
              title: "Location",
              content: "123 google street, example",
            },
            { icon: Mail, title: "Email", content: "contact@gameboyz.com" },
            { icon: Phone, title: "Phone", content: "+1 (555) 123-4567" },
          ].map((item, index) => (
            <div
              key={index}
              className="bg-gray-900/50 rounded-xl p-6 border border-gray-800 hover:bg-gray-800/50 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <item.icon className="h-6 w-6 text-purple-900" />
                <h3 className="ml-3 text-xl font-semibold">{item.title}</h3>
              </div>
              <p className="text-gray-400">{item.content}</p>
            </div>
          ))}
        </div>
      </div> */}
    </div>
  );
};

export default AboutUs;
