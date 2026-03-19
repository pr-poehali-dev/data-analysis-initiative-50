import { TestimonialSlider, type Testimonial } from "@/components/ui/testimonial-slider"

const testimonials: Testimonial[] = [
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Наш сын пошёл в эту школу три года назад и буквально расцвёл. Учителя внимательные, атмосфера тёплая. Он с удовольствием идёт на уроки каждый день — для нас это главное.",
    name: "Мария Соколова",
    role: "Мама ученика 3 класса",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Дочка занимается в кружке рисования и уже участвовала в городской выставке! Школа даёт не только знания, но и возможность найти себя. Очень благодарны педагогическому коллективу.",
    name: "Дмитрий Волков",
    role: "Папа ученицы 2 класса",
    rating: 5,
  },
  {
    image: "/placeholder.svg?height=400&width=400",
    quote:
      "Были опасения перед первым классом, но учительница нашла подход к нашему непоседе. Теперь он сам просит делать домашние задания и рассказывает про уроки за ужином. Спасибо школе!",
    name: "Ольга Петрова",
    role: "Мама первоклассника",
    rating: 5,
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-32 px-4 bg-background overflow-visible">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">Что говорят родители</h2>
          <p className="font-sans text-lg text-muted-foreground max-w-2xl mx-auto">
            Лучшая оценка нашей работы — это счастливые дети и довольные семьи.
          </p>
        </div>
        <TestimonialSlider testimonials={testimonials} />
      </div>
    </section>
  )
}