import React, { useState } from "react";
import { MessageCircleQuestion, ChevronDown, Search } from "lucide-react";

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const faqs = [
    {
        category: "Начало работы",
        questions: [
            {
                question: "Как быстро я могу настроить свой игровой сервер?",
                answer:
                    "С нашей системой мгновенной настройки вы можете запустить игровой сервер менее чем за 5 минут. Наша автоматизированная платформа берет на себя все технические настройки, позволяя вам сосредоточиться на игре. Просто выберите игру, тарифный план, и ваш сервер будет готов к использованию.",
                tags: ["настройка", "быстрый старт", "развертывание"],
            },
            {
                question: "Какие способы оплаты вы принимаете?",
                answer:
                    "Мы принимаем все основные кредитные карты (Visa, MasterCard, American Express), PayPal и большинство популярных криптовалют, включая Bitcoin и Ethereum. Все платежи обрабатываются безопасно через нашу зашифрованную систему оплаты.",
                tags: ["оплата", "счет"],
            },
        ],
    },
    {
        category: "Безопасность",
        questions: [
            {
                question: "Предоставляете ли вы защиту от DDoS-атак?",
                answer:
                    "Да, во все наши тарифные планы включена комплексная защита от DDoS-атак мощностью до 2.5 Тбит/с. Наша многоуровневая система безопасности включает автоматическое предотвращение атак, фильтрацию трафика и обнаружение угроз в реальном времени, чтобы ваш сервер был защищен.",
                tags: ["безопасность", "ddos", "защита"],
            },
            {
                question: "Как вы обеспечиваете резервное копирование данных?",
                answer:
                    "Мы выполняем автоматическое ежедневное резервное копирование всех игровых серверов, которое хранится в безопасных внешних локациях. Вы также можете вручную создавать резервные копии в любое время через панель управления. Все резервные копии хранятся в течение 30 дней.",
                tags: ["безопасность", "резервное копирование", "данные"],
            },
        ],
    },
    {
        category: "Тарифы и цены",
        questions: [
            {
                question: "Могу ли я изменить свой тарифный план?",
                answer:
                    "Конечно! Вы можете легко изменить свой тарифный план в любое время без дополнительных сборов. Изменения вступают в силу сразу, а биллинг автоматически пересчитывается пропорционально. Наша гибкая система масштабирования позволяет вам подстраивать ресурсы под свои нужды.",
                tags: ["биллинг", "тарифы", "обновление"],
            },
            {
                question: "Предоставляете ли вы возможность возврата средств?",
                answer:
                    "Да, мы предлагаем 48-часовую гарантию возврата средств для всех новых клиентов. Если вы не удовлетворены нашим сервисом, просто свяжитесь с нашей службой поддержки в течение первых 48 часов, чтобы получить полный возврат средств без лишних вопросов.",
                tags: ["биллинг", "возврат", "политика"],
            },
        ],
    },
];


  const filterFAQs = (faqs, query) => {
    if (!query) return faqs;
    return faqs
      .map((category) => ({
        ...category,
        questions: category.questions.filter(
          (q) =>
            q.question.toLowerCase().includes(query.toLowerCase()) ||
            q.answer.toLowerCase().includes(query.toLowerCase()) ||
            q.tags.some((tag) =>
              tag.toLowerCase().includes(query.toLowerCase())
            )
        ),
      }))
      .filter((category) => category.questions.length > 0);
  };

  const filteredFAQs = filterFAQs(faqs, searchQuery);

  return (
    <div className="max-w-screen-2xl mx-auto py-16">
      <div className="text-center mb-12">
        <div className="inline-flex items-center bg-purple-900 rounded-full px-4 py-2 mb-5">
          <MessageCircleQuestion className="text-white mr-2" />
          <span className="text-white text-md">Нужна помощь?</span>
        </div>
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Часто задаваемые вопросы
        </h2>
        <p className="text-gray-400 max-w-2xl font-semibold text-xl md:text-2xl mx-auto mb-5">
          Найдите ответы на часто задаваемые вопросы о наших услугах хостинга игр
        </p>

        {/* Search Bar */}
        <div className="relative max-w-xl mx-auto">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Поиск в разделе «Часто задаваемые вопросы»…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-lg bg-gray-800/50 border border-gray-700 focus:border-purple-900 focus:outline-none focus:ring-1 focus:ring-purple-900 transition-all"
          />
        </div>
      </div>

      {/* Tabs for Categories */}
      <div className="flex space-x-4 mb-8 justify-center">
        {faqs.map((category, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg text-lg font-semibold ${
              activeTab === index
                ? "bg-purple-900 text-white"
                : "bg-gray-800 text-gray-400"
            }`}
            onClick={() => setActiveTab(index)}
          >
            {category.category}
          </button>
        ))}
      </div>

      {/* Displaying Questions based on Active Tab */}
      <div className="space-y-8">
        {filteredFAQs[activeTab] ? (
          filteredFAQs[activeTab].questions.map((faq, index) => (
            <div
              key={index}
              className="bg-gray-800/50 rounded-xl border border-gray-700 overflow-hidden transition-all duration-200 hover:border-purple-900/50"
            >
              <button
                className="w-full p-6 text-left flex justify-between items-center gap-4"
                onClick={() =>
                  setActiveQuestion(
                    activeQuestion === `${activeTab}-${index}`
                      ? null
                      : `${activeTab}-${index}`
                  )
                }
                aria-expanded={activeQuestion === `${activeTab}-${index}`}
                aria-controls={`faq-answer-${activeTab}-${index}`}
              >
                <span className="text-xl font-medium flex-1">
                  {faq.question}
                </span>
                <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-700/50">
                  <ChevronDown
                    className={`w-4 h-4 text-white transform transition-transform duration-200 ${
                      activeQuestion === `${activeTab}-${index}`
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                </div>
              </button>

              <div
                id={`faq-answer-${activeTab}-${index}`}
                className={`grid transition-all duration-200 ${
                  activeQuestion === `${activeTab}-${index}`
                    ? "grid-rows-[1fr] opacity-100"
                    : "grid-rows-[0fr] opacity-0"
                }`}
              >
                <div className="overflow-hidden">
                  <div className="p-6 pt-0 text-gray-400 text-lg space-y-4">
                    <p>{faq.answer}</p>
                    <div className="flex flex-wrap gap-2">
                      {faq.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="px-3 py-1 rounded-full bg-purple-900 text-white text-xs"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="text-center text-gray-400 mt-8">
            <p>
              Результаты не найдены для "
              <span className="text-white">{searchQuery}</span>".
            </p>
            <p className="mt-2">
              Попробуйте использовать другие ключевые слова или просмотрите раздел часто задаваемых вопросов по категориям.
            </p>
          </div>
        )}
      </div>

      {/* Not finding answer prompt */}
      <div className="mt-12 p-6 bg-transparent rounded-xl text-center">
        <h3 className="text-2xl font-semibold mb-2">
          Не можете найти то, что ищете?
        </h3>
        <p className="text-gray-400 text-lg mb-4">
          Наша служба поддержки готова помочь вам 24/7
        </p>
        <a
          href="/support"
          className="px-6 py-2 bg-purple-900 font-bold hover:bg-purple-950 rounded-lg transition-colors"
        >
          Связаться с поддержкой
        </a>
      </div>
    </div>
  );
};

export default FAQs;
