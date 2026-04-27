import { Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "Mary Chebet",
    role: "Dressmaking Graduate, 2024",
    content:
      "The practical skills I gained at Our Lady of Mercy College changed my life. I now run my own tailoring business and support my family. The trainers were patient and truly cared about our success.",
    initials: "MC",
  },
  {
    name: "Joseph Lokol",
    role: "Electrical Installation Graduate, 2022",
    content:
      "I came here with nothing but hope. Today, I work as an electrician for a construction company. The hands-on training prepared me for real work situations.",
    initials: "JL",
  },
  {
    name: "Grace Amoit",
    role: "ICT Graduate, 2023",
    content:
      "The computer skills I learned here opened doors I never thought possible. I now work in an office and can help others in my community learn technology too.",
    initials: "GA",
  },
  {
    name: "Peter Lomongin",
    role: "Food & Beverage Graduate, 2021",
    content:
      "From a small village to running my own catering service – that&apos;s my journey. Our Lady of Mercy gave me not just skills, but confidence to pursue my dreams.",
    initials: "PL",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-2">Success Stories</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Voices of Our Graduates
          </h2>
          <p className="text-muted-foreground text-pretty">
            Hear from our alumni about how vocational training transformed their
            lives and opened new opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.name}
              className="relative overflow-hidden hover:shadow-lg transition-shadow"
            >
              <CardContent className="p-6">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/10" />
                <p className="text-muted-foreground mb-6 relative z-10">
                  &ldquo;{testimonial.content}&rdquo;
                </p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarFallback className="bg-primary/10 text-primary">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
