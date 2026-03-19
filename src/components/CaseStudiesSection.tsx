import { motion } from "framer-motion"

export function CaseStudiesSection() {
  const caseStudies = [
    {
      client: "Внеурочная деятельность",
      project: "Кружок «Юный исследователь»",
      metric: "18 призёров олимпиад",
      description: "Наши ученики ежегодно побеждают на городских и региональных олимпиадах по математике и окружающему миру.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      client: "Творческое направление",
      project: "Студия «Акварель»",
      metric: "12 выставок в год",
      description: "Детские работы выставляются в городских галереях, а выпускники поступают в художественные школы.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      client: "Спортивная жизнь",
      project: "Секция «Движение»",
      metric: "3 место по городу",
      description: "Команда школы заняла 3 место в городской спартакиаде среди начальных классов в 2024 году.",
      image: "/placeholder.svg?height=400&width=600",
    },
    {
      client: "Цифровая грамотность",
      project: "Программа «Первый код»",
      metric: "100% охват учеников",
      description: "С 1 класса дети знакомятся с основами логики и программирования в игровой форме.",
      image: "/placeholder.svg?height=400&width=600",
    },
  ]

  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="font-serif text-4xl md:text-5xl font-bold mb-4"
          >
            Наши достижения
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg text-muted-foreground max-w-2xl mx-auto"
          >
            Результаты, которыми мы гордимся — в учёбе, спорте и творчестве.
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group bg-secondary rounded-2xl overflow-hidden border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="aspect-[3/2] overflow-hidden">
                <img
                  src={study.image || "/placeholder.svg"}
                  alt={study.project}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="p-8">
                <div className="text-sm font-semibold text-primary mb-2">{study.client}</div>
                <h3 className="font-serif text-2xl font-bold mb-3">{study.project}</h3>
                <div className="text-3xl font-bold text-primary mb-4">{study.metric}</div>
                <p className="text-muted-foreground leading-relaxed">{study.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}