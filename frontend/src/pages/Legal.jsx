import React, { useState, useEffect, useRef } from "react";
import { Helmet } from "react-helmet";
import {
  ChevronLeft,
  Book,
  Shield,
  Lock,
  ExternalLink,
  Plus,
  Minus,
  Download,
  Paperclip,
} from "lucide-react";
import { jsPDF } from "jspdf";
import html2canvas from "html2canvas";

const LegalDocumentation = () => {
  const [activeDoc, setActiveDoc] = useState("tos");
  const [expandedSections, setExpandedSections] = useState({});
  const [searchQuery, setSearchQuery] = useState("");
  const [lastRead, setLastRead] = useState({});
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const contentRef = useRef(null);

  const toggleSection = (sectionTitle) => {
    setExpandedSections((prev) => {
      const newState = { ...prev, [sectionTitle]: !prev[sectionTitle] };
      if (newState[sectionTitle]) {
        setLastRead((prev) => ({
          ...prev,
          [sectionTitle]: new Date().toISOString(),
        }));
      }
      return newState;
    });
  };

  const handlePrint = () => {
    const allSections = {};
    legalContent[activeDoc].sections.forEach((section) => {
      allSections[section.title] = true;
    });

    const previousState = { ...expandedSections };
    setExpandedSections(allSections);

    setTimeout(() => {
      window.print();

      setTimeout(() => {
        setExpandedSections(previousState);
      }, 500);
    }, 100);
  };

  const generatePDF = async () => {
    try {
      setIsGeneratingPDF(true);

      const allSections = {};
      legalContent[activeDoc].sections.forEach((section) => {
        allSections[section.title] = true;
      });
      setExpandedSections(allSections);

      await new Promise((resolve) => setTimeout(resolve, 100));

      const content = contentRef.current;
      const canvas = await html2canvas(content, {
        scale: 2,
        logging: false,
        useCORS: true,
        backgroundColor: "#111827", // Match the bg-gray-900 
      });

      const imgData = canvas.toDataURL("image/png");
      const pdf = new jsPDF({
        orientation: "portrait",
        unit: "px",
        format: [canvas.width / 2, canvas.height / 2],
      });

      pdf.addImage(imgData, "PNG", 0, 0, canvas.width / 2, canvas.height / 2);
      pdf.save(
        `${legalContent[activeDoc].title
          .replace(/\s+/g, "-")
          .toLowerCase()}.pdf`
      );

      setExpandedSections({});
    } catch (error) {
      console.error("Error generating PDF:", error);
      alert("There was an error generating the PDF. Please try again.");
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  useEffect(() => {
    const style = document.createElement("style");
    style.innerHTML = `
      @media print {
        body * {
          visibility: hidden;
        }
        #legal-content, #legal-content * {
          visibility: visible;
        }
        #legal-content {
          position: absolute;
          left: 0;
          top: 0;
          width: 100%;
          background: white !important;
          color: black !important;
        }
        .no-print {
          display: none !important;
        }
        .section-content {
          display: block !important;
          background: white !important;
          color: black !important;
        }
        .section-header {
          background: white !important;
          color: black !important;
        }
      }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  const legalContent = {
    tos: {
      title: "Договор оферты",
      icon: Book,
      lastUpdated: "2024-12-08",
      sections: [
        {
          title: "1. Общие положения",
          content: [
            "1.1. Настоящий договор-оферта (далее — Оферта) представляет собой официальное предложение PrivateHub, (далее — Исполнитель) физическим и юридическим лицам (далее — Клиент) на заключение договора на предоставление услуг, представленных на Сайте privathub.ovh.",
            "1.2. Акцептом настоящей Оферты (т.е. полным и безоговорочным согласием с ее условиями) считается осуществление Клиентом заказа Услуг на сайте www.privathub.ovh, создание учетной записи и оплата заказанного тарифного плана. ",
            "1.3. Исполнитель вправе в одностороннем порядке изменять условия настоящего Договора, разместив новую редакцию Договора на сайте privathub.ovh не менее чем за 5 (пять) календарных дней до вступления изменений в силу. Продолжение использования Клиентом Услуг после вступления изменений в силу означает согласие Клиента с новой редакцией Договора.",
            "1.4. Использование платформы не предоставляет пользователю исключительных прав на ее компоненты или инструменты. Все программное обеспечение, интерфейсы и дополнительные функции остаются интеллектуальной собственностью PrivateHub. ",
          ],
        },
        {
          title: "2. Предмет договора",
          content: [
            "2.1. Исполнитель обязуется предоставлять Клиенту Услуги хостинга серверов Minecraft, включая:",
            "    Предоставление в аренду виртуального выделенного сервера с определенными характеристиками (процессор, оперативная память, дисковое пространство, сетевой канал) в соответствии с выбранным Клиентом тарифным планом;",
            "    Установку и базовую настройку операционной системы, панели управления и необходимого программного обеспечения для запуска сервера Minecraft (в соответствии с тарифным планом);",
            "    Обеспечение круглосуточного доступа к серверу через интернет, за исключением случаев проведения плановых работ по техническому обслуживанию (см. п. 4.3.1);",
            "    Автоматизированное резервное копирование данных сервера с указанной в тарифном плане периодичностью и возможностью самостоятельного восстановления из резервной копии (только для тарифов с соответствующей опцией);",
            "    Круглосуточную техническую поддержку Клиента по вопросам, связанным с функционированием сервера, через указанные на сайте privathub.ovh каналы связи (электронная почта, тикет-система).",
            "    Возможность установки модов и плагинов на сервер через панель управления (при наличии такой опции в тарифном плане).",
            "2.2. Перечень Услуг, входящих в каждый тарифный план, а также дополнительные опции, доступные для заказа, подробно описаны на сайте ",
          ],
        }, 
        {
          title: "3. Права и обязанности сторон",
          content: [
            "3.1. Исполнитель обязан:",
            "Предоставить Клиенту Услуги в соответствии с условиями настоящего Договора и выбранным тарифным планом в течение 24 часов с момента оплаты;",
            "Обеспечить доступность сервера не менее 95.0% времени в месяц, за исключением плановых технических работ, о которых Клиент будет уведомлен заранее не менее чем за 48 часов через электронную почту и/или личный кабинет;",
            "Проводить все плановые работы по обслуживанию, обновлению и подобные мероприятия с 22:00 до 10:00 по московскому времени. Форс-мажорные ситуации и незапланированные работы к данному пункту не относятся;",
            "Осуществлять резервное копирование данных сервера в соответствии с условиями выбранного тарифного плана и обеспечивать сохранность резервных копий не менее 7 дней;",
            "Оказывать Клиенту круглосуточную техническую поддержку по вопросам, связанным с функционированием предоставляемых Услуг, через указанные на сайте privathub.ovh каналы связи;",
            "Не разглашать конфиденциальную информацию Клиента, полученную в ходе исполнения настоящего Договора;",
            "Обеспечить безопасность данных Клиента, хранящихся на сервере, с использованием современных технологий защиты информации, включая, но не ограничиваясь: защиту от DDoS-атак, регулярное обновление программного обеспечения, использование firewall.",
            "3.2. Исполнитель имеет право:",
            "Приостановить предоставление Услуг в случае нарушения Клиентом условий настоящего Договора, в том числе в случае неоплаты Услуг, с предварительным уведомлением Клиента за 24 часа;",
            "Вносить изменения в тарифные планы, уведомив Клиента об этом не менее чем за 24 часа до вступления изменений в силу через электронную почту и/или личный кабинет;",
            "Блокировать доступ к серверу вае размещения на нем информации, запрещенной к распространению законодательством РФ, или при использовании сервера для незаконной деятельности, с предварительным уведомлением Клиента (если это возможно);",
            "Отказать в предоставлении Услуг Клиенту, если его действия создают угрозу безопасности серверов Исполнителя или других клиентов, без возврата денежных средств;",
            "Приостанавливать или блокировать учетные записи и серверы, нарушающие правила с уведомлением Клиента. В экстренных случаях, когда нарушение угрожает стабильности платформы, действия могут быть предприняты без предварительного уведомления;",
            "Проводить профилактические работы, которые могут привести к временной недоступности сервера, с предварительным уведомлением Клиента.",
            "3.3. Клиент обязан:",
            "Своевременно оплачивать Услуги в соответствии с выбранным тарифным планом и указанным на сайте privathub.ovh порядком оплаты;",
            "Использовать сервер только для законных целей, не нарушая законодательство РФ и права третьих лиц;",
            "Не размещать на сервере информацию, запрещенную к распространению законодательством Российской Федерации, включая, но не ограничиваясь: порнографию, экстремистские материалы, информацию, нарушающую авторские права, пропаганду насилия и наркотиков;",
            "Не предпринимать действий, которые могут нарушить работу сервера, других серверов Исполнителя или сети Интернет в целом, включая, но не ограничиваясь: DDoS-атаки, рассылка спама, использование вредоносного ПО, сканирование портов, брутфорс;",
            "Самостоятельно следить за сохранностью своих учетных данных для доступа к серверу и несет полную ответственность за их использование третьими лицами;",
            "Не размещать вредоносный код и/или другие программы, которые не соответствуют законодательству Российской Федерации;",
            "Заказчик обязан самостоятельно настраивать автоматическое резервное копирование данных через панель управления. Исполнитель не несет ответственности за потерю данных, если пользователь не настроил резервное копирование;",
            "Не использовать ресурсы сервера для майнинга криптовалют или других ресурсоемких операций, если это не предусмотрено выбранным тарифным планом и не согласовано с Исполнителем в письменном виде;",
            "Соблюдать правила и другие положения, опубликованные на сайте privathub.ovh .",
            "3.4. Клиент имеет право:",
            "Получать Услуги в соответствии с условиями настоящего Договора и выбранным тарифным планом;",
            "Обращаться к Исполнителю за круглосуточной технической поддержкой через указанные на сайте privathub.ovh каналы связи;",
            "Отказаться от Услуг в любое время, уведомив об этом Исполнителя через личный кабинет не менее чем за 3 дня до даты расторжения Договора, при этом оплаченные, но неиспользованные средства возврату не подлежат, за исключением случаев, предусмотренных пунктом 4.3. настоящего Договора;",
            "Получать доступ к резервным копиям своего сервера в соответствии с условиями выбранного тарифного плана через панель управления;",
            "Запросить у Исполнителя информацию о состоянии своего сервера, использованных ресурсах и другую информацию, связанную с предоставлением Услуг."
          ],
        },
        {
          title: "4. Возврат средств",
          content: [
            "4.1. Стоимость Услуг определяется в соответствии с выбранным Клиентом тарифным планом, указанным на сайте privathub.ovh. Все цены указаны в рублях РФ и включают НДС.",
            
            "4.2. Оплата Услуг производится Клиентом в порядке 100% предоплаты за каждый расчетный период (месяц), если иное не предусмотрено выбранным тарифным планом.",
            
            "4.3.1. Клиент имеет право на возврат денежных средств за оплаченные Услуги в течение 3 дней с момента оплаты при условии, что Клиент не начал использовать Услуги (не активировал сервер/не трогал(использовал) сервер). В случае, если Клиент не смог активировать сервер по причинам, не зависящим от него, возврат возможен вне зависимости от срока.",
            
            "4.3.2. При смене тарифа срок действия текущего тарифа не меняется. Клиент может произвести смену тарифа, и за оставшийся оплаченный период на текущем тарифе будет рассчитана сумма к доплате по следующей формуле: (a - b) / 30 * c, где:",
            
            "                a — Стоимость нового тарифа;",
            "                b — Стоимость текущего тарифа;",
            "                c — Количество оставшихся дней.",
            
            "4.4. В случае просрочки оплаты Услуг более чем на 3 (три) календарных дня, Исполнитель имеет право приостановить предоставление Услуг до момента полной оплаты задолженности. При просрочке оплаты более чем на 14 (четырнадцать) календарных дней, Исполнитель имеет право удалить сервер Клиента без возможности восстановления данных.",
          ],
        },
        {
          title: "5. Ответственность сторон",
          content: [
            "5.1. Исполнитель несет ответственность за неисполнение или ненадлежащее исполнение своих обязательств по настоящему Договору в соответствии с действующим законодательством Российской Федерации, но не более суммы, оплаченной Клиентом за последние 3 месяца.",
            "5.2. Клиент несет ответственность за нарушение условий настоящего Договора, в том числе за размещение на сервере информации, запрещенной к распространению законодательством Российской Федерации, в соответствии с действующим законодательством РФ.",
            "5.3. Исполнитель не несет ответственности за убытки Клиента, возникшие в результате:",
            "    Нарушения Клиентом условий настоящего Договора;",
            "    Действий третьих лиц, в том числе DDoS-атак, взлома сервера, кражи данных, если не будет доказано, что такие действия стали возможны вследствие халатности Исполнителя;",
            "    Обстоятельств непреодолимой силы (форс-мажор), включая, но не ограничиваясь: стихийные бедствия, военные действия, террористические акты, решения органов государственной власти, аварии на сетях связи, которые делают невозможным исполнение настоящего Договора;",
            "    Использования Клиентом нелицензионного программного обеспечения на сервере;",
            "    Несвоевременного обращения Клиента в службу технической поддержки;",
            "    Самостоятельного изменения Клиентом настроек сервера, повлекшего за собой неработоспособность сервера или потерю данных;",
            "    Утери Клиентом паролей доступа к серверу.",

      ],
    },
        {
          title: "6. Срок действия договора",
          content: [
            "6.1. Настоящий Договор вступает в силу с момента акцепта оферты Клиентом и действует до момента расторжения Договора.",
            "6.2. Договор может быть расторгнут:",
            "     По соглашению сторон;",
            "     По инициативе Исполнителя в случае нарушения Клиентом условий настоящего Договора, с предварительным уведомлением Клиента за 5 дней через электронную почту и/или личный кабинет;",
            "     По инициативе Клиента в порядке, предусмотренном п. 3.4 настоящего Договора.",
          ],
        },
        {
          title: "7. Прочие условия",
          content: [
            "7.1. Во всем остальном, что не предусмотрено настоящим Договором, стороны руководствуются действующим законодательством Российской Федерации.",
            "7.2. Все споры, возникающие из настоящего Договора, решаются путем переговоров между сторонами.",
            " ",
            "Адрес сайта Исполнителя: privathub.ovh",
          ],
          },
      ],
    },
 //   aup: {
  //    title: "Acceptable Use Policy",
    //  icon: Shield,
 //     lastUpdated: "2024-12-08",
   //   sections: [
    //    {
  //        title: "1. Prohibited Activities",
//          content:
            //"Users shall not engage in any activities that violate applicable laws or compromise server integrity. Prohibited activities include, but are not limited to, illegal content distribution, unauthorized access attempts, and activities that disrupt network services.",
        //},
      //  {
    //      title: "2. Security Violations",
  //        content:
//            "Users must not attempt to interfere with the security of our services, including any attempts to access unauthorized data, engage in hacking, or introduce malware or malicious code into our systems.",
        //},
//        {
      //    title: "3. Resource Abuse",
    //      content:
  //          "Excessive use of server resources that negatively impacts other users or our systems is prohibited. Activities such as crypto-mining or resource-intensive software without prior permission are not allowed.",
//        },
        //{
        //  title: "4. Spam and Malicious Traffic",
      //    content:
    //        "The transmission of unsolicited or unauthorized communications, such as spam, and the use of our services to launch attacks (e.g., DDoS) or transmit malicious content, are strictly forbidden.",
  //      },
//        {
          //title: "5. User Responsibility",
        //  content:
      //      "Users are responsible for all activity occurring under their account and must take precautions to ensure the security of their account credentials. Immediate notification is required for any suspicious account activity.",
    //    },
  //      {
//          title: "6. Policy Violations",
         // content:
       //     "Violations of this Acceptable Use Policy may result in suspension or termination of services. We reserve the right to investigate and take necessary action in response to prohibited activities.",
     //   },
   //   ],
 //   },
    privacy: {
      title: "Политика конфиденциальности",
      icon: Lock,
      lastUpdated: "2024-12-08",
      sections: [
        {
          title: "1. Термины и определения",
          content: [
            "1.1.1. Администрация сайта – команда, представляющих интересы организации специалистов, в чьи обязанности входит управление сайтом, то есть организация и/или обработка поступивших на него персональных данных (также по тексту Оператор персональных данных).",
            "1.1.2. Персональные данные - сведения, имеющие прямое или косвенное отношение к определённому либо определяемому физическому лицу (также называемому субъектом персональных данных).",
            "1.1.3. Обработка персональных данных - любая операция либо совокупность действий, которые Администрация сайта производит с персональными данными. Их могут собирать, записывать, систематизировать, накапливать, хранить, уточнять (при необходимости обновлять или изменять), извлекать, использовать, передавать (распространять, предоставлять, открывать к ним доступ), обезличивать, блокировать, удалять и даже уничтожать. Данные операции могут выполняться как автоматически, так и вручную.",
            "1.1.4. Конфиденциальность персональных данных - обязательное требование, предъявляемое к Оператору персональных данных работающему с данными Пользователя, хранить полученные сведения в тайне, не посвящая в них посторонних, если предоставивший персональные данные Пользователь не изъявил своё согласие, а также отсутствует законное основание для разглашения.",
            "1.1.5. Пользователь сайта (далее Пользователь) - человек, посетивший сайт, а также пользующийся его программами и продуктами",
            "1.1.6. Cookies - короткий фрагмент данных, пересылаемый веб-браузером или веб-клиентом вебсерверу в HTTP-запросе, всякий раз, когда Пользователь пытается открыть страницу сайта. Фрагмент хранится на компьютере Пользователя. Если удалить все файлы cookie, Пользователь автоматически выйдет из аккаунтов на всех сайтах.",
            "1.1.7. IP-адрес - уникальный сетевой адрес узла в компьютерной сети, построенной по протоколу TCP/IP.",
          ],
          },
        {
          title: "2. Общие положения",
          content: [
            "2.1. Просмотр сайта https://privathub.ovh, а также использование его программ и продуктов подра зумевают автоматическое согласие с принятой там Политикой конфиденциальности, подразу мевающей предоставление Пользователем персональных данных на обработку.",
            "2.2. Если Пользователь не принимает существующую Политику конфиденциальности, Пользователь должен покинуть сайт.",
            "2.3. Имеющаяся Политика конфиденциальности распространяется только на сайт. Если по ссылкам, размещённым на сайте, Пользователь зайдёт на ресурсы третьих лиц, сайт за его действия ответственности не несёт.",
            "2.4. Проверка достоверности персональных данных, которые решил сообщить принявший Политику конфиденциальности Пользователь, не входит в обязанности Администрации сайта.",
            ]
          },
        {
          title: "3. Предмет политики конфиденциальности",
          content:
          [
            "3.1. Согласно проводимой в текущий период Политике конфиденциальности Администрация сайта обязана не разглашать персональные данные, сообщаемые Пользователями, регистрирующимися на сайте, а также обеспечивать этим данным абсолютную конфиденциальность.",
            "3.2. Чтобы сообщить персональные данные, Пользователь заполняет расположенные на сайте электронные формы. Персональными данными Пользователя, которые подлежат обработке, являются: - аккаунт «В Дискорде», при желании Пользователя привязать данный аккаунт; - логин; - пароль.",
            "3.3. Защита данных, автоматически передаваемых при посещении страниц с установленными на них статистическими скриптами системы (пикселями) осуществляется сайтом. Вот перечень этих данных: - IP-адрес; - сведения cookies.",
            "3.4. Последствием отключения cookies может стать невозможность доступа к требующим авторизации частям сайта.",
            "3.5. Сайт собирает статистику об IP-адресах всех посетителей. Данные сведения нужны, чтобы выявить и решить технические проблемы и проконтролировать, насколько законным будет проведение финансовых платежей.",
            "3.6. Любые другие неоговорённые выше персональные сведения (о том, когда и какие покупки были сделаны, какой при этом использовался браузер, какая была установлена операционная система и пр.) надёжно хранятся и не распространяются. Исключение существующая Политика конфиденциальности предусматривает для случаев, описанных в п.п. 5.2 и 5.3.",
          ],
        },
        {
          title: "4. Цели сбора персональной информации пользователя",
          content:
          [ 
            "4.1. Сбор персональных данных Пользователя Администрацией сайта проводится ради того, чтобы:",
            "4.1.1. Идентифицировать Пользователя, который прошёл процедуру регистрации на сайте, чтобы приобрести товар данного сайта.",
            "4.1.2. Открыть Пользователю доступ к персонализированным ресурсам данного сайта.",
            "4.1.3. Установить с Пользователем обратную связь, под которой подразумевается, в частности, рассылка запросов и уведомлений, касающихся использования сайта, обработка пользовательских запросов и заявок, оказание прочих услуг.",
            "4.1.4. Обеспечить Пользователю максимально быстрое решение проблем, встречающихся при использовании сайта, за счёт эффективной клиентской и технической поддержки.",
            "4.1.5. Рекламировать товары сайта, если Пользователь изъявит на то своё согласие.",
          ],
        },
        {
          title: "5. Способы и сроки обработки персональной информации",
          content: [
            "5.1. Срок обработки персональных данных Пользователя ничем не ограничен. Процедура обработки может проводиться любым предусмотренным законодательством способом. В частности, с помощью информационных систем персональных данных, которые могут вестись автоматически либо без средств автоматизации.",
            "5.2. Обработанные Администрацией сайта персональные данные Пользователя могут передаваться третьим лицам, в число которых входят организации почтовой связи, операторы электросвязи. Согласие Пользователя на подобную передачу предусмотрено правилами политики сайта.",
            "5.3. Также обработанные Администрацией сайта персональные данные могут передаваться уполномоченным органов государственной власти, если это осуществляется на законных основаниях и в предусмотренном законодательством порядке.",
            "5.4. Если персональные данные будут утрачены или разглашены, Пользователь уведомляется об этом Администрацией сайта.",
            "5.5. Все действия Администрации сайта направлены на то, чтобы не допустить к персональным данным Пользователя третьих лиц (за исключением п.п. 5.2, 5.3). Третьим лицам эта информация не должна быть доступна даже случайно, дабы те не уничтожили её, не изменили и не блокировали, не копировали и не распространяли, а также не совершали прочие противозаконные действия. Для защиты пользовательских данных Администрация располагает комплексом организационных и технических мер.",
            "5.6. Если персональные данные будут утрачены либо разглашены, Администрация сайта совместно с Пользователем готова принять все возможные меры, дабы предотвратить убытки и прочие негативные последствия, вызванные данной ситуацией.",
                ],          
              },
        {
          title: "6. Обязательства сторон",
          content: [
            "6.1. В обязанности Пользователя входит:",
            "6.1.1. Сообщение соответствующих требованиям сайта сведений о себе.",
            "6.1.2. Обновление и дополнение предоставляемых им сведений в случае изменения таковых.",
          ],
        },
        {
          title: "7. Ответственность сторон",
          content: [
            "7.1. В случае неисполнения Администрацией сайта собственных обязательств и, как следствие, убытков Пользователя, понесённых из-за неправомерного использования предоставленной им информации, ответственность возлагается на неё. Об этом, в частности, утверждает законодательство. Исключение существующая в настоящее время Политика конфиденциальности делает для случаев, отражённых в п.п. 5.2, 5.3 и 7.2.",
            "7.2. Существует ряд случаев, когда Администрация сайта ответственности не несёт, если пользовательские данные утрачиваются или разглашаются. Это происходит в случаях, когда персональные данные:",
            "7.2.1 Превратились в достояние общественности до того, как были утрачены или разглашены;",
            "7.2.2 Были предоставлены третьими лицами до того, как их получила Администрация сайта;",
            "7.2.3 Разглашены с согласия Пользователя;",
            "7.2.4 Были получены третьими лицами в результате незаконных действий;",
          ],
        },    
        {
          title: "8. Разрешение споров",
          content: [
            "8.1. В случае возникновения споров или разногласий между Администрацией сайта и Пользователем, связанных с использованием сайта, стороны будут пытаться урегулировать их путём переговоров.",
            "8.2. В случае, если стороны не придут к соглашению, споры будут переданы на рассмотрение в соответствующий суд в соответствии с законодательством.",
          ],
        },    
        {
          title: "9. Дополнительные условия",
          content: [
            "9.1. В настоящую Политику конфиденциальности могут быть внесены изменения Администрацией сайта без согласия Пользователя.",
            "9.2. Новая редакция Политики конфиденциальности вступает в силу с момента ее размещения на сайте, если иное не предусмотрено новой редакцией Политики конфиденциальности.",
            "9.3. К настоящей Политике конфиденциальности и отношениям между Пользователем и Администрацией сайта применяется законодательство.",
          ],
        },   
        {
          title: "10. Адрес для направления запросов",
          content: [
            "10.1. Все запросы к Администрации сайта, связанные с настоящей Политикой конфиденциальности, должны быть направлены по адресу: https://privathub.ovh/legal",
          ],
        },           
      ]

    },
    sla: {
      title: "Пользовательское соглашение",
      icon: Paperclip,
      lastUpdated: "2024-12-08",
      sections: [
        {
          title: "1. Общие положения",
          content: [
            "1.1. Настоящее Пользовательское соглашение (далее – Соглашение) регулирует отношения между PrivateHub, именуемым в дальнейшем «Хостинг-провайдер», и пользователем услуг хостинга, именуемым в дальнейшем «Клиент», возникающие при использовании услуг хостинга, предоставляемых Хостинг-провайдером.",
            "1.2. Использование услуг хостинга, предоставляемых Хостинг-провайдером, означает полное и безоговорочное согласие Клиента с условиями настоящего Соглашения.",
            "1.3. Хостинг-провайдер оставляет за собой право изменять условия настоящего Соглашения в одностороннем порядке. Изменения вступают в силу с момента их публикации на сайте Хостинг-провайдера.",
          ],
        },
        {
          title: "2. Предмет Соглашения",
          content: [ 
            "2.1. Хостинг-провайдер обязуется предоставить Клиенту услуги хостинга, включающие в себя:",
            "2.1.1 предоставление дискового пространства на сервере;",
            "2.1.2 предоставление доступа к сети Интернет;",
            "2.1.3 обеспечение работоспособности сервера;",
            "2.1.4 предоставление технической поддержки.",
            "2.2. Перечень и объем предоставляемых услуг хостинга определяются выбранным Клиентом тарифным планом.",
          ],
        },
        {
          title: "3. Права и обязанности сторон",
          content: [
            "3.1. Хостинг-провайдер обязуется:",
            "3.1.1. Предоставить Клиенту услуги хостинга в соответствии с выбранным тарифным планом.",
            "3.1.2. Обеспечить круглосуточную доступность сервера (за исключением плановых технических работ).",
            "3.1.3. Оказывать Клиенту техническую поддержку по вопросам, связанным с использованием услуг хостинга.",
            "3.1.4. Хранить конфиденциальную информацию Клиента, полученную в процессе предоставления услуг хостинга.",
            "3.2. Хостинг-провайдер имеет право:",
            "3.2.1. Приостановить предоставление услуг хостинга в случае нарушения Клиентом условий настоящего Соглашения.",
            "3.2.2. Вносить изменения в тарифные планы, уведомив об этом Клиента не менее чем за 30 дней до вступления изменений в силу.",
            "3.2.3. Блокировать доступ к сайту Клиента в случае размещения на нем информации, нарушающей законодательство РФ.",
            "3.3. Клиент обязуется:",
            "3.3.1. Своевременно оплачивать услуги хостинга в соответствии с выбранным тарифным планом.",
            "3.3.2. Не использовать услуги хостинга для размещения информации, нарушающей законодательство РФ.",
            "3.3.3. Не осуществлять действия, которые могут привести к нарушению работоспособности сервера.",
            "3.3.4. Не передавать свои учетные данные для доступа к услугам хостинга третьим лицам.",
          ],
          },
      ],
    },
  };

  const documentTypes = [
    { id: "tos", label: "Договор Оферты", Icon: Book },
  //  { id: "aup", label: "Acceptable Use Policy", Icon: Shield },//
    { id: "privacy", label: "Политика Кондефециальности", Icon: Lock },
    { id: "sla", label: "Пользовательское соглашение", Icon: Paperclip },
  ];

  const filteredSections = legalContent[activeDoc].sections.filter(
    (section) =>
      section.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      section.content.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="bg-gray-950 min-h-screen text-white">
            <Helmet>
        <title>Юридические документы | PrivateHub</title>
      </Helmet>

      <div className="max-w-scren-2xl mx-auto py-8">
        {/* Header */}
        <div className="mb-8 no-print">
          <a
            href="/"
            className="flex items-center gap-2 text-gray-400 hover:text-white mb-4 transition-colors"
          >
            <ChevronLeft className="w-4 h-4" />
            Назад
          </a>

          <div className="flex justify-between items-start">
            <div>
              <h1 className="text-5xl font-bold mb-2">Юридические документы</h1>
              <p className="text-gray-400 text-2xl font-semibold max-w-fit">
              Пожалуйста, внимательно ознакомьтесь с нашими юридическими документами. Эти документы
              регулируют использование вами наших услуг.
              </p>
            </div>
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-6 no-print">
          <input
            type="text"
            placeholder="Поиск по документам..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full max-w-screen-2xl px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-purple-900 transition-colors"
          />
        </div>

        {/* Document Selection */}
        <div className="bg-gray-900/50 backdrop-blur p-6 rounded-lg mb-8 border border-gray-800 no-print">
          <div className="grid md:grid-cols-4 gap-4">
            {documentTypes.map(({ id, label, Icon }) => (
              <button
                key={id}
                className={`flex items-center gap-3 p-4 rounded-lg transition-all duration-200 ${
                  activeDoc === id
                    ? "bg-purple-900 text-white"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
                onClick={() => setActiveDoc(id)}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Document Content */}
        <div
          id="legal-content"
          ref={contentRef}
          className="bg-gray-900/50 backdrop-blur rounded-lg border border-gray-800"
        >
          <div className="p-6">
            <div className="mb-6">
              <div className="flex items-center gap-3 mb-4">
                {React.createElement(legalContent[activeDoc].icon, {
                  className: "w-6 h-6 text-purple-900",
                })}
                <h2 className="text-2xl font-bold text-purple-900">
                  {legalContent[activeDoc].title}
                </h2>
              </div>
              <div className="text-sm text-gray-400">
                Последнее обновление: {legalContent[activeDoc].lastUpdated}
              </div>
            </div>

            <div className="space-y-4">
              {filteredSections.map((section, index) => (
                <div
                  key={index}
                  className="border border-gray-800 rounded-lg overflow-hidden transition-all duration-200 hover:border-gray-700"
                >
                  <button
                    className="section-header w-full flex items-center justify-between p-4 bg-gray-800/50 hover:bg-gray-800/70 transition-colors"
                    onClick={() => toggleSection(section.title)}
                  >
                    <span className="font-medium flex items-center gap-2">
                      {section.title}
                      {lastRead[section.title] && (
                        <span className="text-xs px-2 py-1 bg-green-500/20 text-green-400 rounded-full no-print">
                          Читать
                        </span>
                      )}
                    </span>
                    <span className="no-print">
                      {expandedSections[section.title] ? (
                        <Minus className="w-4 h-4 text-gray-400" />
                      ) : (
                        <Plus className="w-4 h-4 text-gray-400" />
                      )}
                    </span>
                  </button>
                  <div
                    className={`section-content p-4 text-gray-300 bg-gray-800/20 ${
                      expandedSections[section.title] ? "block" : "hidden"
                    }`}
                  >
                    {section.content}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="border-t border-gray-800 p-4 bg-gray-900/50">
            <div className="flex flex-wrap gap-6 text-sm text-gray-400 justify-center">
              <button
                className={`flex items-center gap-2 hover:text-blue-400 transition-colors ${
                  isGeneratingPDF ? "opacity-50 cursor-not-allowed" : ""
                }`}
                onClick={generatePDF}
                disabled={isGeneratingPDF}
              >
                <Download className="w-4 h-4" />
                {isGeneratingPDF ? "Генерация PDF..." : "Скачать PDF"}
              </button>
              <button
                className="flex items-center gap-2 hover:text-blue-400 transition-colors"
                onClick={handlePrint}
              >
                <ExternalLink className="w-4 h-4" />
                Версия для печати
              </button>
              <div className="flex items-center gap-2 text-green-400">
                <Shield className="w-4 h-4" fill="green" />
                Соответствует GDPR
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LegalDocumentation;
