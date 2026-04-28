import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

const newsItems = [
  {
    title: "January 2026 Intake Now Open",
    date: "December 1, 2025",
    category: "Admissions",
    excerpt:
      "Applications are now being accepted for the January 2026 intake. Secure your spot in our vocational training programs today.",
  },
  {
    title: "New Computer Lab Inaugurated",
    date: "November 15, 2025",
    category: "Facilities",
    excerpt:
      "We are pleased to announce the opening of our new state-of-the-art computer laboratory, equipped with modern computers and high-speed internet.",
  },
  {
    title: "Graduation Ceremony 2025",
    date: "October 28, 2025",
    category: "Events",
    excerpt:
      "Congratulations to all our graduates! Over 80 students received their certificates in various disciplines at our annual graduation ceremony.",
  },
]

export function NewsSection() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-primary font-semibold mb-2">News & Updates</p>
          <h2 className="text-3xl sm:text-4xl font-bold text-foreground mb-4 text-balance">
            Stay Informed
          </h2>
          <p className="text-muted-foreground text-pretty">
            Keep up with the latest news, events, and announcements from Our Lady
            of Mercy College.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {newsItems.map((news) => (
            <Card
              key={news.title}
              className="group hover:shadow-lg transition-shadow"
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <Badge variant="secondary">{news.category}</Badge>
                  <span className="flex items-center gap-1 text-xs text-muted-foreground">
                    <Calendar className="h-3 w-3" />
                    {news.date}
                  </span>
                </div>
                <CardTitle className="text-lg group-hover:text-primary transition-colors">
                  {news.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">
                  {news.excerpt}
                </p>
                <Button variant="link" className="p-0 h-auto gap-1" asChild>
                  <Link href="#">
                    Read More
                    <ArrowRight className="h-3 w-3" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
