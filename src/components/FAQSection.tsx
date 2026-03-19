import { useState } from "react"
import { ChevronDown } from "lucide-react"
import { motion } from "framer-motion"

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  const faqs = [
    {
      question: "Как записать ребёнка в 1 класс?",
      answer:
        "Приём в 1 класс осуществляется через портал Госуслуг с 1 апреля по 30 июня (для жителей прикреплённой территории). Необходимы: свидетельство о рождении ребёнка, паспорт одного из родителей и документ, подтверждающий место жительства.",
    },
    {
      question: "Есть ли группа продлённого дня?",
      answer:
        "Да, в школе работает группа продлённого дня с 13:00 до 18:00. Дети находятся под присмотром воспитателей, делают домашние задания, посещают кружки и гуляют на школьном дворе.",
    },
    {
      question: "Какое питание предусмотрено в школе?",
      answer:
        "В школе организовано горячее питание в столовой. Для учеников 1–4 классов предусмотрен завтрак и обед. Льготные категории учеников питаются бесплатно в соответствии с законодательством.",
    },
    {
      question: "По какой программе обучаются дети?",
      answer:
        "Школа работает по федеральному государственному образовательному стандарту начального общего образования (ФГОС НОО). Используются современные учебно-методические комплекты, одобренные Министерством просвещения.",
    },
    {
      question: "Как следить за успехами ребёнка?",
      answer:
        "Родители имеют доступ к электронному дневнику, где отображаются оценки, домашние задания и объявления. Также проводятся регулярные родительские собрания и индивидуальные встречи с классным руководителем.",
    },
    {
      question: "Какие кружки и секции доступны?",
      answer:
        "На базе школы работают: студия рисования, театральная студия, шахматы, спортивные секции, кружок «Юный исследователь» и основы программирования. Большинство кружков доступны для учеников с 1 класса.",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Частые вопросы
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground"
          >
            Всё, что нужно знать родителям перед поступлением в нашу школу.
          </motion.p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="border border-border rounded-xl overflow-hidden bg-secondary"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between text-left hover:bg-background/50 transition-colors"
              >
                <span className="font-semibold text-lg pr-8">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 flex-shrink-0 transition-transform ${openIndex === index ? "rotate-180" : ""}`}
                />
              </button>
              {openIndex === index && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: "auto" }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                  className="px-6 pb-5 text-muted-foreground leading-relaxed"
                >
                  {faq.answer}
                </motion.div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}