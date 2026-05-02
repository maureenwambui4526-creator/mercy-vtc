import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

const feeItems = [
  {
    title: "Registration Fee",
    description: "Admission processing and registration fee for all new students.",
    image: "/images/fee1.jpeg",
  },
  {
    title: "Tuition Fee",
    description: "Core tuition for vocational training courses per term.",
    image: "/images/fee2.jpeg",
  },
  {
    title: "Laboratory Fee",
    description: "Practical lab and workshop usage fees for hands-on training.",
    image: "/images/fee3.jpeg",
  },
  {
    title: "Materials Fee",
    description: "Training materials and consumables required for your course.",
    image: "/images/fee4.jpeg",
  },
  {
    title: "Examination Fee",
    description: "Assessment and certification fees for exams and graduations.",
    image: "/images/fee5.jpeg",
  },
  {
    title: "Uniform Fee",
    description: "Uniforms and protective clothing required for practical sessions.",
    image: "/images/fee6.jpeg",
  },
  {
    title: "Accommodation Fee",
    description: "Optional boarding fees for students staying on campus.",
    image: "/images/fee7.jpeg",
  },
  {
    title: "Administrative Fee",
    description: "General administrative support charges for student services.",
    image: "/images/fee8.jpeg",
  },
]

export function FeesSection() {
  return (
    <section id="fees" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-2">Fee Structure</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Transparent Fees for Every Learner
          </h2>
          <p className="text-muted-foreground text-pretty">
            Explore the main components of our fee structure. These fee categories show how we support practical training, certification, and campus services.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {feeItems.map((item) => (
            <Card key={item.title} className="overflow-hidden hover:shadow-lg transition-shadow">
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover"
                />
              </div>
              <CardHeader className="p-6 pt-4">
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="px-6 pb-6 pt-0">
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
