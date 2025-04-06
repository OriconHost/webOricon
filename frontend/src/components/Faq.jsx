import React, { useState } from "react";
import { MessageCircleQuestion, ChevronDown, Search } from "lucide-react";

const FAQs = () => {
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [activeTab, setActiveTab] = useState(0);

  const faqs = [
    
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
            {
              question: "Как вы обеспечиваете резервное копирование данных?",
              answer:
                  "Мы выполняем автоматическое ежедневное резервное копирование всех игровых серверов, которое хранится в безопасных внешних локациях. Вы также можете вручную создавать резервные копии в любое время через панель управления. Все резервные копии хранятся в течение 30 дней.",
              tags: ["безопасность", "резервное копирование", "данные"],
          },
          {
            question: "Как вы обеспечиваете резервное копирование данных?",
            answer:
                "Мы выполняем автоматическое ежедневное резервное копирование всех игровых серверов, которое хранится в безопасных внешних локациях. Вы также можете вручную создавать резервные копии в любое время через панель управления. Все резервные копии хранятся в течение 30 дней.",
            tags: ["безопасность", "резервное копирование", "данные"],
        },
        ],
    }
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
      <div className="mb-16">
        <h2 className="text-[64px] font-semibold text-white mb-6 text-left">
            Часто задаваемые вопросы
        </h2>

        <p className="mt-3 text-white text-base font-light text-left">
        Найдите ответы на часто задаваемые вопросы о наших услугах хостинга игр
        </p>
      </div>

      {/* Tabs for Categories */}
      

      {/* Displaying Questions based on Active Tab */}
      <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-2">
          {filteredFAQs[activeTab].questions.map((faq, index) => (
            
              <div
                key={index}
                className=" rounded-xl border border-gray-700 overflow-hidden transition-all duration-200 hover:border-[#2466F4]/50"
              >
                <button
                  className="w-full p-6 text-left flex justify-between items-center gap-4 "
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
                    </div>
                  </div>
                </div>
              </div>
          ))
        }
      </div>
    </div>
  );
};

export default FAQs;
