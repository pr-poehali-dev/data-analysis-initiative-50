import { Button } from "@/components/ui/3d-button"
import { Check } from "lucide-react"
import { motion } from "framer-motion"

export function PricingSection() {
  const plans = [
    {
      name: "1–2 класс",
      price: "Бесплатно",
      period: "государственное образование",
      description: "Основная образовательная программа по ФГОС НОО для первых двух лет обучения.",
      features: [
        "Русский язык и чтение",
        "Математика",
        "Окружающий мир",
        "Изобразительное искусство",
        "Физическая культура",
      ],
    },
    {
      name: "3–4 класс",
      price: "Бесплатно",
      period: "государственное образование",
      description: "Расширенная программа с углублённым изучением ключевых предметов.",
      features: [
        "Все предметы 1–2 класса",
        "Английский язык",
        "Музыка и технология",
        "Проектная деятельность",
        "Подготовка к средней школе",
        "Портфолио достижений",
        "Индивидуальные консультации",
      ],
      featured: true,
    },
    {
      name: "Дополнительно",
      price: "По запросу",
      period: "платные кружки и секции",
      description: "Внеурочная деятельность для всестороннего развития вашего ребёнка.",
      features: [
        "Студия рисования «Акварель»",
        "Спортивная секция",
        "Шахматы и логика",
        "Английский клуб",
        "Театральная студия",
        "Робототехника",
        "Продлёнка (группа продлённого дня)",
        "Индивидуальные занятия с педагогом",
      ],
    },
  ]

  return (
    <section className="py-24 px-6 bg-secondary">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Поступление
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Основное образование бесплатно. Дополнительные занятия — по выбору семьи.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`rounded-2xl p-8 border-2 ${
                plan.featured ? "bg-background border-primary shadow-lg scale-105" : "bg-background border-border"
              }`}
            >
              {plan.featured && (
                <div className="text-xs font-bold text-primary uppercase tracking-wider mb-4">Популярный</div>
              )}
              <h3 className="font-serif text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                <span className="text-muted-foreground ml-2">{plan.period}</span>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">{plan.description}</p>
              <Button stretch className="mb-6 rounded-full">
                Записаться
              </Button>
              <div className="space-y-3">
                {plan.features.map((feature, featureIndex) => (
                  <div key={featureIndex} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                    <span className="text-sm">{feature}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}