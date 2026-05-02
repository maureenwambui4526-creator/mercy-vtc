"use client"

import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { MagnifyingGlass } from "lucide-react"

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
            <Dialog key={item.title}>
              <Card className="overflow-hidden hover:shadow-lg transition-shadow">
                <DialogTrigger asChild>
                  <button
                    type="button"
                    className="relative h-48 w-full overflow-hidden cursor-pointer focus:outline-none"
                    aria-label={`View ${item.title} image`}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      className="object-cover transition-transform duration-300 ease-out hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 transition duration-300 hover:bg-black/10" />
                    <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                      <div className="flex flex-col items-center gap-2 rounded-full bg-black/60 px-4 py-3 text-white">
                        <MagnifyingGlass className="h-5 w-5" />
                        <span className="text-xs uppercase tracking-[0.2em]">Preview</span>
                      </div>
                    </div>
                  </button>
                </DialogTrigger>

                <CardHeader className="p-6 pt-4">
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                </CardHeader>
                <CardContent className="px-6 pb-6 pt-0">
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </CardContent>
              </Card>

              <DialogContent className="max-w-5xl">
                <DialogHeader>
                  <DialogTitle>{item.title}</DialogTitle>
                  <DialogDescription>{item.description}</DialogDescription>
                </DialogHeader>
                <div className="relative h-[60vh] w-full overflow-hidden rounded-xl border border-border/20 bg-background">
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    className="object-contain"
                  />
                </div>
                <div className="flex justify-end pt-4">
                  <DialogClose asChild>
                    <button className="rounded-md bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition hover:bg-primary/90">
                      Close
                    </button>
                  </DialogClose>
                </div>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </div>
    </section>
  )
}
